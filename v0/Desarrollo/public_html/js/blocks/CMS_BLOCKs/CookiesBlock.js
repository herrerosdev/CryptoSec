
class Cookies_Panel {
    constructor(Params) {



      ///Mode Simple(Informacion sin dejar que configure), Mode Complete(configuracion, rechazar, aceptar)
      this.Mode_ = Params.Mode;
       //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

      
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
 
    Add_Panel(Params) {


      var Container_Panel_ID = document.getElementById("Container_Cookies_Panel_ID");


        var P_info = this.CreateElement_(
          "p",
          `P_info`,
          Params.Text
      );
  
      Container_Panel_ID.appendChild(P_info);

      for (let index = 0; index < Params.Buttons.length; index++) {
        var Buttons_options = this.CreateElement_(
            "button",
            `Buttons_options`,
            Params.Buttons[index]
        );
    
        Container_Panel_ID.appendChild(Buttons_options);
        //Buttons_options.onclick = function(){Params.Action}; 
        
    }

    Container_Panel_ID.appendChild(Buttons_options);
        

    }


  
    ViewConstructor() {
    
      
      this.add_CSS_Class(
        `.Container`,
        `
     position: fixed;
    width: 50%;
    height: auto;
    left: 0px;
    bottom: 0px;
    -ms-transform: translateX(-50%) translateY(-50%);
    /* transform: translateX(-50%) translateY(-50%); */
    grid-template-rows: minmax(0, 1fr);
    z-index: 99999;
    background: #e1e1e1;
    border-style: solid;
    border-color: #f2f2f2;
    border-width: 0px 0px 0px 0px;
    border-radius: 12px 12px 12px 12px;
    padding: 15px 20px;
    display: grid;
    box-sizing: border-box;
    grid-gap: 10px;
        `
    );

    this.add_CSS_Class(
      `.P_info`,
      `
font-size: 1vw;
      `
  );



    this.add_CSS_Class(
      `.Buttons_options`,
      `
    height: auto;
    padding: 4%;
    margin: initial;
    width: 100%;
    white-space: nowrap;
    border-radius: var(--cmplz_button_border_radius);
    cursor: pointer;
    font-size: 1vw;
    font-weight: 500;
    text-decoration: none;
    line-height: 20px;
    text-align: center;
    flex: initial;

      `
  );

          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
  
          this.add_CSS_Class(
            `.P_info`,
          `
font-size: 3vw;
    
                `, GALSAN_CreateBlock.Screen_Middle
            );
    
  
            this.add_CSS_Class(
              `.Buttons_options`,
              `
          
            font-size: 2.3vw;
           
        
              `, GALSAN_CreateBlock.Screen_Middle
          );


          this.add_CSS_Class(
            `.Container`,
            `

        width: 60%;
    
            `, GALSAN_CreateBlock.Screen_Middle
        );
          ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
    
    
            this.add_CSS_Class(
              `.P_info`,
            `
font-size: 4vw;
            
                  `, GALSAN_CreateBlock.Screen_Mobile
              );
      
              this.add_CSS_Class(
                `.Buttons_options`,
                `
              font-size: 3vw;
        
          
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Container`,
              `

          width: 80%;
      
              `, GALSAN_CreateBlock.Screen_Mobile
          );

        var Container_principal = this.CreateElement_(
            "div",
            `Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );



      GALSAN_CreateBlock.AttachID(Container_principal, "Container_Cookies_Panel_ID");
        




    }
  }
  