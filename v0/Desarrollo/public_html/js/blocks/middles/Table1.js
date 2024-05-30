class CBlock_ModernTable {
    constructor() {
        this.createView();
    }


    CreateColumn(Name) {

        var TableTitle = document.getElementById("CBlock_ModernTable_TableTitleID");

        var table = GALSAN_CreateBlock.CreateElement("div", "table");
        TableTitle.appendChild(table);

        var text = GALSAN_CreateBlock.CreateElement("p", "textTable", Name);
        table.appendChild(text);
    }


    AddRow(Elem_C1, Elem_C2, Elem_C3, Elem_C4, Link) {

        var TableGrid = document.getElementById("CBlock_ModernTable_TableGridID");

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

        var TableGrid = document.getElementById("CBlock_ModernTable_TableGridID");

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

        var TableGrid = document.getElementById("CBlock_ModernTable_TableGridID");

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
    margin: auto;
    max-width: 100%;
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableTitle",
            `
    border: 1px black solid;
/*     border-top-right-radius: 32px;
    border-top-left-radius: 32px; */
    background: #4c778d;;
    color: #D4D190;
    display: grid;
    grid-template-columns: 40% 20% 25% 15%;
    grid-auto-rows: minmax(auto, auto);
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
    font-size: 1vw;
    display: flex;
    margin-left: 3vw;
    height: 100%;
    font-style: italic;
    cursor: pointer;
    font-weight: bold;
    align-items: center;

    `
        );



        GALSAN_CreateBlock.add_CSS_Class(
            ".TableContent",
            `
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    background: #7DA4B8;
    display: grid;
    grid-template-columns: 40% 20% 27% 13%;
    grid-auto-rows: minmax(auto, auto);
    
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
    background: #c6dbe5;
    

    `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".TableNewEntry",
            `
    border: 1px black solid;
    display: flex;
    background: #4c778d;;
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
        GALSAN_CreateBlock.AttachID(TableGrid, "CBlock_ModernTable_TableGridID")


        var TableTitle = GALSAN_CreateBlock.CreateElement("div", "TableTitle");
        GALSAN_CreateBlock.AttachID(TableTitle, "CBlock_ModernTable_TableTitleID")
        TableGrid.appendChild(TableTitle);




    }
}