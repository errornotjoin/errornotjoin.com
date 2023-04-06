var Is_toDo_List_made = false
var Max_number = 10
var i = 0 
var x = 0
var y = 0
var l =0
var Add_ButtoNs=  0
var Remove_Buttons = 0
var Main_Input_For_lis = 0
var save_add_button_Number = 0
var number_one = 0
var is_edit = false
//
var Main_ToDo_List_body = document.getElementById("Main_ToDo_List_body")
//

Main_ToDo_List_body.addEventListener("click", function making_the_body_of_ToDo_List()
{
    Is_toDo_List_made = true
    //
    var Hide_div_one = document.createElement("div")
    var main_body_todo = document.createElement("div")
    var Main_Head_ToDo = document.createElement("div")
    var Hide_div_two = document.createElement("div")
    var Side_body_todo = document.createElement("div")
    var sub_side_body_todo = document.createElement("div")
    //
    var Main_add_button = document.createElement("button")
    var Main_remove_button = document.createElement("button")
    var Main_text_side_body = document.createElement("h1")
    var Main_Input = document.createElement("input")
    //
    Main_ToDo_List_body.appendChild(Hide_div_one)
    Hide_div_one.appendChild(main_body_todo)
    Hide_div_one.appendChild(Main_Head_ToDo)
    Main_ToDo_List_body.appendChild(Hide_div_two)
    Hide_div_two.appendChild(Side_body_todo)
    //
    
    Side_body_todo.appendChild(Main_text_side_body)
    Side_body_todo.appendChild(Main_Input)
    Side_body_todo.appendChild(Main_add_button)
    Side_body_todo.appendChild(Main_remove_button)
    Hide_div_two.appendChild(sub_side_body_todo)
    //
    Hide_div_two.className = "Hide_div_two"
    main_body_todo.className = "main_body_todo"
    Main_Head_ToDo.className = "Main_Head_ToDo"
    Side_body_todo.className = "Side_body_todo"
    sub_side_body_todo.className = "sub_side_body_todo"
    //
    Main_text_side_body.id = "Main_text_side_body"
    main_body_todo.id = "main_body_todo"
    Main_Head_ToDo.id = "Main_Head_ToDo"
    Side_body_todo.id = "Side_body_todo"
    sub_side_body_todo.id = "sub_side_body_todo"
    Main_add_button.id = "Main_add_button"
    Main_Input.id = "Main_Input"
    // 
    Main_text_side_body.textContent = "List Maker"
    Main_add_button.textContent = "Add List"
    Main_remove_button.textContent = "Remove All Lists "
  
    setTimeout(ADD_Button, 200)
})
function ADD_Button()
{
var Main_add_button = document.getElementById("Main_add_button")
var Main_Input = document.getElementById("Main_Input") 
var sub_side_body_todo =document.getElementById("sub_side_body_todo")
var main_body_todo = document.getElementById("main_body_todo")
var Main_text_side_body =document.getElementById("Main_text_side_body")
//
Main_add_button.addEventListener("click", function makeing_List_Name()
    {
           
            if( Main_Input.value  != "")
            {
                if( i < Max_number)
                {
                    
                    i++
                    Add_ButtoNs++  
                    Remove_Buttons++
                    Main_Input_For_lis++
                    save_add_button_Number = Add_ButtoNs
                    //
                    var Sub_button = document.createElement("button")
                    var Main_list_body = document.createElement("div")
                     
                    //
                    var Main_name_of_list = document.createElement("h1")
                    var Hid_div_three = document.createElement("div")
                    var Main_Add_to_list = document.createElement("button")
                    var Main_remove_from_list = document.createElement("button")
                    var Main_Input_For_list = document.createElement("input")
                    //
                    Main_list_body.id = "Main_list_body " + i.toString()
                    Main_list_body.className  = "Main_list_body"
                    Main_Input_For_list.id =  "Main_Input_For_list "+ Main_Input_For_lis.toString()
                    Sub_button.id = "Sub_button " + i.toString()
                    Main_Add_to_list.id = "Main_Add_to_list " + Add_ButtoNs.toString()
                    Main_remove_from_list.id = "Main_remove_from_list " +   Remove_Buttons.toString()
                    Main_name_of_list.className = "Main_name_of_list"
                    Hid_div_three.className = "Hid_div_three"
                    
                    //
                    Main_name_of_list.textContent = Main_Input.value 
                    Sub_button.textContent = Main_Input.value 
                    //
                    if(i > 1 )
                    {
                        Main_list_body.style.visibility = "hidden"
                    }
                    //
                    Main_Add_to_list.textContent = "Add Iteam To List"
                    Main_remove_from_list.textContent = "remove From list"
                    //
                    sub_side_body_todo.appendChild(Sub_button)
                    main_body_todo.appendChild(Hid_div_three)
                    main_body_todo.appendChild(Main_list_body)

                    Main_list_body.appendChild(Main_name_of_list)
                    Main_list_body.appendChild(Main_Add_to_list)
                    Main_list_body.appendChild(Main_remove_from_list)
                    Main_list_body.appendChild(Main_Input_For_list)
                    
                    Main_Input.value =  "" 
                    setTimeout(Add_list_Button, 200 )
                   
                    setTimeout(getting_button, 200)
                }
                else
                {
                    Main_text_side_body.textContent = "You Hvae The Max Number  of list"+ i + " / "+ Max_number
                    setTimeout( remove_the_error ,1000)
                }
            }
            else
            {
                Main_text_side_body.textContent = "You Neen To Add Text InTo The Input"
                setTimeout( remove_the_error ,1000)
            }
        

        
    })
}
function Add_list_Button()
{
    
    var Main_list_body = document.getElementById("Main_list_body " + i.toString())
    var Main_Add_to_list = document.getElementById("Main_Add_to_list " + Add_ButtoNs.toString())
    var Main_Input_For_list = document.getElementById("Main_Input_For_list "+ Main_Input_For_lis.toString())
    var Main_remove_from_list = document.getElementById("Main_remove_from_list " +   Remove_Buttons.toString())
    var number_for_number_one =0 
    var number_for_number_two = 0
    var number_for_number_three= 0
    var number_for_number_th = 0
    var number_for_number_five = 0
    var number_for_number_six = 0
    var number_for_number_sev =0 
    var number_for_number_et = 0
    var number_for_number_mi= 0
    var number_for_number_ten = 0
    if(Main_Add_to_list.id != number_one)
    {
        console.log("not Working" );

    }
    Main_Add_to_list.addEventListener("click", function testIng()
    {
        
     switch(Main_list_body.id)
     {
        case "Main_list_body 1":
            console.log("1")
            number_for_number_one++
            x = number_for_number_one 
            number_one = 1
            soemthig()
            
            break;
        case "Main_list_body 2":
            console.log("2")
            number_for_number_two++ 
            x = number_for_number_two 
            number_one = 2
            soemthig()
            break;
        case "Main_list_body 3":
            console.log("3")
            number_for_number_three++
            x = number_for_number_three 
            number_one = 3
            soemthig()
            break
        case "Main_list_body 4":
            console.log("4")
            number_for_number_th++
            x = number_for_number_th 
            number_one = 4 
            soemthig()
        break
        case "Main_list_body 5":
            console.log("5")
            number_for_number_five++
            x = number_for_number_five 
            number_one = 4 
            soemthig()
        break
        case "Main_list_body 6":
            console.log("6")
            number_for_number_six++
            x = number_for_number_six 
            number_one = 6
            soemthig()
            
            break;
        case "Main_list_body 7":
            console.log("7")
            number_for_number_sev++ 
            x = number_for_number_sev 
            number_one = 7
            soemthig()
            break;
        case "Main_list_body 8":
            console.log("8")
            number_for_number_et++
            x = number_for_number_et 
            number_one = 8
            soemthig()
            break
        case "Main_list_body 9":
            console.log("9")
            number_for_number_mi++
            x = number_for_number_mi
            number_one = 9
            soemthig()
        break
        case "Main_list_body 10":
            console.log("10")
            number_for_number_ten++
            x = number_for_number_ten
            number_one = 10
            soemthig()
        break
     }
        
    })
}
function remove_button()
{
   var   Main_buttons = document.getElementById("main_body_Remove_text"+number_one.toString()+  " " + x) 
   Main_buttons.addEventListener("click", function getting_it_Done()
   {
    Remove_list_button()
   })
}
function Remove_list_button()
{
   var Main_Add_to_list  = document.getElementById("Main_text"+number_one+ " " + x)
   Main_Add_to_list.removeChild()
}
//errors
function remove_the_error()
{
    var Main_text_side_body = document.getElementById("Main_text_side_body")
    Main_text_side_body.textContent = "Todo List "
            
}
//getting the info to go to changhing_the_text(GoTo Line 219) and the soemtig(GoTo Line 233)
function Edit_button()
{
    Add_ButtoNs = number_one
 var main_body_edit_text = document.getElementById("main_body_edit_text" + number_one + " " +  x.toString())
 var Main_text  = document.getElementById("Main_text"+ number_one + " " +  x.toString())
 var Main_Edit_text = document.getElementById("This_Has_Been_Edit" + number_one + " " +  x.toString())
 var Main_Add_to_list = document.getElementById("Main_Add_to_list " + Add_ButtoNs)
 var  Main_Input_For_list = document.getElementById( "Main_Input_For_list "+ number_one)
 console.log(Main_Edit_text.id)

    main_body_edit_text.addEventListener("click" , function Edit_text()
    {
        y = Main_text.id
        l = Main_Edit_text.id
        console.log(main_body_edit_text.id + " " + Main_text.id );
        Main_Add_to_list.textContent = "Edit"
        Main_Input_For_list.value = Main_text.textContent
        is_edit = true
    })

}
// changing the text to the edit and makeing the edit text visible,
// y and l is save date from Edit_button(Main_text.id and Main_Edit_Text.id, GoTo line 208 and 209) ids 
function changhing_the_text()
{
    var Main_text  = document.getElementById(y)
    var Main_Edit_text = document.getElementById(l)
    Add_ButtoNs = number_one
    var Main_Add_to_list = document.getElementById("Main_Add_to_list " + Add_ButtoNs.toString())
    var  Main_Input_For_list = document.getElementById( "Main_Input_For_list "+ Add_ButtoNs.toString())
    Main_text.textContent = Main_Input_For_list.value 
    Main_Input_For_list.value = ""
    Main_Add_to_list.textContent  = "Add Iteam To List"
    Main_Edit_text.style.visibility =  "visible"
    is_edit = false;

}
function soemthig()
{

    if(is_edit == true)
    {
       console.log(Add_ButtoNs.toString());
        changhing_the_text()
    }
    else
    {
     //This dose not work. do Not Use This To Get The Id,
     //The Website Know What Id That It Need,
     //Add_ButtoNs = save_add_button_Number
       
        var Main_list_body = document.getElementById("Main_list_body " + number_one.toString())
        var Main_Add_to_list = document.getElementById("Main_Add_to_list " + number_one.toString())
        var Main_Input_For_list = document.getElementById("Main_Input_For_list "+ number_one.toString())

        if(Main_Input_For_list.value != "")
        {
            console.log("IDs Of List Iteams " + number_one.toString() +" "+  Main_Add_to_list.id + " "+ Main_list_body.id + " "+ Main_Input_For_list.id + " "  + "How Many Has Been Made: " +x.toString());
          
            if(x <= 9)
            {
                
                
                var main_body_of_text = document.createElement("div")
                var Main_text = document.createElement("p")
                var main_button_done = document.createElement("button")
                var main_body_Remove_text = document.createElement("button")
                var main_body_edit_text = document.createElement("button")
                var Main_Edit_text = document.createElement("p")
                //
                Main_text.textContent =  Main_Input_For_list.value
                main_button_done.textContent = "Done"
                main_body_edit_text.textContent = "Edit"
                main_body_Remove_text.textContent =  "Remove"
                Main_Edit_text.textContent= "This Has Been Edited"
                
                //
                main_button_done.id  = "main_button_done " + number_one + " " +  x.toString()
                main_body_edit_text.id = "main_body_edit_text" + number_one + " " +  x.toString()
                main_body_Remove_text.id = "main_body_Remove_text" + number_one + " " +  x.toString()
                Main_text.id = "Main_text"+ number_one + " " +  x.toString()
                Main_Edit_text.id = "This_Has_Been_Edit" + number_one + " " +  x.toString()
                //
                Main_list_body.appendChild(main_body_of_text)
                main_body_of_text.appendChild(Main_text)
                main_body_of_text.appendChild(Main_Edit_text)
                main_body_of_text.appendChild(main_button_done)
                main_body_of_text.appendChild(main_body_edit_text)
                main_body_of_text.appendChild(main_body_Remove_text)
                Main_Edit_text.style.visibility = "hidden"
                setTimeout(Edit_button , 200)
            }
            else if(x > 9)
            {
                x = 9
                console.log("there is more then 9, going back to  9 ..." );
            }
        }
        else 
        {
        }
        
    }
}
function getting_button()
{
var main_button = document.getElementById("Sub_button " + i.toString())
main_button.addEventListener("click", function test()
{
    hidden_something()
    
    switch(main_button.id)
    {
        case "Sub_button 1":
            vat = 1
            test_er()
            break;
        case "Sub_button 2":
            vat = 2
            test_er()
            break;
        case "Sub_button 3":
            vat = 3
            test_er()
            break
        case "Sub_button 4":
            vat = 4
            test_er()
            break;
        case "Sub_button 5":
            vat = 5
            test_er()
            break;
        case "Sub_button 6":
            vat = 6
            test_er()
            break
        case "Sub_button 7":
            vat = 7
            test_er()
            break;
        case "Sub_button 8":
            vat = 8
            test_er()
            break;
        case "Sub_button 9":
            vat = 9
            test_er()
            break
        case "Sub_button 10":
            vat = 10
            test_er()
            break
        }
})

}
function hidden_something()
{
    max = 0
    for(m = 0; m < i; m++)
    {
        max++
        var Main_list_body = document.getElementById("Main_list_body " + max.toString())
        Main_list_body.style.visibility= "hidden"
    }
     
}
function test_er()
{
    var Main_list_body = document.getElementById("Main_list_body " + vat.toString())
    Main_list_body.style.visibility = "visible"
}