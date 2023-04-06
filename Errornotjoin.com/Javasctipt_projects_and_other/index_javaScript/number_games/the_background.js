//Items From The Home Page Ids 
var Numbers_game_Home_Button = document.getElementById("List_buttons")
var Numbers_game_link_to_the_main_div = document.getElementById("projects 1")
var Projects = document.getElementById("Projects")
//Bool
var Item_been_made = false
//The Home Page Main Button For This 
Numbers_game_Home_Button.addEventListener("click", function test()
{
    //has this item been made by the js yes/no
    if(Item_been_made == true)
    {
            Numbers_game_link_to_the_main_div.style.visibility = "visible"
            Projects.style.visibility = "hidden"
    }
    else
    {
        Projects.style.visibility = "hidden"
        Item_been_made = true

        Numbers_game_link_to_the_main_div.style.visibility = "visible"
        Making_main_background_and_kides()
    }
})

function Making_main_background_and_kides()
{
    //Main items for the game (Not Remove This)//
    var number_games_main_background = document.createElement("div")
    //END//
 
    //Header Items//(Not Remove This)//
    var number_games_main_header = document.createElement("header")
    var Header_Name_for_the_game = document.createElement("h1")
    var Header_Hide_The_Numbers_game = document.createElement("button")
    var Header_Keep_The_Time = document.createElement("p")
    //End//
    //Main items //(Not Remove This)
    var Main_body_of_the_game = document.createElement("div")
    var Main_text = document.createElement("h1")
       //Main Side Windows//(Not Remove This)//
        var Main_side_window_for_the_wins_and_loss = document.createElement("div")
        var Main_side_window_for_chid = document.createElement("div")
        var Main_side_window_for_the_wins_and_loss2 = document.createElement("div")
        var Main_side_window_User_wins_for_the_game = document.createElement("p")
        var Main_side_window_loss_for_the_game = document.createElement("p")
        var Main_side_window_rounds = document.createElement("p")
        var Main_side_winddows_Points = document.createElement("p")
        //End//
    //End//
    //Footer Items//(Not Remove This)//
    var Footer_Body_of_the_game = document.createElement("div")
    var Footer_player_input_box = document.createElement("input")
    var Footer_Player_Submit_box = document.createElement("button")
    //End//
    
    //The Class Names For The Game//
        number_games_main_background.className = " number_games_main_background"
       //the class names for Header items //
        number_games_main_header.className = "number_games_main_header"
       //End
       //The Class Names For Side Window//
            Main_side_window_for_the_wins_and_loss .className = "Main_side_window_for_the_wins_and_loss "
            Main_side_window_for_the_wins_and_loss2.className = "Main_side_window_for_the_wins_and_loss2"
       //End//
       //The Class Names For Main Window//
            Main_body_of_the_game.className = "Main_body_of_the_game"
        //End//
        //The Class Names For  Footer//
        Footer_Body_of_the_game.className = "Footer_Body_of_the_game"
        //End//
    //End//
    
    // The Ids Names For The Game//
         //Ids For The Header//
            Header_Hide_The_Numbers_game.id = "Header_Hide_The_Numbers_game"
            Header_Keep_The_Time.id = "Header_Keep_The_Time"
         //End
         //Ids For The Side Window//
            Main_side_window_User_wins_for_the_game.id = "Main_side_window_User_wins_for_the_game"
            Main_side_window_loss_for_the_game.id = "Main_side_window_loss_for_the_game"
           
            Main_side_window_rounds.id = "Main_side_window_rounds"
            Main_side_winddows_Points.id = "Main_side_winddows_Points"
         //End
         //Ids For The  Main Window//
         Main_side_window_for_the_wins_and_loss2.id = "Main_side_window_for_the_wins_and_loss2"
            Main_text.id = "Main_text"
         //End
         //Ids For The Footer//
            Footer_player_input_box.id = "Footer_player_input_box"
            Footer_Player_Submit_box.id = "Footer_Player_Submit_box"
         //End
    //End//
    // TextConted and placeholder For The Game//
        //TextConted and placeholder For The Header//
            Header_Name_for_the_game.textContent = "Null"
            Header_Keep_The_Time.textContent = "Time: 0:00"
            Header_Hide_The_Numbers_game.textContent = "minimise "
        //End
        //TextConted and placeholder For The Side Window//
            Main_side_window_User_wins_for_the_game.textContent = "You Wins: 0"
            Main_side_window_loss_for_the_game.textContent = "You lose: 0"
            Main_side_winddows_Points.textContent = "Your Pionts: 0"
            Main_side_window_rounds.textContent = "Round: 0"
        //End
        //TextConted and placeholder For The  Main Window//
            Main_text.textContent = "Start Game"
        //End
        //TextConted and placeholder For The Footer//
            Footer_player_input_box.placeholder = "Enter Your answers"
            Footer_Player_Submit_box.textContent = "Submit"
        //End
    //End//
    // appendChild For The Game//
    Numbers_game_link_to_the_main_div.appendChild(number_games_main_background)
    //appendChild For The Header//
        number_games_main_background.appendChild(number_games_main_header)
        number_games_main_header.appendChild(Header_Hide_The_Numbers_game)
        number_games_main_header.appendChild(Header_Name_for_the_game)
        number_games_main_header.appendChild(Header_Keep_The_Time)
    //End
    //appendChild For The  Main Window//
        number_games_main_background.appendChild(Main_body_of_the_game)
        Main_body_of_the_game.appendChild(Main_text)
    //End//
    //appendChild For The Side Window//
        Main_side_window_for_chid.className = "Main_side_window_for_chid"
        number_games_main_background.appendChild(Main_side_window_for_the_wins_and_loss)
        Main_side_window_for_the_wins_and_loss.appendChild(Main_side_window_for_chid)
        Main_side_window_for_chid.appendChild(Main_side_window_User_wins_for_the_game)
        Main_side_window_for_chid.appendChild(Main_side_window_loss_for_the_game)
        Main_side_window_for_chid.appendChild(Main_side_winddows_Points)

        Main_side_window_for_the_wins_and_loss.appendChild(Main_side_window_for_the_wins_and_loss2)
    //End
    
    //appendChild For The Footer//
        Numbers_game_link_to_the_main_div.appendChild(Footer_Body_of_the_game) 
        Footer_Body_of_the_game.appendChild(Footer_player_input_box)
        Footer_Body_of_the_game.appendChild(Footer_Player_Submit_box)
    //End//
    //End//
    setTimeout(getting_the_items, 200)
}