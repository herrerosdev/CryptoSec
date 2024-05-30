class RecoverLoginBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////
    static o_Overlay = null;

    static o_Loader = new LoaderBlock();

    constructor() {


        
        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();


        RecoverLoginBlock.patternMAIL = /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
        RecoverLoginBlock.patternPASS = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%^&+=]{0,})(?=\S+$).{8,}$/;



        
    }


    getClassName() {
        return this.constructor.name;
    }




    
    static showPassRecover() {
        var passInput = document.getElementById("PASS_Recover");
        var passInput2 = document.getElementById("PASS_Recover_Confirm");
    
        if(passInput.type == "password") {
            passInput.type = "text";
            passInput2.type = "text";
    
    
        } else {
            passInput.type = "password";
            passInput2.type = "password";
    
    
        }
    }




    static RecoverPass() {

        RecoverLoginBlock.o_Loader.ShowLoader();


        var Contraseña = document.getElementById("PASS_Recover").value;
        var Confirma_Contraseña = document.getElementById("PASS_Recover_Confirm").value;

        if (Contraseña !== Confirma_Contraseña) {
            alert("Las contraseñas no coinciden, intente de nuevo");
    
        } else if (Correokey == null || Correokey == "" || !RecoverLoginBlock.patternMAIL.test(Correokey)) {
    
            alert("Correo en formato incorrecto");
    
    
        } else if (Contraseña == null || Contraseña == "" || !RecoverLoginBlock.patternPASS.test(Contraseña)) {
    
            alert("Contraseña debe contener al menos, 8 caracteres, incluyendo números y letras minusculas y mayúsculas");
    
        } else { //Si todo es correcto iniciamos sesion


                var form_data = new FormData();
        
                form_data.append("OPERATION", "Recover_Pass_OPERATION");
                form_data.append("Correo", Correokey);
                form_data.append("token", token);
                form_data.append("Contraseña", Contraseña);

                var data = CPetition.$Ajax_PETITION("./API/Login.php", form_data);

                data = data.responseText.replace(/['"]+/g, '');

        
                   
                RecoverLoginBlock.o_Loader.HideLoader();
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








GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_panel`,
    `
    background: azure;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_panelRecovey`,
    `
    background: azure;
    position: absolute;
    
    `
);



GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}two`,
    `

    background: #789AAB;
    display: block;
    text-align: center;
    margin: 2vw auto;
    width: 70%;
    height: auto;
    border: 7px solid white;
    `
);

GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_header`,
    `
    display: inline-flex;
    color: #29556b;
    font-size: 2vw;
    font-weight: 700;
    width: 100%;
    text-transform: uppercase;
    align-items: center;
    justify-content: space-between;
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_header h1`,
    `
    padding-left: 6vw;
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}two_color`,
    `
    color: #d4d190;
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_content`,
    `
    width: 80%;
    margin: 0 auto;
    `
);

GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group`,
    `
    display        : flex;
    position: relative;
    flex-wrap      : wrap;
    justify-content: space-between;
    margin         : 0 0 20px;
    `
);

GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group_button_Register`,
    `
    display        : flex;
    flex-wrap      : wrap;
    justify-content: space-between;
    margin         : 0 0 20px;
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group label`,
    `
    display       : block;
    margin        : 0 0 10px;
    color         : black;
    font-size     : 12px;
    font-weight   : 500;
    line-height   : 1;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group input`,
    `
    outline      : none;
    display      : block;
    background   : rgba(0, 0, 0, 0.1);
    width        : 100%;
    border       : 0;
    border-radius: 4px;
    box-sizing   : border-box;
    padding      : 12px 20px;
    color        : rgba(0, 0, 0, 0.6);
    font-family  : inherit;
    font-size    : inherit;
    font-weight  : 500;
    line-height  : inherit;
    transition   : 0.3s ease;
    `
);





GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group button`,
    `
    outline: none;
    background: #29556b;
    width: 100%;
    border: 0;
    margin-top: 2vw;
    border-radius: 4px;
    padding: 12px 20px;
    color: white;
    font-family: inherit;
    font-size: inherit;
    font-weight: semibold;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    `
);

GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group_button_Register button`,
    `
    outline: none;
    background:#d4d190;
    width: 100%;
    border: 0;
    margin-top: 2vw;
    border-radius: 4px;
    padding: 12px 20px;
    color: white;
    font-family: inherit;
    font-size: inherit;
    font-weight: semibold;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    `
);





GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group2`,
    `
    display        : flex;
    justify-content: space-between;
    font-size: 2vw;
    `
);

GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group2`,
    `
    font-size: 1.5vw;
    `, GALSAN_CreateBlock.Screen_Middle
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}form_group2`,
    `
    font-size: 2vw;
    `, GALSAN_CreateBlock.Screen_Mobile
);

GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}imput_form`,
    `
    width: 50%;
    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}div_form`,
    `
    width: 100%;
    text-align: initial;
    font-size: 1.5vw;
    `
);




GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}spanojo`,
    `
  
    position: absolute;
    right: 26px;
    bottom: 5px;
    `
);




GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}ojo`,
    `
    width: 2vw;

    `
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}ojo`,
    `
    width: 3.5vw;
    `, GALSAN_CreateBlock.Screen_Middle
);


GALSAN_CreateBlock.add_CSS_Class(`.${this.getClassName()}ojo`,
    `
    width: 7vw;
    `, GALSAN_CreateBlock.Screen_Mobile
);







    var form_panel = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_panel`);

    form_panel.classList.add(`${this.getClassName()}two`);


                

                            
                
                        var form_header = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_header`);
                        form_header.classList.add(`${this.getClassName()}two_color`);
                        form_panel.appendChild(form_header);
                
                             var Registro = GALSAN_CreateBlock.CreateElement("h1", null , "Recuperación");
                             form_header.appendChild(Registro);


                        
                        var form_content = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_content`);
                        form_panel.appendChild(form_content);
                
                            var form = GALSAN_CreateBlock.CreateElement("form", null);
                            form_content.appendChild(form);



                            var form_group = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_group`);
                            form.appendChild(form_group);
            

                                var form_group = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_group`);
                                form.appendChild(form_group);
                
                                    var labelUsername = GALSAN_CreateBlock.CreateElement("label", null , "Correo");
                                    form_group.appendChild(labelUsername);
                
                                    var InputUsername = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}div_form`, Correokey);
                                   
                                   
                                    form_group.appendChild(InputUsername);
                                
                
                
                                var form_group = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_group`);
                                form.appendChild(form_group);
                
                                    var labelPassword = GALSAN_CreateBlock.CreateElement("label", null , "Nueva Contraseña");
                                    form_group.appendChild(labelPassword);
                
                                    var InputPassword = GALSAN_CreateBlock.CreateElement("input", `${this.getClassName()}imput_form`, "password");
                                    InputPassword.type = "password";
                                    GALSAN_CreateBlock.AttachID(InputPassword, `PASS_Recover`);
                                    form_group.appendChild(InputPassword);


                                    
                    var span = GALSAN_CreateBlock.CreateElement("span", "spanojo");
                    form_group.appendChild(span);
                    var ojo = GALSAN_CreateBlock.CreateElement("img", "ojo", "./assets/img/icon/ojo.png");
                    GALSAN_CreateBlock.Attach_Attribute_onClick(ojo, "RecoverLoginBlock.showPassRecover()");
                    span.appendChild(ojo);


                                var form_group = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_group`);
                                form.appendChild(form_group);
                    
                                    var labelPassword = GALSAN_CreateBlock.CreateElement("label", null , "Confirmar Contraseña");
                                    form_group.appendChild(labelPassword);
                    
                                    var InputPassword = GALSAN_CreateBlock.CreateElement("input", `${this.getClassName()}imput_form`, "password");
                                    InputPassword.type = "password";
                                    GALSAN_CreateBlock.AttachID(InputPassword, `PASS_Recover_Confirm`);
                                    form_group.appendChild(InputPassword);


                                


                                    var form_group = GALSAN_CreateBlock.CreateElement("div", `${this.getClassName()}form_group_button_Register`);
                                    form.appendChild(form_group);
                    
                                        var Registro_Button = GALSAN_CreateBlock.CreateElement("button", null , "Realizar cambio");
                                        Registro_Button.setAttribute('type', 'button');
                                        Registro_Button.classList.add(`${this.getClassName()}two_color_background`);

                                        GALSAN_CreateBlock.Attach_Attribute_onClick(Registro_Button, "RecoverLoginBlock.RecoverPass()");
                                        form_group.appendChild(Registro_Button);


                
    }             

}     



