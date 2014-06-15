package projmgmt_server

import grails.converters.JSON
import grails.rest.RestfulController
import projmgmt.*

class ProjectController /*extends RestfulController*/{

    static responseFormats = ['json', 'xml']

   /* ProjectController(){
        super(Project)
    }*/

    /*static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE", comments: "POST"]*/

    def index(){
        println('in index')
        render Project.list() as JSON
    }

    def show(String projectId){
        println("params.projectId: ${params} , ${projectId}")
        /*def project = Project.collection.findOne(id: projectId)
        project = project as Project


        //render project?:"" as JSON
        respond project*/
        def project = Project.findById(params.id)
        if(project){
            def tasks = Task.findAllByProject(project)
            println("tasks: ${tasks}")
            project.tasks = tasks
        }
        println("project   dd: ${project as JSON}")
        render project as JSON
    }
}
