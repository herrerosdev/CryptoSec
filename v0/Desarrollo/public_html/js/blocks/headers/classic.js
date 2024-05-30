class CClassicHeader {

    static MenuOpenFlag = false;

    constructor() {
        this.CreateView();
    }



    getClassName() {
        return this.constructor.name;
    }


    Add_MenuItem(Name = null, link = null, _function = null) {
        var ContenedorDeBotones = document.getElementById(
            "ClassicHeader_ContentButtons"
        );

        var a_Link = GALSAN_CreateBlock.CreateElement("a");

        if (link != null && _function == null) {
            a_Link.setAttribute("href", link); //Add Link to button
        } else if (_function != null && link == null) {
            a_Link.setAttribute("onclick", _function); //Add function to button
        }

        var MenuItem = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}ButtonDiv`, Name);

        a_Link.appendChild(MenuItem);

        //Add To General button content
        ContenedorDeBotones.appendChild(a_Link);
    }


    Add_MenuItemRight(Name = null, link = null, _function = null) {
        var ContenedorDeBotones = document.getElementById(
            "ClassicHeader_ContentButtons"
        );

        var a_Link = GALSAN_CreateBlock.CreateElement("a");

        if (link != null && _function == null) {
            a_Link.setAttribute("href", link); //Add Link to button
        } else if (_function != null && link == null) {
            a_Link.setAttribute("onclick", _function); //Add function to button
        }

        var MenuItem = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}ButtonDivRight`, Name);

        a_Link.appendChild(MenuItem);

        //Add To General button content
        ContenedorDeBotones.appendChild(a_Link);
    }


    ShowMenu() {

        var ContenedorDeBotones = document.getElementById(
            "ClassicHeader_ContentButtons"
        );

        if (CClassicHeader.MenuOpenFlag) {

            ContenedorDeBotones.classList.add(`${this.getClassName()}NoneMenu`);
            ContenedorDeBotones.classList.remove(`${this.getClassName()}gridMenu`);

            CClassicHeader.MenuOpenFlag = false;


        } else {

            ContenedorDeBotones.classList.add(`${this.getClassName()}gridMenu`);
            ContenedorDeBotones.classList.remove(`${this.getClassName()}NoneMenu`);


            CClassicHeader.MenuOpenFlag = true;
        }


    }





    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////

    CreateView() {
        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class(
            ".header",
            `
      width: 100%;
      padding-top: 1vh;
      color: #D4D190;
      background-color: #29556B;
      margin: auto;
      text-align: center;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}Titulo`,
            `
      font-size: 6.3vw;
      padding-bottom: 2vh;
      padding-top: 2vh;
      margin: 0;

    `
        );


        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}Titulo`,
            `
    font-size: 8vw;
    padding-bottom: 4vh;
    padding-top: 2vh;
    margin: 0;

  `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ButtonHamDIV`,
            `
display:none
        `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ButtonHamDIV`,
            `
      background-color: white;
      width: 5%;
      padding: 1vw;
      border: 2px black solid;
      z-index: 10;
      top: 3vh;
      left: 2.5vw;
      position: absolute;
      height: auto;
      display: flex;
        `, GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}HamburgImg`,
            `
      width: 100%;
      height:auto;
        `
        );

        //Contenedor que contiene todos los botones
        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ALLMenuButtonsDIV`,
            `
      width: 100%;
      min-height: fit-content;
      color: white;
      background-color: #7DA4B8;
      border-top: black solid 2px;
      text-align: left;
      display: inline-block;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ALLMenuButtonsDIV`,
            `
      width: 30%;
      display: none;
      position: absolute;
      z-index: 8;
      opacity: 97%;
      justify-content: center;
      justify-items: start;

    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ALLMenuButtonsDIV a:nth-of-type(5)`,
            `
padding-bottom:15vh;

    `, GALSAN_CreateBlock.Screen_Mobile
        );



        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}gridMenu`,
            `
      display: grid;

    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}NoneMenu`,
            `
      display: none;

    `, GALSAN_CreateBlock.Screen_Mobile
        );

        //Contenedor individual de cada boton
        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ButtonDiv`,
            `
      color: white;
      padding: 1.5vw;
      font-size: 1.5vw;
      float: left;
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ButtonDiv`,
            `
      font-size: 3.5vw;

    `, GALSAN_CreateBlock.Screen_Mobile
        );

        //Contenedor individual de cada boton
        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ButtonDivRight`,
            `

      color: white;
      padding: 1.5vw;
      font-size: 1.5vw;
      float: right;
  
        `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}ButtonDivRight`,
            `
      font-size: 3.5vw;

    `, GALSAN_CreateBlock.Screen_Mobile
        );

        //Create element and associate a classes
        var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement(
            "div",
            "header",
            null,
            GALSAN_CreateBlock.Site_Header
        );

        var div = GALSAN_CreateBlock.CreateElement(
            "h1",
            `${this.getClassName()}Titulo`,
            "Mellitus Forum"
        );

        ContenedorPrincipal.appendChild(div);



        ///Boton movil menu hamburguer

        var hamburguer = GALSAN_CreateBlock.CreateElement(
            "div",
            `${this.getClassName()}ButtonHamDIV`,
            null,
            GALSAN_CreateBlock.Site_Header
        );

        GALSAN_CreateBlock.Attach_Attribute_onClick(hamburguer, "PageManager.o_classcHeader.ShowMenu()");


        var icon = GALSAN_CreateBlock.CreateElement(
            "img",
            `${this.getClassName()}HamburgImg`,
            "assets/img/icon/menu.png",
        );

        hamburguer.appendChild(icon);


        //Contenedor de botones
        var ContenedorDeBotones = GALSAN_CreateBlock.CreateElement(
            "div",
            `${this.getClassName()}ALLMenuButtonsDIV`,
            null,
            GALSAN_CreateBlock.Site_Header
        );

        GALSAN_CreateBlock.AttachID(
            ContenedorDeBotones,
            "ClassicHeader_ContentButtons"
        );

    }
}