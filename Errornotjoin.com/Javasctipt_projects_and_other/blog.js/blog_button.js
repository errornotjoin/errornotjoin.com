function Picking_Items(The_Items_value)
{
    switch(The_Items_value)
    {
        case 1:
            Using_the_items_value("Show All")
        break;
        case 2:
            Using_the_items_value("Small Update")
        break;
        case 3:
            Using_the_items_value("Big Update")
        break;
        case 4:
            Using_the_items_value("Blog")
        break;

    }
    function Using_the_items_value(The_Number)
    {
        for(var x = 1; x <= 13; x++)
        {
            var The_item = document.getElementById("The_item_" + x )
                
            if(The_Number == "Show All")
            {
                if(The_item.style.display == "none")
                {
                    The_item.style.display = "inline"
                }
            }
            else
            {
                var The_Text = document.getElementById("What_type_of_item_" + x)
                if(The_Text.textContent == The_Number)
                {
                    The_item.style.display = "inline"
                }
                else
                {
                    The_item.style.display = "none"
                }
            }
        }
    }
}
function Getting_the_input_AND_using_it_for_output()
{
    var User_Input = document.getElementById("I_look_at")
    for(var x = 1; x <= 13; x++)
    {
        var The_item = document.getElementById("The_item_" + x )
        var The_item_date_that_it_was_made = document.getElementById("The_item_date_that_it_was_made_" + x )
        var The_item_number = document.getElementById("The_item_number_" + x)
        if(User_Input.value == The_item_number.textContent || User_Input.value == The_item_date_that_it_was_made.textContent  )
        {
            The_item.style.display = "inline"
            console.log("Yes");
        }
        else
        {
            The_item.style.display = "none"
        }

    }
}