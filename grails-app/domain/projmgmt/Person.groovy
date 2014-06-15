package projmgmt

import org.bson.types.ObjectId
import projmgmt.security.PersonRole
import projmgmt.security.Role

class Person implements Serializable{

    transient springSecurityService

    String username
    String name
    String password


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
        PersonRole.findAllByPerson(this).collect { it.role } as Set
    }

}
