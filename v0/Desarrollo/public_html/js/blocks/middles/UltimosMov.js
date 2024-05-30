class UltimosMovimientosBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////

    static IsOpen = 0;

    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        
    }


    ExpandData() {
        if(UltimosMovimientosBlock.IsOpen == 0) {
            document.getElementById("ContainerUltimosMovID").style.display = "flex";
            UltimosMovimientosBlock.IsOpen = 1;
        } else {
            document.getElementById("ContainerUltimosMovID").style.display = "none";
            UltimosMovimientosBlock.IsOpen = 0;
        }
        
     
    }


    Set_My_Encuesta(EncuestaTema, EncuestaOpcion) {

        var Table = document.getElementById("TableEncuestasUserID");

        var EncuestasUser = GALSAN_CreateBlock.CreateElement("p", "EncuestasUser", EncuestaTema);


        Table.appendChild(EncuestasUser);

        var EncuestasUser = GALSAN_CreateBlock.CreateElement("p", "EncuestasUser", EncuestaOpcion);


        Table.appendChild(EncuestasUser);
        
    }


    Set_My_Posts(Tema, Mensaje) {

        var Table = document.getElementById("TablePostssUserID");

        var Tema = GALSAN_CreateBlock.CreateElement("p", "EncuestasUser", Tema);


        Table.appendChild(Tema);

        var Mensaje = GALSAN_CreateBlock.CreateElement("p", "EncuestasUser", Mensaje);


        Table.appendChild(Mensaje);
        
    }
        








    ViewConstructor() {



        GALSAN_CreateBlock.add_CSS_Class('.DesplegableUltimosMov',
        `
        width: 80%;
        height: auto;
        font-size: 2vw;
        text-align: center;
        padding: 1vw;
        margin: 4vh auto;
        background-color: rgb(41 85 107);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        
        `
    
        );


        GALSAN_CreateBlock.add_CSS_Class('.DesplegablePersonalArea',
`
font-size: 3.5vw;

`, GALSAN_CreateBlock.Screen_Mobile
);


        GALSAN_CreateBlock.add_CSS_Class('.ContainerUltimosMov',
    `
    width: 100%;
    height: auto;
    display: none;
    flex-direction: column;


    
    `

    );

  


GALSAN_CreateBlock.add_CSS_Class(
    ".TableEncuestasUser",
    `
    border: 1px black solid;
    background: #7da4b8;
    margin: 3vw 0;
    width: 100%;
    color: #D4D190;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: minmax(auto, auto);
`
);

GALSAN_CreateBlock.add_CSS_Class(
    ".TitleEncuestasUser",
    `
    grid-column-start: 1;
    text-align: center;
    grid-column-end: 3;
`
);

GALSAN_CreateBlock.add_CSS_Class(
    ".EncuestasUser",
    `
    color: white;
    text-align: center;
    padding: 0vw 2vw;
`
);




var DesplegablePersonalArea = GALSAN_CreateBlock.CreateElement("div", "DesplegablePersonalArea", "Últimos Movimientos");
GALSAN_CreateBlock.Attach_Attribute_onClick(DesplegablePersonalArea, "PageManager.o_mov.ExpandData()");

var ContainerUltimosMov = GALSAN_CreateBlock.CreateElement("div", "ContainerUltimosMov");
GALSAN_CreateBlock.AttachID(ContainerUltimosMov, "ContainerUltimosMovID");





var TableEncuestasUser = GALSAN_CreateBlock.CreateElement("div", "TableEncuestasUser");
GALSAN_CreateBlock.AttachID(TableEncuestasUser, "TableEncuestasUserID");


ContainerUltimosMov.appendChild(TableEncuestasUser);


var TitleEncuestasUser = GALSAN_CreateBlock.CreateElement("p", "TitleEncuestasUser", "Mis Encuestas");


TableEncuestasUser.appendChild(TitleEncuestasUser);





var TableEncuestasUser = GALSAN_CreateBlock.CreateElement("div", "TableEncuestasUser");
GALSAN_CreateBlock.AttachID(TableEncuestasUser, "TablePostssUserID");


ContainerUltimosMov.appendChild(TableEncuestasUser);


var TitleEncuestasUser = GALSAN_CreateBlock.CreateElement("p", "TitleEncuestasUser", "Mis Mensajes");


TableEncuestasUser.appendChild(TitleEncuestasUser);










                
    }             

}     











