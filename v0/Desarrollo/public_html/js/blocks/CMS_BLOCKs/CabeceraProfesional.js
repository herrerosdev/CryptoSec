class CabeceraProfesional {
    constructor(Params) {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        this.Title_ = Params.Title || "Default_Text";
        this.Img_Profile_= Params.Img_Profile;
        this.Img_BackGround_= Params.Img_BackGround;
        this.Img_Description_ = Params.Img_Description;
        this.CreateView();
    }

    ////////////////////////////
    ///////CreateView///////////
    ////////////////////////////

    CreateView() {

        ////////////////////////////////////////
        //***************CSS*****************//
        ////////////////////////////////////////

        this.add_CSS_Class(
            `._FatherContainer`,
            `               
             height: auto;
             width: 100vw;
            transition-duration: 0.5s;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: linear-gradient(248deg, rgba(0, 168, 255, 0.15), rgba(255, 255, 255, 0)), linear-gradient(356deg, rgba(0, 168, 255, 0.52), rgba(255, 255, 255, 0)), url(${this.Img_BackGround_});
            width: 100%; /* fall back */
            /* width: 100vw; */
            background-position:left top;
            background-repeat:no-repeat;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
            background-size:cover;

      `
        );

        this.add_CSS_Class(
            `.AutorBox_Container`,
            `
                width: fit-content;
                display: flex;
                margin: 0vw auto;
                background-color: ivory;
                border-radius: 122px 122px;
                justify-content: center;
                box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;
      `
        );
        
        this.add_CSS_Class(
            `.AutorBox_IMG`,
            `
                z-index: 0;
                border-radius: 122px 122px;
                -webkit-border-radius: valor;
                height: 22vw;
                border-block-start-width: revert;
      `
        );

        this.add_CSS_Class(
            `.AutorBox_IMG`,
            `
                height: 40vw;

      `,
      GALSAN_CreateBlock.Screen_Middle

        );

        this.add_CSS_Class(
            `.AutorBox_IMG`,
            `
                height: 22vw;

      `,
      GALSAN_CreateBlock.Screen_Mobile

        );

        this.add_CSS_Class(
            `.body`,
            `
            padding: -4px;
            min-height: 0vh;
            display: grid;
            width: 75%;
            place-items: center;
            background-color: cornsilk;
            text-align: center;
            margin: 0 auto;
            box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;
      
            `
          );
      
          this.add_CSS_Class(
            `.body`,
            `
      
      
        `,
            GALSAN_CreateBlock.Screen_Middle
          );
      
          this.add_CSS_Class(
            `.body`,
            `
      
      
      `,
            GALSAN_CreateBlock.Screen_Mobile
          );
      
          this.add_CSS_Class(
            `.p`,
            `
            width: 0;
            overflow: hidden;
            /* min-height: 5vw; */
            white-space: nowrap;
            font-size: 3vw;
            /* margin: 21px auto; */
            margin-top: 4vh;
            margin-bottom: 3vh;
            font-family: "Courier New";
            border-right: 0.15em solid #b3b3b31c;
            animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) 7;
            `
          );
      
          this.add_CSS_Class(
            `.p`,
            `
            font-size: 5vw;`,
            GALSAN_CreateBlock.Screen_Middle
          );
      
          this.add_CSS_Class(
            `.p`,
            `
          font-size: 5vw;`,
            GALSAN_CreateBlock.Screen_Mobile
          );
      
          this.add_CSS_Class(
            `@keyframes typing`,
            `
                  from {
                      width: 0;
                    }
                    to {
                      width: 100%;
                    }
      
            `
          );
      
          this.add_CSS_Class(
            `@keyframes blink`,
            `
                  50% {
                      border-color: transparent;
                    }
      
            `
          );



        let ContenedorPrincipal = this.CreateElement_(
            "div",
            `_FatherContainer`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );
        
        ContenedorPrincipal.alt = this.Img_Description_;

        let ContenedorImagen = this.CreateElement_(
            "div",
            `AutorBox_Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );


        ContenedorPrincipal.appendChild(ContenedorImagen);

        let Img_Profile = this.CreateElement_(
            "img",
            "AutorBox_IMG",
            this.Img_Profile_

        );

        Img_Profile.alt = this.Img_Description_;

        ContenedorImagen.appendChild(Img_Profile);

        let ContenedorTitulo = this.CreateElement_(
            "div",
            "body",
            null,
            this.Site_
          );

        var Texto = this.CreateElement_("h1", "p", this.Title_, GALSAN_CreateBlock.Site_Column_Center);

        ContenedorTitulo.appendChild(Texto);


        ContenedorPrincipal.appendChild(ContenedorTitulo);

    }

}

//"Pablo Herreros Galvez Paul BlackSmiths Ingeniero Informatico Analista Desarrollador Programador Consultor IT Redsys Carrefour"