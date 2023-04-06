var main_button = document.getElementById("Main_Chat_Bot_Button")
var Main_Website_background = document.getElementById("projects 2")
var Items_been_made = false
var website_mian_bus = document.getElementById("Projects")
//Main Button to till the webstie to make the chat bot 
//Need This To Work\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
main_button.addEventListener("click", function ok()
{
  
    if(Items_been_made == true)
    {
        Main_Website_background.style.visibility = "visible"
        website_mian_bus.style.visibility = "hidden"
    }
    else
    {
        //If The Items Need To be Made Then
        // It Will Go Here If not it will go
        //To Line 9
        website_mian_bus.style.visibility = "hidden"
        Making_the_background_for_the_Chat_bot()
        Main_Website_background.style.visibility = "visible"
        Items_been_made = true
    }
})
function Making_the_background_for_the_Chat_bot()
{
    console.log("Starting WorkIng On Chat Bot ");
    //CBMB == Chat Bot Main Background 
    //Making The Background 
    var Chat_bot_Main_backGround = document.createElement("div")
    var CBMB_Main_Side_backGround = document.createElement("div")
    var CBMB_Main_Bottom_backGround1 = document.createElement("div")
    var CBMB_Main_Item_background = document.createElement("div")
    var Something_js = document.createElement("script")
    //making the side background kids//
    //MSB = Main Side Background
    var MSB_Main_top_text = document.createElement("h1")
    var MSB_Main_Input_text = document.createElement("input")
    var MSB_Sub_div = document.createElement("div")
        //Somthings here|?|?|?|?|?|?|?|?|?|?||?//
        var main_chat_bot_div_holder_one = document.createElement("div")
        var main_chat_bot_div_holder_two = document.createElement("div")
        var Main_chat_bot = document.createElement("button")
        var Main_chat_bot_sat = document.createElement("div")
        var Main_bot_background = document.createElement("div")
        var twO_dot = document.createElement("button")
        var Main_chat_bot_sat_two = document.createElement("div")
        var sec_main_bot = document.createElement("div")
        //End//
    //End//
    //MBB = Main Bottom background//
    var MBB_User_input = document.createElement("input")
    var MBB_User_submit = document.createElement("button")
    //End//
    // Kids are getting ids//
    // But There Are Not 18+//
    MBB_User_input .id = "MBB_User_input "
    MBB_User_submit.id = "MBB_User_submit"
    //
    MSB_Main_Input_text.id = "MSB_Main_Input_text"
    Main_chat_bot.id = "Main_chat_bot"
    twO_dot.id = "twO_dot "
    Main_bot_background.id = "Main_bot_background0"
    sec_main_bot.id = "Main_bot_background1"
    
    //End//
    //things are getting some class//
    Chat_bot_Main_backGround.className = "Chat_bot_Main_backGround"
    CBMB_Main_Side_backGround.className = "CBMB_Main_Side_backGround"
    CBMB_Main_Bottom_backGround1.className = "CBMB_Main_Bottom_backGround1"
    CBMB_Main_Item_background.className = "CBMB_Main_Item_background"
    MSB_Sub_div.className = "MSB_Sub_div"
    Main_chat_bot.className = "Main_chat_bot"
    Main_bot_background.className = "Main_bot_background"
    sec_main_bot.className = "Main_bot_background1"
    main_chat_bot_div_holder_one.className = "main_chat_bot_div_holder_one"

    Main_chat_bot_sat.className = "Main_chat_bot_sat"
    Main_chat_bot_sat_two.className = "Main_chat_bot_sat"
    //Emd//
     //Some things are getting some text//
        MSB_Main_top_text.textContent = "Pick A Bot Here"
        MBB_User_input.placeholder = "Enter Your Text here"
        MSB_Main_Input_text.placeholder = "Enter Your Text here"
        MBB_User_submit.textContent = "Submit"
        Main_chat_bot.textContent = "Help Bot"
        twO_dot.textContent = "21 game"
        Main_chat_bot_sat.textContent = "online"
        Main_chat_bot_sat_two.textContent = "online"
    //something//
    Main_Website_background.appendChild(Chat_bot_Main_backGround)
    Chat_bot_Main_backGround.appendChild(CBMB_Main_Side_backGround) 
        ////
        CBMB_Main_Side_backGround.appendChild(MSB_Main_top_text)
        CBMB_Main_Side_backGround.appendChild(MSB_Main_Input_text)
        CBMB_Main_Side_backGround.appendChild(MSB_Sub_div)
        MSB_Sub_div.appendChild(main_chat_bot_div_holder_one)
        MSB_Sub_div.appendChild(main_chat_bot_div_holder_two)
        main_chat_bot_div_holder_one.appendChild(Main_chat_bot)
        main_chat_bot_div_holder_one.appendChild(Main_chat_bot_sat)
        main_chat_bot_div_holder_two.appendChild(twO_dot)
        main_chat_bot_div_holder_two.appendChild(Main_chat_bot_sat_two)
       
        //End//

    Chat_bot_Main_backGround.appendChild(CBMB_Main_Item_background)
    CBMB_Main_Item_background.appendChild(Main_bot_background)
    CBMB_Main_Item_background.appendChild(sec_main_bot)
    for(x = 0; x < 2; x++)
    {
        if(x == 0 )
        {
            var Main_bot_background = document.getElementById("Main_bot_background"+x)
            Main_bot_background0.style.visibility = "visible"
        }
        else
        {
            var Main_bot_background = document.getElementById("Main_bot_background"+x)
            Main_bot_background0.style.visibility = "hidden"
        }
       
    }
    ////

    //END//
    Chat_bot_Main_backGround.appendChild(CBMB_Main_Bottom_backGround1)
    /////
    CBMB_Main_Bottom_backGround1.appendChild(MBB_User_input)
    CBMB_Main_Bottom_backGround1.appendChild(MBB_User_submit)
    CBMB_Main_Bottom_backGround1.appendChild(Something_js)
    //End// 
    starting_the_items()
}