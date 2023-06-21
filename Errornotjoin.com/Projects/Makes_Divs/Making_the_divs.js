var Where_the_divs_going = document.getElementById("On_start_div")
var Start_button = document.getElementById("Start_Button")
var Time_out_start = ""
var New_time_Out = ""
var The_StyleSheet_Jail = document.getElementById("The_StyleSheet_Jail")
var x  = 0 
var y  = 0 

var Saveing_stlyes_Hights = []
var Saving_Stlyes_width = []
var Saveing_stlyes_Colour_div_one = []
var Saveing_stlyes_Colour_div_Two = []
var Saveing_stlyes_Colour_Div_Three = []
var Save = [Saveing_stlyes_Hights, Saving_Stlyes_width, Saveing_stlyes_Colour_div_one, Saveing_stlyes_Colour_div_Two, Saveing_stlyes_Colour_Div_Three ] 
var save_Key = [" = The Divs Hight", "=The Divs Width", "=The First Divs Colours", "=The Secend Divs Colours", "=The Third Divs Colours "]
var rendom_div = 0 
Time_out_start = setTimeout(Loading_the_first_divs, 1)
var true_or_something = false
var j = true
var Update_Stlye = ""
var The_inputs_and_Buttons = ""
var Edtiing = false
var l = false
var Random_Buttom = document.getElementById("Random_Buttom")
Random_Buttom.addEventListener("click", function relative()
{
    var The_widht = document.getElementById("Divs_wdith")
    var The_Hight = document.getElementById("Divs_Hight")
    var Many_divs = document.getElementById("How_Many_Divs")
    var The_Speed_OF_Time_Out = document.getElementById("Timer_speed")
    //
    var Random_Width = Math.round(Math.random() * 100)
    var Random_Hight = Math.round(Math.random() * 50)
    var Random_Divs = Math.round(Math.random() * 9000)
    var Random_Timer_take = 1
    
    //
    Many_divs.value = Random_Divs.toString()
    The_Speed_OF_Time_Out.value = Random_Timer_take.toString()
    The_widht.value = Random_Width.toString() 
    The_Hight.value = Random_Hight.toString()
})

//
var defaults = document.getElementById("defaults")
defaults.addEventListener("click", function things()
{
        var The_widht = document.getElementById("Divs_wdith")
        var The_Hight = document.getElementById("Divs_Hight")
        var Many_divs = document.getElementById("How_Many_Divs")
        var The_Speed_OF_Time_Out = document.getElementById("Timer_speed")

        Many_divs.value = 1000
        The_Speed_OF_Time_Out.value = 100
        The_widht.value = 100 
        The_Hight.value = 50

})
//


