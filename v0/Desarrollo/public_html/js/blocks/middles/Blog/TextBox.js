class TextBoxPG {
  constructor() {
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

    //Create View: Dynamic HTMLL CSS: Node
    this.ViewConstructor();
  }

  //Create view of carrusel
  ViewConstructor() {
    //Add CSS
    this.add_CSS_Class(
      ".PersonalSection",
      `
            position: relative;
            width: auto;
            height: auto;
            background-color: rgb(255 255 255 / 53%);
            text-align: center;
            min-height: 100%;
            padding-bottom: 0vh;
            margin-bottom:5%;
    `
    );

    this.add_CSS_Class(
      ".PersonalSectionTitule",
      `
            width: 100%;
            position: relative;
            color: #29556b;
            padding-top: 5%;
            font-size: 300%;

`
    );

    this.add_CSS_Class(
      ".PersonalDescription",
      `
            position: relative;
            width: 95%;
            height: auto;
            padding: 2%;
            color: #7c9aa9;
            font-size: 150%;
            line-height: 30px;
            margin: auto;
            padding-bottom: 3%;

`
    );

    this.add_CSS_Class(
      ".Paypal_PopUpDonate",
      `

        
  `
    );

    /* 
        <div id="donate-button-container">
<div id="donate-button"></div>
<script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
<script>
PayPal.Donation.Button({
env:'production',
hosted_button_id:'V63NSLTUE97E4',
image: {
src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
alt:'Donate with PayPal button',
title:'PayPal - The safer, easier way to pay online!',
}
}).render('#donate-button');
</script>
</div>

 */

    //Create element and associate a classes
    let ContainerPrincipal = this.CreateElement_(
      "div",
      "PersonalSection",
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    let Titulo = this.CreateElement_(
      "div",
      "PersonalSectionTitule",
      "Colabore con la plataforma"
    );
    ContainerPrincipal.appendChild(Titulo);

    let CenterDiv = this.CreateElement_("center");

    let Descripcion = this.CreateElement_(
      "div",
      "PersonalDescription",
      "Recuerda que gracias a ti, seguimos aquí"
    );
    CenterDiv.appendChild(Descripcion);
    /* 
    ///PAYPAL BUTTOM///
    let PAYPAL_form = this.CreateElement_("form", null);
    PAYPAL_form.href = "https://www.paypal.com/donate";
    //PAYPAL_form.target = "_blank";
    PAYPAL_form.method = "post";
    PAYPAL_form.target = "_top";

    let o_input = this.CreateElement_("input", null);
    o_input.type = "hidden";
    o_input.name = "business";
    o_input.value = "TNRQJYYWX9EK2";
    PAYPAL_form.appendChild(o_input);

    o_input = this.CreateElement_("input", null);
    o_input.type = "hidden";
    o_input.name = "no_recurring";
    o_input.value = "0";
    PAYPAL_form.appendChild(o_input);

    o_input = this.CreateElement_("input", null);
    o_input.type = "hidden";
    o_input.name = "item_name";
    o_input.value =
      "Gracias por valorar nuestro tiempo y esfuerzo dedicado a MellitusForum.com";
    PAYPAL_form.appendChild(o_input);

    o_input = this.CreateElement_("input", null);
    o_input.type = "hidden";
    o_input.name = "currency_code";
    o_input.value = "EUR";
    PAYPAL_form.appendChild(o_input);

    o_input = this.CreateElement_("input", null);
    o_input.value = "";
    o_input.type = "image";
    o_input.src =
      "https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donateCC_LG.gif";
    o_input.border = "0";
    o_input.name = "submit";
    o_input.title = "PayPal - The safer, easier way to pay online!";
    o_input.alt = "Botón Donar con PayPal";
    PAYPAL_form.appendChild(o_input);

    let o_img = this.CreateElement_("img", null);
    o_img.alt = "";
    o_img.src = "https://www.paypal.com/es_ES/i/scr/pixel.gif";
    o_img.border = "0";
    o_img.width = "20%";
    o_img.height = "auto";
    PAYPAL_form.appendChild(o_img);

    CenterDiv.appendChild(PAYPAL_form);
 */
    ContainerPrincipal.appendChild(CenterDiv);

    /////////////////////////////////////popuppaypal  to  pay
    /*     let script = PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'V63NSLTUE97E4',
        image: {
            src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
            alt: 'Donate with PayPal button',
            title: 'PayPal - The safer, easier way to pay online!',
        }
    }).render('#donate-button'); */
/* 
    GALSAN_CreateBlock.Insert_Brute_HTML(
      "button_donate",
      `<div id="donate-button-container">
        <div id="donate-button"></div>
        ${eval(
          PayPal.Donation.Button({
            env: "production",
            hosted_button_id: "V63NSLTUE97E4",
            image: {
              src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
              alt: "Donate with PayPal button",
              title: "PayPal - The safer, easier way to pay online!",
            },
          }).render("#donate-button")
        )}
    </div>`
    );
 */
    ///PAYPAL BUTTOM POPUP///

    //////Container1
    let container_popUp_Paypal = this.CreateElement_("div", null);
    container_popUp_Paypal.id = "donate-button-container";

    //////Container2

    let CONTAINER2 = this.CreateElement_("div", null);
    CONTAINER2.id = "donate-button";

    container_popUp_Paypal.appendChild(CONTAINER2);

    ////Script1
    let newScript = document.createElement("script");
    newScript.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    newScript.charset = "UFT-8";

    container_popUp_Paypal.appendChild(newScript);

    var newScript2 = document.createElement("script");
    var inlineScript = document.createTextNode(`PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "V63NSLTUE97E4",
        image: {
          src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button")`);

    newScript2.appendChild(inlineScript); 

    container_popUp_Paypal.appendChild(newScript2);

    ContainerPrincipal.appendChild(container_popUp_Paypal);

  }
}

o_text_Test = new TextBoxPG();
