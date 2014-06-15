package projmgmt_server

import grails.converters.JSON
import grails.rest.RestfulController

import projmgmt.Person
import projmgmt.PriorityEnum
import projmgmt.Project
import projmgmt.StatusEnum
import projmgmt.Task

class TaskController extends RestfulController {
    static responseFormats = ['json', 'xml']

    static allowedMethods = [save: "POST"/*, update: "PUT", delete: "DELETE", comments: "POST"*/]

    TaskController(){
        super(Task)
    }

    def index() {}

    def projectTasks (){

        println("tasks .. params.projectId: ${params}")
        def project = Project.findById(params.projectId)
        def tasks = Task.findAllByProject(project)
        println("tasks: ${tasks}, ${project}")

        render tasks as JSON
    }


    def create(String projectId){
        println("create params: ${params}, ${projectId}, ${request.JSON}")
        def project = Project.findById(params.projectId)
        def dataMap = [:]
        dataMap.project = project
        dataMap.priorities = PriorityEnum.values()
        dataMap.statuses = StatusEnum.values()

        respond dataMap
    }

    def save(String taskData){

        println("save params: ${params}, ${taskData}, ${request.JSON}")
        Task task = new Task();
        task.title = request.JSON.title
        task.description = request.JSON.description
        task.project = Project.findById(request.JSON.projectId)
        task.priority = PriorityEnum.find { it.toString() == request.JSON.priority.name}
        task.status = StatusEnum.find { it.toString() == request.JSON.status.name}
        task.reportedBy = Person.findById(1)
        task.assignedTo = Person.findById(request.JSON.assignedTo.id)
        task.save(failOnError: true)


        respond task;
    }
}
