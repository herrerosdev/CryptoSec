class CBlock_ModernTable {
    constructor(Table_name = "", Colums_num = 4) {

        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
        this.Table_name_ = Table_name;
        this.Colums_num_ = Colums_num;
        this.createView();
    }


    CreateColumn(Name) {

        var TableTitle = document.getElementById(`${this.Table_name_}_TITLE`);

        var table = GALSAN_CreateBlock.CreateElement("div", "table");
        TableTitle.appendChild(table);

        var text = GALSAN_CreateBlock.CreateElement("p", "textTable", Name);
        table.appendChild(text);
    }


    AddRow(Elem_C1="", Elem_C2= "", Elem_C3= "", Elem_C4="", Link="") {

        var TableGrid = document.getElementById(this.Table_name_);

        var TableContent = GALSAN_CreateBlock.CreateElement("div", "TableContent");

        var a_Link = GALSAN_CreateBlock.CreateElement("a");
        a_Link.setAttribute("href", Link);


        TableGrid.appendChild(TableContent);
        TableContent.appendChild(a_Link);

        var text = GALSAN_CreateBlock.CreateElement("p", "textTable", Elem_C1);
        a_Link.appendChild(text);
        text = GALSAN_CreateBlock.CreateElement("p", "textTable", Elem_C2);
        TableContent.appendChild(text);
        text = GALSAN_CreateBlock.CreateElement("p", "textTable", Elem_C3);
        TableContent.appendChild(text);
        text = GALSAN_CreateBlock.CreateElement("p", "textTable", Elem_C4);
        TableContent.appendChild(text);

    }

    AddRowMobile(Elem_C1, Elem_C2, Link) {

        var TableGrid = document.getElementById(this.Table_name_);

        var TableContent = GALSAN_CreateBlock.CreateElement("div", "TableContent");

        var a_Link = GALSAN_CreateBlock.CreateElement("a");
        a_Link.setAttribute("href", Link);


        TableGrid.appendChild(TableContent);
        TableContent.appendChild(a_Link);

        var text = GALSAN_CreateBlock.CreateElement("p", "textTable", Elem_C1);
        a_Link.appendChild(text);
        text = GALSAN_CreateBlock.CreateElement("p", "textTable", Elem_C2);
        TableContent.appendChild(text);


    }

    Set_NewEntry_FinishRow(TextNewEntry, Link) {

        var TableGrid = document.getElementById(this.Table_name_);

        var TableNewEntry = GALSAN_CreateBlock.CreateElement("div", "TableNewEntry");
        TableGrid.appendChild(TableNewEntry);
        var text = GALSAN_CreateBlock.CreateElement("a", "NewEntry", TextNewEntry);
        text.setAttribute("href", Link);

        TableNewEntry.appendChild(text);

    }

    createView() {
        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class(
            ".TableGrid",
            `
            width: auto;
            /* margin: auto; */
            max-width: 100%;
            box-shadow: 0px 3px 8px 0px rgb(76 119 141), 0px -4px 8px 0px rgb(76 119 141);
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableTitle",
            `
            /* border: 1px black solid; */
            background: #183550;
            color: white;
            display: grid;
            /* grid-template-columns: 40% 20% 25% 15%; */
            grid-template-columns: repeat(${this.Colums_num_}, minmax(0, 1fr));
            grid-auto-rows: minmax(auto, auto);
            justify-content: space-evenly;
            flex-direction: row;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class(
            ".TableTitle",
            `
    grid-template-columns: 80% 20%;
    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".textTable",
            `
    font-size: 1.5vw;
    text-align: justify;
    padding: 0 2vw;

    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".textTable",
            `
    font-size: 2vw;

    `, GALSAN_CreateBlock.Screen_Middle
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".textTable",
            `
    font-size: 3vw;

    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".NewEntry",
            `
                /* border: 1px black solid; */
                display: flex;
                background: ##183550;
                margin-left: 1vw;
                padding: 0.5vw 0;
                color: #ffffff;
                height: auto;
                align-items: center;
                -webkit-tap-highlight-color: white;

    `
        );



        GALSAN_CreateBlock.add_CSS_Class(
            ".TableContent",
            `
            /* border-top: 1px black solid; */
            /* border-bottom: 1px black solid; */
            background: #ffffffba;
            display: grid;
            grid-template-columns: repeat(${this.Colums_num_}, minmax(0, 1fr));
            /* grid-template-columns: minmax(0, 1fr); */
            grid-auto-rows: minmax(auto, auto);
            justify-content: space-evenly;
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableContent",
            `
    grid-template-columns: 80% 20%;
    
    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableContent:nth-child(even)",
            `
    background: #d2e8f6b0;
    

    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableNewEntry",
            `
                /* border: 1px black solid; */
                display: flex;
                background: #183550;
                padding: 0.5vw 0;
                color: #D4D190;
                height: auto;
                align-items: center;
    `
        );


        ////////////////////////////////////////
        /////////MOBIEL CSS/////////////////////
        ////////////////////////////////////////

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableGrid",
            `
      margin: 0;
      box-shadow: 0 0 15px #ddd;
      `,
            GALSAN_CreateBlock.Screen_Mobile

        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".NewEntry",
            `
            font-size: 3.5vw;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class(
            ".TableNewEntry",
            `
            height: 4vh;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        var TableGrid = GALSAN_CreateBlock.CreateElement("div", "TableGrid");
        GALSAN_CreateBlock.AttachID(TableGrid, this.Table_name_)


        var TableTitle = GALSAN_CreateBlock.CreateElement("div", "TableTitle");
        GALSAN_CreateBlock.AttachID(TableTitle, `${this.Table_name_}_TITLE`)
        TableGrid.appendChild(TableTitle);




    }
}