var ProJects_main_head = document.getElementById("Main_head_projects")
var Other_things_main_head = document.getElementById("Other_things_main_sub")
var ProJects_main_Sub_buttons = document.getElementById("Sub_main_projects")
var Other_things_Sub_buttons = document.getElementById("Other_things_main")
var iteam_need_to_move_down = document.getElementById("Projects")
var something = document.getElementById("Footer_Of_The_Website")
//
var Projects_hidde = true
ProJects_main_head.addEventListener("click",  function iteams ()
{
if(Projects_hidde == true)
{
      ProJects_main_Sub_buttons.style.visibility = "visible"
      ProJects_main_Sub_buttons.style.animation = "Going_down 2s"
      Projects_hidde = false
}  
else
{
      ProJects_main_Sub_buttons.style.visibility = "hidden"
      Projects_hidde = true
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
var Hidden_button = document.getElementById("Hidden_button")
Hidden_button.addEventListener("click", function cat()
{
   hidden_thing()

})
function hidden_thing()
{
   for(f = 1; f <= 5; f++ )
   {
      var projects0 = document.getElementById("projects " + f)
      projects0.style.visibility = "hidden"
   }
   var Projects = document.getElementById("Projects")
   Projects.style.visibility = "visible"
   for(x = 0; x < 2; x++)
   {
       
       var Main_bot_background0 = document.getElementById("Main_bot_background" + x )
       Main_bot_background0.style.visibility = "hidden"
   }
}