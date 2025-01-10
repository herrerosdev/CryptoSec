class ButtonsContactBlock {
    constructor() {


        //Estructura
        //{}   No parameters




        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        this.CreateView();
    }

    Set_Links_Contacts(Params) {

        //Estructura
        //{"Tel":"", "Wha": "", "wha_msg":""}

        
        var phoneID = document.getElementById("phoneID");
        phoneID.href = `tel:${Params.Tel}`;

        var whatsappID = document.getElementById("whatsappID");
        whatsappID.href = `https://wa.me/${Params.Wha}?text=${Params.wha_msg}`;
    }

    ////////////////////////////
    ///////CreateView///////////
    ////////////////////////////

    CreateView() {

        ////////////////////////////////////////
        //***************CSS*****************//
        ////////////////////////////////////////

        this.add_CSS_Class(
            `.whatsapp`,
            `
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 8px;
        background-color: #25d366;
        color: #FFF;
        box-shadow: 0px 4px 5px #b6b9b2;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        z-index: 100;
    `
        );

        this.add_CSS_Class(
            `.phone`,
            `
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 114px;
        right: 8px;
        background-color: #d32525;
        color: #FFF;
        border-radius: 50px;
        box-shadow: 0px 4px 5px #b6b9b2;
        text-align: center;
        font-size: 30px;
        z-index: 100;
    `
        );

        this.add_CSS_Class(
            `.fa-whatsapp`,
            `
            margin-top: 13px;
            color: #fdfdfd;
            display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    `
        );

        this.add_CSS_Class(
            `.fa-whatsapp:before`,
            `
            content: "\f232";
    `
        );

        this.add_CSS_Class(
            `.fa-phone`,
            `
            margin-top: 13px;
            color: #fdfdfd;
            display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    `
        );

        this.add_CSS_Class(
            ".fa-phone:before",
            `
            content: "\f095";
    `
        );

        this.add_CSS_Class(
            ".img",
            `
      width: 100%;
    `
        );

        ////////////////////////////////////////
        //***************HTML*****************//
        ////////////////////////////////////////

        var ContenedorPrincipal = this.CreateElement_(
            "div",
            null,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        ////////////////Create Phone

        var phone = this.CreateElement_(
            "a",
            `phone`,
            null
        );


        //phone.target = "_blank"; // open link in anothr tab

        var Img_Tlf = this.CreateElement_(
            "img",
            `img`,
            "http://drive.hegalpa.es/commons/CONTACT/telefono.png"
        );

        phone.appendChild(Img_Tlf);

        GALSAN_CreateBlock.AttachID(phone, "phoneID");
        ContenedorPrincipal.appendChild(phone);

        var faphone = this.CreateElement_("i", `fa-phone`, null);

        phone.appendChild(faphone);


        //////////////Create whatsapp contact

        var whatsapp = this.CreateElement_(
            "a",
            `whatsapp`,
            null
        );

        whatsapp.target = "_blank"; // open link in anothr tab

        var Img_wa = this.CreateElement_(
            "img",
            `img`,
            "http://drive.hegalpa.es/commons/CONTACT/whatsapp.png"
        );

        whatsapp.appendChild(Img_wa);

        GALSAN_CreateBlock.AttachID(whatsapp, "whatsappID");
        ContenedorPrincipal.appendChild(whatsapp);

        var fawhatsapp = this.CreateElement_("i", `fa-whatsapp`, null);

        whatsapp.appendChild(fawhatsapp);
    }
}



/* <a href="https://wa.me/34607604783?text=Hola, estoy interesado en una piscina" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
<a href="tel:972414520" class="phone" target="_blank"> <i class="fa fa-phone whatsapp-icon"></i></a>
 */