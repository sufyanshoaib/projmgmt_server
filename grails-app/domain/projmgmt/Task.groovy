package projmgmt

/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 08/06/2014
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */
class Task implements  Serializable{

    String title
    String description
    PriorityEnum priority = PriorityEnum.LOW
    StatusEnum status = StatusEnum.OPEN
    Person reportedBy
    Person assignedTo
    Date dateCreated
    List<Comment> comments;
    Project project

    static hasMany = ['comments']

    static embedded = ['reportedBy', 'assignedTo']

    static belongsTo = [project: Project]

    static constraints = {
        title nullable: false

    }

}
