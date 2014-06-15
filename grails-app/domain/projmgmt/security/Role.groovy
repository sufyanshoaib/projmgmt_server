package projmgmt.security

/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 08/06/2014
 * Time: 1:32 PM
 * To change this template use File | Settings | File Templates.
 */
class Role implements Serializable{

    String authority

    static mapping = {
        cache true
    }

    static constraints = {
        authority blank: false, unique: true
    }

    def String getAuthority(){
        println("getting authority: ${this.authority}" )
        return this.authority
    }

}
