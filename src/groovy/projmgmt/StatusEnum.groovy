package projmgmt

/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 08/06/2014
 * Time: 2:45 PM
 * To change this template use File | Settings | File Templates.
 */
public enum StatusEnum {

    OPEN(0), IN_PROGRESS(1), RESOLVED(2)

    int value;

    StatusEnum(int value){
        this.value = value
    }
}