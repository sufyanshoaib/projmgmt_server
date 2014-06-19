package projmgmt_server

import grails.rest.RestfulController
import projmgmt.Person
import projmgmt.Project
import projmgmt.Task
import projmgmt.Comment

class CommentController extends RestfulController<Comment>{

    static responseFormats = ['json', 'xml']
    //static allowedMethods = [save: "POST" , show: "GET"]

    def springSecurityService

    CommentController() {
        super(Comment)
    }

    def create(String taskId){
        println("comment create params: ${params}, ${taskId}, ${request.JSON}")
        def task = Task.findById(params.taskId)

        respond task
    }

    def save(){
        def loggedUser = springSecurityService?.currentUser
        println("Comment: save params: ${params}, ${request.JSON}")
        Comment comment = new Comment();
        comment.commentBy = loggedUser
        comment.description = request.JSON.description
        comment.task = Task.findById(request.JSON.taskId)

        comment.save(failOnError: true)
        respond comment, [status: 200];
    }


    def delete(){
        println('delete: ${params}')
        Comment comment = Comment.get(params.id)
        comment.delete(flush: true)
        render status : 200
    }

}
