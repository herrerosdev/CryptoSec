class ChatBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////
    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();


    }

    static CROSS_CALLBACK_FUNCTION = function() {};


    SET_CROSS_CALLBACK_FUNCTION(CALLBACK_FUNCTION) {

        ChatBlock.CROSS_CALLBACK_FUNCTION = CALLBACK_FUNCTION;

    }

    
    static CALLBACK_BOTON_Reply = function () {};

    SET_BOTON_Reply(CALLBACK_FUNCTION) {
        ChatBlock.CALLBACK_BOTON_Reply = CALLBACK_FUNCTION;
  }




    static Send_Message1_CALLBACK_FUNCTION = function() {};


    SET_Send_Message1_CALLBACK_FUNCTION(CALLBACK_FUNCTION) {

        ChatBlock.Send_Message1_CALLBACK_FUNCTION = CALLBACK_FUNCTION;

    }


    static Message2_CALLBACK_FUNCTION = function() {};


    SET_Message2_CALLBACK_FUNCTION(CALLBACK_FUNCTION2) {

        ChatBlock.Message2_CALLBACK_FUNCTION = CALLBACK_FUNCTION2;

    }





    FollowScroll() {
        var elem = document.getElementById("Chat_ContainerID");
        
        var elementVisible = 150;
        var distance = elem.getBoundingClientRect();
     
        if(distance.top < 0 && distance.top < window.innerHeight - elementVisible)  {

            document.getElementById("ContainerTitleBlockID").style.position = "fixed";
            document.getElementById("ContainerTitleBlockID").style.width = "80%";
            document.getElementById("ContainerTitleBlockID").style.top = "0";
            document.getElementById("ContainerTitleBlockID").style.backgroundColor = "rgb(187 219 235 / 80%)";
        } else {
            
            document.getElementById("ContainerTitleBlockID").style.position = "relative";
            document.getElementById("ContainerTitleBlockID").style.width = "100%";
            document.getElementById("ContainerTitleBlockID").style.backgroundColor = "rgb(187 219 235 / 80%)";
            
    
      }



    }

    Put_Message(Tema, Autor, ImgUser, StateUsuario, Texto, Fecha, index, IsUser, IsDelete) {


        var Chat_ContainerID = document.getElementById("Chat_ContainerID");

        var Content = GALSAN_CreateBlock.CreateElement("div", "Content");
        Chat_ContainerID.appendChild(Content);

        var Content_padding = GALSAN_CreateBlock.CreateElement("div", "Content_padding");
        Content.appendChild(Content_padding);

        var Title_Content = GALSAN_CreateBlock.CreateElement("div", "Title_Content");
        Content_padding.appendChild(Title_Content);

        var text_title = GALSAN_CreateBlock.CreateElement("p", "text_title", Tema);
        Title_Content.appendChild(text_title);

        if (IsDelete == 0) {

            if (IsUser == 0) {
                var Div_text_title = GALSAN_CreateBlock.CreateElement("div", "DivButtonDelete");
                GALSAN_CreateBlock.Attach_Attribute_onClick(Div_text_title, 'ChatBlock.CROSS_CALLBACK_FUNCTION(' + index + ')');

                Title_Content.appendChild(Div_text_title);

                var text_title = GALSAN_CreateBlock.CreateElement("p", "ButtonDelete", "X");
                Div_text_title.appendChild(text_title);
            }
        }

        var Content_Main = GALSAN_CreateBlock.CreateElement("div", "Content_Main");
        Content_padding.appendChild(Content_Main);

        var left_side_Content = GALSAN_CreateBlock.CreateElement("div", "left_side_Content");
        Content_Main.appendChild(left_side_Content);

        var img_profile = GALSAN_CreateBlock.CreateElement("img", "img_profile", ImgUser);
        left_side_Content.appendChild(img_profile);

        var Block_Name_State_Content = GALSAN_CreateBlock.CreateElement("div", "Block_Name_State_Content");
        left_side_Content.appendChild(Block_Name_State_Content);

        var Nombre = GALSAN_CreateBlock.CreateElement("p", "Nombre", Autor);
        Block_Name_State_Content.appendChild(Nombre);

        var Titulo = GALSAN_CreateBlock.CreateElement("p", "Titulo_Mobile", StateUsuario);
        Block_Name_State_Content.appendChild(Titulo);

        var DivButton = GALSAN_CreateBlock.CreateElement("div", "DivButton");
        left_side_Content.appendChild(DivButton);

        var button = GALSAN_CreateBlock.CreateElement("button", "ButtonReply", "Reply");
        GALSAN_CreateBlock.Attach_Attribute_onClick(button, 'PageManager.o_Chat.ReplyMessage(' + index + ',' + '"' + Autor + '"' + ',' + '"' + Tema + '"' + ',' + '"' + ImgUsuario  + '"' + ',' + '"' + Session_State  + '"'  + ')');

        DivButton.appendChild(button);


        var right_side_Content = GALSAN_CreateBlock.CreateElement("div", "right_side_Content");
        Content_Main.appendChild(right_side_Content);

        var Text_content = GALSAN_CreateBlock.CreateElement("div", "Text_content");
        right_side_Content.appendChild(Text_content);

        var Text_Hilo = GALSAN_CreateBlock.CreateElement("p", "Text_Hilo", Texto);
        GALSAN_CreateBlock.AttachID(Text_Hilo, "Message" + index);
        Text_content.appendChild(Text_Hilo);

        var Message_content = GALSAN_CreateBlock.CreateElement("div", "Message_content");
        right_side_Content.appendChild(Message_content);

        var Time = GALSAN_CreateBlock.CreateElement("p", "Titulo_Complete", StateUsuario);
        Message_content.appendChild(Time);

        var Time = GALSAN_CreateBlock.CreateElement("span", "time-right", Fecha);
        Message_content.appendChild(Time);



    }




    Put_Message_With_Reply(Tema, Autor, ImgUser, StateUsuario, Texto, Texto2, Fecha, index, IsUser, IsDelete) {

        


        var Chat_ContainerID = document.getElementById("Chat_ContainerID");

        var Content = GALSAN_CreateBlock.CreateElement("div", "Content");
        Chat_ContainerID.appendChild(Content);

        var Content_padding = GALSAN_CreateBlock.CreateElement("div", "Content_padding");
        Content.appendChild(Content_padding);

        var Title_Content = GALSAN_CreateBlock.CreateElement("div", "Title_Content");
        Content_padding.appendChild(Title_Content);

        var text_title = GALSAN_CreateBlock.CreateElement("p", "text_title", Tema);
        Title_Content.appendChild(text_title);

        if (IsDelete == 0) {

            if (IsUser == 0) {
                var Div_text_title = GALSAN_CreateBlock.CreateElement("div", "DivButtonDelete");
                GALSAN_CreateBlock.Attach_Attribute_onClick(Div_text_title, 'ChatBlock.CROSS_CALLBACK_FUNCTION(' + index + ')');

                Title_Content.appendChild(Div_text_title);

                var text_title = GALSAN_CreateBlock.CreateElement("p", "ButtonDelete", "X");
                Div_text_title.appendChild(text_title);
            }
        }


        var Content_Main = GALSAN_CreateBlock.CreateElement("div", "Content_Main");
        Content_padding.appendChild(Content_Main);

        var left_side_Content = GALSAN_CreateBlock.CreateElement("div", "left_side_Content");
        Content_Main.appendChild(left_side_Content);

        var img_profile = GALSAN_CreateBlock.CreateElement("img", "img_profile", ImgUser);
        left_side_Content.appendChild(img_profile);

        var Block_Name_State_Content = GALSAN_CreateBlock.CreateElement("div", "Block_Name_State_Content");
        left_side_Content.appendChild(Block_Name_State_Content);

        var Nombre = GALSAN_CreateBlock.CreateElement("p", "Nombre", Autor);
        Block_Name_State_Content.appendChild(Nombre);

        var Titulo = GALSAN_CreateBlock.CreateElement("p", "Titulo_Mobile", StateUsuario);
        Block_Name_State_Content.appendChild(Titulo);

        var DivButton = GALSAN_CreateBlock.CreateElement("div", "DivButton");
        left_side_Content.appendChild(DivButton);

        var button = GALSAN_CreateBlock.CreateElement("button", "ButtonReply", "Reply");
        GALSAN_CreateBlock.Attach_Attribute_onClick(button, 'PageManager.o_Chat.ReplyMessage(' + index + ',' + '"' + Autor + '"' + ',' + '"' + Tema + '"' +  ',' + '"' + ImgUsuario + '"' + ',' + '"' + Session_State + '"'  + ')');

        DivButton.appendChild(button);

        if (IsDelete == 0) {

            if (IsUser == 0) {
                var Div_text_title = GALSAN_CreateBlock.CreateElement("div", "DivButtonDeleteMobile");
                GALSAN_CreateBlock.Attach_Attribute_onClick(Div_text_title, 'ChatBlock.CROSS_CALLBACK_FUNCTION(' + index + ')');

                left_side_Content.appendChild(Div_text_title);

                var text_title = GALSAN_CreateBlock.CreateElement("p", "ButtonDelete", "X");
                Div_text_title.appendChild(text_title);
            }
        }


        var right_side_Content = GALSAN_CreateBlock.CreateElement("div", "right_side_Content");
        Content_Main.appendChild(right_side_Content);

        var sideHeight = GALSAN_CreateBlock.CreateElement("div", "sideHeight");
        right_side_Content.appendChild(sideHeight);


        var Text_content = GALSAN_CreateBlock.CreateElement("div", "Text_contentItalic");

        sideHeight.appendChild(Text_content);

        var Text_padding = GALSAN_CreateBlock.CreateElement("div", "Text_padding");
        Text_content.appendChild(Text_padding);



        var textReply = GALSAN_CreateBlock.CreateElement("p", "textReply", '"' + Texto + '"');
        Text_padding.appendChild(textReply);



        var Text_content = GALSAN_CreateBlock.CreateElement("div", "Text_content2");
        sideHeight.appendChild(Text_content);

        var Text_Hilo = GALSAN_CreateBlock.CreateElement("p", "Text_Hilo", Texto2);
        GALSAN_CreateBlock.AttachID(Text_Hilo, "Message" + index);
        Text_content.appendChild(Text_Hilo);

        var Message_content = GALSAN_CreateBlock.CreateElement("div", "Message_content");
        right_side_Content.appendChild(Message_content);

        var Time = GALSAN_CreateBlock.CreateElement("p", "Titulo_Complete", StateUsuario);
        Message_content.appendChild(Time);

        var Time = GALSAN_CreateBlock.CreateElement("span", "time-right", Fecha);
        Message_content.appendChild(Time);


    }





    DeleteMessage(Id) {
        var form_data = new FormData();

        form_data.append("Id", Id);
        form_data.append("OPERATION", "Delete_Message_OPERATION");

        CPetition.$Ajax_PETITION("./API/Hilo.php", form_data);
        window.location.reload();



    }


    Button_Show_Input_Message(Tema,Img, Session_State) {

        var ButtonNewMessage = GALSAN_CreateBlock.CreateElement("button", "ButtonNewMessage", "Contestar");
        ButtonNewMessage.setAttribute('type', 'button');
        GALSAN_CreateBlock.Attach_Attribute_onClick(ButtonNewMessage, 'PageManager.o_Chat.Show_Input_Message('+ '"' + Tema + '"' + ',' + '"' + Img + '"' + ',' + '"' + Session_State +'"'  + ')');

        Chat_ContainerID.appendChild(ButtonNewMessage);
    }



    Show_Input_Message(Tema, ImgUser, Session_State) {


        if (Session_UserName != PageManager.UserNotLogged) {

            if (PageManager.NewMessageFlag == 0) {

                this.MessageCreation(Tema, ImgUser, Session_State);

            } else {
                var ContentId = document.getElementById("ContentId");
        
                ContentId.remove();

                this.MessageCreation(Tema, ImgUser, Session_State);
            }

        } else {

            ChatBlock.CALLBACK_BOTON_Reply();


    

        }



    }



    MessageCreation(Tema, ImgUser, Session_State) {

        var Chat_ContainerID = document.getElementById("Chat_ContainerID");

        var Content = GALSAN_CreateBlock.CreateElement("div", "ContentReply");

        GALSAN_CreateBlock.AttachID(Content, "ContentId");
        Chat_ContainerID.appendChild(Content);

        var Content_padding = GALSAN_CreateBlock.CreateElement("div", "Content_padding");
        Content.appendChild(Content_padding);

        var Title_Content = GALSAN_CreateBlock.CreateElement("div", "Title_Content");
        Content_padding.appendChild(Title_Content);

        var text_title = GALSAN_CreateBlock.CreateElement("p", "text_title", Tema);
        Title_Content.appendChild(text_title);

        var text_title = GALSAN_CreateBlock.CreateElement("button", "ButtonCheck", "Enviar");
        text_title.setAttribute('type', 'button');
        GALSAN_CreateBlock.Attach_Attribute_onClick(text_title, 'ChatBlock.Message2_CALLBACK_FUNCTION()');
        Title_Content.appendChild(text_title);


        var Content_Main = GALSAN_CreateBlock.CreateElement("div", "Content_Main");
        Content_padding.appendChild(Content_Main);

        var left_side_Content = GALSAN_CreateBlock.CreateElement("div", "left_side_Content");
        Content_Main.appendChild(left_side_Content);

        var img_profile = GALSAN_CreateBlock.CreateElement("img", "img_profile", ImgUser);
        left_side_Content.appendChild(img_profile);

        var Block_Name_State_Content = GALSAN_CreateBlock.CreateElement("div", "Block_Name_State_Content");
        left_side_Content.appendChild(Block_Name_State_Content);


        var Nombre = GALSAN_CreateBlock.CreateElement("p", "Nombre", Session_UserName);
        Block_Name_State_Content.appendChild(Nombre);

        if(Session_State != "-1") {

        var Titulo = GALSAN_CreateBlock.CreateElement("p", "Titulo_Mobile", Session_State);
        Block_Name_State_Content.appendChild(Titulo);

    }


        var text_title = GALSAN_CreateBlock.CreateElement("button", "ButtonCheck_Mobile", "Enviar");
        text_title.setAttribute('type', 'button');
        GALSAN_CreateBlock.Attach_Attribute_onClick(text_title, 'ChatBlock.Message2_CALLBACK_FUNCTION()');
        left_side_Content.appendChild(text_title);


        var right_side_Content = GALSAN_CreateBlock.CreateElement("div", "right_side_Content");
        Content_Main.appendChild(right_side_Content);

        var inputPost = GALSAN_CreateBlock.CreateElement("p", "Contador", "3000");

        GALSAN_CreateBlock.AttachID(inputPost, "ContadorContent1");
        right_side_Content.appendChild(inputPost);

        var Text_content = GALSAN_CreateBlock.CreateElement("textarea", "Text_content");

        GALSAN_CreateBlock.Attach_Attribute_oninput(Text_content, "PageManager.o_Chat.CountCharactersContent1()");
        GALSAN_CreateBlock.AttachID(Text_content, "TextareaID");
        right_side_Content.appendChild(Text_content);




        var Message_content = GALSAN_CreateBlock.CreateElement("div", "Message_content");
        right_side_Content.appendChild(Message_content);

        let d = new Date();
        let month = (d.getMonth() + 1).toString().padStart(2, '0');
        let day = d.getDate().toString().padStart(2, '0');
        let year = d.getFullYear();
        var hora = d.getHours() + ':' + d.getMinutes();


        var DateNow = [year, month, day].join('-') + ' ' + hora;

        if(Session_State != "-1") {
        var Time = GALSAN_CreateBlock.CreateElement("p", "Titulo_Complete", Session_State);
        Message_content.appendChild(Time);
        }

        var Time = GALSAN_CreateBlock.CreateElement("span", "time-right", DateNow);
        Message_content.appendChild(Time);




        PageManager.NewMessageFlag++;


        var element = document.querySelector("#Chat_ContainerID");

        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }



    ReplyMessage(index, Autor, Tema, ImgUser, Session_State) {

        if (Session_UserName != PageManager.UserNotLogged) {


            if (PageManager.NewMessageFlag == 0) {

                    this.MessageForReplyCreation(index, Autor, Tema, ImgUser, Session_State);

            } else  {

                var ContentId = document.getElementById("ContentId");
        
                    ContentId.remove();

                    this.MessageForReplyCreation(index, Autor, Tema, ImgUser, Session_State);


            }
        } else {

            ChatBlock.CALLBACK_BOTON_Reply();


        }

    }



    MessageForReplyCreation(index, Autor, Tema, ImgUser, Session_State) {

        var Text = document.getElementById("Message" + index).innerText;


        var Chat_ContainerID = document.getElementById("Chat_ContainerID");

        var Content = GALSAN_CreateBlock.CreateElement("div", "ContentReply");

        GALSAN_CreateBlock.AttachID(Content, "ContentId");
        Chat_ContainerID.appendChild(Content);

        var Content_padding = GALSAN_CreateBlock.CreateElement("div", "Content_padding");
        Content.appendChild(Content_padding);

        var Title_Content = GALSAN_CreateBlock.CreateElement("div", "Title_Content");
        Content_padding.appendChild(Title_Content);

        var text_title = GALSAN_CreateBlock.CreateElement("p", "text_title", Tema);
        Title_Content.appendChild(text_title);

        var text_title = GALSAN_CreateBlock.CreateElement("button", "ButtonCheck", "Enviar");
        text_title.setAttribute('type', 'button');
        GALSAN_CreateBlock.Attach_Attribute_onClick(text_title, 'ChatBlock.Send_Message1_CALLBACK_FUNCTION(' + index + ')');
        Title_Content.appendChild(text_title);


        var Content_Main = GALSAN_CreateBlock.CreateElement("div", "Content_Main");
        Content_padding.appendChild(Content_Main);

        var left_side_Content = GALSAN_CreateBlock.CreateElement("div", "left_side_Content");

        Content_Main.appendChild(left_side_Content);

        var img_profile = GALSAN_CreateBlock.CreateElement("img", "img_profile", ImgUser);
        left_side_Content.appendChild(img_profile);

        var Block_Name_State_Content = GALSAN_CreateBlock.CreateElement("div", "Block_Name_State_Content");
        left_side_Content.appendChild(Block_Name_State_Content);

        var Nombre = GALSAN_CreateBlock.CreateElement("p", "Nombre", Session_UserName);
        Block_Name_State_Content.appendChild(Nombre);

        if(Session_State != "-1") {
        var Titulo = GALSAN_CreateBlock.CreateElement("p", "Titulo_Mobile", Session_State);
        Block_Name_State_Content.appendChild(Titulo);
        }
        
        var text_title = GALSAN_CreateBlock.CreateElement("button", "ButtonCheck_Mobile", "Enviar");
        text_title.setAttribute('type', 'button');
        GALSAN_CreateBlock.Attach_Attribute_onClick(text_title, 'ChatBlock.Send_Message1_CALLBACK_FUNCTION(' + index + ')');
        left_side_Content.appendChild(text_title);


        var right_side_Content = GALSAN_CreateBlock.CreateElement("div", "right_side_Content");
        Content_Main.appendChild(right_side_Content);
        var sideHeight = GALSAN_CreateBlock.CreateElement("div", "sideHeight");
        right_side_Content.appendChild(sideHeight);

        var Text_content = GALSAN_CreateBlock.CreateElement("div", "Text_contentItalic");

        sideHeight.appendChild(Text_content);

   

        var textReply = GALSAN_CreateBlock.CreateElement("p", "textReply", '"' + Text + '"');
        GALSAN_CreateBlock.AttachID(textReply, "ReplyToID");
        Text_content.appendChild(textReply);



        var inputPost = GALSAN_CreateBlock.CreateElement("p", "Contador", "3000");

        GALSAN_CreateBlock.AttachID(inputPost, "ContadorContent1");
        sideHeight.appendChild(inputPost);


        var Text_content = GALSAN_CreateBlock.CreateElement("textarea", "Text_content2", '@' + Autor);
        GALSAN_CreateBlock.Attach_Attribute_oninput(Text_content, "PageManager.o_Chat.CountCharactersContent1()");
        GALSAN_CreateBlock.AttachID(Text_content, "TextareaID");
        sideHeight.appendChild(Text_content);


        var Message_content = GALSAN_CreateBlock.CreateElement("div", "Message_content");
        right_side_Content.appendChild(Message_content);

        let d = new Date();
        let month = (d.getMonth() + 1).toString().padStart(2, '0');
        let day = d.getDate().toString().padStart(2, '0');
        let year = d.getFullYear();
        var hora = d.getHours() + ':' + d.getMinutes();


        var DateNow = [year, month, day].join('-') + ' ' + hora;

        if(Session_State != "-1") {
        var Time = GALSAN_CreateBlock.CreateElement("p", "Titulo_Complete", Session_State);
        Message_content.appendChild(Time);
        }

        var Time = GALSAN_CreateBlock.CreateElement("span", "time-right", DateNow);
        Message_content.appendChild(Time);



        PageManager.NewMessageFlag++;


        var element = document.querySelector("#Chat_ContainerID");

        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }



    CountCharactersContent1() {
        var limit = 3000;
        var  InputTheme =  document.getElementById("TextareaID");
        var  ContadorTextArea =  document.getElementById("ContadorContent1")
   
           //al cambiar el texto del txt_detalle
           var init = InputTheme.value.length;
          var total_characters = (limit - init);
   
          if(total_characters < 0) {
            ContadorTextArea.style.color = "red";
          }  else {
            ContadorTextArea.style.color = "black";
           }
   
          ContadorTextArea.innerHTML = total_characters;
        
    }



    ViewConstructor() {

        GALSAN_CreateBlock.add_CSS_Class('.Container_Chat',
            `
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 5px;
padding: 10px;
margin: 10px 0;

`
        );
        GALSAN_CreateBlock.add_CSS_Class('.Content',
            `
width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 1vw 0vw;
`
        );

        GALSAN_CreateBlock.add_CSS_Class('.ContentReply',
        `
width: 100%;
height: auto;
border-radius: 5px;
margin: 1vw 0vw;
`
    );


        GALSAN_CreateBlock.add_CSS_Class('.Content_padding',
            `
    padding: 20px;

`
        );




        GALSAN_CreateBlock.add_CSS_Class('.Content:nth-child(even)',
            `
border-color: #90bdd3;
background-color: #ddd;
color: black;
`
        );

        GALSAN_CreateBlock.add_CSS_Class('.Content:nth-child(odd)',
            `
border-color: #ccc;
background-color: #90bdd3;
color: white;
`
        );

        GALSAN_CreateBlock.add_CSS_Class('.time-right',
            `
    float: right;
    font-weight: bold;
    font-size: 1.5vw;
    width: 30%;
`

        );



        GALSAN_CreateBlock.add_CSS_Class('.Title_Content',
            `
    width: 100%;
    border-bottom: 3px solid black;
    display: inline-flex;
    justify-content: space-between;
`

        );




        GALSAN_CreateBlock.add_CSS_Class('.ButtonCheck',
            `
float: right;
`

        );


        GALSAN_CreateBlock.add_CSS_Class('.ButtonCheck_Mobile',
        `
display: none;
`

    );

        GALSAN_CreateBlock.add_CSS_Class('.left_side_Content',
            `
width: 30%;
    display: block;
    align-content: center;
    justify-content: center;
    margin-top: 1vw;
    align-items: center;
    height: 100%;
    /* border-right: 3px solid black; */

`
        );



        GALSAN_CreateBlock.add_CSS_Class('.img_profile',
            `
            width: 12vw;
            height: 12vw;
            background-color: #7da4b8;
            margin: 0 auto;
            align-items: center;
            display: flex;
            border-radius: 100px;
`

        );

        GALSAN_CreateBlock.add_CSS_Class('.Nombre',
            `
font-size: 2vw;
text-align: center;
`

        );




        GALSAN_CreateBlock.add_CSS_Class('.Titulo_Complete',
            `
            font-size: 0.8vw;
            text-align: justify;
            margin: 0vw 2vw 0vw 1vw;
            width: 70%;

`

        );

        GALSAN_CreateBlock.add_CSS_Class('.Titulo_Mobile',
        `
display: none;
`

    );




        GALSAN_CreateBlock.add_CSS_Class('.DivButton',
            `
        padding: 4vw 0 0 0;

`

        );

        GALSAN_CreateBlock.add_CSS_Class('.DivButtonDelete',
            `
    background-color: #29556b;
    height: fit-content;
    border-radius: 10px;
    border: white solid 1px;

`

        );

        GALSAN_CreateBlock.add_CSS_Class('.DivButtonDeleteMobile',
        `
display:none;

`

    );

        GALSAN_CreateBlock.add_CSS_Class('.ButtonDelete',
            `
margin: 0;
    padding: 1vw;
    color: white;

`

        );



        GALSAN_CreateBlock.add_CSS_Class('.right_side_Content',
            `
width: 70%;
    display: block;
    align-content: center;
    justify-content: center;   
    margin-top: 1vw;
    align-items: center;
    height: auto;
    border-left: 3px solid black;


`
        );


        GALSAN_CreateBlock.add_CSS_Class('.sideHeight',
        `
        min-height: 80%;


`
    );



        GALSAN_CreateBlock.add_CSS_Class('.Text_padding',
            `
padding: 1vw;
display: inline-flex;

`

        );

        GALSAN_CreateBlock.add_CSS_Class('.Text_content',
            `
height: fit-content;
min-height: 80%;
width: 100%;
border-bottom: 2px dotted black;


`
        );



        GALSAN_CreateBlock.add_CSS_Class('.Text_content2',
            `
min-height: 8vw;
    height: auto;
    width: 100%;
    /* background-color: white; */
    border-bottom: 2px dotted black;

`

        );



        GALSAN_CreateBlock.add_CSS_Class('.Text_contentItalic',
            `
min-height: 7vw;
height: auto;
width: 100%;
font-style: italic;
white-space: break-spaces;
padding: 0 0.5vw;
font-size: small;
border-bottom: 2px dotted black;
display: inline-flex;


`

        );




        GALSAN_CreateBlock.add_CSS_Class('.Message_content',
            `

            padding-top: 0.5vw;
width: 100%;
display: flex;
align-items: center;

`

        );

        GALSAN_CreateBlock.add_CSS_Class('.Text_Hilo',
            `

Color: black;
padding: 0 1vw;
white-space: break-spaces;

`
        );



        GALSAN_CreateBlock.add_CSS_Class('.Content_Main',
            `
width: 100%;
    display: inline-flex;
   



`

        );


        GALSAN_CreateBlock.add_CSS_Class('.text_title',
        `
width: 90%;


`

    );


    GALSAN_CreateBlock.add_CSS_Class('.Block_Name_State_Content',
    `
    display: block;
    margin: 0 auto;
    width: 70%;


`

);

GALSAN_CreateBlock.add_CSS_Class('.Contador',
`
font-size: 1.5vw;
font-style: italic;
float: right;
margin: 0;
margin-left: auto;

`
);


GALSAN_CreateBlock.add_CSS_Class('.Contador',
`
font-size: 2vw;
font-style: italic;
float: right;
margin: 0;
margin-left: auto;

`, GALSAN_CreateBlock.Screen_Mobile
);


///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////Mobile/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


GALSAN_CreateBlock.add_CSS_Class('.Block_Name_State_Content',
`
display: block;
width: 70%;
margin: 0;

`, GALSAN_CreateBlock.Screen_Mobile

);
GALSAN_CreateBlock.add_CSS_Class('.Title_Content',
`
display: none;

`, GALSAN_CreateBlock.Screen_Mobile

);

GALSAN_CreateBlock.add_CSS_Class('.Content_Main',
`
width: 100%;
height: fit-content;
display: block;

`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.text_title',
`
margin: 0;
font-size: 3vw;

`, GALSAN_CreateBlock.Screen_Mobile
);
GALSAN_CreateBlock.add_CSS_Class('.left_side_Content',
`
width: 100%;
padding-bottom: 1vw;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: flex-start;
`, GALSAN_CreateBlock.Screen_Mobile
);

GALSAN_CreateBlock.add_CSS_Class('.Text_Hilo',
`
font-size: 3vw;
`, GALSAN_CreateBlock.Screen_Mobile
);


GALSAN_CreateBlock.add_CSS_Class('.Text_content2',
`
min-height: 14vw;
font-size:2vw;

`, GALSAN_CreateBlock.Screen_Mobile

);

GALSAN_CreateBlock.add_CSS_Class('.Text_content',
`
height: fit-content;
min-height: 22.5vw;

`, GALSAN_CreateBlock.Screen_Mobile
);


GALSAN_CreateBlock.add_CSS_Class('.textReply',
`
font-size:2.7vw;
`, GALSAN_CreateBlock.Screen_Mobile
);

GALSAN_CreateBlock.add_CSS_Class('.right_side_Content',
`
width: 100%;
border-left: 1px solid black;
`, GALSAN_CreateBlock.Screen_Mobile
);


GALSAN_CreateBlock.add_CSS_Class('.DivButtonDeleteMobile',
`
display:block;
background-color: #29556b;
height: fit-content;
border-radius: 10px;
border: white solid 1px;

`, GALSAN_CreateBlock.Screen_Mobile

);

GALSAN_CreateBlock.add_CSS_Class('.ButtonDelete',
`
padding: 1vw 2vw;
font-size: 3vw;

`, GALSAN_CreateBlock.Screen_Mobile

);

GALSAN_CreateBlock.add_CSS_Class('.ButtonReply',
`
height: auto;
font-size: 1.8vw;

`, GALSAN_CreateBlock.Screen_Mobile

);

GALSAN_CreateBlock.add_CSS_Class('.ButtonCheck',
`
display:none;

`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.ButtonCheck_Mobile',
`
margin-left: auto;
display:block;

`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.Titulo_Complete',
`
display:none;


`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.Titulo_Mobile',
`
font-size: 2.2vw;
padding: 0 2vw;
text-align: justify;
display: block;

`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.Nombre',
`
font-size: 3vw;
text-align: justify;
padding: 0 2vw;

`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.Content_padding',
`
padding: 10px 5px;

`, GALSAN_CreateBlock.Screen_Mobile
);


GALSAN_CreateBlock.add_CSS_Class('.time-right',
`
font-size: 2vw;
width: 100%;
`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.img_profile',
`
    margin:0;

`, GALSAN_CreateBlock.Screen_Mobile

);

GALSAN_CreateBlock.add_CSS_Class('.Message_content',
`
display: flex;
flex-direction: row;
justify-content: space-between;

`, GALSAN_CreateBlock.Screen_Mobile

);


GALSAN_CreateBlock.add_CSS_Class('.DivButton',
`
padding: 0;
float: right;
margin-left: auto;

`, GALSAN_CreateBlock.Screen_Mobile

);


        var container = GALSAN_CreateBlock.CreateElement("div", "Container_Chat");
        GALSAN_CreateBlock.AttachID(container, "Chat_ContainerID");





    }

}