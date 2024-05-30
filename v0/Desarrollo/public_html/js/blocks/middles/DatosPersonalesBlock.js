class DatosPersonalesBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////


    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        
    }


    ViewConstructor() {


        GALSAN_CreateBlock.add_CSS_Class('.datos',
    `
    width     : 80%;
    margin    : 0 auto;
    text-align: center;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.DivDatos',
`

    height          : auto;
    background-color: white;
    border          : black 1px solid;
    border-radius   : 10%;
    margin          : 2vw auto;
    width           : 80%;
`
);


GALSAN_CreateBlock.add_CSS_Class('.DatosTitle',
`
border-bottom: black 3px dashed;
width        : 100%;
padding      : 1vw 0;
`
);


GALSAN_CreateBlock.add_CSS_Class('.DatosInfo',
`
width  : 100%;
padding: 1vw 0;
`
);


GALSAN_CreateBlock.add_CSS_Class('.datos_personales',
`
height          : auto;
padding         : 1vw;
background-color: rgb(125 164 184);
border          : 10px black double;
`
);


GALSAN_CreateBlock.add_CSS_Class('.datos_notificaciones',
`
height          : auto;
padding         : 1vw;
background-color: rgb(125 164 184);
border          : 10px black double;
`
);

GALSAN_CreateBlock.add_CSS_Class('.datos_personales_title',
`
font-weight: 800;
`
);

GALSAN_CreateBlock.add_CSS_Class('.datos_notificaciones_title',
`
font-weight: 800;
`
);




var datos = GALSAN_CreateBlock.CreateElement("section", "datos");


var datos_personales = GALSAN_CreateBlock.CreateElement("section", "datos_personales");
datos.appendChild(datos_personales);


var datos_personales_title = GALSAN_CreateBlock.CreateElement("p", "datos_personales_title", "Datos Personales");
datos_personales.appendChild(datos_personales_title);

var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivDatos");
datos_personales.appendChild(DivDatos);

var DatosTitle = GALSAN_CreateBlock.CreateElement("p", "DatosTitle", "Nombre");
DivDatos.appendChild(DatosTitle);

var DatosInfo = GALSAN_CreateBlock.CreateElement("p", "DatosInfo", "Correo");
DivDatos.appendChild(DatosInfo);





var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivDatos");
datos_personales.appendChild(DivDatos);

var DatosTitle = GALSAN_CreateBlock.CreateElement("p", "DatosTitle", "Nombre");
DivDatos.appendChild(DatosTitle);

var DatosInfo = GALSAN_CreateBlock.CreateElement("p", "DatosInfo", "Correo");
DivDatos.appendChild(DatosInfo);





var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivDatos");
datos_personales.appendChild(DivDatos);

var DatosTitle = GALSAN_CreateBlock.CreateElement("p", "DatosTitle", "Nombre");
DivDatos.appendChild(DatosTitle);

var DatosInfo = GALSAN_CreateBlock.CreateElement("p", "DatosInfo", "Correo");
DivDatos.appendChild(DatosInfo);








var datos_notificaciones = GALSAN_CreateBlock.CreateElement("section", "datos_notificaciones");
datos.appendChild(datos_notificaciones);


var datos_notificaciones_title = GALSAN_CreateBlock.CreateElement("p", "datos_notificaciones_title", "Últimos movimientos");
datos_notificaciones.appendChild(datos_notificaciones_title);

var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivDatos");
datos_notificaciones.appendChild(DivDatos);

var DatosTitle = GALSAN_CreateBlock.CreateElement("p", "DatosTitle", "Nombre");
DivDatos.appendChild(DatosTitle);

var DatosInfo = GALSAN_CreateBlock.CreateElement("p", "DatosInfo", "Correo");
DivDatos.appendChild(DatosInfo);





var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivDatos");
datos_notificaciones.appendChild(DivDatos);

var DatosTitle = GALSAN_CreateBlock.CreateElement("p", "DatosTitle", "Nombre");
DivDatos.appendChild(DatosTitle);

var DatosInfo = GALSAN_CreateBlock.CreateElement("p", "DatosInfo", "Correo");
DivDatos.appendChild(DatosInfo);





var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivDatos");
datos_notificaciones.appendChild(DivDatos);

var DatosTitle = GALSAN_CreateBlock.CreateElement("p", "DatosTitle", "Nombre");
DivDatos.appendChild(DatosTitle);

var DatosInfo = GALSAN_CreateBlock.CreateElement("p", "DatosInfo", "Correo");
DivDatos.appendChild(DatosInfo);
                
    }             

}   

o_Datos = new DatosPersonalesBlock();









