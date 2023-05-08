var Saveing_the_time = []
var Saveing_the_corrter = []
//
var level = 0
var Lives = 0
var player_level_they_are_on = 0
var Saveing_the_level = ""
var The_maths = 0
var Items = 0 
//
var Sec_item = 0
var the_mint_item = 0 
var How_long_did_it_take = 0 
var The_max_time = 0 
var Stop_the_time = false
var The_timer_Out = ""
var the_sec_Or_less_or_More = 1000
//
var Back_button = document.getElementById("back")
var Start_button = document.getElementById("Start")
var Stop_button = document.getElementById("Stop")
//
var Player_live = document.getElementById("Player_lives")
var Player_timer = document.getElementById("Player_timer")
var player_Levels = document.getElementById("Player_level")
var Main_text = document.getElementById("Main_text")
//
var Level_picker_Div = document.getElementById("Level_picker")
var The_game_div = document.getElementById("The_game")
var End_level_div = document.getElementById("")
// 
var Moveing_Level_button = document.getElementById("")
var Moveing_level_title = document.getElementById("")
//
var Moveing_game_title = document.getElementById("")
var Moveing_game_input_and_button = document.getElementById("")
var Moveing_game_Text_thing = document.getElementById("")
//
var Moveing_End_game_Title = document.getElementById("")
var Moveing_End_game_Main_items = document.getElementById("")
var Moveing_End_game_Footer = document.getElementById("")
//
var Main_input = document.getElementById("Main_input")
var Main_enter = document.getElementById("Main_enter")
function User_picked_a_level(Level)
{
    switch(Level)
    {
        case "easy":
            level  = 15
            Lives  = 20
            The_max_time = 20;
            Items = 10
            the_mint_item =  The_max_time 
            Saveing_the_level = "easy"
            break;
        case 'mid':
            level  = 25
            Lives  = 10
            The_max_time = 15 ;
            Items = 20
            the_mint_item =   The_max_time 
            Saveing_the_level = "mid"
            break;
        case "Hard":
            level  = 35
            Lives  = 5
            Items = 40
            The_max_time = 10;
            the_mint_item = The_max_time 
            Saveing_the_level = "Hard"
        break;
    }
    Player_live.innerHTML = "Lifes <br/>" + Lives
    player_Levels.innerHTML = "Levels <br/>" + player_level_they_are_on + " / " + level
    Moveing_items()
    function Moveing_items()
    {
        Level_picker_Div.style.animation = "Removeing_The_Level_picker 2s"
        console.log(Level_picker_Div);
        setTimeout(Removeing_items, 2000)
        The_game_div.style.animation = "Loading_the_game 2s "
        The_game_div.style.display = "block"
    }
    function Removeing_items()
    {
        Level_picker_Div.style.display = "none"
    }
}
Start_button.addEventListener("click", function Starting_the_game()
{
    Back_button.style.display = "none"
    Start_button.style.display = "none"
    Stop_button.style.display = "block"
    Stop_button.style.width  = "35%"
    Stop_the_time = false
    The_Timer()
    The_Random_thing()
})
Stop_button.addEventListener("click", function Stoping_the_game()
{
    Back_button.style.display = "block"
    Start_button.style.display = "block"
    Stop_button.style.display = "none"
    Stop_the_time = true
})

function The_Random_thing()
{
    The_maths = Math.round(Math.random() * Items)
    Main_text.innerHTML = "Pick A Number <br/> 0 To  " + Items.toString()
}    
Main_enter.addEventListener("click", function The_Main_Game()
{
    if(Lives <0 || Stop_the_time == true )
    {
        Main_text.innerHTML = "You Are Out Of Lives Or You Are Out Of Time <br/> Sending You To The End "
    }
    else if(player_level_they_are_on > level)
    {
        Main_text.innerHTML = "Well Done <br/> Going To The End"
        Stop_the_time = true
        clearTimeout(The_timer_Out)
    }
    else if(Main_input.value == The_maths)
    {
        Main_text.innerHTML = "Well Done <br/> picking A New Number"
        The_Random_thing()
        player_level_they_are_on++
        player_Levels.innerHTML = "Levels <br/>" + player_level_they_are_on + " / " + level
    }
    else if(Main_input.value  > The_maths)
    {
        Lives--
        Main_text.innerHTML = "You Went To high<br/> Takeing A Life From You"
        Player_live.innerHTML = "Lifes <br/>" + Lives
    }
    else if(Main_input.value  < The_maths)
    {
        Lives--
        Main_text.innerHTML = "You Went To low<br/> Takeing A Life From You"
        Player_live.innerHTML = "Lifes <br/>" + Lives
    }
})
function The_Timer()
{
    if(Stop_the_time == false)
    {
        The_timer_Out = setTimeout(The_Timer, the_sec_Or_less_or_More)
        if(Lives < 0 )
        {
            Stop_the_time = true
            clearTimeout(The_timer_Out)
        }
        else if(the_mint_item <= 0 && Sec_item <= 0 )
        {
            Stop_the_time = true
            clearTimeout(The_timer_Out)
            Main_text.innerHTML = "You Are Out Of Time <br/> Sending You To The End "
        }
        else if(the_mint_item >= 0)
        {
            if(Sec_item == 0)
            {
                the_mint_item--
                Sec_item = 59
                Player_timer.innerHTML =" Timer <br/>"  +  the_mint_item + " : " + Sec_item

            }
            else if(Sec_item <= 9)
            {
                Sec_item--
                Player_timer.innerHTML ="Timer <br/>"  + the_mint_item + " : 0" + Sec_item
            }
            else if(Sec_item >= 10)
            {
                Sec_item--
                Player_timer.innerHTML =" Timer <br/>"  +  the_mint_item + " : " + Sec_item
            }
        }

    }
}
function Debug_log()
{

}