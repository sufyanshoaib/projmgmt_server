package projmgmt

import org.bson.types.ObjectId
import projmgmt.security.PersonRole
import projmgmt.security.Role

class Person implements Serializable{

    transient springSecurityService

    String username
    String name
    String password
    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired


    static constraints = {
        username unique: true, nullable: false
        name nullable: true
        password nullable: false
    }

    static transients = ['springSecurityService']

    /*static mapping = {
        password column: '`password`'
    }*/

    Set<Role> getAuthorities() {
        println("person.getauthorities: ${this.username}")
        def authorities = PersonRole.findAllByPerson(this).collect { it.role } as Set
        println("person.getauthorities: ${authorities}")
        return authorities
    }


    def beforeInsert() {
        encodePassword()
    }

    def beforeUpdate() {
        if (isDirty('password')) {
            encodePassword()
        }
    }

    protected void encodePassword() {
        password = springSecurityService.encodePassword(password)
    }
}
