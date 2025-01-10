
class Basic_Nav {
    constructor(Params) {
  
      //Estructura Nav
     // {"alt":"", "Photo": "", "BackColor": "", "Hamb_Menu_Number": 2, "ID_Scroll": ""}
      this.Photo_ = Params.Photo;
      this.alt_ = Params.alt;
      this.BackColor_ = Params.BackColor;
      this.Hamb_Menu_Number_ = Params.Hamb_Menu_Number;
      this.ID_Scroll = Params.ID_Scroll;  //ID del elemento que queremos que tenga en cuenta para cuando supere su altura en scroll se cambien las clases deseadas
     // this.alt_ = Params.alt;
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
      //{"Name":"","Action":"", "ArrayDesplegable":  [{"Name": "", "Action": ""}, {"Name": "", "Action": ""}]}  //"ArrayDesplegable optional only if have subcategories
      
      var Container_Links_ID = document.getElementById("Container_Links_ID");
  
      var Div_button = this.CreateElement_(
        "div",
        `Div_button`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );

      Container_Links_ID.appendChild(Div_button);
  
      var h2SEO = this.CreateElement_(
        "h3",
        "h2Menu",
        Params.Name
  
      );
  
      Div_button.appendChild(h2SEO);

  
     


      if(Params.ArrayDesplegable) {

        var ArrayDesplegable = Params.ArrayDesplegable;

        var dropdown_content = this.CreateElement_(
          "div",
          "dropdown_content"
    
        );

        Div_button.appendChild(dropdown_content);

        GALSAN_CreateBlock.AttachID(dropdown_content, "Dropdown_Id");

        for (let index = 0; index < ArrayDesplegable.length; index++) {

          var h2SEO = this.CreateElement_(
            "h4",
            "SubCat",
            ArrayDesplegable[index].Name
      
          );
      
          dropdown_content.appendChild(h2SEO);
          h2SEO.onclick = function () { window.location.href = `${ArrayDesplegable[index].Action}`; };
          
          
        }

        Div_button.onclick = function () {dropdown_content.classList.toggle(Basic_Nav.o_Nav_.getClassName() + 'active');};


      } else {Div_button.onclick = function () { window.location.href = `${Params.Action}`; };}


      $(document).ready(function () { 
        Basic_Nav.o_Nav_.Elements_Scroll(Basic_Nav.o_Nav_.ID_Scroll);
      });
  
     
  
    }
  
  
    Elements_Scroll(Id) {
  
      var ClassName = this.getClassName();
  
      CEffects.On_Scroll_height_Transform([
        {"id": Id},
        {"id": "Container_Menu_ID", "Class_Transform": ClassName + "fix_element"},
        {"id": "Dropdown_Id", "Class_Transform": ClassName + "fix_element"},
      
      ]);
  
    }
  
  
     ToggleNav(ClassName) {
  
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

    background-color: ${this.BackColor_};
        width: 100%;
    height: auto;
    align-content: center;
  

  
          `
      );
  
  
  
      this.add_CSS_Class(
        `.Container_Menu.fix_element`,
        `
      
         position: fixed !important;
      top: 0;
      left: 0;
      width: 100%;
      transition: opacity .5s;
      padding: 0 0 !important;
        -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
     background: linear-gradient(180deg, #7e6545a8 0%, #634c30 60%, #634c30 100%);

          `
      );
  
      this.add_CSS_Class(
        `.Container_Menu`,
        `
    z-index: 200;
    display: flex;
    height: fit-content;
    position: relative;
    width: 100%;
    opacity:1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;  
      border-bottom: black solid 6px;
     transition: opacity .5s;
    `
      );
  
      this.add_CSS_Class(
        `.Container_Links`,
        `
    width: 90%;
    display: flex;
    height: fit-content;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
}
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
      position: relative;
      cursor: pointer;
        `
      );


      this.add_CSS_Class(
        `.SubCat`,
        `
       color: white;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.05em;
      display: inline-block;
      cursor: pointer;
        `
      );
  
  
      this.add_CSS_Class(
        `.h2Menu::after`,
        `
  
      background: none repeat scroll 0 0 transparent;
      bottom: -0.5em;
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
  
      width: 90%;
         left: 5%;
        `
      );
      
  
  
      this.add_CSS_Class(
        `.Div_button`,
        `
    
  padding: 0 2%;
  position: relative;
    
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
    display: flex;
    width: auto;
    position: relative;
    align-self: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
        
      
          `
      );
    
  
      this.add_CSS_Class(
        `.Nav_Menu_toggle`,
        `
  
        display: none;
  
          `
      );
  
      
      this.add_CSS_Class(
        `.Container_Logo`,
        `
     width: 10%;
    padding: 2%;
      

  
          `
      );  
  
      this.add_CSS_Class(
        `.Img_Logo`,
        `
  
       width: 100%;
  
          `
      );  


      this.add_CSS_Class(
        `.Div_button:hover .dropdown_content`,
        `
     display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(45%);

        
      
          `
      );

      this.add_CSS_Class(
        `.dropdown_content`,
        `
    display: none;
    position: absolute;
    background-color: #7e6545;
    min-width: 160px;
    border: 2px solid black;
    box-shadow: 0px 14px 16px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
  
          `
      ); 



      
     
      this.add_CSS_Class(
        `.dropdown_content.fix_element`,
        `
 background: linear-gradient(180deg, #7e6545a8 0%, #634c30 60%, #634c30 100%);
  
          `
      );
      
  
          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  


  
    this.add_CSS_Class(
      `.Nav_Menu_toggle`,
      `
  
   width: 50px;
        height: 100%;
        height: 50px;
        position: relative;
        display: block;
        margin-right: 5%;
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    );
  
   
    this.add_CSS_Class(
      `.Container_Menu`,
      `
     
      justify-content: flex-end;
              align-items: center;
       
                  border-bottom: black solid 6px;
          width: 100%;
        position: relative;
          z-index: 200;
                  background-color: #7e6545;
                      transition: top 0.9s linear, transform 0.7s ease-in, align-items 0.9s linear;
         
      `, GALSAN_CreateBlock.Screen_Middle
    );
  
    this.add_CSS_Class(
      `.Container_Logo`,
      `
          width: 13%;
         
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
                 width: 70%;
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
    background: linear-gradient(180deg, #7e6545a8 0%, #634c30 60%, #634c30 100%);
        border-bottom: black solid 6px;
                align-items: flex-start;
                    transition: top 0.9s linear, transform 0.7s ease-in, align-items 0.9s linear;
        `, GALSAN_CreateBlock.Screen_Middle
    );



    this.add_CSS_Class(
      `.dropdown_content`,
      `
    opacity: 0;
          visibility: hidden;
    position: relative;
    max-height: 0px;
  background-color: transparent;
 
  border: 0px solid black;
  box-shadow: none;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
   transition: opacity 0.9s linear, max-height 0.9s ease-out, visibility 0.9s linear;

        `, GALSAN_CreateBlock.Screen_Middle
    ); 



    this.add_CSS_Class(
      `.dropdown_content.active`,
      `
          opacity: 1;
        visibility: visible;
        max-height: 900px;
        transition: opacity 0.9s linear, max-height 0.7s ease-in, visibility 0.9s linear;
        background-color: transparent;
        box-shadow: none;
        transform: translateY(0);


        `, GALSAN_CreateBlock.Screen_Middle
    ); 

    this.add_CSS_Class(
      `.Div_button:hover .dropdown_content`,
      `

  transform: translateY(0%);

        `, GALSAN_CreateBlock.Screen_Middle
    );





  
            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
   

          ////////////////swith Hamburger////////////////////////
          switch (this.Hamb_Menu_Number_) {
            case 1:
      
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
          
      
            //////Mobile
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
              
              break;

              case 2:
                this.add_CSS_Class(
                  `.Span_Menu_toggle`,
                  `
                display:block;
                position:absolute;
                left:0;
                      transition: top 0.3s ease 0.3s, transform .3s ease-out 0s, opacity 0s ease-out .3s;
                -webkit-transition: top 0.3s ease 0.3s, transform .3s ease-out 0s, opacity 0s ease-out .3s;
                -moz-transition: top 0.3s ease 0.3s, transform .3s ease-out 0s, opacity 0s ease-out .3s;
              
                
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.line_1`,
                  `
                 width: 100%;
                    `, GALSAN_CreateBlock.Screen_Middle
                );
              
                this.add_CSS_Class(
                  `.line_1::before, .line_1::after`,
                  `
         content: "";
        width: 50%;
        height: 8px;
        top: 12px;
        background-color: white;
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        position: absolute;
               
                
                    `, GALSAN_CreateBlock.Screen_Middle
                );


                this.add_CSS_Class(
                  `.line_1::before`,
                  `
        border-radius: 4px 0px 0px 4px;     
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.line_1::after`,
                  `
         border-radius: 0px 4px 4px 0px;
        left: 50%; 
                    `, GALSAN_CreateBlock.Screen_Middle
                );
              

                
                this.add_CSS_Class(
                  `.line_2`,
                  `
                top: 25px;
                opacity:1;
                  width: 100%;
                  height: 8px;
                  background-color: white;
                   border-radius: 4px 4px 4px 4px;
                       transform: rotate(0deg);
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    `, GALSAN_CreateBlock.Screen_Middle
                );
              
              
                this.add_CSS_Class(
                  `.line_3`,
                  `
              width: 100%;
                
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.line_3::before, .line_3::after`,
                  `
             content: "";
        width: 50%;
        height: 8px;
        top: 38px;
        background-color: white;
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        position: absolute;
                
                    `, GALSAN_CreateBlock.Screen_Middle
                );


                this.add_CSS_Class(
                  `.line_3::before`,
                  `
        border-radius: 4px 0px 0px 4px;        
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.line_3::after`,
                  `
         left: 50%;
        border-radius:  0px 4px 4px 0px;
                    `, GALSAN_CreateBlock.Screen_Middle
                );
              
              
                this.add_CSS_Class(
                  `.active.line_1::before, .active.line_1::after`,
                  `
                top: 15px;
                      transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
                -webkit-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
                -moz-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.active.line_1::before `,
                  `
                  transform: rotate(45deg) translate(20%, 0%);
                    -webkit-transform: rotate(45deg) translate(20%, 0%);
                    -moz-transform: rotate(45deg) translate(20%, 0%);
         
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.active.line_1::after`,
                  `
                   transform: rotateZ(-45deg) translate(-20%, 0%);
                    -webkit-transform: rotateZ(-45deg) translate(-20%, 0%);
                    -moz-transform: rotateZ(-45deg) translate(-20%, 0%);
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
                  `.active.line_3::before, .active.line_3::after`,
                  `
                    top:35px;
                      transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
                -webkit-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
                -moz-transition: top 0.3s ease 0s, transform .3s ease-out 0.3s, opacity 0s ease-out .3s;
                    `, GALSAN_CreateBlock.Screen_Middle
                );
              
                this.add_CSS_Class(
                  `.active.line_3::before`,
                  `
             transform: rotateZ(-45deg) translate(20%, 0%);
                    -webkit-transform: rotateZ(-45deg) translate(20%, 0%);
                    -moz-transform: rotateZ(-45deg) translate(20%, 0%);
        
                    `, GALSAN_CreateBlock.Screen_Middle
                );

                this.add_CSS_Class(
                  `.active.line_3::after`,
                  `
               transform: rotateZ(45deg) translate(-20%, 0%);
                    -webkit-transform: rotateZ(45deg) translate(-20%, 0%);
                    -moz-transform: rotateZ(45deg) translate(-20%, 0%);
                    `, GALSAN_CreateBlock.Screen_Middle
                );
              
          
                //////Mobile
                this.add_CSS_Class(
                  `.line_1::before, .line_1::after`,
                  `
      height: 5px;
                
                    `, GALSAN_CreateBlock.Screen_Mobile
                );
              
                this.add_CSS_Class(
                  `.line_2`,
                  `
            
            height: 5px;
                
                    `, GALSAN_CreateBlock.Screen_Mobile
                );
              
                this.add_CSS_Class(
                  `.line_3::before, .line_3::after `,
                  `
              height: 5px;
                
                    `, GALSAN_CreateBlock.Screen_Mobile
                );


                this.add_CSS_Class(
                  `.active.line_1::before`,
                  `
             transform: rotateZ(45deg) translate(30%, 0%);
  
                    -webkit-transform: rotateZ(45deg) translate(30%, 0%);
                    -moz-transform: rotateZ(45deg) translate(30%, 0%);
        
                    `, GALSAN_CreateBlock.Screen_Mobile
                );

                this.add_CSS_Class(
                  `.active.line_1::after`,
                  `
               transform: rotateZ(-45deg) translate(-30%, 0%);
                    -webkit-transform: rotateZ(-45deg) translate(-30%, 0%);
                    -moz-transform: rotateZ(-45deg) translate(-30%, 0%);
                    `, GALSAN_CreateBlock.Screen_Mobile
                );


                this.add_CSS_Class(
                  `.active.line_3::before`,
                  `
             transform: rotateZ(-45deg) translate(30%, 0%);
                    -webkit-transform: rotateZ(-45deg) translate(30%, 0%);
                    -moz-transform: rotateZ(-45deg) translate(30%, 0%);
        
                    `, GALSAN_CreateBlock.Screen_Mobile
                );

                this.add_CSS_Class(
                  `.active.line_3::after`,
                  `
               transform: rotateZ(45deg) translate(-30%, 0%);
                    -webkit-transform: rotateZ(45deg) translate(-30%, 0%);
                    -moz-transform: rotateZ(45deg) translate(-30%, 0%);
                    `, GALSAN_CreateBlock.Screen_Mobile
                );
              
               
                break;
          
            default:
              break;
          }
  
  
  
      var Container_principal = this.CreateElement_(
        "div",
        `Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////
  
  
      var Container_Menu = this.CreateElement_(
        "div",
        `Container_Menu`
      );
  
      Container_principal.appendChild(Container_Menu);
  
      GALSAN_CreateBlock.AttachID(Container_Menu, "Container_Menu_ID");

      
      var Container_Logo = this.CreateElement_(
        "div",
        `Container_Logo`
      );
  
      Container_Menu.appendChild(Container_Logo);

      var Img_Logo = this.CreateElement_(
        "img",
        `Img_Logo`,
        this.Photo_
      );
  
      Container_Logo.appendChild(Img_Logo);
      Img_Logo.alt = this.alt_;

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
      
      GALSAN_CreateBlock.Attach_Attribute_onClick(Nav_Menu_toggle, `Basic_Nav.o_Nav_.ToggleNav(`+ '"' + `${this.getClassName()}` + '"' + `)`);
  
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



   
   
  
  
  
    }
  }
  
  