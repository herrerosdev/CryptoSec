class IndiceContenidos {
  static MenuOpenFlag = false;

  //////////////////Index Types

  static Type_Folder = 0;
  static Type_File = 1;

  ////////////////
  //CONSTRUCTOR///
  ////////////////

  constructor() {
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

    //Create View: Dynamic HTMLL CSS: Node
    this.ViewConstructor();
  }

  Add_Index(
    Name,
    TypeIndex = IndiceContenidos.Type_Folder,
    Level = 0,
    href = null
  ) {
    let ContainerIndexes = document.getElementById("ContentButtons");
    let Index = null;

    if (TypeIndex == IndiceContenidos.Type_Folder) {
      Index = this.CreateElement_("p", "Title1", Name);
      Index.href = href;
      Index.target = "_blank";

      //Calculamos estos parametros relativos al nivel del item
      Index.style.fontSize = `${50/(((Level + 2)/(Level/3 + 1)))}px`; //Calcula el tamaño de letra con la variable del Nivel (formula magica no tocar o tocar con cuidao)
      Index.style.marginLeft = `${8 + 2 * Level}%`; //Calcular el margen derecho varibale al nivel 

    } else if (TypeIndex == IndiceContenidos.Type_File) {
      Index = this.CreateElement_("a", "Title1", Name);
      Index.href = href;
      Index.target = "_blank";

      Index.style.marginLeft = `${8 + 2 * Level}%`;

      Index.style.fontSize = "100%";
      Index.style.marginBottom = "0.5vh";
      Index.style.marginTop = "0.5vh";

      Index.style.fontStyle = "italic";
      Index.style.color = "#414141";
    }

    ContainerIndexes.appendChild(Index);
  }

  static ShowMenu() {
    var ContenedorDeBotones = document.getElementById("ContentButtons");

    if (IndiceContenidos.MenuOpenFlag) {
      ContenedorDeBotones.classList.add(`IndiceContenidosNoneMenu`);
      ContenedorDeBotones.classList.remove(`IndiceContenidosgridMenu`);

      IndiceContenidos.MenuOpenFlag = false;
    } else {
      ContenedorDeBotones.classList.add(`IndiceContenidosgridMenu`);
      ContenedorDeBotones.classList.remove(`IndiceContenidosNoneMenu`);

      IndiceContenidos.MenuOpenFlag = true;
    }
  }

  ViewConstructor() {
    ///////////////////////////////////////////////////////////
    //////////////Indices
    this.add_CSS_Class(
      ".Title1",
      `
        display: block;
        margin-top: 0px;
        margin-left: 2vw;
        margin-right: 1vw;
        /* width: 100%; */
        /* margin: 1vw; */
        font-size: 4vw;
        margin-bottom: 0.4vw;
`
    );

    this.add_CSS_Class(
      ".ContainerIndexesBlock",
      `
        display: grid;
        margin: 5vw;
        float: left;
        background-color: rgb(187 219 235 / 80%);
`
    );

    ////////////////////////////////////////////////////////////////
    /////////Boton

    this.add_CSS_Class(
      `.phone`,
      `
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 41px;
            left: 2px;
            background-color: #d3252500;
            color: #FFF;
            border-radius: 33px;
            box-shadow: 0px 4px 5px #b6b9b2;
            text-align: center;
            font-size: 26px;
            z-index: 100;
      `
    );

    this.add_CSS_Class(
      `.fa-phone`,
      `
              margin-top: 13px;
              color: #fdfdfd;
              display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      `
    );

    this.add_CSS_Class(
      ".fa-phone:before",
      `
              content: "\f095";
      `
    );

    this.add_CSS_Class(
      ".img",
      `
        width: 100%;
      `
    );
    /* 
    var ContainerTitleBlock = this.CreateElement_(
      "div",
      "ContainerIndexesBlock"
    );
    GALSAN_CreateBlock.AttachID(ContainerTitleBlock, "ContainerTitleBlockID");
 */
    var ContenedorPrincipal = this.CreateElement_(
      "div",
      null,
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    ////////////////Create button

    var phone = this.CreateElement_("a", `phone`, null);

    //phone.target = "_blank"; // open link in anothr tab

    var Img_Tlf = this.CreateElement_(
      "img",
      `img`,
      "./assets/img/indexes/list.png"
    );

    phone.appendChild(Img_Tlf);

    GALSAN_CreateBlock.AttachID(phone, "phoneID");
    GALSAN_CreateBlock.Attach_Attribute_onClick(
      phone,
      "IndiceContenidos.ShowMenu()"
    );
    ContenedorPrincipal.appendChild(phone);

    var faphone = this.CreateElement_("i", `fa-phone`, null);

    phone.appendChild(faphone);

    //////////////////////////////////Create panel

    //Add fonts
    GALSAN_CreateBlock.addFont("FontSubtitle", "IndieFlower-Regular");

    //Add CSS

    this.add_CSS_Class(
      `.HamburgImg`,
      `
          width: 100%;
          height:auto;
            `
    );

    //Contenedor que contiene todos los botones
    this.add_CSS_Class(
      `.ALLMenuButtonsDIV`,
      `
    width: 100%;
    min-height: fit-content;
    color: white;
    background-color: #cdcfd0;
    /* border-top: black solid 2px; */
    text-align: left;
    display: inline-block;
        `
    );

    this.add_CSS_Class(
      `.ALLMenuButtonsDIV`,
      `
        width: 30%;
        display: none;
        position: fixed;
        z-index: 5;
        top: 0vh;
        opacity: 97%;
        height: 80vh;
        box-shadow: 40px 24px 21px #00000047;
        justify-content: center;
        justify-items: start;
        `
    );

    this.add_CSS_Class(
      `.ALLMenuButtonsDIV a:nth-of-type(5)`,
      `
                    padding-bottom: 0vh;
        `
    );

    this.add_CSS_Class(
      `.gridMenu`,
      `
        display: block;
        left: 0%;
        z-index: 999;
        width: fit-content;
        padding-top: 3vh;
        transition-duration: 1s;
        overflow: auto;
        border-radius: 0px 0px 10px 0px;
        `
    );

    this.add_CSS_Class(
      `.NoneMenu`,
      `
        display: block;
        padding-top: 3vh;
        transition-duration: 1s;
        left: -100%;
        overflow: auto;
        width: fit-content;


        `
    );

    //Create element and associate a classes
    var ContenedorPrincipal = this.CreateElement_(
      "div",
      "header",
      null,
      GALSAN_CreateBlock.Site_Header
    );

    //Contenedor de botones
    var ContenedorDeBotones = this.CreateElement_(
      "div",
      `ALLMenuButtonsDIV`,
      null,
      GALSAN_CreateBlock.Site_Header
    );

    GALSAN_CreateBlock.AttachID(ContenedorDeBotones, "ContentButtons");
  }
}
/* 
var Test_o = new IndiceContenidos();

Test_o.Add_Index(
  "Captiulo 1",
  IndiceContenidos.Type_Folder,
  1,
  "www.google.es"
);

Test_o.Add_Index("Archivo", IndiceContenidos.Type_File, 1, "www.google.es");

Test_o.Add_Index("Archivo", IndiceContenidos.Type_File, 1, "www.google.es");

Test_o.Add_Index(
  "Captiulo 1",
  IndiceContenidos.Type_Folder,
  2,
  "www.google.es"
);
Test_o.Add_Index(
  "Captiulo 1",
  IndiceContenidos.Type_Folder,
  2,
  "www.google.es"
);

Test_o.Add_Index(
  "Captiulo 1",
  IndiceContenidos.Type_Folder,
  3,
  "www.google.es"
);

Test_o.Add_Index(
  "Captiulo 2",
  IndiceContenidos.Type_Folder,
  1,
  "www.google.es"
);
Test_o.Add_Index(
  "Captiulo 3",
  IndiceContenidos.Type_Folder,
  1,
  "www.google.es"
);
 */
