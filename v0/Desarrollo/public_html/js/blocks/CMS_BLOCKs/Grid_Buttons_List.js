class Grid_Buttons_List {
 
  
    constructor() {

  
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
      //Create View: Dynamic HTMLL CSS: Node
      this.CreateView();
    }
  
    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////
  
    //Add css class
    AddButton(Params){
  
  var Name = Params.Name || "NAME";
  var Action = Params.Action || "";

      var Container_Buttons = document.getElementById("Container_Buttons");
  
      var Button_div = this.CreateElement_(
          "div",
          `Button_div`,
          null,
          GALSAN_CreateBlock.Site_Column_Center
        );
  
        var h2SEO = this.CreateElement_(
          "h2",
          "Title_Button",
          Name,
          null
        );
  
        Button_div.appendChild(h2SEO);
        /* Button_div.onclick = function(){window.open(`${Action}`);}; */

        Button_div.onclick = function(){window.location.href = Action;}; 
  
        Container_Buttons.appendChild(Button_div);
  
    }
  
    CreateView() {
      //Add fonts
      GALSAN_CreateBlock.addFont("FontHeadered", "Tiemann_Light");
      GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");
  
      //Add CSS
  
      //Add CSS
      this.add_CSS_Class(
        `.Container_Buttons_List`,
        `
  
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  
      `
      );
  
  
  
      this.add_CSS_Class(
        `.Button_div`,
        `
            background-image: linear-gradient(325deg, #8ec7ef 15%, #51a0e3 25%, #0060b3 60%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 500;
    padding: 0 1.6rem;
    text-align: center;
    text-shadow: rgb(0 59 171 / 25%) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    margin: 2vw 0;
  
      `
      
      );
  
          this.add_CSS_Class(
          `.Button_div`,
          `
padding: 0 2.6rem;
    
        `,
  
        GALSAN_CreateBlock.Screen_Middle
        );
  
          //Border cornered
          this.add_CSS_Class(
              `.Button_div:hover`,
              `
  
  
    box-shadow: #01101c 0 1px 30px;
    transition-duration: .1s;  
      
      
            `
            );
            
  
  



      //Create html elements (Using DOM)
  
      //Create element and associate a classes
      var ContenedorPrincipal = this.CreateElement_(
        "div",
        `Container_Buttons_List`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      ContenedorPrincipal.id = "Container_Buttons";
  

  
      //p_TITLE.id = "ServicesCartHeader";
      //ContenedorPrincipal.id = "ServicesCartHeaderGlobal";
    }
  }
  