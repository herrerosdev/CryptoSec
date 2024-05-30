class CarrouselEncuestasFlipBlock {
  ////////////////
  //CONSTRUCTOR///
  ////////////////

  static ActualIndexEncuesta_ = 0;

  constructor() {
    this.EncuestasArray_ = [];
    this.EncuestasUser_ = [];

    //variables used by effects
    this.Effect_Direction_ = true; //true go next, false go previouS

    //Create View: Dynamic HTMLL CSS: Node
    this.ViewConstructor();
  }

  //////////FUNCIONES////////////

  //function Start_Carrousel

  Start_Carrousel(Encuestas) {
    //Recibe Encuesta la parsea
    var parsed_Encuesta = JSON.parse(Encuestas.responseText);

    //Comprueba si hay alguna encuesta en el array
    if (parsed_Encuesta.length == 0) {
      //No hay
      this.AnyEncuestas();
    } else {
      //si hay, carga las encuestas y los votos del usuario

      for (var index = 0; index < parsed_Encuesta.length; index++) {
        ///

        this.Charge_Encuesta(parsed_Encuesta[index]);
      }

      this.Charge_Votes_Of_User();
    }
  }

  //No hay encuestas, se esconde el bloque CarrouselEncuestas
  AnyEncuestas() {
    document.getElementById("CarrouselEncuestasID").style.display = "none";
  }

  //Se cargan las encuestas una a una en el array de clase EncuestasArray_
  Charge_Encuesta(ArrayEncuestas) {
    this.EncuestasArray_.push(ArrayEncuestas);
  }

  //Devuelve las encuestas del usuario
  Charge_Votes_Of_User() {
    var form_data = new FormData();

    form_data.append("OPERATION", "Start_VotesUser_OPERATION");

    var response = CPetition.$Ajax_PETITION(
      "./API/Carrousel_Encuestas_Flip.php",
      form_data
    );

    var parsed_Encuesta = JSON.parse(response.responseText);

    for (var index = 0; index < parsed_Encuesta.length; index++) {
      ///

      //Se cargan las encuestas una a una en el array de clase EncuestasUser_

      this.EncuestasUser_.push(parsed_Encuesta[index].IdEncuesta);
    }
  }

  //muestra la encuesta con posicion i
  Show_encuesta(i) {
    ///Si no hay ninguna encuesta en el array de clase previamente cargado escondemos el bloque
    if (this.EncuestasArray_.length == 0) {
      this.AnyEncuestas();
    } else {
      var IsUserVote = false; //true: si el usuario ya ha votado en esta encuesta, false si no

      //recorremos las encuestas del usuario
      for (var index = 0; index < this.EncuestasUser_.length; index++) {
        //Si Coincide el id de las encuestas del usuario con el array de encuestas el usuario ha votado la encuesta ya

        if (this.EncuestasArray_[i].ID == this.EncuestasUser_[index]) {
          IsUserVote = true;

          //Calculamos los porcentajes de cada opcion
          this.Calculate_Percentage(this.EncuestasArray_[i]);

          //se rotan

          this.Rotate_Encuesta();

          //show bars en for con porcentajes que se van calculando
          this.Show_Bars(this.EncuestasArray_[i]);

          //salimos del bucle para que busque la siguiente EncuestasUser_ si la hubiera
          break;
        }
      }

      //si falso, no ha votado anteriormente
      if (!IsUserVote) {
        this.Clean_encuesta();

        //Muestra la encuesta y las opciones por cada encuesta
        this.Show_Question(this.EncuestasArray_[i].Pregunta);

        for (
          var index = 0;
          index < this.EncuestasArray_[i].opciones.length;
          index++
        ) {
          ///

          this.Show_Option(
            this.EncuestasArray_[i].opciones[index].Text_Opciones,
            this.EncuestasArray_[i].opciones[index].Id_Encuesta,
            this.EncuestasArray_[i].opciones[index].ID
          );
        }
      }

      //Comprueba las flechas laterales necesarias
      this.ComprobArrows();
    }
  }

  //Borra el titulo y las opciones de la encuesta
  Clean_encuesta() {
    var Pregunta = document.getElementById("DivContainerPreguntaId");

    Pregunta.innerHTML = "";

    var ulRadioButton = document.getElementById("ulRadio");

    ulRadioButton.innerHTML = "";
  }

  //Borra las barras con porcentajes
  Clean_Bars() {
    var Bars = document.getElementById("dlchartID");

    Bars.innerHTML = "";
  }

  ComprobArrows() {
    this.Show_Arrows();
    this.Is_First_Image();
    this.Is_Last_Image();
  }

  Show_Question(Question) {
    var DivContainerPegunta = document.getElementById("DivContainerPreguntaId");

    var Pregunta = GALSAN_CreateBlock.CreateElement(
      "p",
      "Pregunta_Encuestas",
      Question
    );
    DivContainerPegunta.appendChild(Pregunta);
  }

  Show_Option(Label, Id_Encuesta, Id_option) {
    var ulRadioButton = document.getElementById("ulRadio");

    var liRadioButton = GALSAN_CreateBlock.CreateElement(
      "li",
      "liRadioButton_Encuestas"
    );
    ulRadioButton.appendChild(liRadioButton);

    var radiobutton = GALSAN_CreateBlock.CreateElement(
      "input",
      "radiobutton_Encuestas",
      "radio"
    );
    radiobutton.name = Id_Encuesta;

    GALSAN_CreateBlock.Attach_Attribute_onClick(
      radiobutton,
      "PageManager.o_Carrousel_Encuestas_Flip.Vote_Up(" + Id_option + ")"
    );

    liRadioButton.appendChild(radiobutton);

    var bullet = GALSAN_CreateBlock.CreateElement("div", "bullet_Encuestas");

    liRadioButton.appendChild(bullet);

    var Div_bullet = GALSAN_CreateBlock.CreateElement("div", "Div_bullet");

    liRadioButton.appendChild(Div_bullet);

    var bullet = GALSAN_CreateBlock.CreateElement("div", "bullet_Visible");

    Div_bullet.appendChild(bullet);

    var radiobutton = GALSAN_CreateBlock.CreateElement(
      "label",
      "labelRadioButton_Encuestas",
      Label
    );
    liRadioButton.appendChild(radiobutton);
  }

  Show_Bars(Encuesta) {
    this.Clean_Bars();
    var dlchart = document.getElementById("dlchartID");

    var divchart = GALSAN_CreateBlock.CreateElement(
      "p",
      "Pregunta_Encuestas",
      Encuesta["Pregunta"]
    );
    dlchart.appendChild(divchart);

    for (var index = 0; index < Encuesta.opciones.length; index++) {
      var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
      dlchart.appendChild(divchart);

      var dtchart = GALSAN_CreateBlock.CreateElement(
        "dt",
        "dtchart",
        Encuesta.opciones[index].Text_Opciones
      );
      divchart.appendChild(dtchart);

      var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
      divchart.appendChild(ddchart);

      var bar = GALSAN_CreateBlock.CreateElement(
        "div",
        "bar",
        Math.round(Encuesta.opciones[index].Percentage) + "%"
      );
      bar.style = "width:" + Encuesta.opciones[index].Percentage + "%";
      ddchart.appendChild(bar);
    }
  }

  //funcion al pinchar en una opcion
  Vote_Up(id) {
    //solo si esta logeado
    if (Session_UserName != PageManager.UserNotLogged) {
      //get encuesta actual
      var Encuesta = this.Get_Actual_Encuesta();
      //en arrray op buscar for if para id igual al mandado

      for (var index = 0; index < Encuesta.opciones.length; index++) {
        ///

        if (Encuesta.opciones[index].ID == id) {
          //se suma uno ++
          //sumar a total tamb
          Encuesta.opciones[index].Num_Votos++;
          Encuesta.Total_Votos++;
        }
      }

      //se calculan porcentajes
      this.Calculate_Percentage(Encuesta);

      //se rota

      this.Rotate_Encuesta();

      //show bars en for con porcentajes que se van calculando
      this.Show_Bars(Encuesta);

      //ajax petition update votes
      this.Vote_Ajax(Encuesta, id);
    } else {
      //information no logeado
      OverlayInformationBlock.OpenMessage();
    }
  }

  Vote_Ajax(Encuesta, id) {
    var form_data = new FormData();

    form_data.append("OPERATION", "Update_Votes_OPERATION");
    form_data.append("Encuesta", JSON.stringify(Encuesta));
    form_data.append("idOp", id);

    var response = CPetition.$Ajax_PETITION(
      "./API/Carrousel_Encuestas_Flip.php",
      form_data
    );
    var parsed_Encuesta = JSON.parse(response.responseText);

    this.EncuestasUser_ = [];

    for (var index = 0; index < parsed_Encuesta.length; index++) {
      ///

      this.EncuestasUser_.push(parsed_Encuesta[index]);
    }
  }

  Calculate_Percentage(Encuesta) {
    for (var index = 0; index < Encuesta.opciones.length; index++) {
      ///

      var percentage =
        (Encuesta.opciones[index].Num_Votos / Encuesta.Total_Votos) * 100;

      Encuesta.opciones[index].Percentage = percentage;
    }
  }

  Rotate_Encuesta() {
    document.getElementById("Encuestas_inner").style.transform =
      "rotateY(180deg)";
  }

  Rotate_EncuestaInverse() {
    document.getElementById("Encuestas_inner").style.transform =
      "rotateY(0deg)";
  }

  Is_Last_Image() {
    if (
      CarrouselEncuestasFlipBlock.ActualIndexEncuesta_ ==
      this.EncuestasArray_.length - 1
    ) {
      document.getElementById("Flecha_right").style.display = "none";
    }
  }

  Is_First_Image() {
    if (CarrouselEncuestasFlipBlock.ActualIndexEncuesta_ == 0) {
      document.getElementById("Flecha_left").style.display = "none";
    }
  }

  Show_Arrows() {
    document.getElementById("Flecha_right").style.display = "block";
    document.getElementById("Flecha_left").style.display = "block";
  }

  Next_Encuesta() {
    this.Show_Arrows();
    this.Rotate_EncuestaInverse();
    this.Show_encuesta(
      ++CarrouselEncuestasFlipBlock.ActualIndexEncuesta_ %
        this.EncuestasArray_.length
    );
    this.Is_Last_Image();
  }

  Prev_Encuesta() {
    this.Show_Arrows();
    this.Rotate_EncuestaInverse();
    this.Show_encuesta(--CarrouselEncuestasFlipBlock.ActualIndexEncuesta_);
    this.Is_First_Image();
  }

  //Return Actual Encuestan indicate by iterator
  Get_Actual_Encuesta() {
    return this.EncuestasArray_[
      CarrouselEncuestasFlipBlock.ActualIndexEncuesta_
    ];
  }

  //Create view of carrusel
  ViewConstructor() {

    
    GALSAN_CreateBlock.add_CSS_Class(
        ".CarrouselEncuestas",
        `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  margin-top: 7vw;
  margin-bottom: 7vw;
  position: relative;
  
  `
      );

    GALSAN_CreateBlock.add_CSS_Class(
      ".Arrow_Left_Encuestas",
      `
    position: absolute;
    width: 6vw;
    display: none;
    z-index: 2;
    left: 2vw;
    filter: drop-shadow(2px 4px 6px #5ABDEE);
    transform: rotate(180deg);
    `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".marco_imagen_Encuestas_inner",
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

    GALSAN_CreateBlock.add_CSS_Class(
      ".Arrow_Right_Encuestas",
      `
            width: 6vw;
            position: absolute;
            right: 2vw;
            z-index: 2;
            filter: drop-shadow(2px 4px 6px #5ABDEE);
          
    `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".DivContainer_Encuestas_front",
      `
            height: auto;
            width: 100%;
            z-index: 3;
            padding-bottom: 3vw;
            border: 2px solid black;
            background-color: #7DA4B8;
            border-radius: 10%;
            position: absolute;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;

    `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".Pregunta_Encuestas",
      `
            padding: 4vw 4vw;
            font-size: 2vw;
            text-align: center;
            margin: 0;
          /*   -webkit-text-stroke: 1.5px #29556b; */
    `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".ulRadioButton_Encuestas",
      `
            display: flex;
            list-style-type: none;
            justify-content: center;
            padding: 0;
            margin: 0 auto;
            flex-direction: column;

        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".liRadioButton_Encuestas",
      `
            display: flex;
            position: relative;
            padding: 10px 0px 10px 10px;
            width: 100%;
            height: auto;
            align-items: center;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".labelRadioButton_Encuestas",
      `
            color: white;
            font-size: 2vw;
            text-align: justify;
            font-weight: bold;
            -webkit-text-stroke: 1px #29556b;
    
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".radiobutton_Encuestas",
      `
            opacity: 0;
            -webkit-appearance: none;
            /* display: inline-block; */
            /* vertical-align: middle; */
            z-index: 100;
            padding: 0;
            width: 15%;
            height: 40%;
            position: absolute;
            left: 0;
            cursor: pointer;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".bullet_Encuestas",
      `
            position: absolute;
            width: 25px;
            height: 25px;
            left: 0px;
            /* top: 0px; */
            border: 5px solid #29556b;
            opacity: 0;
            border-radius: 50%;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".DivContainerRadio_Encuestas",
      `
        margin: 0 auto;
        display: flex;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".radiobutton_Encuestas:checked ~ .bullet_Encuestas",
      `
        position:absolute;
        opacity: 1;
        animation-name: explode;
        animation-duration: 0.350s;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      "@keyframes explode",
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

    GALSAN_CreateBlock.add_CSS_Class(
      "@-webkit-keyframes explode",
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

    GALSAN_CreateBlock.add_CSS_Class(
        ".bullet_Visible",
        `
      content: "";
      width: 15px;
      height: 15px;
      position: relative;
      background: #d4d190;
      margin-right: 2vw;
      /* top: calc(50% - 13px); */
      /* box-sizing: border-box; */
      border-radius: 50%;
  `
      );
      
    GALSAN_CreateBlock.add_CSS_Class(
      ".chart_back",
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

    GALSAN_CreateBlock.add_CSS_Class(
      ".dtchart",
      `
        font-size: 1.3rem;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".ddchart",
      `
            width: 80%;
            align-items: center;
            display: flex;
            margin: 0 auto;
            width: 80%;
            /* margin: 15px 0px 20px 15px; */
            justify-content: center;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".divchart",
      `
        display: flex;
        flex-direction: column;
        margin: 10px 0px 10px 5px;
        width: 100%;
        align-items: center;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".bar",
      `

            height: auto;
            min-height: 1.5rem;
            color: #fff;
            display: flex;
            /* padding: 4px; */
            text-align: center;
            justify-content: center;
            background: rgb(205 202 151);
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 13px;
            border: solid #29556b;
            -webkit-animation-name: bar;
            -webkit-animation-duration: 0.5s;
            -webkit-animation-iteration-count: 1;
            -webkit-animation-timing-function: ease-out;
            align-items: center;
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      "@-webkit-keyframes bar",
      `
         {
            0% { width:0%; }
            100% { width:60%; }
            }
        `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      "@keyframes draw",
      `
        0%{height:0;}
        `
    );

    ///////////////////middle screen


    GALSAN_CreateBlock.add_CSS_Class(
      ".CarrouselEncuestas",
      `
min-height: 80vh;

`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".marco_imagen_Encuestas_inner",
      `
max-width: 97%;

`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".DivContainer_Encuestas_front",
      `
padding-bottom: 7vh;


`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".Pregunta_Encuestas",
      `
padding: 13vw 4vw;
font-size: 6vw;

`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".ulRadioButton_Encuestas",
      `
/* width: 80%; */
/*         padding-inline-start: 40px;

padding-inline-end: 30px; */

`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".liRadioButton_Encuestas",
      `
width: 80%;
margin: 0 auto;
`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".labelRadioButton_Encuestas",
      `
font-size: 4vw;
height: auto;
font-weight: unset;
-webkit-text-stroke: unset;

`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".bullet_Visible",
      `
margin-right: 5vw;
`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".divchart",
      `
width: 86%;
margin: 10px 0;
padding: 0px 7% 0px 7%;
`,
      GALSAN_CreateBlock.Screen_Middle
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".dtchart",
      `
padding: 3vw 0vw;
`,
      GALSAN_CreateBlock.Screen_Middle
    );

    ////////////////////////mobile css


    GALSAN_CreateBlock.add_CSS_Class(
      ".CarrouselEncuestas",
      `
        min-height: 80vh;

`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".marco_imagen_Encuestas_inner",
      `
max-width: 97%;

`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".DivContainer_Encuestas_front",
      `
padding-bottom: 7vh;


`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".Pregunta_Encuestas",
      `
padding: 13vw 4vw;
font-size: 6vw;

`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".ulRadioButton_Encuestas",
      `
/* width: 80%; */
/*         padding-inline-start: 40px;

padding-inline-end: 30px; */

`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".liRadioButton_Encuestas",
      `
width: 80%;
margin: 0 auto;
`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".labelRadioButton_Encuestas",
      `
font-size: 4vw;
height: auto;
font-weight: unset;
-webkit-text-stroke: unset;

`,
      GALSAN_CreateBlock.Screen_Mobile
    );



    GALSAN_CreateBlock.add_CSS_Class(
      ".bullet_Visible",
      `
margin-right: 5vw;
`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".divchart",
      `
width: 86%;
margin: 10px 0;
padding: 0px 7% 0px 7%;
`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".dtchart",
      `
        padding: 3vw 0vw;
    `,
      GALSAN_CreateBlock.Screen_Mobile
    );

    //Create element and associate a classes

    var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement(
      "div",
      "CarrouselEncuestas",
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );
    GALSAN_CreateBlock.AttachID(ContenedorPrincipal, "CarrouselEncuestasID");

    var FlechaIzquierda = GALSAN_CreateBlock.CreateElement(
      "img",
      "Arrow_Left_Encuestas",
      "assets/img/icon/arrow1.png"
    );
    GALSAN_CreateBlock.AttachID(FlechaIzquierda, "Flecha_left");
    GALSAN_CreateBlock.Attach_Attribute_onClick(
      FlechaIzquierda,
      "PageManager.o_Carrousel_Encuestas_Flip.Prev_Encuesta()"
    );
    ContenedorPrincipal.appendChild(FlechaIzquierda);

    var FlechaDerecha = GALSAN_CreateBlock.CreateElement(
      "img",
      "Arrow_Right_Encuestas",
      "assets/img/icon/arrow1.png"
    );
    GALSAN_CreateBlock.AttachID(FlechaDerecha, "Flecha_right");
    GALSAN_CreateBlock.Attach_Attribute_onClick(
      FlechaDerecha,
      "PageManager.o_Carrousel_Encuestas_Flip.Next_Encuesta()"
    );
    ContenedorPrincipal.appendChild(FlechaDerecha);

    //inner
    var MarcoImagen = GALSAN_CreateBlock.CreateElement(
      "div",
      "marco_imagen_Encuestas_inner"
    );
    GALSAN_CreateBlock.AttachID(MarcoImagen, "Encuestas_inner");
    ContenedorPrincipal.appendChild(MarcoImagen);

    ///front
    var DivContainer = GALSAN_CreateBlock.CreateElement(
      "div",
      "DivContainer_Encuestas_front"
    );
    MarcoImagen.appendChild(DivContainer);

    var DivContainerPregunta = GALSAN_CreateBlock.CreateElement(
      "div",
      "DivContainerPregunta"
    );

    GALSAN_CreateBlock.AttachID(DivContainerPregunta, "DivContainerPreguntaId");

    DivContainer.appendChild(DivContainerPregunta);

    ///pregunta
    //function show_question

    var DivContainerRadio = GALSAN_CreateBlock.CreateElement(
      "div",
      "DivContainerRadio_Encuestas"
    );
    DivContainer.appendChild(DivContainerRadio);

    var ulRadioButton = GALSAN_CreateBlock.CreateElement(
      "ul",
      "ulRadioButton_Encuestas"
    );

    GALSAN_CreateBlock.AttachID(ulRadioButton, "ulRadio");
    DivContainerRadio.appendChild(ulRadioButton);

    ///opciones

    //function show_option

    /////back

    var dlchart = GALSAN_CreateBlock.CreateElement("dl", "chart_back");
    dlchart.style = "width: 100%";
    MarcoImagen.appendChild(dlchart);
    GALSAN_CreateBlock.AttachID(dlchart, "dlchartID");

    ///bar
  }
}
