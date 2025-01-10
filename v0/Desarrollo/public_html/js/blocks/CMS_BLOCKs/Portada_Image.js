
class Portada_Image {
  constructor(Params) {

    //Estructura
    //{"Photo": "","Title": "", "Subtitle": "", "alt": "", "mode": ""}

    this.Title_ = Params.Title;
    this.Subtitle_ = Params.Subtitle;
    this.Photo_ = Params.Photo;
    this.alt_ = Params.alt;
    this.mode_ = Params.mode;
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;


    this.ViewConstructor();
  }

  getClassName() {
    return this.constructor.name;
  }

  AddButton(Params) {


    //Estructura
   //{"Name":"","Action":""}

   
    var Container_Menu_ID = document.getElementById("Container_Menu_ID");
    
    var Container_Links_ID = document.getElementById("Container_Links_ID");

    var IMANGEN_EMPRESA = this.CreateElement_(
      "div",
      `Div_button`,
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    var h2SEO = this.CreateElement_(
      "h3",
      "h2Menu",
      Params.Name

    );

    IMANGEN_EMPRESA.appendChild(h2SEO);
    IMANGEN_EMPRESA.onclick = function () { window.location.href = `${Params.Action}`; };

    Container_Links_ID.appendChild(IMANGEN_EMPRESA);

    this.Elements_Scroll();

  }


  Elements_Scroll() {

    var ClassName = this.getClassName();

    CEffects.On_Scroll_height_Transform([
      {"id": "Container_Panel_ID"},
      {"id": "Container_Menu_ID", "Class_Transform": ClassName + "fix_element"},
      {"id": "Nav_toggle_ID", "Class_Transform": ClassName + "Resize_height"},
    
    ]);

  }


  static ToggleNav(ClassName) {

    var Container_Links_ID = document.getElementById("Container_Links_ID");
    var Container_Menu_ID = document.getElementById("Container_Menu_ID");

    var Span_line1 = document.getElementById("Span_line1");
    var Span_line2 = document.getElementById("Span_line2");
    var Span_line3 = document.getElementById("Span_line3");


    Span_line1.classList.toggle(ClassName + 'active');
    Span_line2.classList.toggle(ClassName + 'active');
    Span_line3.classList.toggle(ClassName + 'active');

    Container_Links_ID.classList.toggle(ClassName + 'active');
    Container_Menu_ID.classList.toggle(ClassName + 'active');
  }


  ViewConstructor() {


    this.add_CSS_Class(
      `.Container`,
      `
    
    padding-top: 0px !important;
    width: 100%;
    padding-bottom: 160px !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    min-height: 62vh;
    -webkit-align-content: center;
    align-content: center;
    display: grid;
    grid-template-rows: 8% 92%;

        `
    );



    this.add_CSS_Class(
      `.fix_element`,
      `
    
       position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 0 !important;
      -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
      background: -moz-linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 78%) 60%, rgb(131 124 124 / 54%) 100%) !important;
background: -webkit-linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 78%) 60%, rgb(131 124 124 / 54%) 100%) !important;
background:  linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 78%) 60%, rgb(131 124 124 / 54%) 100%) !important;
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c3c3c3",endColorstr="#e7e8ea",GradientType=1) !important;

        `
    );

    this.add_CSS_Class(
      `.Container_Menu`,
      `
   z-index: 200;
display: flex;
    height: fit-content;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background: rgb(195, 195, 195);
    background: -moz-linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 54%) 60%, rgb(215 216 219 / 11%) 100%);
background: -webkit-linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 54%) 60%, rgb(215 216 219 / 11%) 100%);
background: linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 54%) 60%, rgb(215 216 219 / 11%) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c3c3c3",endColorstr="#e7e8ea",GradientType=1);
      `
    );

    this.add_CSS_Class(
      `.Container_Links`,
      `
   width: 100%;
display: flex;
    height: fit-content;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    `
    );

    this.add_CSS_Class(
      `.h2Menu`,
      `
     color: white;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.05em;
    display: inline-block;
      `
    );

    this.add_CSS_Class(
      `.h2Menu::after`,
      `

    background: none repeat scroll 0 0 transparent;
    bottom: 0.8em;
    content: "";
    display: block;
    height: 4px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    
      `
    );


    this.add_CSS_Class(
      `.h2Menu:hover::after`,
      `

    width: 70%;
      left:15%
      `
    );
    

    this.add_CSS_Class(
      `.Container_text`,
      `
    
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    grid-row: 2;
    
        `
    );



    this.add_CSS_Class(
      `.Div_button`,
      `
  
padding: 0 2%;
  
      `
    );


    this.add_CSS_Class(
      `.Title`,
      `
    color: white;

         animation: bounce 5s both;
         animation-delay: 1s;
           -webkit-animation: bounce 5s both;
  -moz-animation: bounce 5s both;
  -o-animation: bounce 5s both;
  -ms-animation: bounce 5s both;
  font-size: 4em;

    
        `
    );

    this.add_CSS_Class(
      `@-webkit-keyframes bounce`,
      `
  70% { transform:translateY(0%); }
    80% { transform:translateY(-50%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-12%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-5%); }
    100% { transform:translateY(0); }
    
        `
    );

    this.add_CSS_Class(
      `@keyframes bounce`,
      `
  70% { transform:translateY(0%); }
    80% { transform:translateY(-50%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-12%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-5%); }
    100% { transform:translateY(0); }
    
        `
    );

    this.add_CSS_Class(
      `@-webkit-keyframes fadeIn`,
      `
 0% {opacity: 0;}
  100% {opacity: 1;}
    
        `
    );

    this.add_CSS_Class(
      `@keyframes fadeIn`,
      `
 0% {opacity: 0;}
  100% {opacity: 1;}
    
        `
    );



    this.add_CSS_Class(
      `.Subtitle`,
      `
    
  color: beige;
           animation: ZoomIn 6s both;
         animation-delay: 10s;
           -webkit-animation: ZoomIn 6s both;
  -moz-animation: ZoomIn 6s both;
  -o-animation: ZoomIn 6s both;
  -ms-animation: ZoomIn 6s both;
  font-size: 2em;
    
        `
    );

    this.add_CSS_Class(
      `@-webkit-keyframes ZoomIn`,
      `
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
  
      `
    );

    this.add_CSS_Class(
      `@keyframes ZoomIn`,
      `
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }

    `
    );

    this.add_CSS_Class(
      `.ul`,
      `
     margin: 150px auto 0; 
      padding: 0; 
      list-style: none; 
      display: table;
      width: 600px;
      text-align: center;
    
        `
    );
    this.add_CSS_Class(
      `.Div_button`,
      `
      display: table-cell; 
      position: relative; 
      
    
        `
    );
  

    this.add_CSS_Class(
      `.Nav_Menu_toggle`,
      `

      display: none;

        `
    );

    

    

        ///////////////////////////////////////////////////////////////
        //////////////////middle///////////////////////////////////////
        ///////////////////////////////////////////////////////////////


  this.add_CSS_Class(
    `.Nav_Menu_toggle`,
    `

        width: 8%;
        height: 100%;
                min-height: 50px;
        position: relative;
        display: block;
                     margin-right: 5%;


      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.Span_Menu_toggle`,
    `
  display:block;
  background: white;
  width:100%;
  height:8px;
  position:absolute;
  left:0;
  border-radius: 4px;
        transition: top 0.3s ease 0.3s, transform .3s ease-out 0s, opacity 0s ease-out .3s;
  -webkit-transition: top 0.3s ease 0.3s, transform .3s ease-out 0s, opacity 0s ease-out .3s;
  -moz-transition: top 0.3s ease 0.3s, transform .3s ease-out 0s, opacity 0s ease-out .3s;

  
      `, GALSAN_CreateBlock.Screen_Middle
  );

  this.add_CSS_Class(
    `.line_1`,
    `
  top: 12px;
     transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
 
  
      `, GALSAN_CreateBlock.Screen_Middle
  );

  this.add_CSS_Class(
    `.line_2`,
    `
  top: 25px;
  opacity:1;
         transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.line_3`,
    `
top: 38px;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
  
      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.line_1.active`,
    `
    transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
  top:25px;

        transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
  -webkit-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
  -moz-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
      `, GALSAN_CreateBlock.Screen_Middle
  );

  this.add_CSS_Class(
    `.line_2.active`,
    `
 opacity:0;
        transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
  -webkit-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
  -moz-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.line_3.active`,
    `
 transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      top:25px;
        transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
  -webkit-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
  -moz-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
      `, GALSAN_CreateBlock.Screen_Middle
  );

  this.add_CSS_Class(
    `.Container_Menu`,
    `
   
    justify-content: flex-end;
       /*  position: fixed; */
        width: 100%;
        max-width: 100%;
        left: 0;
        top: 0;
        z-index: 200;
       
    `, GALSAN_CreateBlock.Screen_Middle
  );

  this.add_CSS_Class(
    `.Resize_height`,
    `
 min-height: 80px;

      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.Container_Links`,
    `
        width: 100%;
        display: inline-flex;
        max-height: 0px;
        opacity: 0;
        visibility: hidden;
        height: fit-content;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        align-items: center;
        margin-top: 70px;
        left: 8%;
         
          transition: opacity 0.9s linear, max-height 0.9s ease-out, visibility 0.9s linear;

      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.Container_Links.active`,
    `
   visibility: visible;
     opacity: 1;
        max-height: 900px;
        transition: opacity 0.9s linear, max-height 0.7s ease-in, visibility 0.9s linear;
      `, GALSAN_CreateBlock.Screen_Middle
  );


  this.add_CSS_Class(
    `.Container_Menu.active`,
    `
   
   background: linear-gradient(180deg, rgb(105 102 102 / 78%) 0%, rgb(131 124 124 / 78%) 60%, rgb(131 124 124 / 54%) 100%);

      `, GALSAN_CreateBlock.Screen_Middle
  );
          ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////

      this.add_CSS_Class(
        `.line_1`,
        `
      top: 16px;

     
      
          `, GALSAN_CreateBlock.Screen_Mobile
      );
    
    
      this.add_CSS_Class(
        `.line_3`,
        `
    top: 34px;

      
          `, GALSAN_CreateBlock.Screen_Mobile
      );
    
      this.add_CSS_Class(
        `.Span_Menu_toggle`,
        `

      height:5px;
    
      
          `, GALSAN_CreateBlock.Screen_Mobile
      );


      this.add_CSS_Class(
        `.Title`,
        `

    font-size: 12vw;
    text-shadow: -3px 3px black;
          `, GALSAN_CreateBlock.Screen_Mobile
      );

      this.add_CSS_Class(
        `.Subtitle`,
        `

    font-size: 6vw;
    text-shadow: 2px 1px black;
          `, GALSAN_CreateBlock.Screen_Mobile
      );


    var Container_principal = this.CreateElement_(
      "div",
      `Container`,
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    /////Container_principal.alt = this.alt_

    GALSAN_CreateBlock.AttachID(Container_principal, "Container_Panel_ID");

    Container_principal.setAttribute('style', `background-image:url(${this.Photo_})!important`);

    var Container_Menu = this.CreateElement_(
      "div",
      `Container_Menu`
    );

    Container_principal.appendChild(Container_Menu);

    GALSAN_CreateBlock.AttachID(Container_Menu, "Container_Menu_ID");

    var div__ = this.CreateElement_(
      "div",
      `Container_Links`
    );

    Container_Menu.appendChild(div__);

    GALSAN_CreateBlock.AttachID(div__, "Container_Links_ID");

    var Nav_Menu_toggle = this.CreateElement_(
      "div",
      `Nav_Menu_toggle`
    );

    Container_Menu.appendChild(Nav_Menu_toggle);
    GALSAN_CreateBlock.AttachID(Nav_Menu_toggle, "Nav_toggle_ID");
    
    GALSAN_CreateBlock.Attach_Attribute_onClick(Nav_Menu_toggle, `Portada_Image.ToggleNav(`+ '"' + `${this.getClassName()}` + '"' + `)`);

    var Span_Menu_toggle = this.CreateElement_(
      "span",
      `Span_Menu_toggle`
    );

    Nav_Menu_toggle.appendChild(Span_Menu_toggle);

    Span_Menu_toggle.classList.add(`${this.getClassName()}line_1`);
    GALSAN_CreateBlock.AttachID(Span_Menu_toggle, "Span_line1");

    var Span_Menu_toggle = this.CreateElement_(
      "span",
      `Span_Menu_toggle`
    );

    Nav_Menu_toggle.appendChild(Span_Menu_toggle);
    Span_Menu_toggle.classList.add(`${this.getClassName()}line_2`);
    GALSAN_CreateBlock.AttachID(Span_Menu_toggle, "Span_line2");

    var Span_Menu_toggle = this.CreateElement_(
      "span",
      `Span_Menu_toggle`
    );

    Nav_Menu_toggle.appendChild(Span_Menu_toggle);

    Span_Menu_toggle.classList.add(`${this.getClassName()}line_3`);
    GALSAN_CreateBlock.AttachID(Span_Menu_toggle, "Span_line3");

 

    switch (this.mode_) {
      case "Simple":
      
      Container_principal.setAttribute('style', `padding-bottom: 0px !important;
    min-height: 0; background-image:url(${this.Photo_})!important;`);

    Container_Menu.setAttribute('style', `padding: 3% 0;`);
      
        break;

      case "Total":

      var Container_text = this.CreateElement_(
        "div",
        `Container_text`
      );
  
      Container_principal.appendChild(Container_text);
  
      var Title = this.CreateElement_(
        "h1",
        `Title`,
        this.Title_
  
  
      );
  
      Container_text.appendChild(Title);
  
  
      var Subtitle = this.CreateElement_(
        "h3",
        `Subtitle`,
        this.Subtitle_
  
  
      );
  
      Container_text.appendChild(Subtitle);
  
        break;


      default:

        break;
      }





  }
}

