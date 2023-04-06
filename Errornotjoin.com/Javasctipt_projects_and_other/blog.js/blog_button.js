var number_of_blogs = 12;
var r = 0 
var Looking_For_the_item = document.getElementById("Looking_For_the_item")
Looking_For_the_item.addEventListener("click", function Searching_for_blog()
{
    var I_LookIng_for_A_date = document.getElementById("I_look_at")
    for(var x = 0; x <= number_of_blogs; x++)
    {
        console.log(x);
        var Blog_Made_on = document.getElementById("Made_on_" + x)
        var blog_body = document.getElementById("Blog_body_items" + x)
        if(I_LookIng_for_A_date.value == Blog_Made_on.innerText)
        {
            blog_body.style.display = "block"
        }
        else
        {
           // console.log(Blog_Made_on.textContent);
            blog_body.style.display = "none"
        }
      
    }
}) 

function Opening_and_closing_blog_items(Blogs_Number)
{
    var Blog_name = document.getElementById("Text_for_the_blog" + Blogs_Number)
    if(Blog_name.style.display == "none")
    {
        Blog_name.style.display = "block"
    }
    else
    {
        Blog_name.style.display = "none"
    }
}
function Picking_Items(Items_numbers)
{
   switch(Items_numbers)
   {
    case 0:
            console.log("This Dose Nothing Right NOW ");
        break;
    case 1:
        Opening_all_blogs()
        break;
    case 2:
        Looking_for_items("Small Update")
        break;
    case 3:
        Looking_for_items("Big Updates")
        break;
    case 4:
        Looking_for_items("Blog")
        break;
    case 5:
        All_blog_context()
        break;
    }
    function Opening_all_blogs()
    {        
        for(var x = 0; x <= number_of_blogs; x++)
        {
            var blog_body = document.getElementById("Blog_body_items" + x)
            if(blog_body.style.display == "none")
            {
                blog_body.style.display = "block"
            }

        }
    }
    function Looking_for_items(name_for_looking_for_items)
    {
        for(var x = 0; x <= number_of_blogs; x++)
        {
            var Blog_name = document.getElementById("blog" + x)
            var blog_body = document.getElementById("Blog_body_items" + x)
            if(Blog_name.textContent == name_for_looking_for_items)
            {
                blog_body.style.display = "block"
            }
            else
            {
                blog_body.style.display = "none"
            }
        }
    }
    function All_blog_context()
    {
        for(var x = 0; x <= number_of_blogs; x++)
        {
            var Blog_name = document.getElementById("Text_for_the_blog" + x)
            Blog_name.style.display = "block"
        }
    }
}


