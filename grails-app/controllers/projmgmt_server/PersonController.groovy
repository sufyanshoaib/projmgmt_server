package projmgmt_server

import grails.converters.JSON
import projmgmt.Person

class PersonController {

    static allowedMethods = [GET: "index", POST: "save"]

    def index(){
        render Person.list() as JSON
    }

    def save(){
        println("In person resigter:  ${request.JSON}" )
        Person person = new Person()
        person.username = request.JSON.username
        person.password = request.JSON.password
        person.save(failOnError: true)
        render person as JSON
    }
}
