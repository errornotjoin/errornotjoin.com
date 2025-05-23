var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"]
var Up_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Spicler_letters = ["@", ",", ".", "!","£","$","%","^","&","*","(",")", "/","?"]
var Number_Items = ["1","2","3","4","5","6","7","8","9"]
//this is all the items for creating the password 
var range_txt = document.getElementById("range_txt")
var The_range_value = document.getElementById("The_range_value")
var Upper_Case_checkbox = document.getElementById("Upper_Case_checkbox")
var Lower_Case_checkbox = document.getElementById("Lower_Case_checkbox")
var numbers_checkbox = document.getElementById("numbers_checkbox")
var Spicler_checkbox = document.getElementById("Spicler_checkbox")
var Reset_button = document.getElementById("Reset_button")
var The_Password_txt_holder = document.getElementById("The_Password_txt_holder")
var Start_Making_the_password = document.getElementById("Start_Making_the_password")

//makeing srue that the range is updated 
updater_to_the_text()
function updater_to_the_text(){
    //console.log(The_range_value.value);
    
    range_txt.textContent = "The Range: " + The_range_value.value
    //setting the text to the value of the range value 

    timer_For_update_the_text = setTimeout(updater_to_the_text, 1)
    //just a forever loop(update every 1ms )
}
Reset_button.addEventListener("click", function Reset_value()
{
The_range_value.value = 50 
// the range bar will be at 50 
Upper_Case_checkbox.checked = true
Lower_Case_checkbox.checked = true
numbers_checkbox.checked = true
Spicler_checkbox.checked = true
//all the rest will be checked if the user click the reset button 
The_Password_txt_holder.value = " "
//this will make sure that there is no text in that input 
//this just reset all the main value that the user can use 
})

Start_Making_the_password.addEventListener("click", function Starting()
{   var random_number = 0 
    random_items(random_number)
})
//
function random_items(random_number){
    The_Password_txt_holder.value = " "
    var the_password = " "
    console.log(The_range_value.value);
    The_Password_txt_holder.value = " "
    //this will loop until it will reach the size of the range_value value 
    x  = 0 
    for(x = 0; x < The_range_value.value || The_range_value.value > The_Password_txt_holder.value.length; x++)
    {   

        if(The_Password_txt_holder.value.length < The_range_value.value){
        random_number  = Math.floor(Math.random() * 3)
       //Math.floor will make it round so there will be no number that is a float 
       //math.random will pick a random number between 0 to 3 
        switch(random_number)
        //this is more or less if staement 
        {
            case 0:
                // thus is the upper litters will get pick  from 
                if(Upper_Case_checkbox.checked == false)
                    {
                    }
                else
                    {

                        var new_random = Math.floor(Math.random() * Up_letters.length)
                        the_password = (Up_letters[new_random])
                        The_Password_txt_holder.value = The_Password_txt_holder.value + the_password
                        console.log(The_Password_txt_holder.value.length);
                        
                        
                    }
            case 1:
                // thus is the upper litters will get pick  from 
                if(Lower_Case_checkbox.checked == false)
                    {

                    }
                else
                    {

                        var new_random = Math.floor(Math.random() * letters.length)
                        the_password = letters[new_random]
                        The_Password_txt_holder.value = The_Password_txt_holder.value + the_password
                        console.log(The_Password_txt_holder.value.length);
                    }
            case 2: 
                // thus is the upper litters will get pick  from 
                if(numbers_checkbox.checked == false)
                    {

                    }
                else
                    {
                        var new_random = Math.floor(Math.random() * Number_Items.length)
                        the_password = Number_Items[new_random]
                        The_Password_txt_holder.value = The_Password_txt_holder.value + the_password
                        console.log(The_Password_txt_holder.value.length);
                    }
            case 3:
                // thus is the upper litters will get pick  from 
                if(Spicler_checkbox.checked == false)
                    {

                    }
                else
                    {
                        var new_random = Math.floor(Math.random() * Spicler_letters.length)
                        the_password = Spicler_letters[new_random]
                        The_Password_txt_holder.value = The_Password_txt_holder.value + the_password
                        console.log(The_Password_txt_holder.value.length);
                        
                    }

        }
    }   
       else if(The_Password_txt_holder.value.length > The_range_value.value)
       {
        break;
       }
    }
}