class LoginBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////


    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        LoginBlock.panelOne = $('.one').height() +14,
        LoginBlock.panelTwo = $('.two')[0].scrollHeight +10;

        LoginBlock.patternUSER = /^\S*$/;
        LoginBlock.patternMAIL = /[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;
        LoginBlock.patternPASS = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%^&+=]{0,})(?=\S+$).{8,}$/;


        //inicializamos el formulario de login a display:none
        LoginBlock.HideForm()


        $('.FormLogin').animate({
            'min-height': LoginBlock.panelOne
            
          }, 0);

       

        
    }

    //Esconde el formulario de login
    static HideForm(){

        document.getElementById("BlockLogin").style.display = "none";



    }

    //Muestra el formulario de login
    static ShowForm(){

     document.getElementById("BlockLogin").style.display = "";

    }


    static HoverTwo() {
        document.getElementById("IdTwo").classList.add("hoverPulsador");

    };

    static UnHoverTwo() {
        document.getElementById("IdTwo").classList.remove("hoverPulsador");

    };


    static ExpandPanelTwo() {

        document.getElementById("divPulsadores").style.opacity = "0";
        document.getElementById("IdTwo").classList.add("active_Register");

        $('.FormLogin').animate({
            'height': LoginBlock.panelTwo
            
          }, 200);
    
          $('.one').animate({
            'height': LoginBlock.panelTwo
            
          }, 200);


    }

    static ClosePanelTwo() {

        document.getElementById("IdTwo").classList.remove("active_Register");

        document.getElementById("divPulsadores").style.opacity = "1";
  
        $('.FormLogin').animate({
            'height': this.panelOne +14
          }, 200);

          $('.one').animate({
            'height': this.panelOne
            
          }, 200);


    }


    static StartRegister() {

        var Usuario = document.getElementById("User_Register").value;
        var Correo = document.getElementById("Correo_Register").value;
        var Contraseña = document.getElementById("PASS_Register").value;
        var Confirma_Contraseña = document.getElementById("PASS_Register_Confirm").value;


        if (Contraseña !== Confirma_Contraseña) {
            alert("Las contraseñas no coinciden, intente de nuevo");
    
        } else if (Usuario == null || Usuario == "" || !LoginBlock.patternUSER.test(Usuario)) {
    
            alert("Usuario no admite espacios en blanco ni vacío");
    
        } else if (Correo == null || Correo == "" || !LoginBlock.patternMAIL.test(Correo)) {
    
            alert("Correo en formato incorrecto");
    
    
    
        } else if (Contraseña == null || Contraseña == "" || !LoginBlock.patternPASS.test(Contraseña)) {
    
            alert("Contraseña debe contener al menos, 8 caracteres, incluyendo números y letras minusculas y mayúsculas");
    
        } else {
            $.when(LoginBlock.RegisterUser(Correo, Contraseña, Usuario)).then(function () {

            });
        };
        
    };

    static RegisterUser(Correo, Contraseña, Usuario) {

        var form_data = new FormData();

        form_data.append("OPERATION", "Register_User_OPERATION");
        form_data.append("Correo", Correo);
        form_data.append("Contraseña", Contraseña);
        form_data.append("Usuario", Usuario);

        CPetition.$Ajax_PETITION("./API/Login.php", form_data);

    };


    static StartLoginUser() {
        var Correo = document.getElementById("Correo_Login").value;
        var Contraseña = document.getElementById("PASS_Login").value;


        if (Correo == null || Correo == "" || !LoginBlock.patternMAIL.test(Correo)) {
    
            alert("Correo en formato incorrecto");
    
    
        } else if (Contraseña == null || Contraseña == "" || !LoginBlock.patternPASS.test(Contraseña)) {
    
            alert("Contraseña debe contener al menos, 8 caracteres, incluyendo números y letras minusculas y mayúsculas");
    
        } else { //Si todo es correcto iniciamos sesion
            
            LoginBlock.LoginUser(Correo, Contraseña);
        };
    

    };


    static LoginUser(Correo, Contraseña) {

        var form_data = new FormData();

        form_data.append("OPERATION", "Login_User_OPERATION");
        form_data.append("Correo", Correo);
        form_data.append("Contraseña", Contraseña);

      

        CPetition.$Ajax_PETITION("./API/Login.php", form_data);

        window.location.href= "index.php";
        
    };


    ViewConstructor() {


        GALSAN_CreateBlock.add_CSS_Class('.BackgroundOverlay',
    `
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 6;
        cursor: pointer;


    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.FormLogin',
    `
    display: block;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 55%;
    min-height: 581px;
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
    width: 8%; 
    top: 3px;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.closeButtonLeft',
    `
    width: 5%;
    position: relative;
    top: 3px;
    right: 60px;
    float: right;
    padding: 1vw;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_panel',
    `
    background: azure;
    
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
    border: 5px solid white;
    background: #789AAB;
    width: 100%;
    height: auto;
    left: 95%;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.form_header',
    `
    display: flex;
    padding: 4px 0;
    color: #29556b;
    font-size: 1.5vw;
    font-weight: 700;
    text-transform: uppercase;
    align-items: baseline;
    justify-content: space-evenly;
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
    flex-wrap      : wrap;
    justify-content: space-between;
    margin         : 0 0 20px;
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






GALSAN_CreateBlock.add_CSS_Class('.hoverPulsador',
    `
    left: 93%;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    `
);

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
    justify-content: space-around;
    `
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

GALSAN_CreateBlock.add_CSS_Class('.form_recovery',
    `
    float: right;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.active_Register',
    `
    left: 5%;
       
    cursor: default;
    `
);





/* var WindowLogin = GALSAN_CreateBlock.CreateElement("div", "WindowLogin");
GALSAN_CreateBlock.AttachID(WindowLogin, "BlockLogin"); */

var BackgroundOverlay = GALSAN_CreateBlock.CreateElement("div", "BackgroundOverlay");
GALSAN_CreateBlock.AttachID(BackgroundOverlay, "BlockLogin");




var FormLogin = GALSAN_CreateBlock.CreateElement("div", "FormLogin");

GALSAN_CreateBlock.AttachID(FormLogin, "LoginRegisterDiv");
BackgroundOverlay.appendChild(FormLogin);


    var form_panel = GALSAN_CreateBlock.CreateElement("div", "form_panel");
    form_panel.classList.add("one");
    FormLogin.appendChild(form_panel);

    var ImgX = GALSAN_CreateBlock.CreateElement("img", "closeButtonLeft", "assets/img/icon/delete.png");
    GALSAN_CreateBlock.Attach_Attribute_onClick(ImgX, "LoginBlock.HideForm()");
    form_panel.appendChild(ImgX);



        var form_header = GALSAN_CreateBlock.CreateElement("div", "form_header");
        form_panel.appendChild(form_header);

             var Login = GALSAN_CreateBlock.CreateElement("h1", null , "Login");
             form_header.appendChild(Login);

        
        var form_content = GALSAN_CreateBlock.CreateElement("div", "form_content");
        form_panel.appendChild(form_content);

            var form = GALSAN_CreateBlock.CreateElement("form", null);
            form_content.appendChild(form);

                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                form.appendChild(form_group);

                    var labelUsername = GALSAN_CreateBlock.CreateElement("label", null , "Correo");
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
                    form_group.appendChild(InputPassword);



                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group2");
                form.appendChild(form_group);

                    var form_remember = GALSAN_CreateBlock.CreateElement("label", "form_remember", "Remember Me");
                    form_group.appendChild(form_remember);

                        var InputCheckbox = GALSAN_CreateBlock.CreateElement("input", null , "checkbox");
                        form_remember.appendChild(InputCheckbox);

                        var form_recovery = GALSAN_CreateBlock.CreateElement("a", "form_recovery", "Forgot Password?");
                        form_group.appendChild(form_recovery);


                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                form.appendChild(form_group);

                    var Log_in_Button = GALSAN_CreateBlock.CreateElement("button", null, "Log In");
                    Log_in_Button.setAttribute('type', 'submit');
                    GALSAN_CreateBlock.Attach_Attribute_onClick(Log_in_Button, "LoginBlock.StartLoginUser()");
                    form_group.appendChild(Log_in_Button);


                    



    var form_panel = GALSAN_CreateBlock.CreateElement("div", "form_panel");

    form_panel.classList.add("two");
    GALSAN_CreateBlock.AttachID(form_panel, "IdTwo");
    FormLogin.appendChild(form_panel);
                
                    var divPulsadores = GALSAN_CreateBlock.CreateElement("div", "pulsadoresDiv");
                    GALSAN_CreateBlock.AttachID(divPulsadores, "divPulsadores");
                    GALSAN_CreateBlock.Attach_Attribute_onmouseover(divPulsadores, "LoginBlock.HoverTwo()");
                    GALSAN_CreateBlock.Attach_Attribute_onmouseout(divPulsadores, "LoginBlock.UnHoverTwo()");
                    GALSAN_CreateBlock.Attach_Attribute_onClick(divPulsadores, "LoginBlock.ExpandPanelTwo()");
                    form_panel.appendChild(divPulsadores);

                            var span1 = GALSAN_CreateBlock.CreateElement("span", "pulsador");
                            GALSAN_CreateBlock.AttachID(span1, "pulsa");
                            divPulsadores.appendChild(span1);

                            var span1 = GALSAN_CreateBlock.CreateElement("span", "pulsador2");
                            divPulsadores.appendChild(span1);

                            
                
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
                                GALSAN_CreateBlock.AttachID(InputUsername, "User_Register");
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
                                    GALSAN_CreateBlock.AttachID(InputPassword, "PASS_Register");
                                    form_group.appendChild(InputPassword);


                                var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group");
                                form.appendChild(form_group);
                    
                                    var labelPassword = GALSAN_CreateBlock.CreateElement("label", null , "Confirmar Contraseña");
                                    form_group.appendChild(labelPassword);
                    
                                    var InputPassword = GALSAN_CreateBlock.CreateElement("input", "imput_form", "password");
                                    GALSAN_CreateBlock.AttachID(InputPassword, "PASS_Register_Confirm");
                                    form_group.appendChild(InputPassword);


                                    var form_group = GALSAN_CreateBlock.CreateElement("div", "form_group_button_Register");
                                    form.appendChild(form_group);
                    
                                        var Registro_Button = GALSAN_CreateBlock.CreateElement("button", null , "Registro");
                                        Registro_Button.setAttribute('type', 'button');
                                        Registro_Button.classList.add("two_color_background");

                                        GALSAN_CreateBlock.Attach_Attribute_onClick(Registro_Button, "LoginBlock.StartRegister()");
                                        form_group.appendChild(Registro_Button);
                
                
    }             

}     










        





