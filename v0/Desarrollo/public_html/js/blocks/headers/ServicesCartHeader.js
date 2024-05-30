class ServicesCartHeader {
    static MenuOpenFlag = false;

    constructor(Title, Subtitle, Photo) {
        this.Title_ = Title;
        this.Subtitle_ = Subtitle;
        this.Photo_ = Photo;
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

    CreateView() {
        //Add fonts
        GALSAN_CreateBlock.addFont("FontHeadered", "Tiemann_Light");
        GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");

        //Add CSS

        //Add CSS
        this.add_CSS_Class(
            `.HeaderTransformation`,
            `
                position: fixed;
                height: fit-content;
                display: block;
                margin-right: -35%;
                padding-bottom: 0vw;
                height: 16.4vw;
                width: 100%;
                /* background-color: black; */
                background-image: linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255)), url(assets/img/HEGALPA/header_Cart.jpg);
                background-repeat: no-repeat;
                background-size: 100%;
                filter: brightness(-1) invert(13);
                z-index: 9;
                background-attachment: fixed;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: right;
                transition-duration: 0.5s;

            `
        );

        this.add_CSS_Class(
            `.HeaderTransformation`,
            `
         
                        width: 100%;
                         
            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            `.HeaderTransformation`,
            `

               width: 100%;
                
   `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            `.Header`,
            `
                position: relative;
                height: fit-content;
                display: inline-block;
                padding-bottom: 0vw;
                width: 100%;
                /* background-color: black; */
                background-image: linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255)), url(assets/img/HEGALPA/header_Cart.jpg);
                background-repeat: no-repeat;
                background-size: 100%;
                filter: brightness(-1) invert(13);
                z-index: 9;
                background-attachment: fixed;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: right;
                transition-duration: 0.5s;

    `
        );

        this.add_CSS_Class(
            `.HegalpaMainHeader`,
            `
                font-size: 14vw;
                text-align: center;
                display: flex;
                margin: 0;
                background: rgba(0,0,0,0.5);
                /* padding-left: 15%; */
                /* margin-bottom: 3vh; */
                color: #ffffff;
                padding-bottom: 4vw;
                /* -webkit-text-stroke: 0.1vw black; */
                width: auto;
                height: auto;
                z-index: 9;
                font-family: FontHeadered;
                /* margin-top: 2%; */
                flex-direction: column;
                justify-content: space-between;
                transition-duration: 0.5s;

         `
        );

        this.add_CSS_Class(
            `.HegalpaMainHeaderTranformation`,
            `
                font-size: 5vw;
                text-align: center;
                display: flex;
                padding-left: 3vw;
                margin: 0;
                /* padding-bottom: 29vh; */
                /* padding-bottom: 184px; */
                background: rgba(0,0,0,0.5);
                /* padding-left: 15%; */
                /* margin-bottom: 3vh; */
                padding-top: 3.56vw;
                color: #ffffff;
                padding-bottom: 6.3vw;
                /* -webkit-text-stroke: 0.1vw black; */
                width: auto;
                height: fit-content;
                z-index: 9;
                font-family: FontHeadered;
                /* margin-top: 2%; */
                flex-direction: row;
                justify-content: space-between;
                transition-duration: 0.5s;
         `
        );

        this.add_CSS_Class(
            `.Dot`,
            `
            width: 1vw;
            height: 0vw;
        `
        );

        this.add_CSS_Class(
            `.Garza1`,
            `
        position: revert;
        top: 1.3vh;
        right: 3.5vw;
        width: 19%;
        z-index: 0;
        border: 2px solid white;
        border-radius: 83px 19px;
        -webkit-border-radius: valor;
        height: auto;
        /* position: relative; */
        border-block-start-width: revert;
        margin-left: 10%;
        /* float: right; */
        `
        );

        this.add_CSS_Class(
            `.Garza2`,
            `
            width: 100%;
            height: 100%;
            position: relative;
            margin: 0 auto;
        `
        );

        //Contenedor que contiene todos los botones
        this.add_CSS_Class(
            `.PageTitle`,
            `
            background-color: rgba(39, 124, 223, 0.4);
            font-size: 10vw;
            width: 95vw;
            margin: auto;
            margin-top: 0vw;
            margin-bottom: 1vw;
    `
        );

        this.add_CSS_Class(
            `.PageTitle p`,
            `
            color: white;
          -webkit-text-stroke: 0.9px black;
          margin: auto;
          text-align: center;
        `
        );

        this.add_CSS_Class(
            `.Subtitle`,
            `
                color: white;
                -webkit-text-stroke: 0.03vw black;
                margin: auto;
                text-align: right;
                font-size: 5vw;
                float: right;
        `
        );

        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `Header`,
            null,
            GALSAN_CreateBlock.Site_Header
        );

        var p_TITLE = this.CreateElement_("p", `HegalpaMainHeader`, null);

        var text = document.createTextNode(this.Title_);
        p_TITLE.appendChild(text);

        var IMG_TITLE = this.CreateElement_(
            "p",
            `Subtitle`,
            this.Subtitle_
        );

        p_TITLE.appendChild(IMG_TITLE);

        ContenedorPrincipal.appendChild(p_TITLE);

        p_TITLE.id = "ServicesCartHeader";
        ContenedorPrincipal.id = "ServicesCartHeaderGlobal";
    }
}