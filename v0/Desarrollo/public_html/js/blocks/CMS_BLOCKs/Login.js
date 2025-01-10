class LoginBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////


    constructor() {


        
        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();



        LoginBlock.patternUSER = /^\S*$/;
        LoginBlock.patternMAIL = /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
        LoginBlock.patternPASS = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%^&+=]{0,})(?=\S+$).{8,}$/;


        //inicializamos el formulario de login a display:none
        LoginBlock.HideForm();
        LoginBlock.HideForgotPass();
       



       

        
    }


    static CALLBACK_LOGIN = function() {
     
    };

    SET_Login_Function(CALLBACK_FUNCTION) {

        LoginBlock.CALLBACK_LOGIN = CALLBACK_FUNCTION;

    }


    static CALLBACK_ForgetPass = function() {
     
    };

    SET_ForgetPass_Function(CALLBACK_FUNCTION) {

        LoginBlock.CALLBACK_ForgetPass = CALLBACK_FUNCTION;

    }


    static CALLBACK_REGISTER = function() {
     
    };

    SET_Register_Function(CALLBACK_FUNCTION) {

        LoginBlock.CALLBACK_REGISTER = CALLBACK_FUNCTION;

    }

    Set_Form_Check(Texto) {
        var form_check = document.getElementById("form_check");

        var InputCheck = GALSAN_CreateBlock.CreateElement("input", "checkButton");
        InputCheck.type = "checkbox";
        GALSAN_CreateBlock.AttachID(InputCheck, "checkButtonID");
        form_check.appendChild(InputCheck);


        var InputCheck = GALSAN_CreateBlock.CreateElement("label", null, Texto);
        form_check.appendChild(InputCheck);
     

     }

    static showPass() {
       var passInput = document.getElementById("PASS_Login");
    
        if(passInput.type == "password") {
            passInput.type = "text";
    
    
        } else {
            passInput.type = "password";
    
        }
    }


    
    static showPassRegister() {
        var passInput = document.getElementById("PASS_Register");
        var passInput2 = document.getElementById("PASS_Register_Confirm");
    
        if(passInput.type == "password") {
            passInput.type = "text";
            passInput2.type = "text";
    
    
        } else {
            passInput.type = "password";
            passInput2.type = "password";
    
    
        }
    }

    //Esconde el formulario de login
    static HideForm(){

        document.getElementById("BlockLogin").style.display = "none";



    }

    //Muestra el formulario de login
    static ShowForm(){

     document.getElementById("BlockLogin").style.display = "";

    }


    static ShowForgotPassOverlay(){

        document.getElementById("BlockLogin").style.display = "none";

        document.getElementById("ForgotPassOverlay").style.display = "";
   
       }


       static HideForgotPass(){

        document.getElementById("ForgotPassOverlay").style.display = "none";



    }


    static ShowDirectly_RegisterPanel(){
        LoginBlock.ShowForm();
        LoginBlock.ExpandPanelTwo();
    };

    
    static ExpandPanelTwo() {

        document.getElementById("IdTwo").classList.add("active_Register");

    }

    static ClosePanelTwo() {

        document.getElementById("IdTwo").classList.remove("active_Register");




    }




    static Avality() {

        var username = document.getElementById("User_Register").value;		

        if (username == null || username == "" || !LoginBlock.patternUSER.test(username)) {
            $('#result-username').fadeIn(1000).html("Formato Incorrecto, no se admiten espacios");

        } else {
        
        var form_data = new FormData();
        
        form_data.append("OPERATION", "CHECK_AVALITY_OPERATION");
        form_data.append("username", username);


       var data = CPetition.$Ajax_PETITION("./API/Login.php", form_data);

       $('#result-username').fadeIn(1000).html(data.responseText);

       LoginBlock.Control_Duplicates(data.responseText);
        }

    }


    static CheckPass() {

        var Contraseña = document.getElementById("PASS_Register").value;
        var Confirma_Contraseña = document.getElementById("PASS_Register_Confirm").value;

        if (Contraseña == null || Contraseña == "" || !LoginBlock.patternPASS.test(Contraseña)) {
            $('#result-passwords').fadeIn(1000).html("La Contraseña debe contener al menos, 8 caracteres, incluyendo números y letras minusculas y mayúsculas");
    
        } else if (Contraseña !== Confirma_Contraseña) {
 
             $('#result-passwords').fadeIn(1000).html("Las contraseñas no coinciden");

        } else {

            $('#result-passwords').fadeIn(1000).html("Las contraseñas coinciden, continua");
        }

    }



    static Control_Duplicates(respuesta) {
        if(respuesta.includes("Oh no")) {
            document.getElementById("User_Register").value = "";
        }
    }



    static ForgetPass() {


            LoginBlock.CALLBACK_ForgetPass();

            LoginBlock.HideForgotPass();


    };



    ViewConstructor() {


        GALSAN_CreateBlock.add_CSS_Class('.BackgroundOverlayLogin',
    `
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 12;
        cursor: pointer;


    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.FormLogin',
    `
    display: block;
    text-align: center;
    position: relative;
    margin: 0 auto;
    width: 70%;
    height: auto;
    top: 5%;
    left: 0%;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_toggle',
    `
    position: absolute;
         top: 72px;
    
    `
);



GALSAN_CreateBlock.add_CSS_Class('.closeButton',
    `
    width: 9%;
    padding: 1vw;
    padding-right: 3vw;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_panel',
    `
    background: azure;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.form_panelRecovey',
    `
    background: azure;
    position: absolute;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.one',
    `
    position: absolute;
    width: 100%;
    height: auto;
    border: 7px solid white;
    background-color: #c6dbe5;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.two',
    `
    position: absolute;
    border: 7px solid white;
    background: #789AAB;
    width: 100%;
    height: auto;
    left: 200%;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_header',
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


GALSAN_CreateBlock.add_CSS_Class('.form_header h1',
    `
    padding-left: 6vw;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.two_color',
    `
    color: #d4d190;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.form_content',
    `
    width: 80%;
    margin: 0 auto;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_group',
    `
    display        : flex;
    position: relative;
    flex-wrap      : wrap;
    justify-content: space-between;
    margin         : 0 0 20px;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_AcceptCheck',
    `
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: baseline;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_AcceptCheck label',
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

GALSAN_CreateBlock.add_CSS_Class('.checkButton',
    `
    width: 10%;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_group_button_Register',
    `
    display        : flex;
    flex-wrap      : wrap;
    justify-content: space-between;
    margin         : 0 0 20px;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.form_group label',
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


GALSAN_CreateBlock.add_CSS_Class('.form_group input',
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





GALSAN_CreateBlock.add_CSS_Class('.form_group button',
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

GALSAN_CreateBlock.add_CSS_Class('.form_group_button_Register button',
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






/* GALSAN_CreateBlock.add_CSS_Class('.hoverPulsador',
    `
    left: 93%;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    `
); */

GALSAN_CreateBlock.add_CSS_Class('.pulsadoresDiv',
    `
    height: 50px;
    width: 5%;
    position: relative;
    display: block;
    top: 60px;
    left: 0.5%;
    transition: 0.6s ease;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.pulsador',
    `
    display: block;
    position: absolute;
    top: 0px;
    left: 25%;
    background: #ffffff;
    height: 50px;
    width: 3px;
    transition: 0.6s ease;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.pulsador2',
    `
    display: block;
    position: absolute;
    top: 0px;
    left: 50%;
    background: #ffffff;
    height: 50px;
    width: 3px;
    transition: 0.6s ease;
    `
);




GALSAN_CreateBlock.add_CSS_Class('.form_group2',
    `
    display        : flex;
    justify-content: space-between;
    font-size: 2vw;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_group2',
    `
    font-size: 1.5vw;
    `, GALSAN_CreateBlock.Screen_Middle
);


GALSAN_CreateBlock.add_CSS_Class('.form_group2',
    `
    font-size: 2vw;
    `, GALSAN_CreateBlock.Screen_Mobile
);

GALSAN_CreateBlock.add_CSS_Class('.imput_form',
    `
    width: 50%;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_remember',
    `
    float: left;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_doIt',
    `
    text-decoration: underline;
    color: blue;
    `
);



GALSAN_CreateBlock.add_CSS_Class('.form_recovery',
    `
    float: right;
    text-decoration: underline;
    color: blue;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.active_Register',
    `
    transition: all 3s ease-in-out;
        left: 0%;
    cursor: default;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.result',
    `
  
    grid-column-start: 1;
    grid-column-end  : 3;
    font-size: 2vw;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.spanojo',
    `
  
    position: absolute;
    right: 26px;
    bottom: 5px;
    `
);




GALSAN_CreateBlock.add_CSS_Class('.ojo',
    `
    width: 2vw;

    `
);


GALSAN_CreateBlock.add_CSS_Class('.ojo',
    `
    width: 3.5vw;
    `, GALSAN_CreateBlock.Screen_Middle
);


GALSAN_CreateBlock.add_CSS_Class('.ojo',
    `
    width: 7vw;
    `, GALSAN_CreateBlock.Screen_Mobile
);




/* var WindowLogin = GALSAN_CreateBlock.CreateElement("div", "WindowLogin");
GALSAN_CreateBlock.AttachID(WindowLogin, "BlockLogin"); */

var BackgroundOverlay = GALSAN_CreateBlock.CreateElement("div", "BackgroundOverlayLogin");
GALSAN_CreateBlock.AttachID(BackgroundOverlay, "BlockLogin");




var FormLogin = GALSAN_CreateBlock.CreateElement("div", "FormLogin");

GALSAN_CreateBlock.AttachID(FormLogin, "LoginRegisterDiv");
BackgroundOverlay.appendChild(FormLogin);


    var form_panel = GALSAN_CreateBlock.CreateElement("div", "form_panel");
    form_panel.classList.add("one");
    FormLogin.appendChild(form_panel);





        var form_header = GALSAN_CreateBlock.CreateElement("div", "form_header");
        form_panel.appendChild(form_header);

             var Login = GALSAN_CreateBlock.CreateElement("h1", null , "Inicio sesión");
             form_header.appendChild(Login);

             var ImgX = GALSAN_CreateBlock.CreateElement("img", "closeButton", "assets/img/icon/delete.png");
             GALSAN_CreateBlock.Attach_Attribute_onClick(ImgX, "LoginBlock.HideForm()");
             form_header.appendChild(ImgX);

        
        var form_content = GALSAN_CreateBlock.CreateElement("div", "form_content");
        form_panel.appendChild(form_content);

            var form = GALSAN_CreateBlock.CreateElement("form", null);
            form_content.appendChild(form);

                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                form.appendChild(form_group);

                    var labelUsername = GALSAN_CreateBlock.CreateElement("label", null , "Correo o usuario");
                    form_group.appendChild(labelUsername);

                    var InputUsername = GALSAN_CreateBlock.CreateElement("input", "imput_form");
                    GALSAN_CreateBlock.AttachID(InputUsername, "Correo_Login");
                    form_group.appendChild(InputUsername);
                


                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                form.appendChild(form_group);

                    var labelPassword = GALSAN_CreateBlock.CreateElement("label", null , "Contraseña");
                    form_group.appendChild(labelPassword);

                    var InputPassword = GALSAN_CreateBlock.CreateElement("input", "imput_form");
                    GALSAN_CreateBlock.AttachID(InputPassword, "PASS_Login");
                    InputPassword.type = "password";
                    form_group.appendChild(InputPassword);



                    var span = GALSAN_CreateBlock.CreateElement("span", "spanojo");
                    form_group.appendChild(span);
                    var ojo = GALSAN_CreateBlock.CreateElement("img", "ojo", "./assets/img/icon/ojo.png");
                    GALSAN_CreateBlock.Attach_Attribute_onClick(ojo, "LoginBlock.showPass()");
                    span.appendChild(ojo);


                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group2");
                form.appendChild(form_group);

                var div = GALSAN_CreateBlock.CreateElement("div");
                form_group.appendChild(div);

                    var form_remember = GALSAN_CreateBlock.CreateElement("a", "form_remember", "No estás registrado,");
                    div.appendChild(form_remember);
                    var form_remember = GALSAN_CreateBlock.CreateElement("a", "form_doIt", "hazlo aquí");
                    div.appendChild(form_remember);
                    GALSAN_CreateBlock.Attach_Attribute_onClick(form_remember, "LoginBlock.ExpandPanelTwo()");


                        var form_recovery = GALSAN_CreateBlock.CreateElement("a", "form_recovery", "Olvidaste tu contraseña?");
                        GALSAN_CreateBlock.Attach_Attribute_onClick(form_recovery, "LoginBlock.ShowForgotPassOverlay()");
                        form_group.appendChild(form_recovery);


                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                form.appendChild(form_group);

                    var Log_in_Button = GALSAN_CreateBlock.CreateElement("button", null, "Iniciar sesión");
                    Log_in_Button.setAttribute('type', 'button');
                    GALSAN_CreateBlock.Attach_Attribute_onClick(Log_in_Button, "LoginBlock.CALLBACK_LOGIN()");
                    form_group.appendChild(Log_in_Button);


                    



    var form_panel = GALSAN_CreateBlock.CreateElement("div", "form_panel");

    form_panel.classList.add("two");
    GALSAN_CreateBlock.AttachID(form_panel, "IdTwo");
    FormLogin.appendChild(form_panel);
                

                            
                
                        var form_header = GALSAN_CreateBlock.CreateElement("div", "form_header");
                        form_header.classList.add("two_color");
                        form_panel.appendChild(form_header);
                
                             var Registro = GALSAN_CreateBlock.CreateElement("h1", null , "Registro");
                             form_header.appendChild(Registro);

                             var ImgX = GALSAN_CreateBlock.CreateElement("img", "closeButton", "assets/img/icon/delete.png");
                             GALSAN_CreateBlock.AttachID(ImgX, "toggle");
                             GALSAN_CreateBlock.Attach_Attribute_onClick(ImgX, "LoginBlock.ClosePanelTwo()");
                             form_header.appendChild(ImgX);
                
                        
                        var form_content = GALSAN_CreateBlock.CreateElement("div", "form_content");
                        form_panel.appendChild(form_content);
                
                            var form = GALSAN_CreateBlock.CreateElement("form", null);
                            form_content.appendChild(form);



                            var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                            form.appendChild(form_group);
            
                                var labelUsername = GALSAN_CreateBlock.CreateElement("label", null , "Nombre Usuario");
                                form_group.appendChild(labelUsername);
            
                                var InputUsername = GALSAN_CreateBlock.CreateElement("input", "imput_form");
                               GALSAN_CreateBlock.Attach_Attribute_onblur(InputUsername, "LoginBlock.Avality()");
                                GALSAN_CreateBlock.AttachID(InputUsername, "User_Register");
                                form_group.appendChild(InputUsername);


                                var InputUsername = GALSAN_CreateBlock.CreateElement("div", "result");
                                GALSAN_CreateBlock.AttachID(InputUsername, "result-username");
                                form_group.appendChild(InputUsername);


                
                                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                                form.appendChild(form_group);
                
                                    var labelUsername = GALSAN_CreateBlock.CreateElement("label", null , "Correo");
                                    form_group.appendChild(labelUsername);
                
                                    var InputUsername = GALSAN_CreateBlock.CreateElement("input", "imput_form");
                                    GALSAN_CreateBlock.AttachID(InputUsername, "Correo_Register");
                                    form_group.appendChild(InputUsername);
                                
                
                
                                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                                form.appendChild(form_group);
                
                                    var labelPassword = GALSAN_CreateBlock.CreateElement("label", null , "Contraseña");
                                    form_group.appendChild(labelPassword);
                
                                    var InputPassword = GALSAN_CreateBlock.CreateElement("input", "imput_form", "password");
                                    InputPassword.type = "password";
                                    GALSAN_CreateBlock.AttachID(InputPassword, "PASS_Register");
                                    form_group.appendChild(InputPassword);


                                    
                    var span = GALSAN_CreateBlock.CreateElement("span", "spanojo");
                    form_group.appendChild(span);
                    var ojo = GALSAN_CreateBlock.CreateElement("img", "ojo", "./assets/img/icon/ojo.png");
                    GALSAN_CreateBlock.Attach_Attribute_onClick(ojo, "LoginBlock.showPassRegister()");
                    span.appendChild(ojo);


                                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                                form.appendChild(form_group);
                    
                                    var labelPassword = GALSAN_CreateBlock.CreateElement("label", null , "Confirmar Contraseña");
                                    form_group.appendChild(labelPassword);
                    
                                    var InputPassword = GALSAN_CreateBlock.CreateElement("input", "imput_form", "password");
                                    GALSAN_CreateBlock.Attach_Attribute_oninput(InputPassword, "LoginBlock.CheckPass()");
                                    InputPassword.type = "password";

                                    GALSAN_CreateBlock.AttachID(InputPassword, "PASS_Register_Confirm");
                                    form_group.appendChild(InputPassword);


                                    var InputResult = GALSAN_CreateBlock.CreateElement("div", "result");
                                    GALSAN_CreateBlock.AttachID(InputResult, "result-passwords");
                                    form_group.appendChild(InputResult);

                                


                                    var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group_button_Register");
                                    form.appendChild(form_group);
                    
                                        var Registro_Button = GALSAN_CreateBlock.CreateElement("button", null , "Registro");
                                        Registro_Button.setAttribute('type', 'button');
                                        Registro_Button.classList.add("two_color_background");

                                        GALSAN_CreateBlock.Attach_Attribute_onClick(Registro_Button, "LoginBlock.CALLBACK_REGISTER()");
                                        form_group.appendChild(Registro_Button);


                                        var form_group = GALSAN_CreateBlock.CreateElement("div", "form_AcceptCheck");
                                        GALSAN_CreateBlock.AttachID(form_group, "form_check");
                                        form.appendChild(form_group);










    ///////////////////////////////////////////////////////////////
    /////////////////forgot pass ///////////////////////////////////
////////////////////////////////////////////////////////////////////////

var BackgroundOverlay = GALSAN_CreateBlock.CreateElement("div", "BackgroundOverlayLogin");
GALSAN_CreateBlock.AttachID(BackgroundOverlay, "ForgotPassOverlay");




var FormLogin = GALSAN_CreateBlock.CreateElement("div", "FormLogin");

GALSAN_CreateBlock.AttachID(FormLogin, "LoginRegisterDiv");
BackgroundOverlay.appendChild(FormLogin);


    var form_panel = GALSAN_CreateBlock.CreateElement("div", "form_panelRecovey");
    FormLogin.appendChild(form_panel);





        var form_header = GALSAN_CreateBlock.CreateElement("div", "form_header");
        form_panel.appendChild(form_header);

             var Login = GALSAN_CreateBlock.CreateElement("h1", null , "Recuperación");
             form_header.appendChild(Login);

             var ImgX = GALSAN_CreateBlock.CreateElement("img", "closeButton", "assets/img/icon/delete.png");
             GALSAN_CreateBlock.Attach_Attribute_onClick(ImgX, "LoginBlock.HideForgotPass()");
             form_header.appendChild(ImgX);

        
        var form_content = GALSAN_CreateBlock.CreateElement("div", "form_content");
        form_panel.appendChild(form_content);

            var form = GALSAN_CreateBlock.CreateElement("form", null);
            form_content.appendChild(form);

                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                form.appendChild(form_group);

                    var labelUsername = GALSAN_CreateBlock.CreateElement("label", null , "Correo");
                    form_group.appendChild(labelUsername);

                    var InputUsername = GALSAN_CreateBlock.CreateElement("input", "imput_form");
                    InputUsername.placeholder = "Introduce tu email";
                    GALSAN_CreateBlock.AttachID(InputUsername, "Correo_Recover");
                    form_group.appendChild(InputUsername);


                    var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                    form.appendChild(form_group);
    
                        var Log_in_Button = GALSAN_CreateBlock.CreateElement("button", null, "Enviar");
                        Log_in_Button.setAttribute('type', 'button');
                        GALSAN_CreateBlock.Attach_Attribute_onClick(Log_in_Button, "LoginBlock.ForgetPass()");
                        form_group.appendChild(Log_in_Button);
                
                
    }             

}     










        





