import projmgmt.Person
import projmgmt.Project
import projmgmt.Task
import projmgmt.security.PersonRole
import projmgmt.security.Role

class BootStrap {

    def init = { servletContext ->
        Role roleAdmin = Role.findByAuthority("ROLE_ADMIN") ?:
            new Role(authority: "ROLE_ADMIN").save(failOnError: true)

         println(roleAdmin)
        Person admin = Person.findByUsername("admin") ?:
            new Person(username: 'admin',
                    password: 'sufyan123'/*,
                    name: 'Sufyan'*/
                    /*,*/
                    /*authorities: [roleAdmin]*/).save(failOnError: true)

        PersonRole.findByPersonAndRole(admin, roleAdmin)?:
            new PersonRole(person: admin, role: roleAdmin).save(failOnError: true)

        Project project = Project.findById(1) ?:
            new Project(name: 'Grails API v1',
                        owner: admin).save(failOnError: true)

        Task.findById(1)?:
            new Task(title: 'Initiate PM Project',
                    description: 'Some detail, blah blah', project: project,
                    reportedBy: admin, assignedTo: admin).save(failOnError: true)
    }

    def destroy = {

    }
}
