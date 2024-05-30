class SimpleOneLineFoot {

    constructor(TextLeft, TextRight, redirect_path = "./index.php") {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        this.redirect_path_ = redirect_path;
        this.TextLeft_ = TextLeft;

        this.TextRight_ = TextRight;

        //Create View: Dynamic HTMLL CSS: Node
        this.CreateView();
    }


    CreateView() {
        this.add_CSS_Class(
            ".generalFoot",
            `
                width: 100%;
                margin: 0 auto;
                background-color: black;
                bottom: 0;
                height: auto;
                z-index: 9;
        `
        );

        this.add_CSS_Class(
            ".CSS_EncabezadoH6",
            `
                color: white;
                padding: 0.4vw;
                float: right;
                margin: 0;
        `
        );

        this.add_CSS_Class(
            ".CSS_EncabezadoH6left",
            `
                color: white;
                padding: 0.4vw;
                float: left;
                margin: 0;
        `
        );

        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `generalFoot`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );


        var Link_a = this.CreateElement_(
            "a",
            null,
            null,
        );

        Link_a.target = "blank";
        Link_a.href = this.redirect_path_;

        var Link_H6 = this.CreateElement_(
            "h6",
            "CSS_EncabezadoH6left",
            this.TextLeft_,
        );

        Link_a.appendChild(Link_H6);
        ContenedorPrincipal.appendChild(Link_a);



        var Link_H5 = this.CreateElement_(
            "h6",
            "CSS_EncabezadoH6",
            this.TextRight_,
        );

        Link_a.appendChild(Link_H5);

        ContenedorPrincipal.appendChild(Link_a);

    }
}