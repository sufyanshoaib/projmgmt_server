package projmgmt_server

import grails.converters.JSON
import grails.rest.RestfulController
import projmgmt.*

class ProjectController extends RestfulController<Project>{

    static responseFormats = ['json', 'xml']

    def springSecurityService

    ProjectController(){
        super(Project)
    }

    //static allowedMethods = [save: "POST"/*, update: "PUT", delete: "DELETE"*/]

    def index(String projectId){
        println('Project > index')
        def loggedUser = springSecurityService?.currentUser

        render Project.findAllByOwner(loggedUser) as JSON

    }

    def show(){
        println("Project > show > params.projectId: ${params}")

        def loggedUser = springSecurityService?.currentUser

        def project = Project.findByIdAndOwner(params.id, loggedUser)
       /* if(project){
            def tasks = Task.findAllByProject(project)
            println("tasks: ${tasks}")
            project.tasks = tasks
        }*/
        println("project : ${project}")
        respond project
    }


    def save(String data){
        println("save params: ${params}, ${data}, ${request.JSON}")
        log.info("Saving Project.. ")
        def loggedUser = springSecurityService?.currentUser

        Project project = new Project();
        project.name = request.JSON.name
        project.description = request.JSON.description
        project.owner = loggedUser
        project.save(failOnError: true)


        respond project;
    }
}
