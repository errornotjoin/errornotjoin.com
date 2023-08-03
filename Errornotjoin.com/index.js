var One_Buttons_Is_open = false
var Two_Buttons_is_open = false
function getting_The_button_Name(Button_Number)
{
    switch(Button_Number)
    {
        case 1:
        case 2:
            Useing_The_Open_Or_Old_Css(Button_Number)
        break;
        case 3:
            The_website_Settings_Open_and_Close()
            break;
    }
    function Useing_The_Open_Or_Old_Css(Button_Number)
    {
        var The_background_For_the_items = document.getElementById("The_Background_" + Button_Number)
        var The_Main_button_1 = document.getElementById("The_Main_button_" + Button_Number)
        var The_css_Link = document.getElementById("The_Css_link")
        if(The_background_For_the_items.style.display == "none")
        {
            The_css_Link.href = ""
            The_Main_button_1.className = "Thing_for_the_buttonss"
            The_background_For_the_items.style.display = "block"

        }
        else
        {
            The_Main_button_1.className = "Thing_for_the_buttonss_And_Settings"
            The_background_For_the_items.style.display = "none"
        }
    }
   
}
var One_Buttons_Is_open = false
var Two_Buttons_is_open = false
function getting_The_button_Name(Button_Number)
{
    switch(Button_Number)
    {
        case 1:
        case 2:
            Useing_The_Open_Or_Old_Css(Button_Number)
        break;
        case 3:
            The_website_Settings_Open_and_Close()
            break;
    }
    function Useing_The_Open_Or_Old_Css(Button_Number)
    {
        var The_background_For_the_items = document.getElementById("The_Background_" + Button_Number)
        var The_Main_button_1 = document.getElementById("The_Main_button_" + Button_Number)
        var The_css_Link = document.getElementById("The_Css_link")
        if(The_background_For_the_items.style.display == "none")
        {
            The_css_Link.href = ""
            The_Main_button_1.className = "Thing_for_the_buttonss"
            The_background_For_the_items.style.display = "block"

        }
        else
        {
            The_Main_button_1.className = "Thing_for_the_buttonss_And_Settings"
            The_background_For_the_items.style.display = "none"
        }
    }
   
}

function getting_The_button_Name(Button_Number)
{
    switch(Button_Number)
    {
        case 1:
        case 2:
        case 3:
            Useing_The_Open_Or_Old_Css(Button_Number)
        break;
       
           
    }
    function Useing_The_Open_Or_Old_Css(Button_Number)
    {
        var The_background_For_the_items = document.getElementById("The_Background_" + Button_Number)
        var The_Main_button_1 = document.getElementById("The_Main_button_" + Button_Number)
        // var The_css_Link = document.getElementById("The_Css_link")
        if(The_background_For_the_items.style.display == "none")
        {
           // The_css_Link.href = "CSS//New_Style_For_index.css"
            The_Main_button_1.className = "Thing_for_the_buttonss"
            The_background_For_the_items.style.display = "block"

        }
        else
        {
            The_Main_button_1.className = "Thing_for_the_buttonss_And_Settings"
            The_background_For_the_items.style.display = "none"
        }
    }
   
}
 