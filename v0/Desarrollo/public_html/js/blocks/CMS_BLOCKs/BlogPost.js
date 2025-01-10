class BlogPost {
  
    constructor(Params) {
      this.Title_ =  Params.Title || '<p><em>" Titulo "</em></p>';
      this.Text_ = Params.Text || `Texto Texto Texto`;
      this.Photo_ = Params.Photo || "https://drive.pabloherreros.net/Pablo-Herreros-Galvez-Ingeniero-Informatico-Analista-Desarrollador-Redsys-CiberSeguridad-Administrador-De-Sistemas-Carrefour.png";
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
      //Create View: Dynamic HTMLL CSS: Node
      this.CreateView();
    }
  
    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////
  
    CreateView() {
      //Add fonts
      GALSAN_CreateBlock.addFont("FontHeadered", "Tiemann_Light");
      GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");
  



      //Add CSS
      this.add_CSS_Class(
        `.Div_Post`,
        `
        display: flex;
        background-image: url(https://drive.hegalpa.es/portada.jpg);
        width: 77%;
        /* height: 100%; */
        margin: 15% auto;
        background: #fff8dc;
        height: auto;
        /* padding-top: 6vw; */
        /* padding-left: 5%; */
        /* color: white; */
        /* font-size: 6VW; */
        /* max-width: 100%; */
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
        align-items: flex-start;
        /* border-right: 0.3vw solid #00000021; */
        box-shadow: rgb(0 18 5 / 40%) 3.95px 3.95px 9.6px;
        /* border-bottom: 0.3vw solid #0000005c; */

  
              `
      );

      this.add_CSS_Class(
        `.Div_Post`,
        `

          display: flex;
          background-image: url(https://drive.hegalpa.es/portada.jpg);
          width: 95%;
          /* height: 100%; */
          margin: 40% auto;
          background: #fff8dc;
          height: auto;
          /* padding-top: 6vw; */
          /* padding-left: 5%; */
          /* color: white; */
          /* font-size: 6VW; */
          /* max-width: 100%; */
          flex-direction: column;
          align-content: flex-start;
          justify-content: center;
          align-items: flex-start;
          /* border-right: 0.3vw solid #00000021; */
          box-shadow: rgb(0 18 5 / 40%) 3.95px 3.95px 9.6px;
          /* border-bottom: 0.3vw solid #0000005c; */

  
              `,

          GALSAN_CreateBlock.Screen_Mobile

      );



      this.add_CSS_Class(
        `.title`,
        `
        display: block;
        margin-left: 19%;
        margin-top: 9%;
        margin-right: -31%;
        margin-bottom: 6%;
        padding: 0%;
        font-size: 1.7vw;
        box-shadow: rgb(0 18 5 / 40%) 3px 3px 6px 0px;
        background: #fffef9;


  
              `
      );


      this.add_CSS_Class(
        `.title`,
        `
        display: block;
        /* margin-left: 19%; */
        margin-top: 9%;
        margin: 18% auto;
        /* width: fit-content; */
        /* margin-right: -31%; */
        text-align: center;
        align-items: center;
        margin-bottom: 6%;
        padding: 1%;
        font-size: 4.7vw;
        box-shadow: rgb(0 18 5 / 40%) 3px 3px 6px 0px;
        background: #fffef9;`,
        GALSAN_CreateBlock.Screen_Mobile

      );



      this.add_CSS_Class(
        `.PhotoTitle_box`,
        `
        max-width: max-content;
        height: auto;
        display: flex;
        /* margin: 5%; */
        /* padding-top: 25%; */
  
              `
      );

      this.add_CSS_Class(
        `.PhotoTitle_box`,
        `
        max-width: 100%;
        margin: 0 auto;
        height: auto;
        display: block;
        /* margin: 5%; */
        /* padding-top: 25%; */
  
              `,
        GALSAN_CreateBlock.Screen_Mobile
      );



      this.add_CSS_Class(
        `.text_box`,
        `
        display: block;
        padding: 1%;
        margin: 5%;
        margin-top: 7%;
        background: #fffef9;
        box-shadow: rgb(0 18 5 / 40%) 3px 3px 6px 0px;
        /* padding-top: 25%; */
  
              `
      );

      this.add_CSS_Class(
        `.text`,
        `
  
              `
      );

  
      //Border cornered
      this.add_CSS_Class(
          `.PhotoPost`,
          `
          display: block;
          width: 30vw;
          margin: -5%;
          margin-top: -12%;
          padding: 0%;
          background-image: url(${this.Photo_});
          height: 20vw;
          box-shadow: rgb(255 255 255) 3px 2px 25px 5px;

          background-position:left top;
          background-repeat:no-repeat;
          -webkit-background-size:cover;
          -moz-background-size:cover;
          -o-background-size:cover;
          background-size:cover;

  
        `
        );


              //Border cornered
      this.add_CSS_Class(
        `.PhotoPost`,
        `
        display: block;
        width: 50vw;
        margin: 0 auto;
        margin-top: -15%;
        padding: 0%;
        background-image: url(${this.Photo_});
        height: 52vw;
        box-shadow: rgb(255 255 255) 3px 2px 25px 5px;
        background-position: left top;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      `,
      GALSAN_CreateBlock.Screen_Mobile

      );
  
      //Create html elements (Using DOM)

      var ContenedorPrincipal = this.CreateElement_(
        "div",
        `Div_Post`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );

      var PhotoTitle_box = this.CreateElement_(
        "div",
        `PhotoTitle_box`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );

      var Photo = this.CreateElement_(
        "img",
        `PhotoPost`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );

      PhotoTitle_box.appendChild(Photo);

      var Title = this.CreateElement_(
        "h2",
        `title`,
        `${this.Title_}`,
        GALSAN_CreateBlock.Site_Column_Center
      );
    
      PhotoTitle_box.appendChild(Title);

      ContenedorPrincipal.appendChild(PhotoTitle_box);


      var Text_box = this.CreateElement_(
        "div",
        `text_box`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
    
      
      var Text = this.CreateElement_(
        "p",
        `text`,
        `${this.Text_}`,
        GALSAN_CreateBlock.Site_Column_Center
      );
    
      Text_box.appendChild(Text);


      ContenedorPrincipal.appendChild(Text_box);


      //p_TITLE.id = "ServicesCartHeader";
      //ContenedorPrincipal.id = "ServicesCartHeaderGlobal";
    }
  }
  