class ModificarDatosBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////
    static IsOpen = 0;

    static o_Loader = new LoaderBlock();

    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        ModificarDatosBlock.patternPASS = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%^&+=]{0,})(?=\S+$).{8,}$/;
        ModificarDatosBlock.patternMAIL = /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
    }


    ///functions


    ExpandData() {
        if(ModificarDatosBlock.IsOpen == 0) {
            document.getElementById("ContainerModificarID").style.display = "flex";
            ModificarDatosBlock.IsOpen = 1;
        } else {
            document.getElementById("ContainerModificarID").style.display = "none";
            ModificarDatosBlock.IsOpen = 0;
        }
        
     
    }



   static showPass() {
        var passInput = document.getElementById("Pass_ant");
        var passInput2 = document.getElementById("New_pass");
        var passInput3 = document.getElementById("Confirm_New_pass");
    
        if(passInput.type == "password") {
            passInput.type = "text";
            passInput2.type = "text";
            passInput3.type = "text";
    
    
        } else {
            passInput.type = "password";
            passInput2.type = "password";
            passInput3.type = "password";
    
    
        }
    }


    ChangeData() {

        var EmailUser = document.getElementById("ProfileNick2ID").innerText;
        var AntPass = document.getElementById("Pass_ant").value;
        var New_pass = document.getElementById("New_pass").value;
        var Confirm_New_pass = document.getElementById("Confirm_New_pass").value;



        if (New_pass !== Confirm_New_pass) {
            alert("Las contraseñas no coinciden, intente de nuevo");
    
        } else if (EmailUser == null || EmailUser == "" || !ModificarDatosBlock.patternMAIL.test(EmailUser)) {
    
            alert("Correo en formato incorrecto");

        }  else if (AntPass == null || AntPass == "" || !ModificarDatosBlock.patternPASS.test(AntPass)) {
    
            alert("Tu anterior contraseña debe contener al menos, 8 caracteres, incluyendo números y letras minusculas y mayúsculas");
    
        } else if (New_pass == null || New_pass == "" || !ModificarDatosBlock.patternPASS.test(New_pass)) {
    
            alert("Contraseña debe contener al menos, 8 caracteres, incluyendo números y letras minusculas y mayúsculas");
    
        } else {

            var form_data = new FormData();

            form_data.append("OPERATION", "ChangeData_OPERATION");
            form_data.append("EmailUser", EmailUser);
            form_data.append("AntPass", AntPass);
            form_data.append("New_pass", New_pass);

    
    
    
            var data = CPetition.$Ajax_PETITION("./API/Login.php", form_data);

            data = data.responseText.replace(/['"]+/g, '');

    
               
                ModificarDatosBlock.o_Loader.HideLoader();
    
                var o_Overlay = new OverlayInformationBlock();
                o_Overlay.Set_Information_Modal(
                    "Información",
                    data,
                    "Cerrar"
                    );

                    PageManager.o_Overlay.SET_BOTON_Info(function () {
                        window.location.href = 'index.php';
                      });
        
                OverlayInformationBlock.OpenMessage();
        
      


        };
        
    };









    ViewConstructor() {


        GALSAN_CreateBlock.add_CSS_Class('.DesplegableModificarArea',
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


        GALSAN_CreateBlock.add_CSS_Class('.DesplegableModificarArea',
`
font-size: 3.5vw;

`, GALSAN_CreateBlock.Screen_Mobile
);

        GALSAN_CreateBlock.add_CSS_Class('.ContainerModificar',
    `
    width: 100%;
    height: auto;
    display: none;
    flex-direction: column;
    
    `

    );


    GALSAN_CreateBlock.add_CSS_Class('.DivInput',
    `
    margin: 2vw auto;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;

    
    `

    );


    GALSAN_CreateBlock.add_CSS_Class('.InputDatos',
    `
    width: 70%;
    font-size: 2.5vw;
    
    `

    );


    GALSAN_CreateBlock.add_CSS_Class(
        `.divButtonMod`,
        `
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;

`
    );


    GALSAN_CreateBlock.add_CSS_Class(
        `.buttonMod`,
        `
background-color: green;
padding: 0.5vw 1vw;
font-size: 1.5vw;
color: white;
border-radius: 15px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class('.ContainerModificar',
    `
    flex-direction: column;
    
    `, GALSAN_CreateBlock.Screen_Mobile

    );


    GALSAN_CreateBlock.add_CSS_Class('.spanojoMod',
    `
  
    position: absolute;
    right: 300px;
    bottom: 8px;
    `
);




GALSAN_CreateBlock.add_CSS_Class('.ojoMod',
    `
    width: 2vw;

    `
);


GALSAN_CreateBlock.add_CSS_Class('.ojoMod',
    `
    width: 3.5vw;
    `, GALSAN_CreateBlock.Screen_Middle
);


GALSAN_CreateBlock.add_CSS_Class('.spanojoMod',
`

position: absolute;
right: 128px;
bottom: 0px;
`, GALSAN_CreateBlock.Screen_Middle
);


GALSAN_CreateBlock.add_CSS_Class('.ojoMod',
    `
    width: 4vw;
    `, GALSAN_CreateBlock.Screen_Mobile
);


GALSAN_CreateBlock.add_CSS_Class('.spanojoMod',
    `
    position: absolute;
    right: 105px;
    bottom: 0px;
}
    `, GALSAN_CreateBlock.Screen_Mobile
);






var DesplegableModificarArea = GALSAN_CreateBlock.CreateElement("div", "DesplegableModificarArea", "Cambiar Contraseña");
GALSAN_CreateBlock.Attach_Attribute_onClick(DesplegableModificarArea, "PageManager.o_Mod.ExpandData()");

var ContainerModificar = GALSAN_CreateBlock.CreateElement("div", "ContainerModificar");
GALSAN_CreateBlock.AttachID(ContainerModificar, "ContainerModificarID");


var DivInput = GALSAN_CreateBlock.CreateElement("div", "DivInput");


ContainerModificar.appendChild(DivInput);


var InputDatos = GALSAN_CreateBlock.CreateElement("input", "InputDatos");
InputDatos.type = "password";


DivInput.appendChild(InputDatos);

InputDatos.placeholder = "Antigua Contraseña";
GALSAN_CreateBlock.AttachID(InputDatos, "Pass_ant");


var span = GALSAN_CreateBlock.CreateElement("span", "spanojoMod");
DivInput.appendChild(span);
var ojo = GALSAN_CreateBlock.CreateElement("img", "ojoMod", "./assets/img/icon/ojo.png");
GALSAN_CreateBlock.Attach_Attribute_onClick(ojo, "ModificarDatosBlock.showPass()");
span.appendChild(ojo);



var DivInput = GALSAN_CreateBlock.CreateElement("div", "DivInput");


ContainerModificar.appendChild(DivInput);


var InputDatos = GALSAN_CreateBlock.CreateElement("input", "InputDatos");
InputDatos.type = "password";


DivInput.appendChild(InputDatos);

InputDatos.placeholder = "Nueva Contraseña";
GALSAN_CreateBlock.AttachID(InputDatos, "New_pass");


var DivInput = GALSAN_CreateBlock.CreateElement("div", "DivInput");


ContainerModificar.appendChild(DivInput);


var InputDatos = GALSAN_CreateBlock.CreateElement("input", "InputDatos");
InputDatos.type = "password";


DivInput.appendChild(InputDatos);
InputDatos.placeholder = "Confirma Contraseña";
GALSAN_CreateBlock.AttachID(InputDatos, "Confirm_New_pass");



var DivInput = GALSAN_CreateBlock.CreateElement("div", "divButtonMod");


ContainerModificar.appendChild(DivInput);


var InputDatos = GALSAN_CreateBlock.CreateElement("button", "buttonMod", "Cambiar");

GALSAN_CreateBlock.Attach_Attribute_onClick(InputDatos, "PageManager.o_Mod.ChangeData()");


DivInput.appendChild(InputDatos);
                
    }             

}     






