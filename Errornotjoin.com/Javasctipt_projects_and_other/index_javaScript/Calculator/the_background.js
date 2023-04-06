var Porjects = document.getElementById("projects 3")
var items_been_made = false
var website_mian_bus = document.getElementById("Projects")
function Opening_or_carting_the_items()
{
console.log("Well This Works");
    if(items_been_made == true)
    {
        Porjects.style.visibility ="visible"
        website_mian_bus.style.visibility = "hidden"
    }
    else
    {
        Making_the_Calculator()
        Porjects.style.visibility ="visible"
        website_mian_bus.style.visibility = "hidden"
    }
}
