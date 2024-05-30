class Header_Block {
    constructor(Date) {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
        this.Date_ = Date;
        this.Path_block = null;
        this.CreateView();
    }

    ////////////////////////////
    ///////CreateView///////////
    ////////////////////////////

    Add_PathToHeaderBlog(Paths_Name, Paths_Href = "www.google.es") {


        let paths = this.CreateElement_(
            "p",
            "sudoname_p",
            null
        );

        let paths_a = this.CreateElement_(
            "a",
            null,
            ` / ${Paths_Name}`
        );

        paths_a.href = `${Paths_Href}`;

        paths.appendChild(paths_a);
        this.Path_block.appendChild(paths);
    }

    CreateView() {

        ////////////////////////////////////////
        //***************CSS*****************//
        ////////////////////////////////////////

        this.add_CSS_Class(
            `.AutorBox_Container`,
            `
                /* width: auto; */
                display: inline-flex;
                /* max-width: 62%; */
                /* padding: 1vw; */
                background: white;
                /* margin: 10vw auto; */
                box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;
                justify-content: space-evenly;
      `
        );

        this.add_CSS_Class(
            `.AutorBox_IMG`,
            `
                width: 22%;
                height: 22%;
      `
        );


        this.add_CSS_Class(
            `.sudoname_p`,
            `
                padding-right: 1%;

      `
        );


        this.add_CSS_Class(
            `.name_p`,

            `
                color: #888a8a;
      `
        );


        this.add_CSS_Class(
            `.Identification_Block`,
            `

      `
        );


        this.add_CSS_Class(
            `.PATH_BLOCK`,
            `
                display: flex;
                margin-left: 2vw;
                float: left;
                min-width: 72%;
      `
        );

        this.add_CSS_Class(
            `.Date_Block`,
            `
                margin-left: 2vw;
                /* display: FLEX; */
                float: right;
                min-width: 6%;
      `
        );


        this.add_CSS_Class(
            `.Info_Box`,
            `
                font-size: 12px;
                background-color: #e2e2e200;
                margin-top: 1vw;
                padding: 8px;
                box-shadow: rgb(50 50 93 / 25%) 0px -11px 30px -80px inset, rgb(0 0 0 / 30%) 0px 1px 7px 2px inset;
                min-height: 7vw;
      `
        );


        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `AutorBox_Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );


        let Date_block = this.CreateElement_(
            "div",
            "Date_Block",
            null
        );

        let Date_p = this.CreateElement_(
            "p",
            "sudoname_p",
            this.Date_
        );

        this.Path_block = this.CreateElement_(
            "div",
            "PATH_BLOCK",
            null
        );

        Date_block.appendChild(Date_p);
        ContenedorPrincipal.appendChild(this.Path_block);
        ContenedorPrincipal.appendChild(Date_block);

    }

}