class GALSAN_CreateBlock {

    //Screen sizes
    static Screen_Complete = 0;
    static Screen_Middle = 1;
    static Screen_Mobile = 2;

    //Site Where Insert
    static Site_Column_Left = 0;
    static Site_Column_Center = 1;
    static Site_Column_Right = 2;
    static Site_Header = 3;
    static Site_Footer = 4;
    static Site_Body = 5;

    //DefaultValues
    static Default_Img = "";
    static Default_Text = "HEGALPA PÁGINAS WEB";
    static Default_Video;
    static Default_Sound;

    static Set_Page_Title(title){
        document.title = title
    }
    static Set_Page_Subtitle(Subtitle){
        document.Subtitle = Subtitle
    }

    
    static Insert_Brute_HTML(id_tag, html_code, Site = GALSAN_CreateBlock.Site_Column_Center){

       let div_element = GALSAN_CreateBlock.CreateElement("div", null, null, Site);
        
       div_element.id = id_tag

       document.getElementById(id_tag).innerHTML = html_code;   

       return div_element;
    }


    static addFont(FontName, FontPath, Format = "truetype") {

        var style = document.createElement('style');
        style.type = 'text/css';
        let folder_path = "assets/fonts/";

        style.innerHTML = ` @font-face {
                font-family: ${FontName};
                src: url("${folder_path}${FontPath}.ttf") format("truetype");
            }`

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    ///Add point # on name

    //CreateElementSigned same but signed css properties with the name of the class where is called
    static add_CSS_Class_SIGNED(Rule_name, Properties, ScreenSize = GALSAN_CreateBlock.Screen_Complete) {

        //let CSS_Name = "." + this.constructor.name + Rule_name; //Sign Css rules with the name of the class
        let NAME_CSS_SIGNED = Rule_name.replace(/\./g, '.' + this.constructor.name);
        //let NAME_CSS_SIGNED = Rule_name.replaceAll(".", `.${this.constructor.name}`); //no funciona en navegadores antiguos < ES12+

        GALSAN_CreateBlock.add_CSS_Class(NAME_CSS_SIGNED, Properties, ScreenSize);
    }


    static add_CSS_Class(Name, Properties, ScreenSize = GALSAN_CreateBlock.Screen_Complete) {
        const o_date = new Date();
        let hour = o_date.getHours(); //Hours to upgrade css version
        var style = document.createElement('style');
        style.type = 'text/css';

        //Determinate ScreenSize

        switch (ScreenSize) {

            case GALSAN_CreateBlock.Screen_Complete:

                style.innerHTML = `${Name} { ${Properties} } ${hour}`;

                break;

            case GALSAN_CreateBlock.Screen_Middle:

                style.innerHTML = `@media screen and (max-width:768px){${Name} { ${Properties} }} ${hour}`;

                break;

            case GALSAN_CreateBlock.Screen_Mobile:

                style.innerHTML = `@media screen and (max-width:480px){${Name} { ${Properties} }} ${hour}`;

                break;

            default:
                //alert("hola");
                style.innerHTML = `${ScreenSize}{${Name} { ${Properties} }} ${hour}`;
                //alert(`${ScreenSize}{${Name} { ${Properties} }} ${hour}`);

                break;
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    }



    //CreateElementSigned same but signed css properties with the name of the class where is called
    static CreateElementSigned(Type, CSS_Name = null, Text = null, Site = GALSAN_CreateBlock.Site_Column_Center) {

        if (CSS_Name !== null) {
            CSS_Name = this.constructor.name + CSS_Name; //Sign Css rules with the name of the class
        }

        return GALSAN_CreateBlock.CreateElement(Type, CSS_Name, Text, Site);
    }

    static CreateElement(Type, CSS_Name = null, Text = null, Site = GALSAN_CreateBlock.Site_Column_Center) {

        // create a new div element
        const NewElement = document.createElement(Type);


        switch (Type) {

            case "div":
            case "p":
            case "section":
            case "span":
            case "a":
            case "ul":
            case "li":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
            case "h1":
            case "dl":
            case "dt":
            case "dd":
            case "button":
            case "label":
            case "form":
            case "textarea":
            case "option":
            case "select":
            
            case "canvas":
            case "table":
            case "thead":
            case "tr":
            case "th":
            case "tbody":
            case "td":
            case "tfoot":


                if (CSS_Name !== null) {
                    //Applies css
                    NewElement.classList.add(CSS_Name);

                }

                if (Text != null) {
                    //Text
                    //const TextNode = document.createTextNode(Text);

                    // add the text node to the newly created div
                    //NewElement.appendChild(TextNode);
                    NewElement.innerHTML = Text;

                }
                break;

            case "input":

                if (CSS_Name !== null) {
                    //Applies css
                    NewElement.classList.add(CSS_Name);

                }

                if (Text != null)
                    NewElement.type = Text;


                break;


            case "img":
            case "iframe":


                if (CSS_Name !== null) {
                    //Applies css
                    NewElement.classList.add(CSS_Name);

                }

                if (Text != null)
                    NewElement.src = Text;

                break;
        }

        switch (Site) {

            case GALSAN_CreateBlock.Site_Header:

                var Header = document.getElementById("GSheader");
                Header.appendChild(NewElement);

                break;

            case GALSAN_CreateBlock.Site_Column_Left:

                var Column_Left = document.getElementById("GS_Column_Left");
                Column_Left.appendChild(NewElement);

                break;

            case GALSAN_CreateBlock.Site_Column_Center:

                var Column_Center = document.getElementById("GS_Column_Center");
                Column_Center.appendChild(NewElement);

                break;

            case GALSAN_CreateBlock.Site_Column_Right:

                var Column_Right = document.getElementById("GS_Column_Right");
                Column_Right.appendChild(NewElement);

                break;

            case GALSAN_CreateBlock.Site_Footer:

                var Column_Center = document.getElementById("GS_Footer");
                Column_Center.appendChild(NewElement);

                break;

            case GALSAN_CreateBlock.Site_Body:

                document.body.insertBefore(NewElement, document.body.firstChild);

                break;
        }

        return NewElement;
    }

    static AttachEvent(Element, Function_Event) {

        Element.addEventListener('click', Function_Event);
    }

    static AttachID(Element, ID) {
        Element.id = ID;
    }

    static AttachType(Element, ID) {
        Element.type = ID;
    }

    /*     This specific method "setAttribute()" is useful if just wanting to insert a specific attribute with its respective value as a string.
    Allowed you set function still no declared */
    static Attach_Attribute_onClick(Element, Action) {
        Element.setAttribute("onclick", Action);

    }

    static Attach_Attribute_onmouseover(Element, Action) {
        Element.setAttribute("onmouseover", Action);

    }

    static Attach_Attribute_onmouseout(Element, Action) {
        Element.setAttribute("onmouseout", Action);

    }

    static Attach_Attribute_onblur(Element, Action) {
        Element.setAttribute("onblur", Action);

    }

    static Attach_Attribute_oninput(Element, Action) {
        Element.setAttribute("oninput", Action);

    }

    static Attach_Attribute_onchange(Element, Action) {
        Element.setAttribute("onchange", Action);

    }

    static Attach_Attribute_onsubmit(Element, Action) {
        Element.setAttribute("onsubmit", Action);

    }

    //Setea el fondo de pantalla de la pagina
    static SetBackGroundPage(Color, ImagePath = "url()") {
        document.body.style.backgroundImage = `${Color}, ${ImagePath}`;

    }

    static SetBackGroundCenterColumn(Color, ImagePath = "url()") {
        document.getElementById("GS_Column_Center").style.backgroundImage = `${Color}, ${ImagePath}`;

    }

    static SetBackGroundHeader(Color, ImagePath = "url()") {
        document.getElementById("GSheader").style.backgroundImage = `${Color}, ${ImagePath}`;

    }
}


//Page Structure: Esto solo se cambia par adaptar la maquetacion global de la pagina
//Add CSS
