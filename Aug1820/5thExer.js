var EnterChoice=require('prompt-sync')();
var enterChoice=EnterChoice("from 1 to 5");
enterChoice=parseInt(enterChoice);
switch(enterChoice)
{
    case 1:
        console.log("spell=ONE");
        break;
        case 2:
            console.log("Spell=Two");
            break;
            case 3:
                console.log("Spell=Three");
                break;
                case 4:
                    console.log("Spell=Four");
                    break;
                    case 5:
                        console.log("Spell=Five")
                        default:
                            console.log("enter valid entry");

        
}