package projmgmt

/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 08/06/2014
 * Time: 2:44 PM
 * To change this template use File | Settings | File Templates.
 */
public enum PriorityEnum {

    LOW(0), HIGH(1), MEDIUM(2)

    int value;

    PriorityEnum(int value){
        this.value = value
    }
}