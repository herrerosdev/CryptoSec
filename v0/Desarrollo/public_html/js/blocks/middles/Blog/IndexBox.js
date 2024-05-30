class IndexBox {
    constructor(Name) {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        this.Name_ = Name;

        this.Container_Where_Add_New_Entries = null;
        this.CreateView();
    }

    ////////////////////////////
    ///////CreateView///////////
    ////////////////////////////

    Add_EntryToIndex(Entry_Name, Entry_Href = "www.google.es") {

        let Name_P = this.CreateElement_(
            "p",
            null,
            null
        );


        let Name_A = this.CreateElement_(
            "a",
            "name_p",
            Entry_Name
        );

        Name_A.href = `#${Entry_Href}`;

        Name_P.appendChild(Name_A);
        this.Container_Where_Add_New_Entries.appendChild(Name_P);
    }

    CreateView() {

        ////////////////////////////////////////
        //***************CSS*****************//
        ////////////////////////////////////////

        this.add_CSS_Class(
            `.AutorBox_Container`,
            `
                width: fit-content;
                display: flex;
                max-width: 62%;
                padding: 1vw;
                padding-right: 3.4%;
                margin: 10vw auto;
                /* margin-right: 119px; */
                justify-content: center;
                box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;
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
            `.Content_Block`,
            `
                margin-left: 2vw;
                min-width: 40%;
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

        let Content_Info = this.CreateElement_(
            "div",
            "Content_Block",
            null
        );

        this.Container_Where_Add_New_Entries = this.CreateElement_(
            "div",
            `Identification_Block`,
            null
        );

        let Sudoname_P = this.CreateElement_(
            "p",
            "sudoname_p",
            this.Name_
        );

        this.Container_Where_Add_New_Entries.appendChild(Sudoname_P)


        Content_Info.appendChild(this.Container_Where_Add_New_Entries);
        ContenedorPrincipal.appendChild(Content_Info);
    }

}