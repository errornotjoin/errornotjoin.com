
var Player = document.getElementById("Player")
var player_Top_valu = 5
var Player_Going_to_left = 0
var Player_rotate_left = 0 
var New_Vaul = 0 
var Wall_1 = document.getElementById("Wall_1")
Player.style.top  = 0
function Switch_Home(Buttons_Numbers)
{
    switch(Buttons_Numbers)
    {
        case 0:
            going_Up()
            break;
        case 1:
            going_down()
            break;
        case 2:
            going_left()
            break;
        case 3:
            going_Right()
            break;
        case 4:
            rotate_left()
        break;
        case 5:
            rotate_right()
        break;

    }
}
function going_down()
{ 
    player_Top_valu += 10
    Player.style.position = "relative"
    Player.style.top  =  player_Top_valu+ "px" ;
    if(Player.style.top != Wall_1.style.top || Player.style.left == Wall_1.style.left)
{

    console.log(Wall_1.style.top);
    console.log(player_Top_valu);
}
    // console.log(Player.style.top);
    // console.log(player_Top_valu);
}
function going_Up()
{ 
    player_Top_valu -= 10 
    Player.style.position = "relative"
    Player.style.top  =  player_Top_valu + "px" ;
    console.log(Wall_1.style.top);
    console.log(player_Top_valu);
    if(Player.style.top == Wall_1.style.top )
    {
    
        console.log(Wall_1.style.top);
        console.log(Player.style.top);
    }
    //console.log(Player.style.top);
    //console.log(-player_Top_valu);
}
function going_left()
{ 
    Player_Going_to_left += 10 
    Player.style.position = "relative"
    Player.style.left  =  Player_Going_to_left + "px" ;
    if(Player.style.top == Wall_1.style.top || Player.style.left == Wall_1.style.left)
{

    console.log(Wall_1.style.top);
    console.log(player_Top_valu);
}
    //console.log(Player.style.top);
    //console.log(Player_Going_to_left);
}
function going_Right()
{ 
    Player_Going_to_left -= 10 
    Player.style.position = "relative"
    Player.style.left  =  Player_Going_to_left + "px" ;
    if( Player.style.left == Wall_1.style.left)
    {

    console.log(Wall_1.style.top);
    console.log(player_Top_valu);
    }
    //console.log(Player.style.top);
   // console.log(Player_Going_to_left);
}
function rotate_left()
{
    if(Player_rotate_left == 360)
    {
        Player_rotate_left = 0
    }   
    Player_rotate_left += 10
    Player.style.rotate = Player_rotate_left + "deg"
    //console.log(Player.style.top);
    console.log(Player_rotate_left);
   
}
function rotate_right()
{
    if(Player_rotate_left == -360)
    {
        Player_rotate_left = 0
    }   
    Player_rotate_left -= 10
    Player.style.rotate = Player_rotate_left + "deg"
    //console.log(Player.style.top);
    console.log(Player_rotate_left);
   
}
