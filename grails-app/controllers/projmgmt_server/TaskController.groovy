package projmgmt_server

import grails.converters.JSON
import grails.rest.RestfulController

import projmgmt.Person
import projmgmt.PriorityEnum
import projmgmt.Project
import projmgmt.StatusEnum
import projmgmt.Task
import projmgmt.Comment

class TaskController {
    static responseFormats = ['json', 'xml']

    def springSecurityService

    /*static allowedMethods = [save: "POST" , show: "GET"]*/

    def index() {}

    def show(String projectId, String taskId){
        println("TaskController: params.projectId: ${params} , ${projectId}")

        def loggedUser = springSecurityService?.currentUser
        def project = Project.findById(projectId)
        def dataMap = [:]
        def task = null;

        if(project){
            task = Task.findByIdAndProject(taskId, project)
        }

        if(task){
            //task.setProject(project)
            def comments = Comment.findAllByTask(task)
            println("comments: ${comments}")
            dataMap.comments = comments;

        }


        dataMap.task = task
        dataMap.project= project


        println("dataMap  : ${dataMap as JSON}")
        render dataMap as JSON
    }

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
        def loggedUser = springSecurityService?.currentUser
        println("save params: ${params}, ${taskData}, ${request.JSON}")
        Task task = new Task();
        task.title = request.JSON.title
        task.description = request.JSON.description
        task.project = Project.findById(request.JSON.projectId)
        task.priority = PriorityEnum.find { it.toString() == request.JSON.priority.name}
        task.status = StatusEnum.find { it.toString() == request.JSON.status.name}
        task.reportedBy = loggedUser
        task.assignedTo = Person.findById(request.JSON.assignedTo.id)
        task.save(failOnError: true)


        respond task;
    }
}
