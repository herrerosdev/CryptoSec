class HegalpaHeader {
    static MenuOpenFlag = false;

    constructor(Title, Photo) {
        this.Title_ = Title;
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
        GALSAN_CreateBlock.addFont("FontHeader", "IndieFlower-Regular");
        GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");

        //Add CSS
        this.add_CSS_Class(
            `.Header`,
            `
        height: fit-content;
        display: inline-block;
        /* padding: 0.3vw; */
        width: 100%;
        /* border: 0.6vw solid white; */
        background-image: linear-gradient(rgb(174 207 223 / 0%), rgb(255 255 255)), url(assets/img/headerBackGround.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        z-index: 999999999999999;
        font-family: FontHeader;
        margin-bottom: 12%;

    `
        );

        this.add_CSS_Class(
            `.HegalpaMainHeader`,
            `
        font-size: 10vw;
        /* max-width: 17%; */
        /* margin: 0 auto; */
        /* align-items: center; */
        display: flex;
        padding-left: 2%;
        /* justify-content: center; */
        color: white;
        -webkit-text-stroke: 0.9px black;
        width: 97%;
        /* float: left; */
        padding-bottom: 1%;
        /* float: right; */
        z-index: 999999999999999;
        font-family: FontSubtitle;
        margin-top: 2%;
        margin-bottom: 3%;
        align-content: center;
        flex-wrap: wrap;
        justify-content: space-around;
         `
        );

        this.add_CSS_Class(
            `.Subtitles`,
            `
        font-size: 2.6vw;
        color: #5b5a58;
        letter-spacing: 0vw;
        margin: 0 auto;
        align-items: inherit;
        text-align: center;
        display: inline-flex;
        float: left;
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

        var IMG_TITLE = this.CreateElement_("img", `Garza1`, this.Photo_);

        p_TITLE.appendChild(IMG_TITLE);

        ContenedorPrincipal.appendChild(p_TITLE);

        //Subtitulos
        var Container_SUBTITLE = this.CreateElement_("p", `Subtitles`, null);

        var text = this.CreateElement_("a", null, "Ingeniero Informático");

        Container_SUBTITLE.appendChild(text);

        var text = this.CreateElement_("a", null, "Programador Senior");
        Container_SUBTITLE.appendChild(text);

        var text = this.CreateElement_("a", null, "Arquitectura Software");

        Container_SUBTITLE.appendChild(text);

        var text = this.CreateElement_("a", null, "Analista Programador");
        Container_SUBTITLE.appendChild(text);

        var text = this.CreateElement_("a", null, "Diseño del Software");
        Container_SUBTITLE.appendChild(text);

        ContenedorPrincipal.appendChild(Container_SUBTITLE);
    }
}

