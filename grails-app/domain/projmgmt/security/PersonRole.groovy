package projmgmt.security

import org.apache.commons.lang.builder.HashCodeBuilder
import projmgmt.Person

/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 08/06/2014
 * Time: 1:32 PM
 * To change this template use File | Settings | File Templates.
 */
class PersonRole implements Serializable{

    Person person;
    Role role;

    static mapping = {
        id composite: ['person', 'role']
    }

    boolean equals(other) {
        if (!(other instanceof PersonRole)) {
            return false
        }

        other.person?.id == person?.id &&
                other.role?.id == role?.id
    }

    int hashCode() {
        def builder = new HashCodeBuilder()
        if (person) builder.append(person.id)
        if (role) builder.append(role.id)
        builder.toHashCode()
    }

    static PersonRole get(long personId, long roleId) {
        println("get from person role")
        PersonRole.where {
            person == Person.load(personId) &&
                    role == Role.load(roleId)
        }.get()
    }

/*    static PersonRole create(Person person, Role role, boolean flush = false) {
        new PersonRole(person: person, role: role).save(flush: flush, insert: true)
    }*/
/*

    static boolean remove(Person u, Role r, boolean flush = false) {

        int rowCount = PersonRole.where {
            person == Person.load(u.id) &&
                    role == Role.load(r.id)
        }.deleteAll()

        rowCount > 0
    }

    static void removeAll(Person u) {
        PersonRole.where {
            person == Person.load(u.id)
        }.deleteAll()
    }

    static void removeAll(Role r) {
        PersonRole.where {
            role == Role.load(r.id)
        }.deleteAll()
    }
*/


}
