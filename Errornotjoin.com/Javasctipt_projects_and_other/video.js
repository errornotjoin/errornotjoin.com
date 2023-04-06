var Videos = document.getElementById("Videos")
var Yes_button = document.getElementById("Yes_button")
var No_button = document.getElementById("No_button")
var Youtube_cookies = document.getElementById("Youtube_cookies")
var main_background = document.getElementById("main_background")
Yes_button.addEventListener("click", function yes()
{
    Videos.style.visibility = "visible"
    Youtube_cookies.remove()

})
No_button.addEventListener("click", function no (){
   var Videos0 = document.getElementById("Videos0")
      Youtube_cookies.remove()
      Videos.remove()
      Videos0.remove()
    
})
var Game_I_play = document.getElementById("Game_I_play")
var Game_i_play = document.getElementById("Game_i_play")
Game_i_play.addEventListener("click", function accoutns()
{
   
   if(Game_I_play.style.visibility == "hidden")
   {
      Game_I_play.style.visibility = "visible"
   }
   else
   {
      Game_I_play.style.visibility = "hidden"
   }
})
var Twitch_account = document.getElementById("Twitch_account")
var twitch_account = document.getElementById("twitch_account")
twitch_account.addEventListener("click", function accoutns()
{
   
   if(Twitch_account.style.visibility == "hidden")
   {
      Twitch_account.style.visibility = "visible"
   }
   else
   {
      Twitch_account.style.visibility = "hidden"
   }
})
var One_Info = document.getElementById("One_Info")
var One_info = document.getElementById("One_info")
One_info.addEventListener("click", function accoutns()
{
   
   if(One_Info.style.visibility == "hidden")
   {
      One_Info.style.visibility = "visible"
   }
   else
   {
      One_Info.style.visibility = "hidden"
   }
})
var Other_things = document.getElementById("Other_things")
var Other_Things = document.getElementById("Other_Things")
Other_things.addEventListener("click", function thing()
{
   if(Other_Things.style.visibility == "hidden")
   {
      Other_Things.style.visibility = "visible"
   }
   else{Other_Things.style.visibility = "hidden"}
})
function seeing_the_videos(name)
{
   switch(name)
   {
      case 0:
         open_and_closing_things(0)
         break;
      case 1:
         open_and_closing_things(1)
         break;
      case 2:
         open_and_closing_things(2)
         break;
      case 3:
         open_and_closing_things(4)
         break;

   }
   function open_and_closing_things(Numbers)
   {
      for(i = 0; i <= 5; i++)
      {
         var video_background = document.getElementById("Videos" + i)
         var Videos3 = document.getElementById("Videos")
         Videos3.style.visibility = "hidden"
         if(i == Numbers)
         {
            video_background.style.visibility = "visible"
         }
         else
         {
            video_background.style.visibility = "hidden"
         }
         
      }
   }
}
function closeing_all_items()
{
   for(i = 0; i <= 4; i++)
   {
      var video_background = document.getElementById("Videos" + i)
      var Videos3 = document.getElementById("Videos")
      Videos3.style.visibility = "visible"
      video_background.style.visibility = "hidden"
   }
}