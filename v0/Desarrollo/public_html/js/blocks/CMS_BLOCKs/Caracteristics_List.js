class Caracteristics_List {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor(Params) {


        //Estructura
        //{"Title": "", "Ante_Title": "", "SubTitle": "","BackColor": ""}
        this.Ante_Title_ = Params.Ante_Title;
        this.Title_ = Params.Title;
        this.SubTitle_ = Params.SubTitle;
        this.BackColor_ = Params.BackColor;
       
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
        this.PrincipalContainer = null
        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }


    getClassName() {
        return this.constructor.name;
      }


    AddCaracteristic(Params) {

        //Estructura
        //{"Icon":"", "Text": ""}
    
        var Container_Grid_CaracteristicsID = document.getElementById("Container_Grid_CaracteristicsID");

      
        var Container_Ind_Caracteristic = this.CreateElement_(
            "div",
            `Container_Ind_Caracteristic`
          );
      
          Container_Grid_CaracteristicsID.appendChild(Container_Ind_Caracteristic);


          var Img_Icon = this.CreateElement_(
            "img",
            `Img_Icon`,
            Params.Icon
          );
      
          Container_Ind_Caracteristic.appendChild(Img_Icon);


          var Container_Text = this.CreateElement_(
            "div",
            `Container_Text`
          );
      
          Container_Ind_Caracteristic.appendChild(Container_Text);


          var Text = this.CreateElement_(
            "h3",
            `Text`,
            Params.Text
          );
      
          Container_Text.appendChild(Text);

    }


    ElementIsVisible(elem, EffectName) {

        var ClassName = Recommendations.o_Rec_.getClassName();
        var observer = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting === true)
            elem.classList.add(ClassName + EffectName);
        }, { threshold: [0] });
    
        observer.observe(elem);
      }

    ViewConstructor() {
        

        this.add_CSS_Class(
            ".Container_Caracteristics",
            `
padding: 2vh 0;
    background-color: #f8f8ec;
    border-top: solid black 3px;

`
        );


        this.add_CSS_Class(
            ".Container_Title",
            `

    margin: 2vh auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
     color: #002349;
`
        );

        this.add_CSS_Class(
            ".Ante_Title",
            `
 font-size: 2.5vw;
    font-variant: all-petite-caps;
        margin: 0;

`
        );



        this.add_CSS_Class(
            ".Title",
            `

    font-size: 3.5vw;
    font-family: monospace;
`
        );


        this.add_CSS_Class(
            ".SubTitle",
            `
 font-size: 1.5vw;
  font-variant: all-small-caps;
   margin: 0;
   margin-bottom: 5%;

`
        );

        this.add_CSS_Class(
            ".Container_Grid",
            `
     display: grid;
        align-items: center;
        justify-items: center;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        width: 80%;
        margin: 2vh auto;
`
        );

        this.add_CSS_Class(
          ".Container_Ind_Caracteristic",
          `
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0 auto;

`
      );

      this.add_CSS_Class(
        ".Img_Icon",
        `
width: 100px;

`
    );

    this.add_CSS_Class(
      ".Text",
      `
 color: #002349;
 font-size: 2vw;
`
  );
    
      
   


        this.add_CSS_Class(
            ".Container_Recommend",
            `

`,GALSAN_CreateBlock.Screen_Middle
        );




        this.add_CSS_Class(
          ".Ante_Title",
          `
font-size: 5vw;

`,GALSAN_CreateBlock.Screen_Mobile
      );



      this.add_CSS_Class(
          ".Title",
          `

  font-size: 6vw;

`,GALSAN_CreateBlock.Screen_Mobile
      );


      this.add_CSS_Class(
          ".SubTitle",
          `
font-size: 4vw;


`,GALSAN_CreateBlock.Screen_Mobile
      ); 


     
        var Container_Caracteristics = this.CreateElement_(
            "div",
            "Container_Caracteristics"
        );

   

        var Container_Title = this.CreateElement_(
            "div",
            `Container_Title`
          );
      
          Container_Caracteristics.appendChild(Container_Title);
    
          var title = this.CreateElement_(
            "h3",
            `Ante_Title`,
            this.Ante_Title_
          );
      
          Container_Title.appendChild(title);
    
          var title = this.CreateElement_(
            "h2",
            `Title`,
            this.Title_
          );
      
          Container_Title.appendChild(title);

          var title = this.CreateElement_(
            "h4",
            `SubTitle`,
            this.SubTitle_
          );
      
          Container_Title.appendChild(title);


        var Container_Grid = this.CreateElement_(
            "div",
            `Container_Grid`
          );
      
          Container_Caracteristics.appendChild(Container_Grid);

          GALSAN_CreateBlock.AttachID(Container_Grid, "Container_Grid_CaracteristicsID");




    }
}