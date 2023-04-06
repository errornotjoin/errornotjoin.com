var x = 10 
var z = 0 
var min = 0
var player_winss = 0 
var Player_rounds = 0
var Player_pionts = 0  
var Game_is_Done = false
var player_wins = false;
var player_loss= false

function getting_the_items()
{
    var Main_text = document.getElementById("Main_text")
    Main_text.addEventListener("click", function test()
    {
        updating()
    })
    var Header_Hide_The_Numbers_game = document.getElementById("Header_Hide_The_Numbers_game")
    Header_Hide_The_Numbers_game.addEventListener("click", function things()
    {
        hidden_thing()
    })
}
//starting The  Game Here Need to do the timer then the game can start 
    
function updating()
{
    var Main_text = document.getElementById("Main_text")
   
    if(x == 0)
        {
            clearTimeout(starting_timer)
            Main_text.textContent = "Gooooo!!!!!!!!"
            start_the_game_timer_to_time_the_Player()
            Game_questions_here()
        }
        else
        {
            if(x <= 5 )
            {
                starting_timer =  setTimeout(updating, 1000)
                x--
                Main_text.textContent =  x.toString()
            }
            else
            {
                starting_timer =  setTimeout(updating, 1000)
                x--
                Main_text.textContent = "Starting In: " + x.toString()
            }

            
        }

}
function start_the_game_timer_to_time_the_Player()
{
    console.log("Starting The Timer");
 var StartIng_Timer = document.getElementById("Header_Keep_The_Time")
 if(Game_is_Done == true)
 {

 }
 else
 {
    game_timer()
    function game_timer()
    {
        setTimeout(game_timer, 1000)
        z++
        if(z >= 60)
        {
            min++
            z = 0 
            StartIng_Timer.textContent = "Time: "+ min.toString()+ ":"+ z.toString()
            
        }
        else if(z >= 10)
        {
            StartIng_Timer.textContent = "Time: " + min.toString()+ ":"+ z.toString()
        }
        else
        {
            StartIng_Timer.textContent = "Time: "+ min.toString() + ":0"+ z.toString()
        }
        
        }
    
    }
   
}
function Game_questions_here()
{
    
    console.log("Starting The Games");
    var Randomsa 
    var Main_text = document.getElementById("Main_text")
    Pick_A_number_to_player()
    function Pick_A_number_to_player()
    {
        var random_by_this_number = 100
        
        Randomsa = Math.round(Math.random() * random_by_this_number)
        Main_text.textContent = "Pick A Number between :0  to "+ random_by_this_number.toString()
        console.log(Randomsa);
    }
    var Footer_player_input_box = document.getElementById("Footer_player_input_box")
    var Footer_Player_Submit_box = document.getElementById("Footer_Player_Submit_box")
    Footer_Player_Submit_box.addEventListener("click", function answer_numbers()
    {
        var Main_side_winddows_Points = document.getElementById("Main_side_winddows_Points")
        if(Footer_player_input_box.value == Randomsa)
        {
            var Main_side_window_User_wins_for_the_game = document.getElementById("Main_side_window_User_wins_for_the_game")
          
            player_winss++
            Player_pionts += 100
            Main_side_winddows_Points.textContent = "Your Points"+ Player_pionts.toString()
            Main_side_window_User_wins_for_the_game.textContent = "Your Wins: " + player_winss.toString()
            Main_text.textContent = "Well Done: It Was " + Randomsa.toString()
            player_wins = true
            making_litter_box()
            Pick_A_number_to_player()
        }
        else if (Footer_player_input_box.value != Randomsa)
        {
            Main_text.textContent = ":("
            player_loss++
            Main_side_window_loss_for_the_game.textContent = "Your Loss: " + player_loss.toString()
            
            
            Player_pionts -= 50
            Main_side_winddows_Points.textContent = "Your Points: "+ Player_pionts.toString()
            making_litter_box()
            Pick_A_number_to_player()
        }
        else
        {
            Main_text.textContent = "Error: There Is No Input Or Something"
        }
    } )
    
}
function making_litter_box()
{
    var Main_side_window_for_the_wins_and_loss2  = document.getElementById("Main_side_window_for_the_wins_and_loss2")
     if(player_wins == true)
     {
        var Wining_box = document.createElement("div")
        var Wining_box_text = document.createElement("p")
        var Wining_box_points = document.createElement("p")
        var Wining_box_time = document.createElement("p")
        //
        Wining_box_text.textContent = "Win"
        Wining_box_points.textContent = "Your Points: " + Player_pionts.toString()
        if(z >= 60)
        {
            min++
            z = 0 
            Wining_box_time.textContent = "Your Time: "+ min.toString()+ ":"+ z.toString()
            
        }
        else if(z >= 10)
        {
            Wining_box_time.textContent = "Your Time: " + min.toString()+ ":"+ z.toString()
        }
        else
        {
            Wining_box_time.textContent = "Your Time: "+ min.toString() + ":0"+ z.toString()
        }
      
        //
        Main_side_window_for_the_wins_and_loss2.appendChild(Wining_box)
        Wining_box.appendChild(Wining_box_text)
        Wining_box.appendChild(Wining_box_points)
        Wining_box.appendChild(Wining_box_time)


        player_wins = false
     }
     else
     {
        var Wining_box = document.createElement("div")
        var Wining_box_text = document.createElement("p")
        var Wining_box_points = document.createElement("p")
        var Wining_box_time = document.createElement("p")
        //
        Wining_box_text.textContent = "losss"
        Wining_box_points.textContent = "Your Points:  " + Player_pionts.toString()
        if(z >= 60)
        {
            min++
            z = 0 
            Wining_box_time.textContent = "Your Time: "+ min.toString()+ ":"+ z.toString()
            
        }
        else if(z >= 10)
        {
            Wining_box_time.textContent = "Your Time: " + min.toString()+ ":"+ z.toString()
        }
        else
        {
            Wining_box_time.textContent = "Your Time: "+ min.toString() + ":0"+ z.toString()
        }
      
        //
        Main_side_window_for_the_wins_and_loss2.appendChild(Wining_box)
        Wining_box.appendChild(Wining_box_text)
        Wining_box.appendChild(Wining_box_points)
        Wining_box.appendChild(Wining_box_time)
        Wining_box.style.backgroundColor = "#521212"

     }
    
}