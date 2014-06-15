package projmgmt

import org.bson.types.ObjectId

class Project implements Serializable{

    /*ObjectId id*/
    /*Long projectId*/
    String name
    String description
    Person owner
    Date dateCreated
    List<Task> tasks;

    static embedded = ['owner']

    static hasMany = ['tasks']

    static constraints = {
        name nullable: false
        owner nullable: false
        description nullable: true
        dateCreated nullable: true
    }


}
