<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../css/All_main_items.css">
    <link rel="stylesheet" href="../../../css/Small_website/Index.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/60adc08c28.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
<header>
    <h1>ErrorNotJoin.Tech</h1>
</header>
    <section class="Holding_the_aside_and_Main_items">
        <aside>
            <div>
                <a href="../../javascript.php"><i class="fa-solid fa-rotate-left fa-2xs"></i></i><p>Back</p></a>
            </div>
            <div>
                <a href=""><i class="fa-brands fa-js fa-2xs"></i><p>Javascripts</p></a>
            </div>
            <div>
                <a href="Python.php">
                <i class="fa-brands fa-python fa-2xs"></i><p>Python</p>
                </a>
            </div>
            <div>
            <a href="">  <i class="fa-solid fa-sign-hanging"></i> <p>Code</p></a>
            </div>
        </aside>
        <main class="hold">
            <section class="The_main_body">
                <header class="Show_the_password">
                    <input id="The_Password_txt_holder">
                </header>
                <div class="Items"><input id="The_range_value" min="1" value="50" max="200" type="range" checked><h2 id="range_txt">Leanth: </h2></div>
                <main class="Pick_here">
                    
                    <div><input id="Upper_Case_checkbox" type="checkbox" checked> <h2>Upere  Case</h2></div>
                    <div><input id="Lower_Case_checkbox" type="checkbox" checked> <h2>Lower  Case</h2></div>
                    <div><input id="numbers_checkbox" type="checkbox" checked> <h2>Number Case</h2></div>
                    <div><input id="Spicler_checkbox" type="checkbox" checked> <h2>Spicler Case</h2></div>
                  
                </main>
                <div class="soemthing"><button id="Reset_button">Restart</button> <button id="Start_Making_the_password">submit</button></div>
            </section>
        </main>
    </section>
    <script src="js/creating_the_password.js"></script>
</body>
</html>