var youtube_cookies = document.getElementById("Youtube_cookies")
var Yes_to_youtube_cookies = document.getElementById("Yes_button")
var No_to_youtube_cookies = document.getElementById("No_button")
var First_Youtube_video = document.getElementById("Videos")
No_to_youtube_cookies.addEventListener("click", function kill_all()
{
    youtube_cookies.remove();
    First_Youtube_video.remove();
})
Yes_to_youtube_cookies.addEventListener("click", function Let_them_here()
{
    First_Youtube_video.style.display = "inline"
    youtube_cookies.remove();
})
function seeing_the_videos(The_number)
{
    
    switch(The_number)
    {
        case "Only_Doom_Video":
            console.log("Only_Doom_Video");
            The_video("Doom_vide")
        break;
        
        case "Only_Disgoroner_Video":
            The_video("Disorner_vide")
            console.log("Only_Disgoroner_Video");
        break;

        case "battlefield_bad_compay_2_Videos":
            The_video("batt_vide")
            console.log("battlefield_bad_compay_2_Videos");
        break
    }
    function The_video(Video_name)
    {
        for(var x = 0; x <= 29; x++)
        {
            var Video_id = document.getElementById("batt_vide")
            var Video_id_1 = document.getElementById("Disorner_vide")
            var Video_id_2 = document.getElementById("Doom_vide")
            if(Video_name == Video_id.id )
            {
                Video_id.style.display = "inline"
                Video_id_1.style.display = "none"
                Video_id_2.style.display = "none"
            }
            else if(Video_name == Video_id_1.id)
            {
                Video_id.style.display = "none"
                Video_id_1.style.display = "inline"
                Video_id_2.style.display = "none"
            }
            else if(Video_name == Video_id_2.id)
            {
                Video_id.style.display = "none"
                Video_id_1.style.display = "none"
                Video_id_2.style.display = "inline"
            }
            else
            {
                Video_id.style.display = "inline"
                Video_id_1.style.display = "inline"
                Video_id_2.style.display = "inline"
            }
            
        }

    }
}