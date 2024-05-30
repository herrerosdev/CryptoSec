class TitleBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        
    }



    Set_Title(Title) {

        var ContainerTitle = document.getElementById("ContainerTitleBlockID");

        var TitleH3 = GALSAN_CreateBlock.CreateElement("h2", "TitleH3", Title);

        ContainerTitle.appendChild(TitleH3);
        
    }
        




    ViewConstructor() {



GALSAN_CreateBlock.add_CSS_Class(
    ".ContainerTitleBlock",
    `
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: rgb(187 219 235 / 80%);
`
);

GALSAN_CreateBlock.add_CSS_Class(
    ".TitleH3",
    `
    color: black;
    text-align: center;
  
`
);


GALSAN_CreateBlock.add_CSS_Class(
    ".ContainerTitleBlock",
    `
    width: 100% !important;
    margin: 0 auto;
    text-align: center;
    background-color: rgb(187 219 235 / 80%);
`,GALSAN_CreateBlock.Screen_Middle
);




var ContainerTitleBlock = GALSAN_CreateBlock.CreateElement("div", "ContainerTitleBlock");
GALSAN_CreateBlock.AttachID(ContainerTitleBlock, "ContainerTitleBlockID");












                
    }             

}     











