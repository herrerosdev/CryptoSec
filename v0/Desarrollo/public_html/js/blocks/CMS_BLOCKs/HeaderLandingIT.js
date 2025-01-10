class HeaderLandingIT {
  static MenuOpenFlag = false;

  constructor(Params) {

    //Estructura Nav

  //{"Title":"","Subtitle":"", "Photo": ""}
    this.Title_ = Params.Title;
    this.Subtitle_ = Params.Subtitle;
    this.Photo_ = Params.Photo;

    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

    //Create View: Dynamic HTMLL CSS: Node
    this.CreateView();
  }

  ////////////////////////////
  ///////CreateView//////////
  //////////////////////////

  //Add css class
  AddButton(Params){

  //Estructura Nav
    //{"Name":"","Action":""}

    var HeaderPrincipalContainer = document.getElementById("HeaderCommercio");

    var IMANGEN_EMPRESA = this.CreateElement_(
        "div",
        `BUTTON`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );

      var h2SEO = this.CreateElement_(
        "h2",
        null,
        Params.Name,
        null
      );

      IMANGEN_EMPRESA.appendChild(h2SEO);
      IMANGEN_EMPRESA.onclick = function(){window.open(`${Params.Action}`);};

      HeaderPrincipalContainer.appendChild(IMANGEN_EMPRESA);

  }

  CreateView() {
    //Add fonts
    GALSAN_CreateBlock.addFont("FontHeadered", "Tiemann_Light");
    GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");

    //Add CSS

    //Add CSS
    this.add_CSS_Class(
      `.HEADER`,
      `

      position: relative;
      height: 96%;



    `
    );


    //Add CSS
    this.add_CSS_Class(
      `.HEADER`,
      `
      height: 30%;

      `,
      GALSAN_CreateBlock.Screen_Middle
    );


    this.add_CSS_Class(
      `.IMANGEN_EMPRESA`,
      `
         
      width: 25%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
                         
            `
    );


    this.add_CSS_Class(
      `.IMANGEN_DESPLEGABLE`,
      `
      display: none;
                         
            `
    );


    this.add_CSS_Class(
      `.IMANGEN_DESPLEGABLE`,
      `
      display: grid;
      float: right;
      width: 7%;
      margin-right: 4%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
                         
            `,
            GALSAN_CreateBlock.Screen_Middle

    );

    this.add_CSS_Class(
      `.IMANGEN_DESPLEGABLE`,
      `
      display: grid;
      float: right;
      width: 7%;
      width: 7%;
      margin-right: 4%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
                         
            `,
            GALSAN_CreateBlock.Screen_Mobile

    );


    this.add_CSS_Class(
      `.BUTTON`,
      `
      float: right;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      padding: 1vw;
      margin: 1vw;
      border: 3px solid #ffffff00;
      
      /* transition: opacity 5s linear; */

      transition: background 0.6s, opacity 0.4s;


      background: linear-gradient(to right, #ffffff00 4px, transparent 4px) 0 0,
      linear-gradient(to right, #ffffff00 4px, transparent 4px) 0 70%,
      linear-gradient(to left, transparent 4px, transparent 4px) 100% 0,
      linear-gradient(to left, transparent 4px, transparent 4px) 100% 70%,
      linear-gradient(to bottom, transparent 4px, transparent 4px) 0 0,
      linear-gradient(to bottom, transparent 4px, transparent 4px) 70% 0,
      linear-gradient(to top, transparent 4px, transparent 4px) 0 96%,
      linear-gradient(to top, transparent 4px, transparent 4px) 70% 100%;

        background-repeat: no-repeat;
        background-size: 20px 20px; 



    `
    
    );

        this.add_CSS_Class(
        `.BUTTON`,
        `
        float: none;
        position: inherit;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        padding: 5vw;
        margin: 1vw;
        border: 3px solid #ffffff00;
        
        transition: background 0.6s, opacity 0.4s;
        background: linear-gradient(to right, #ffffff00 4px, transparent 4px) 0 0,
              linear-gradient(to right, #ffffff00 4px, transparent 4px) 0 70%,
              linear-gradient(to left, transparent 4px, transparent 4px) 100% 0,
              linear-gradient(to left, transparent 4px, transparent 4px) 100% 70%,
              linear-gradient(to bottom, transparent 4px, transparent 4px) 0 0,
              linear-gradient(to bottom, transparent 4px, transparent 4px) 70% 0,
              linear-gradient(to top, transparent 4px, transparent 4px) 0 96%,
              linear-gradient(to top, transparent 4px, transparent 4px) 70% 100%;
        background-repeat: no-repeat;
        background-size: 20px 20px;
  
      `,

      GALSAN_CreateBlock.Screen_Middle
      );

        //Border cornered
        this.add_CSS_Class(
            `.BUTTON:hover`,
            `


            cursor: pointer;
            padding: 1vw;
            opacity: 60%;
            border: 3px solid #ffffff00;
            background: linear-gradient(to right, transparent 3px, transparent 4px) 0 0,
              linear-gradient(to right, black 3px, transparent 3px) 0 100%,
              linear-gradient(to left, black 3px, transparent 3px) 100% 0,
              linear-gradient(to left, transparent 3px, transparent 3px) 100% 100%,
              linear-gradient(to bottom, transparent 3px, transparent 3px) 0 0,
              linear-gradient(to bottom, black 3px, transparent 3px) 100% 0,
              linear-gradient(to top, black 3px, transparent 3px) 0 100%,
              linear-gradient(to top, transparent 3px, transparent 3px) 100% 100%;
          
            background-repeat: no-repeat;
            background-size: 20px 20px;     
    
    
          `
          );
          


                  //Border cornered
        this.add_CSS_Class(
          `.BUTTON:hover`,
          `


          cursor: pointer;
          padding: 5vw;
          opacity: 60%;
          border: 3px solid #ffffff00;

          background: linear-gradient(to right, transparent 3px, transparent 4px) 0 0,
            linear-gradient(to right, black 3px, transparent 3px) 0 100%,
            linear-gradient(to left, black 3px, transparent 3px) 100% 0,
            linear-gradient(to left, transparent 3px, transparent 3px) 100% 100%,
            linear-gradient(to bottom, transparent 3px, transparent 3px) 0 0,
            linear-gradient(to bottom, black 3px, transparent 3px) 100% 0,
            linear-gradient(to top, black 3px, transparent 3px) 0 100%,
            linear-gradient(to top, transparent 3px, transparent 3px) 100% 100%;
        
          background-repeat: no-repeat;
          background-size: 20px 20px;     
  
  
        `
        ,

      GALSAN_CreateBlock.Screen_Middle

        );
    //Create html elements (Using DOM)

    //Create element and associate a classes
    var ContenedorPrincipal = this.CreateElement_(
      "div",
      `HEADER`,
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    ContenedorPrincipal.id = "HeaderCommercio";

    var IMANGEN_EMPRESA = this.CreateElement_(
      "img",
      `IMANGEN_EMPRESA`,
       this.Photo_,
      GALSAN_CreateBlock.Site_Column_Center
    );

    var IMANGEN_DESPLEGABLE = this.CreateElement_(
      "img",
      `IMANGEN_DESPLEGABLE`,
      "https://drive.hegalpa.es/commons/MENU/menuDesplegable.png",
      GALSAN_CreateBlock.Site_Column_Center
    );

    ContenedorPrincipal.appendChild(IMANGEN_DESPLEGABLE);

    ContenedorPrincipal.appendChild(IMANGEN_EMPRESA);

    //p_TITLE.id = "ServicesCartHeader";
    //ContenedorPrincipal.id = "ServicesCartHeaderGlobal";
  }
}
