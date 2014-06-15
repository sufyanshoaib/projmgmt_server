package projmgmt

/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 08/06/2014
 * Time: 1:30 PM
 * To change this template use File | Settings | File Templates.
 */
class Comment implements Serializable{

    String description
    Person commentBy
    Date createdDate
    Task task

    static constraints = {
        description nullable: false
        commentBy nullable: false
        task nullable: false
    }
}