function Loading_the_first_divs()
{
     x++
     if(x == 100)
     {
            clearTimeout(Time_out_start)
     }
     else{
        var The_divs = document.createElement("div")
        The_divs.style.width = "100%"
        The_divs.style.height = "50px"
        The_divs.style.backgroundColor = "#9c1429"
        Where_the_divs_going.appendChild(The_divs)
        Time_out_start = setTimeout(Loading_the_first_divs, 10)

     }

}
Start_button.addEventListener("click", function Getting_info_and_Start_making_divs()
{
    Start_button.disabled = true
    y = 0
    if(true_or_something == true)
    {
        var New_Jail_for_divs = document.getElementById("something")
        New_Jail_for_divs.remove()
        true_or_something = false
    }
    var Many_divs = document.getElementById("How_Many_Divs")
    var The_Speed_OF_Time_Out = document.getElementById("Timer_speed")
    var the_trye_random = document.getElementById("Random")
    //
    var Go_Start_div = document.getElementById("Go_Start_div")
    var New_Jail_for_divs = document.createElement("div")
    var Show_Numbers = document.getElementById("Show_Numbers")
    New_Jail_for_divs.id = "something"
    Go_Start_div.appendChild(New_Jail_for_divs)
    New_Jail_for_divs.className = "The_Divs_jail"
    true_or_something = true
    var The_widht = document.getElementById("Divs_wdith")
    var The_Hight = document.getElementById("Divs_Hight")

    //
    The_new_colours()
    The_making_the_divs()
    //
    function The_new_colours()
    {
        //the new CSS And It Get to save to an arry 
        //so the user can use the css used befor by the update log 
        y = 0
            var Show_Update_log = document.getElementById("Show_Update_log")
        if(Show_Update_log.checked == false )
        {
            
            Update_Stlye  = ".Input_box{display:none;}"
            The_inputs_and_Buttons = ".The_inputs_and_buttons{animation: Two 2s; position: relative; left:3%; width:95%}"
            Edtiing = true
        }
        else if(Edtiing == true)
        {
                Update_Stlye = ".Input_box{animation:cats 2s; width:20%; display:block;}"   
            The_inputs_and_Buttons = ".The_inputs_and_buttons{animation:Three 2s;  width: 80%;, position: relative; }"
            Edtiing = false
        }
        var The_One_colour = document.getElementById("The_colour_one")
        var The_Two_colour = document.getElementById("Div_Two")
        var The_Three_colours = document.getElementById("Div_Three")
        var The_Text_Colour = document.getElementById("TextContent_colours")

        var An_colour_One = document.getElementById("An_one")
        var An_Colour_two = document.getElementById("An_two")

        Saveing_stlyes_Hights.push(" " +The_Hight.value)
        Saving_Stlyes_width .push(" " + The_widht.value)
        Saveing_stlyes_Colour_div_one .push(" " +  The_One_colour.value)
        Saveing_stlyes_Colour_div_Two .push(" " + The_Two_colour.value)
        Saveing_stlyes_Colour_Div_Three.push(" "+ The_Three_colours.value)
        
        var Anm_two = "@keyframes TWO{0%{background-color:"+An_colour_One.value  +";  } 50%{background-color:"+ An_Colour_two.value+ ";} 100%{background-color:"+The_Two_colour.value+"; }}"
        var Anm_three = "@keyframes THREE{0%{background-color:"+An_colour_One.value  +";  } 50%{background-color:"+ An_Colour_two.value+ ";} 100%{background-color:"+The_Two_colour.value+"; }}"
                
        The_StyleSheet_Jail.textContent =  Anm_three+Anm_two+The_inputs_and_Buttons + Update_Stlye + "body{color:"+ The_Text_Colour.value + "; }.The_main_divss_3{animation: THREE 1s;  height:"+The_Hight.value +"px; width:"+ The_widht.value+ "%; background-color:"+The_Three_colours.value+";} @keyframes cats{0%{wdith:0%;} 100%{wdith:20%;}} .The_main_divss_1{animation: One 1s; height:"+The_Hight.value +"px; width:"+ The_widht.value+ "%;background-color:"+The_One_colour.value+ ";} .The_main_divss_2{animation: TWO  1s;  height:"+The_Hight.value +"px; width:"+ The_widht.value+ "%; background-color:"+The_Two_colour.value+";} @keyframes One{0%{background-color:"+An_colour_One.value  + ";} 50%{background-color:"+ An_Colour_two.value +";} 100%{background-color:"+The_One_colour.value + ";}} @keyframes Two{0%{width:80%; position: relative; left:23%; } 100%{width:95%; }} @keyframes Three{0%{width:95%;  } 100%{width:80%; }}  "+ Anm_three + Anm_two 
        //Saveing_stlyes.push(The_StyleSheet_Jail.textContent)
    }
    function The_making_the_divs()
    {
        Where_the_divs_going.remove()
        if(y >= Many_divs.value) 
        { Start_button.disabled = false
            y = 0
           clearTimeout(New_time_Out)
        }
        else
        {
            //this is where divs get there class name number
            y++
            New_time_Out = setTimeout(The_making_the_divs, The_Speed_OF_Time_Out.value )
           // console.log(y);
           // console.log(the_trye_random.checked);
           rendom_div = 0 
            if(the_trye_random.checked == true)
            {
                rendom_div = Math.round(Math.random() * 3)
                if(rendom_div == 0 )
                {
                    rendom_div = Math.round(Math.random() * 3)
                    if(rendom_div == 0 )
                    {
                        rendom_div++
                        Doing_things()
                    }
                    else
                    {
                        Doing_things()
                    }
                }
                else
                {
                    Doing_things()
                }
            }
            else
            {
                
                if(j == true )
                {
                    rendom_div = 1 
                    j = false
                    l = true
                    Doing_things()
                }
                else if(l == true)
                {
                    rendom_div = 2
                    l = false
                    Doing_things()
                }
                else
                {
                    j = true
                    rendom_div = 3
                    Doing_things()
                }
            }
        }
            
            function Doing_things()
            {

                var The_div = document.createElement("div")
                //console.log(y);
                if(Show_Numbers.checked == true)
                {
                    The_div.textContent = y.toString()
                }
                The_div.className = "The_main_divss_" + rendom_div
                New_Jail_for_divs.appendChild(The_div)
               // console.log(rendom_div);
               // console.log(The_div.className );
                
            }
        }
    
})
var Submit_by_User = document.getElementById("Submit_by_User")
Submit_by_User.addEventListener("click", function User_New_input()
{
    var User_Input_for_update = document.getElementById("For_the_user")
    var Update_Log = document.getElementById("Update_Log")
    var Help_items = ["Load Save style", "Help", "how Many Save Style is there ", "Style Key"]
    switch(User_Input_for_update.value)
    {
        case"Help":
        case"help":
            var TextBlock = document.createElement("p")
            var Ul_Block = document.createElement("ul")
            TextBlock.textContent = "Hello, You Ask For Help:"        
            for(var f = 0; f <= Help_items.length - 1; f++)
            {
                var List_items = document.createElement("li")
                List_items.textContent = Help_items[f]
                Ul_Block.appendChild(List_items)
            }
            Update_Log.appendChild(TextBlock)
            Update_Log.appendChild(Ul_Block)
        break;
        case "Load Save Style":
        case "load save style":
        case "load save style":
        case "load Save style":
        case "load save Style":
            var TextBlock = document.createElement("p")
            var Ul_Block = document.createElement("ul")
            TextBlock.textContent = "Hello, You Ask For Save Style:" 
            if(Saveing_stlyes_Hights.length == 0)
            {
                var New_Textblock = document.createElement("p")
                New_Textblock.textContent = "There Is NO Save Style "
                Update_Log.appendChild(TextBlock)
                Update_Log.appendChild(New_Textblock)
            }   
            else
            {

                for(var f = 0; f <= Save.length - 1 ; f++ )
                {
                    var List_items = document.createElement("li")
                    List_items.textContent = Save[f]
                    Ul_Block.appendChild(List_items)
                }
                Update_Log.appendChild(TextBlock)
                Update_Log.appendChild(Ul_Block)
            } 

        break;
        case "Style Key":
        case "style key":
        case "Style key":
        case "style Key": 
            var TextBlock = document.createElement("p")
            var Ul_Block = document.createElement("ul")
            TextBlock.textContent = "Hello, You Ask For Style Key:" 
            for(var f = 0;f <= save_Key.length - 1; f++)
            {  
                var List_items = document.createElement("li")
                List_items.textContent = save_Key[f]
                Ul_Block.appendChild(List_items)

            }
            Update_Log.appendChild(TextBlock)
            Update_Log.appendChild(Ul_Block)
            break;
    }
})