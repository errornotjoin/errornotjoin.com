var updates = document.getElementById("Updates")
var lats_Updates = document.getElementById("Last_update")
var Name_of_Projects = document.getElementById("Name_of_Projects")
var iteams_been_update = document.getElementById("iteams_been_update")
var iteams_Not_been_update = document.getElementById("iteams_Not_been_update")
var Projects = document.getElementById("Projects")
var Items_updated = document.getElementById("Items_updated")
var Projects_buttons = document.getElementById("Projects_buttons")
var been_on = false
var yes_iteams = []
var no_iteams = []
var Items_things = ["last_update0", "last_update1", "last_update2" ]
var yes_items_been_made = false
var no_items_not_been_made = false
updates.addEventListener("click" , function cat()
{
    if(been_on == false)
    {
        Items_updated.style.visibility = "visible"
        Projects_buttons.style.visibility = "hidden"
        for(i = 0; i < Items_things.length; i++)
        {
            var items_textcontent = document.getElementById("last_update" + i)
            if(items_textcontent.textContent == "Getting Updates: yes")
            {
                if(yes_items_been_made == true)
                {
                }
                else
                {
                    var Javas_Iteamss = document.getElementById("Javas_Iteams" + i)
                    var random = Javas_Iteamss.textContent
                    yes_iteams.push(random)
                    var yes_item_are_being_made = document.createElement("div")
                    var yes_iabm = document.createElement("p")
                    yes_iabm.textContent = Javas_Iteamss.textContent
                    iteams_been_update.appendChild(yes_item_are_being_made)
                    yes_item_are_being_made.appendChild(yes_iabm)
                    if(yes_iteams.length == 2)
                    {
                        yes_items_been_made = true
                    }
                }
            }
            else
            {
                if(no_items_not_been_made == true)
                {
                }
                else
                {
                    
                    var Javas_Iteamss = document.getElementById("Javas_Iteams" + i)
                    var random = Javas_Iteamss.textContent
                    no_iteams.push(random)
                    var yes_item_are_being_made = document.createElement("div")
                    var yes_item_are_being_mades = document.createElement("p")
                    yes_item_are_being_mades.id = random
                    yes_item_are_being_mades.textContent = random
                    iteams_Not_been_update.appendChild(yes_item_are_being_made)
                    yes_item_are_being_made.appendChild(yes_item_are_being_mades)
                    if(no_iteams.length == 4)
                    {
                        no_items_not_been_made = true
                    }
                    
                }
            }
        }
        updates.style.opacity = "1"
        been_on = true
    }
    else
    {
        Items_updated.style.visibility = "hidden"
        Projects_buttons.style.visibility = "visible"
        updates.style.opacity = ""
        been_on = false
    }
})