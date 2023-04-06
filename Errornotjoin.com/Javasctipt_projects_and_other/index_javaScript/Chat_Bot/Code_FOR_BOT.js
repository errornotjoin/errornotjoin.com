
var making_item_0 = false
var make_item_1 = false
var background_for_the_bots = []
var User_input = ""
function starting_the_items()
{
    console.log("starting the items And the Letting the User Pick A Bot");
    setTimeout(Something ,100)
    
}
function Something()
{
    var MBB_User_input = document.getElementById("MBB_User_input")
    var MBB_User_submit = document.getElementById("MBB_User_submit")
    var CBMB_Main_Item_background = document.getElementById("CBMB_Main_Item_background")
    var Main_chat_bot = document.getElementById("Main_chat_bot")
    var twO_dot  = document.getElementById("twO_dot ")
    twO_dot.addEventListener("click", function two()
    {
        close_all_page()
        var Main_bot_background0 = document.getElementById("Main_bot_background1")
        Main_bot_background0.style.visibility = "visible"
        making_item_0 = true 
        make_item_1 = false
        one_Game()
    })
    Main_chat_bot.addEventListener("click", function help()
    {
        close_all_page()
        var Main_bot_background0 = document.getElementById("Main_bot_background0")
        Main_bot_background0.style.visibility = "visible"
        making_item_0 = false 
        make_item_1 = true
        
    })
}
function close_all_page()
{
   
    for(x = 0; x < 2; x++)
    {
        var Main_bot_background0 = document.getElementById("Main_bot_background" + x )
        Main_bot_background0.style.visibility = "hidden"
    }
}
function one_Game()
{
    var MBB_User_input  = document.getElementById("MBB_User_input ")
    var MBB_User_submit = document.getElementById("MBB_User_submit")

    MBB_User_submit.addEventListener("click", function test()
    {
        var car = MBB_User_input.value
        switch(car)
        {
            case "Play game":
                case "play game":
                    case "Play":
                        case "play":
                User_input = "What Game Do You What To play count to 21 or the card game?"
                reapling(User_input)
            break;
            case "Play card game":
            case " card game":
                User_input = "OK starting soon :)"
                reapling(User_input)
            break;
            case "Play Count to 21 game":
                case " Count to 21 game":
                User_input = "Ok Starting soon :)"
                reapling(User_input)
            break;
            case "help":
                User_input = "what help do you need?"
                reapling(User_input)
            break;
            case "How to play 21":
                User_input = "You and me count to 21 who land on 21 loss the game you can use 1 to 3 numbers like 1,2,3 or 1,2 or 1"
                reapling(User_input)
                break;
            case "How to play 21 card game":
            case "how to play 21 card game":
            case "what is  21 card game":
            case "i need help with 21 card game":
                User_input = "You Will Get Some Cards if you get less or = to 21 and the other team have less then you got and/or more then 21 you win "
                reapling(User_input)
                break;
            default:
                User_input = "ERROR: Unknow Command "
                reapling(User_input)
            break;
    
        }
    })
   
}
function reapling(User_inputs)
{

}