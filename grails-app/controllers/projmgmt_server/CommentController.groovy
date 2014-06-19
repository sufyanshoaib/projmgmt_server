package projmgmt_server

import projmgmt.Person
import projmgmt.Project
import projmgmt.Task
import projmgmt.Comment

class CommentController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST" , show: "GET"]

    def springSecurityService

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


        respond comment;
    }

}
