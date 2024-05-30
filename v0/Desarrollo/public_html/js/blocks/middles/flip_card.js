        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('.CarrouselEncuestas',
            `
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 46vh;
            margin-top: 7vw;
            margin-bottom: 7vw;
            position: relative;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Left_Encuestas',
            `
            position: absolute;
            width: 6vw;
            left: 2vw;
            filter: drop-shadow(2px 4px 6px #5ABDEE);
            transform: rotate(180deg);
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.marco_imagen_Encuestas_inner',
            `
            max-width: 70%;
            /* padding: 1vw; */
            /* background-color: #7DA4B8; */
            /* border-radius: 10%; */
            color: #D4D190;
            display: flex;
            /* border: 2px solid black; */
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            min-height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    
    `
        );

/*         GALSAN_CreateBlock.add_CSS_Class('.CarrouselEncuestas:hover .marco_imagen_Encuestas_inner',
        `
        transform: rotateY(180deg);
`
    );
 */


        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Right_Encuestas',
            `
            width: 6vw;
            position: absolute;
            right: 2vw;
            filter: drop-shadow(2px 4px 6px #5ABDEE);
          
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.DivContainer_Encuestas_front',
            `
            height: auto;
            width: 100%;
            z-index: 3;
            padding: 3vw 0;
            border: 2px solid black;
            background-color: #7DA4B8;
            border-radius: 10%;
            position: absolute;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;

    `
        );


        
        GALSAN_CreateBlock.add_CSS_Class('.Pregunta_Encuestas',
            `
            padding: 4vw;
            font-size: 2vw;
            text-align: center;
            margin: 0;
            -webkit-text-stroke: 1.5px #29556b;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.ulRadioButton_Encuestas',
        `
        display: flex;
        list-style-type: none;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;

        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.liRadioButton_Encuestas',
        `
        display: inline-flex;
        position: relative;
        padding: 10px;
        width: fit-content;
        padding-left: 40px;
        height: 30px;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('.labelRadioButton_Encuestas',
        `
        color: white;
        font-size: 2vw;
        font-weight: bold;
        -webkit-text-stroke: 1px #29556b;
    
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('.labelRadioButton_Encuestas:before',
        `
        content: "";
        width: 15px;
        height: 15px;
        background: #d4d190;
        position: absolute;
        left: 7px;
        top: calc(50% - 13px);
        box-sizing: border-box;
        border-radius: 50%;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('.radiobutton_Encuestas',
        `
        opacity: 0;
        -webkit-appearance: none;
        display: inline-block;
        vertical-align: middle;
        z-index: 100;
        padding: 0;
        width: 100%;
        height: 30px;
        position: absolute;
        left: 0;
        top: calc(50% - 15px);
        cursor: pointer;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.bullet_Encuestas',
        `
        position: relative;
        width: 25px;
        height: 25px;
        left: -3px;
        top: 2px;
        border: 5px solid #29556b;
        opacity: 0;
        border-radius: 50%;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('.DivContainerRadio_Encuestas',
        `
        margin: 0 auto;
        display: flex;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.radiobutton_Encuestas:checked ~ .bullet_Encuestas',
        `
        position:absolute;
        opacity: 1;
        animation-name: explode;
        animation-duration: 0.350s;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('@keyframes explode',
        `
        0%{
            opacity: 0;
            transform: scale(10);
        }
        60%{
            opacity: 1;
            transform: scale(0.5);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('@-webkit-keyframes explode',
        `
        0%{
            opacity: 0;
            transform: scale(10);
        }
        60%{
            opacity: 1;
            transform: scale(0.5);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
        `
        );








        GALSAN_CreateBlock.add_CSS_Class('.chart_back',
        `
    position: absolute;
    width: auto;
    padding: 3vw 0;
    background-color: #7DA4B8;
    border-radius: 10%;
    border: 2px solid black;
    display: flex;
    height: auto;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: white;
    transform: rotateY(180deg);
    flex-direction: column;
        `
        );


        
        
        
        
        GALSAN_CreateBlock.add_CSS_Class('.dtchart',
        `
        font-size: 1.3rem;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.ddchart',
        `
        width: 100%;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('.divchart',
        `
        display: flex;
        margin: 10px;
        width: 100%;
        align-items: center;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.bar',
        `

    height: auto;
    min-height: 1.5rem;
    color: #fff;
    /* padding: 4px; */
    text-align: center;
    background: rgb(205 202 151);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 13px;
    border: solid #29556b;
    -webkit-animation-name: bar;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-out;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('@-webkit-keyframes bar',
        `
         {
            0% { width:0%; }
            100% { width:60%; }
            }
        `
        );



        GALSAN_CreateBlock.add_CSS_Class('@keyframes draw',
        `
        0%{height:0;}
        `
        );





        //Create element and associate a classes
       
        ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "CarrouselEncuestas", null, GALSAN_CreateBlock.Site_Column_Center);

        var FlechaIzquierda = GALSAN_CreateBlock.CreateElement("img", "Arrow_Left_Encuestas", "assets/img/icon/arrow1.png");
        ContenedorPrincipal.appendChild(FlechaIzquierda);
    
 

        var FlechaDerecha = GALSAN_CreateBlock.CreateElement("img", "Arrow_Right_Encuestas", "assets/img/icon/arrow1.png");
        ContenedorPrincipal.appendChild(FlechaDerecha);
    

        //inner
        var MarcoImagen = GALSAN_CreateBlock.CreateElement("div", "marco_imagen_Encuestas_inner");
        GALSAN_CreateBlock.AttachID(MarcoImagen, "Encuestas_inner");
        ContenedorPrincipal.appendChild(MarcoImagen);






///front
        var DivContainer = GALSAN_CreateBlock.CreateElement("div", "DivContainer_Encuestas_front");
        MarcoImagen.appendChild(DivContainer);

        Pregunta = GALSAN_CreateBlock.CreateElement("p", "Pregunta_Encuestas", "Hola holita eres un zapiño bonico");
        DivContainer.appendChild(Pregunta);

        var DivContainerRadio = GALSAN_CreateBlock.CreateElement("div", "DivContainerRadio_Encuestas");
        DivContainer.appendChild(DivContainerRadio);


        var ulRadioButton = GALSAN_CreateBlock.CreateElement("ul", "ulRadioButton_Encuestas");
        DivContainerRadio.appendChild(ulRadioButton);




        var liRadioButton = GALSAN_CreateBlock.CreateElement("li", "liRadioButton_Encuestas");
        ulRadioButton.appendChild(liRadioButton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("input", "radiobutton_Encuestas", "radio");
      /*   radiobutton.checked = true; */
        radiobutton.name = "ra";

        liRadioButton.appendChild(radiobutton);


        var radiobutton = GALSAN_CreateBlock.CreateElement("label", "labelRadioButton_Encuestas", "si es muy bonico");
        liRadioButton.appendChild(radiobutton);

        var bullet = GALSAN_CreateBlock.CreateElement("div", "bullet_Encuestas");



        liRadioButton.appendChild(bullet);

        var liRadioButton = GALSAN_CreateBlock.CreateElement("li", "liRadioButton_Encuestas");
        ulRadioButton.appendChild(liRadioButton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("input", "radiobutton_Encuestas", "radio");
        radiobutton.name = "ra";
        liRadioButton.appendChild(radiobutton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("label", "labelRadioButton_Encuestas", "tiene pinta de gallina");
        liRadioButton.appendChild(radiobutton);

        var bullet = GALSAN_CreateBlock.CreateElement("div", "bullet_Encuestas");
        liRadioButton.appendChild(bullet);





        var liRadioButton = GALSAN_CreateBlock.CreateElement("li", "liRadioButton_Encuestas");
        ulRadioButton.appendChild(liRadioButton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("input", "radiobutton_Encuestas", "radio");
        radiobutton.name = "ra";
        liRadioButton.appendChild(radiobutton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("label", "labelRadioButton_Encuestas", "es hembraaaa");
        liRadioButton.appendChild(radiobutton);

        var bullet = GALSAN_CreateBlock.CreateElement("div", "bullet_Encuestas");
        liRadioButton.appendChild(bullet);







        /////back


        var dlchart = GALSAN_CreateBlock.CreateElement("dl", "chart_back");
dlchart.style= "width: 100%";
MarcoImagen.appendChild(dlchart);

var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
dlchart.appendChild(divchart);



var dtchart = GALSAN_CreateBlock.CreateElement("dt", "dtchart", "prr");
divchart.appendChild(dtchart);


var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
divchart.appendChild(ddchart);


var bar = GALSAN_CreateBlock.CreateElement("div", "bar");
bar.style = "width:55%";
ddchart.appendChild(bar);




var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
dlchart.appendChild(divchart);



var dtchart = GALSAN_CreateBlock.CreateElement("dt", "dtchart", "prr");
divchart.appendChild(dtchart);


var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
divchart.appendChild(ddchart);


var bar = GALSAN_CreateBlock.CreateElement("div", "bar");
bar.style = "width:15%";
GALSAN_CreateBlock.AttachID(bar, "data-two");
ddchart.appendChild(bar);





var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
dlchart.appendChild(divchart);



var dtchart = GALSAN_CreateBlock.CreateElement("dt", "dtchart", "prr");
divchart.appendChild(dtchart);


var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
divchart.appendChild(ddchart);


var bar = GALSAN_CreateBlock.CreateElement("div", "bar");
bar.style = "width:5%";

GALSAN_CreateBlock.AttachID(bar, "data-three");
ddchart.appendChild(bar);


$('input[type=radio][name=ra]').change(function () { 

document.getElementById("Encuestas_inner").style.transform = "rotateY(180deg)";

})