class CarrouselEncuestasBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////

    static ActualIndexEncuesta_ = 0;

    constructor() {

        this.EncuestasArray_ = [];

        //variables used by effects
        this.Effect_Direction_ = true; //true go next, false go previouS

        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }


    //////////FUNCIONES////////////

    //Borra el titulo y las opciones de la encuesta
    Clean_encuesta(){

       var Pregunta = document.getElementById("DivContainerPreguntaId");

       Pregunta.innerHTML = '';

       var ulRadioButton = document.getElementById("ulRadio");

       ulRadioButton.innerHTML = '';


    }


    Show_encuesta(i){

        this.Clean_encuesta();

        this.Add_Question(this.EncuestasArray_[i].Question);

        for (var index = 0; index < this.EncuestasArray_[i].OptionsArray.length; index++) { ///

        this.Add_Option(this.EncuestasArray_[i].OptionsArray[index]);

        }

 
 
     }




     Charge_Encuesta(Question_, OptionsArray_ = []) {
        this.EncuestasArray_.push({Question: Question_, OptionsArray: OptionsArray_});
     }

    //Set Añade una nueva encuesta
    Set_Encuesta(){


    }


    Add_Question(Question) {

        var DivContainerPegunta = document.getElementById("DivContainerPreguntaId");

        var Pregunta = GALSAN_CreateBlock.CreateElement("p", "Pregunta_Encuestas", Question);
        DivContainerPegunta.appendChild(Pregunta);

        
    };


    Add_Option(Label) {

        var ulRadioButton = document.getElementById("ulRadio");

        var liRadioButton = GALSAN_CreateBlock.CreateElement("li", "liRadioButton_Encuestas");
        ulRadioButton.appendChild(liRadioButton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("input", "radiobutton_Encuestas", "radio");
        radiobutton.name = "ra";

        liRadioButton.appendChild(radiobutton);


        var radiobutton = GALSAN_CreateBlock.CreateElement("label", "labelRadioButton_Encuestas", Label);
        liRadioButton.appendChild(radiobutton);

        var bullet = GALSAN_CreateBlock.CreateElement("div", "bullet_Encuestas");

        liRadioButton.appendChild(bullet);
        
    };


    Run_Encuesta() {

        if (this.Is_First_Encuesta()) {
            this.Effect_Direction_ = true;
        }
    
        if (this.Is_Last_Encuesta()) {
            this.Effect_Direction_ = false;
        }
    
        if (this.Effect_Direction_) {
            this.Next_Encuesta();
        } else {
            this.Prev_Encuesta();
        }
    }


    Is_Last_Encuesta() {
        if (CarrouselEncuestasBlock.ActualIndexEncuesta_ == this.EncuestasArray_.length - 1) {
            return true;
        } else {
            return false;
        }
    };

    Is_First_Encuesta() {
        if (CarrouselEncuestasBlock.ActualIndexEncuesta_ == 0) {
            return true;
        } else {
            return false;
        }
    };

    Next_Encuesta() {
        this.Show_encuesta(++CarrouselEncuestasBlock.ActualIndexEncuesta_ % (this.EncuestasArray_.length));
    };

    Prev_Encuesta() {
        this.Show_encuesta(--CarrouselEncuestasBlock.ActualIndexEncuesta_);
    }

    //Return Actual Encuestan indicate by iterator
    Get_Actual_Encuesta() {
        return this.EncuestasArray_[CarrouselEncuestasBlock.ActualIndexEncuesta_];
    }



    //Create view of carrusel
    ViewConstructor() {



        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('.CarrouselEncuestas',
            `
        width          : 100%;
        display        : flex;
        justify-content: center;
        align-items    : center;
        height: auto;
        margin-top     : 7vw;
        margin-bottom  : 7vw;
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

        GALSAN_CreateBlock.add_CSS_Class('.marco_Encuestan_Encuestas',
            `
            max-width: 70%;
            width: auto;
            padding: 1vw;
            height: auto;
            background-color: #7DA4B8;
            border-radius: 10%;
            color: #D4D190;
            display: flex;
            border: 2px solid black;
            justify-content: center;
            align-items: center;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Right_Encuestas',
            `
            width: 6vw;
            position: absolute;
            right: 2vw;
            filter: drop-shadow(2px 4px 6px #5ABDEE);
          
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.DivContainer_Encuestas',
            `
            height: auto;
            width: auto;
            z-index: 3;
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.Pregunta_Encuestas',
            `
            padding: 4vw;
            font-size: 2vw;
            text-align: center;
            margin: 0;
           /*  -webkit-text-stroke: 1.5px #29556b; */
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
        font-size: 1.2rem;
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




        //Create element and associate a classes

        var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "CarrouselEncuestas", null, GALSAN_CreateBlock.Site_Column_Center);

        var FlechaIzquierda = GALSAN_CreateBlock.CreateElement("img", "Arrow_Left_Encuestas", "assets/img/icon/arrow1.png");
        ContenedorPrincipal.appendChild(FlechaIzquierda);



        var FlechaDerecha = GALSAN_CreateBlock.CreateElement("img", "Arrow_Right_Encuestas", "assets/img/icon/arrow1.png");
        ContenedorPrincipal.appendChild(FlechaDerecha);


        //Marco de la Encuestan
        var MarcoEncuestan = GALSAN_CreateBlock.CreateElement("div", "marco_Encuestan_Encuestas");
        ContenedorPrincipal.appendChild(MarcoEncuestan);

        var DivContainer = GALSAN_CreateBlock.CreateElement("div", "DivContainer_Encuestas");


        MarcoEncuestan.appendChild(DivContainer);

        var DivContainerPregunta = GALSAN_CreateBlock.CreateElement("div", "DivContainerPregunta");

        GALSAN_CreateBlock.AttachID(DivContainerPregunta, "DivContainerPreguntaId");

        DivContainer.appendChild(DivContainerPregunta);

/*         var Pregunta = GALSAN_CreateBlock.CreateElement("p", "Pregunta_Encuestas", "Hola holita eres un zapiño bonico");
        DivContainer.appendChild(Pregunta); */

        var DivContainerRadio = GALSAN_CreateBlock.CreateElement("div", "DivContainerRadio_Encuestas");
        DivContainer.appendChild(DivContainerRadio);


        var ulRadioButton = GALSAN_CreateBlock.CreateElement("ul", "ulRadioButton_Encuestas");
        GALSAN_CreateBlock.AttachID(ulRadioButton, "ulRadio");

        DivContainerRadio.appendChild(ulRadioButton);



/* 
        var liRadioButton = GALSAN_CreateBlock.CreateElement("li", "liRadioButton_Encuestas");
        ulRadioButton.appendChild(liRadioButton);

        var radiobutton = GALSAN_CreateBlock.CreateElement("input", "radiobutton_Encuestas", "radio");
        radiobutton.checked = true;
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
        liRadioButton.appendChild(bullet); */


    }
}

o_Carrousel_Encuestas = new CarrouselEncuestasBlock();

/* o_Carrousel.Add_Question("asfasssssssssssssssss");

o_Carrousel.Add_Option("eotutñ5");

o_Carrousel.Add_Option("eotutñ5");

o_Carrousel.Add_Option("eotutñ5");

o_Carrousel.Clean_encuesta(); */


o_Carrousel_Encuestas.Charge_Encuesta("asfasssssssssssssssss", ["fsdf", "4",  "6", "1"]);

o_Carrousel_Encuestas.Charge_Encuesta("asfassssss erete sssssssssss", ["fsdf", "4",  "6", "2"]);

o_Carrousel_Encuestas.Charge_Encuesta("asfasssssg dg dfg df ssssssssssss", ["fsdf", "4",  "6", "3", "g", "dfg"]);

o_Carrousel_Encuestas.Show_encuesta(0);

setInterval('o_Carrousel_Encuestas.Run_Encuesta()', 4000);

