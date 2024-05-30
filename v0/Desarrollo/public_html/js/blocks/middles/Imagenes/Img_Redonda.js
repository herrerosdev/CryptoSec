class Img_Redonda {
    constructor(ImgPath) {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        this.ImgPath_ = ImgPath;
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
            `.AutorBox_Container`,
            `
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


        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `AutorBox_Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );



        let Img_Profile = this.CreateElement_(
            "img",
            "AutorBox_IMG",
            this.ImgPath_
        );

        Img_Profile.alt = "Pablo Herreros Galvez Paul BlackSmiths Ingeniero Informatico Analista Desarrollador Programador Consultor IT Redsys Carrefour"

        ContenedorPrincipal.appendChild(Img_Profile);
    }

}