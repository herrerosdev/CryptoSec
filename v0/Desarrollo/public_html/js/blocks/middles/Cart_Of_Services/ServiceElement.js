class ServiceElement {
    static MenuOpenFlag = false;
    //sfdg
    constructor(
        ServiceID,
        Title,
        Href = "www.google.com",
        BackGround_Photo = "assets/img/HEGALPA/servicios0.jpg"
    ) {
        this.Title_ = Title;
        this.Href_ = Href;
        this.BackGround_Photo_ = BackGround_Photo;
        this.ServiceID_ = ServiceID;
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
        GALSAN_CreateBlock.addFont("FontHeader", "IndieFlower-Regular");
        GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");

        //Add CSS
        this.add_CSS_Class(
            `.Header${this.ServiceID_}`,
            `
                height: 50vh;
                display: flex;
                width: 100%;
                background-image: linear-gradient(rgb(174 207 223 / 0%), rgb(255 255 255)), url(${this.BackGround_Photo_});
                background-repeat: no-repeat;
                background-size: 100%;
                z-index: 999999999999999;
                font-family: FontHeader;
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                transition-duration: 0.5s;
                cursor: pointer;
                text-decoration: none;

    `
        );

        this.add_CSS_Class(
            `.Header${this.ServiceID_}:hover`,
            `
            box-shadow: inset 0px 0px 50px #000;
            transition-duration: 0.5s;

          `
        );

        this.add_CSS_Class(
            `.HegalpaMainHeader`,
            `
                display: flex;
                padding-left: 2%;
                color: white;
                -webkit-text-stroke: 0.9px black;
                width: 97%;
                z-index: 999999999999999;
                font-family: FontSubtitle;
                margin-top: 0;
                margin-bottom: 0;
                align-content: center;
                flex-wrap: wrap;
                justify-content: space-around;
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
            `.Header${this.ServiceID_} p`,
            `
            font-size: 8vw;
            font-family: FontSubtitle;

          color: white;
          -webkit-text-stroke: 0.9px black;
          margin: auto;
          text-align: center;
        `
        );

        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "a",
            `Header${this.ServiceID_}`,
            null,
            GALSAN_CreateBlock.Site_Middle
        );

        ContenedorPrincipal.href = this.Href_;

        var p_TITLE = this.CreateElement_("p", null, null);

        var text = document.createTextNode(this.Title_);
        p_TITLE.appendChild(text);

        ContenedorPrincipal.appendChild(p_TITLE);

        return ContenedorPrincipal;
    }
}