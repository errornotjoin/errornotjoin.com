var The_Hours_Inputs = document.getElementById("The_Hours")
var The_Minuter_Inputs = document.getElementById("minutes")
var The_Seconds_Input = document.getElementById("Seconds")
var Start_button = document.getElementById("Start_button")
var Stop_button = document.getElementById("Stop_button")
var Restart_buttpn = document.getElementById("restart_button")
var Saved_Hours_input = 0
var Saved_Minuter_input = 0
var Saved_Seconds_input = 0 
var Empty_timer = ""
var saved_Value_been_saved = false
var Stop = false
Restart_buttpn.addEventListener("click", function Restarting_Items()
{
    
    The_Hours_Inputs.value = "00"
    The_Minuter_Inputs.value = "00"
    The_Seconds_Input.value = "00"
    The_Hours_Inputs.disabled = false
    The_Minuter_Inputs.disabled = false
    The_Seconds_Input.disabled = false
    clearTimeout(Empty_timer)
})
Stop_button.addEventListener("click", function Stoping_the_time()
{
    clearTimeout(Empty_timer)
})
Start_button.addEventListener("click", function Starting_the_timer()
{
    Saveing_Inputs_To_int()
    function Saveing_Inputs_To_int()
    {
        Saved_Hours_input = The_Hours_Inputs.value
        Saved_Minuter_input= The_Minuter_Inputs.value
        Saved_Seconds_input= The_Seconds_Input.value
        The_Hours_Inputs.disabled = "true"
        The_Minuter_Inputs.disabled = "true"
        The_Seconds_Input.disabled = "true"
    }
    Taking_away_time()
    function Taking_away_time()
    {
        if(Saved_Seconds_input <= 0  )
        {
            
            if(Saved_Minuter_input >= 1 )
            {
                Saved_Seconds_input = 59
                Saved_Minuter_input--
                DRY_THING()
            }
            else if(Saved_Minuter_input == 0 && Saved_Hours_input > 0)
            {
                Saved_Minuter_input = 59
                Saved_Hours_input--
                Saved_Seconds_input = 59
                DRY_THING()
            }
            else
            {
                DRY_THING()
                clearTimeout(Empty_timer)
            }

        }
        else
        {
            Saved_Seconds_input--
            DRY_THING()
        }
    }
    function DRY_THING()
    {
        Empty_timer = setTimeout(Taking_away_time, 1000)
        
        The_Hours_Inputs.value = Saved_Hours_input
        The_Minuter_Inputs.value = Saved_Minuter_input
        The_Seconds_Input.value =  Saved_Seconds_input
    }
})
