//TODO HAY Que controlar que no se metan mas de X caracteres en los inputs
//Aparte... controlar que no se metan caracteres extraños etc...


class CreatePostBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////
    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();


    }


    static Send_New_Theme_CALLBACK_FUNCTION = function() {};


    Add_New_Theme_CALLBACK_FUNCTION(CALLBACK_FUNCTION2) {

        CreatePostBlock.Send_New_Theme_CALLBACK_FUNCTION = CALLBACK_FUNCTION2;

    }



    Add_OptionItem(Name = null) {
        var SelectOptions = document.getElementById("SelectOptions");

        var Option = GALSAN_CreateBlock.CreateElement("option", null, Name);


        SelectOptions.appendChild(Option);
    }



    CreateButton(FunctionButton, TextButton) {

        var formCreatePost = document.getElementById("formCreatePostID");

        var ButtonSend = GALSAN_CreateBlock.CreateElement("button", "ButtonSend", TextButton);
        ButtonSend.setAttribute('type', 'button');
        GALSAN_CreateBlock.Attach_Attribute_onClick(ButtonSend, FunctionButton);
        formCreatePost.appendChild(ButtonSend);

    }


    CountCharactersTheme() {

        var limit = 200;
     var  InputTheme =  document.getElementById("TemaInput");
     var  ContadorTheme =  document.getElementById("ContadorTheme")

        //al cambiar el texto del txt_detalle
        var init = InputTheme.value.length;
       var total_characters = (limit - init);

       if(total_characters < 0) {
        ContadorTheme.style.color = "red";
       } else {
        ContadorTheme.style.color = "black";
       }

       ContadorTheme.innerHTML = total_characters;

};


    CountCharactersContent() {

        var limit = 3000;
        var  InputTheme =  document.getElementById("DivTextAreaID");
        var  ContadorTextArea =  document.getElementById("ContadorTextArea")
   
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


        GALSAN_CreateBlock.add_CSS_Class('.CreatePostSection',
            `
    background-color: #7da4b8;
    width           : 80%;
    margin          : 0 auto;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.CreatePostSection',
            `
width           : 100%;
`, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class('.formCreatePost',
            `

display              : grid;
justify-items        : center;
align-items          : center;
margin               : 50px auto;
justify-content      : center;
grid-template-columns: 90%;
padding-bottom       : 5%;
`
        );


        GALSAN_CreateBlock.add_CSS_Class('.DivEnterTheme',
            `
width          : 100%;
display        : block;
height         : auto;
padding        : 3vw;
align-items    : center;
justify-content: space-evenly;
`
        );


        GALSAN_CreateBlock.add_CSS_Class('.DivEnterCategory',
            `
width          : 100%;
padding        : 3vw;
display        : block;
align-items    : center;
justify-content: space-evenly;
`
        );


        GALSAN_CreateBlock.add_CSS_Class('.DivTextArea',
            `
width          : 100%;
padding        : 3vw;
display        : flex;
align-items    : center;
justify-content: space-evenly;
`
        );


        GALSAN_CreateBlock.add_CSS_Class('.inputPost',
            `
font-size: 2vw;

width : 100%;
height: 3vw;
`
        );


        GALSAN_CreateBlock.add_CSS_Class('.inputPost',
            `
font-size: 3vw;
height: 6vw;
`, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class('.labelPost',
            `
display: block;
font-size: 2vw;

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






        var CreatePostSection = GALSAN_CreateBlock.CreateElement("section", "CreatePostSection");


        var formCreatePost = GALSAN_CreateBlock.CreateElement("form", "formCreatePost");
        CreatePostSection.appendChild(formCreatePost);
        GALSAN_CreateBlock.AttachID(formCreatePost, "formCreatePostID");




        var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivEnterTheme");
        formCreatePost.appendChild(DivDatos);


        var inputPost = GALSAN_CreateBlock.CreateElement("input", "inputPost");

        GALSAN_CreateBlock.Attach_Attribute_oninput(inputPost, "PageManager.o_CreatePost_.CountCharactersTheme()");
        inputPost.placeholder = "Titulo";
        GALSAN_CreateBlock.AttachID(inputPost, "TemaInput");
        DivDatos.appendChild(inputPost);


        var inputPost = GALSAN_CreateBlock.CreateElement("p", "Contador", "200");

        GALSAN_CreateBlock.AttachID(inputPost, "ContadorTheme");
        DivDatos.appendChild(inputPost);


        var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivEnterCategory");
        formCreatePost.appendChild(DivDatos);
        /* var labelPost = GALSAN_CreateBlock.CreateElement("label", "labelPost", "Categoría");
        DivDatos.appendChild(labelPost); */
        var inputPost = GALSAN_CreateBlock.CreateElement("select", "inputPost");
        GALSAN_CreateBlock.AttachID(inputPost, "SelectOptions");
        DivDatos.appendChild(inputPost);



        var DivDatos = GALSAN_CreateBlock.CreateElement("div", "DivTextArea");

        formCreatePost.appendChild(DivDatos);
        /* var labelPost = GALSAN_CreateBlock.CreateElement("label", "labelPost", "Contenido");
        DivDatos.appendChild(labelPost);
         */
        var textarea = GALSAN_CreateBlock.CreateElement("textarea");
        GALSAN_CreateBlock.Attach_Attribute_oninput(textarea, "PageManager.o_CreatePost_.CountCharactersContent()");
        GALSAN_CreateBlock.AttachID(textarea, "DivTextAreaID");
        textarea.placeholder = "Contenido";
        textarea.style.width = "100%";
        textarea.style.height = "35vh";
        DivDatos.appendChild(textarea);


        var inputPost = GALSAN_CreateBlock.CreateElement("p", "Contador", "3000");

        GALSAN_CreateBlock.AttachID(inputPost, "ContadorTextArea");
        DivDatos.appendChild(inputPost);







    }

}