var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"]
var Up_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Spicler_letters = ["@", ",", ".", "!","£","$","%","^","&","*","(",")", "/","?"]
var Number_Items = ["1","2","3","4","5","6","7","8","9"]
var Making_The_Passoword = document.getElementById("Making_The_Passoword")
var Add_Numbers = document.getElementById("Add_Numbers")
var Specaial_Characters = document.getElementById("Specaial_Characters")
var Capital_Letters = document.getElementById("Capital_Letters")

var Main_PAssworld_Input = document.getElementById("Main_PAssworld_Input")
var Saveing_the_numbers = []
var Saveing_The_Capital_Letters = [ ]
//
var Done_Up_Letters = false
var Done_Spicler_Letters = false
var Done_Number_ITems = false
var Done_Litters = true

//
var Rest_The_Inputs = document.getElementById("Rest_The_Inputs")
Rest_The_Inputs.addEventListener("click", function Rest_The_Inputss()
{
    var How_Long = document.getElementById("How_Long")
    Add_Numbers.checked = true
    Specaial_Characters.checked = true
    Capital_Letters.checked = true
    How_Long.value = ""
    How_Long.placeholder = "How Long is your password "
})
var Clear_The_password = document.getElementById("Clear_The_password")
Clear_The_password.addEventListener("click", function Clear_Password()
{
    Main_PAssworld_Input.value = ""
    Main_PAssworld_Input.placeholder = "Your Password Will Go Here "
})
Making_The_Passoword.addEventListener("click", function The_Thing()
{
    var How_Long = document.getElementById("How_Long")
    Saveing_the_numbers = []
    var y =  0 
    Main_PAssworld_Input.value = ""
    Main_PAssworld_Input.max = How_Long.value
    for(var x = 0; x < Main_PAssworld_Input.max; x++)
    {
        The_Things(y)
        
        

        Main_PAssworld_Input.value += Saveing_the_numbers[x]
    }
   
})




function The_Things(y)
{
    if(y < How_Long.value)
    {
        var random = Math.round(Math.random() * 4)
        if(random == 0 )
        {
            random++
            thing(y, random)
        }
        else
        {
            thing(y, random)
        }
      
    }
    
}

function thing(y, random)
{
    switch(random)
    {
        case 1:
            MAking_it_more_Random_One(y)
           // console.log(random);
        break
        case 2:
            MAking_it_more_Random_two(y)
            //console.log(random);
        break
        case 3:
            MAking_it_more_Random_three(y)
           // console.log(random);
        break
        case 4:
            MAking_it_more_Random_thour(y)
         //   console.log(random);
        break
    }
}


function MAking_it_more_Random_One(y)
{
    if(Done_Litters == true)
    {
            var max = Math.round(Math.random() * letters.length  -1 )
            if(max < 0 )
            {
                max++ 
                Saveing_the_numbers.push(letters[max]);
                The_Things()
            }
            else
            {
                Saveing_the_numbers.push(letters[max]);
                The_Things()
            }
            y++
    }
}
        function MAking_it_more_Random_two(y)
        {
            switch(Add_Numbers.checked )
            {
                case true:
                    var max = Math.round(Math.random() * Number_Items.length  -1 )
                        if(max < 0 )
                        {
                            max++ 
                            
                            Saveing_the_numbers.push(Number_Items[max]);
                            The_Things()
                        }
                        else
                        {
                            Saveing_the_numbers.push(Number_Items[max]);
                            The_Things()
                        }
                        y++
                    break;
                    case false:
                        The_Things(y)
                        break;
    

            }
        }
        function MAking_it_more_Random_three(y)
        {
            //console.log("Wjat");
            switch(Specaial_Characters.checked)
            {
                case true:
                  //  console.log("what");
                    var max = Math.round(Math.random() * Spicler_letters.length  - 1 )
                        if(max < 0 )
                        {
                            max++ 
                            Saveing_the_numbers.push(Spicler_letters[max]);
                            console.log(Saveing_the_numbers[max]);
                            The_Things()
                        }
                        else
                        {
                            Saveing_the_numbers.push(Spicler_letters[max]);
                            console.log(Spicler_letters[max]);
                            The_Things()
                        }
                        y++
                    break;
                case false:
                    The_Things(y)
                    break;

            }
        }
        function MAking_it_more_Random_thour(y)
        {
            switch(Capital_Letters.checked)
            {
                case true:
                    var max = Math.round(Math.random() *Up_letters.length  -1 )
                    if(max < 0 )
                    {
                        max++ 
                        Saveing_the_numbers.push(Up_letters[max]);
                        console.log(Up_letters[max]);
                        The_Things()
                    }
                    else
                    {
                        Saveing_the_numbers.push(Up_letters[max]);
                        console.log(Up_letters[max]);
                        The_Things()
                    }
                    y++
                    break;
                case false:
                    The_Things(y)
                    break;


            }     
        }






