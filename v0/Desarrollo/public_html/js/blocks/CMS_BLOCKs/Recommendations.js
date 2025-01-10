class Recommendations {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor(Params) {


        //Estructura
        //{"Title": "", "BackColor": ""}
        this.Title_ = Params.Title;
        this.BackColor_ = Params.BackColor;
        this.Direction = "Left";

        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
        this.PrincipalContainer = null
        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }


    getClassName() {
        return this.constructor.name;
      }


    AddRecommendation(Params) {

        //Estructura
        //{"Title":"", "Action": "", "Section": "", "Price": "", "Photo": ""}
    
        var Container_RecommendID = document.getElementById("Container_RecommendID");

        var Content_Grid_Wrapper = this.CreateElement_(
            "div",
            "Content_Grid_Wrapper"
        );
        Container_RecommendID.appendChild(Content_Grid_Wrapper);

        switch (this.Direction) {

            case "Left":
              this.ElementIsVisible(Content_Grid_Wrapper, "SlideRight");
              this.Direction = "Right";      
              break;
      
            case "Right":
      
              this.ElementIsVisible(Content_Grid_Wrapper, "SlideLeft");
              this.Direction = "Left";
   
      
              break;
      
      
            default:
      
              break;
          };
    

        var img_Photo_min = this.CreateElement_(
            "img",
            "img_Photo_min",
            Params.Photo
        );


        Content_Grid_Wrapper.appendChild(img_Photo_min);


        var Content_Details = this.CreateElement_(
            "div",
            "Content_Details"
        );
        Content_Grid_Wrapper.appendChild(Content_Details);

        var Content_Text = this.CreateElement_(
            "div",
            "Content_Text"
        );
        Content_Details.appendChild(Content_Text);

      
        var Content_flex = this.CreateElement_(
            "div",
            "Content_flex"
        );
        Content_Text.appendChild(Content_flex);

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Title",
            Params.Title 
        );


        Content_flex.appendChild(Link_Grid_Wrapper);

        Link_Grid_Wrapper.onclick = function () { window.location.href = `${Params.Action}`; };

        var dotted_line = this.CreateElement_(
            "p",
            "dotted_line"
        );


        Content_flex.appendChild(dotted_line);

        

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Price",
            Params.Price
        );


        Content_Text.appendChild(Link_Grid_Wrapper);



        var Content_Description = this.CreateElement_(
            "div",
            "Content_Description"
        );
        Content_Details.appendChild(Content_Description);

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Description",
            Params.Section
        );


        Content_Description.appendChild(Link_Grid_Wrapper);


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
            ".Container_Grid_Wrapper",
            `
    padding: 11vw 0;
    width: 100%;
`
        );

        this.add_CSS_Class(
            `.Container_Text`,
            `
margin: 5vw auto;
    display: flex;
    justify-content: center;

              `
          );


        this.add_CSS_Class(
            `.Content_Description`,
            `
          font-size: 2vw;
          font-family: emoji;

              `
          );

          


        this.add_CSS_Class(
            ".Content_Grid_Wrapper",
            `
    padding: 1% 2%;
    cursor: pointer;
        overflow-x: hidden;
    height: auto;
    display: grid;
    column-gap: 2%;
    text-align: center;
    width: 100%;
    grid-template-columns: 20% 80%;
    align-items: center;
            opacity: 0;
            visibility: hidden;
`
        );

        this.add_CSS_Class(
            ".Container_Recommend",
            `
display: grid;
    margin: 0 auto;
    column-gap: 2%;
   overflow-x: hidden;
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
`
        );

        this.add_CSS_Class(
            ".img_Photo_min",
            `
 width: 80%;
`
        );

        this.add_CSS_Class(
            ".Content_Details",
            `
    display: grid;
    grid-template-columns: 100%;
    justify-content: start;
    justify-items: start;
    align-content: center;
    align-items: center;

       
`
        );


        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Title",
            `
    display: grid;
    width: auto;
    height: auto;
    text-decoration: none;
     margin: 2% 0;
    font-family: Courier New;
    text-align: justify;
    font-size: 1.5vw;
    font-weight: bold;
    position: relative;
    font-variant: all-petite-caps;
    
`
        );


        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Title:hover",
            `
        color: #ffb353;
    
        `
        );

        this.add_CSS_Class(
            ".Content_flex",
            `
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    width: 100%;
`
        );

        this.add_CSS_Class(
            ".Content_Text",
            `
   display: grid;
    grid-template-columns: 88% 12%;
    align-content: center;
    align-items: center;
    width: 100%;
    justify-content: center;
`
        );
    

        this.add_CSS_Class(
            ".dotted_line",
            `
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    border-top: 3px dotted black;
    overflow: hidden;
    position: relative;
`
        );


        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Price",
            `
    display: grid;
    width: 100%;
    height: auto;
    text-decoration: none;
     margin: 2% 0;
    font-family: Courier New;
    text-align: justify;
   font-size: 1.5vw;
    font-weight: bold;

`
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Description",
            `

   font-size: 1.2vw;


`
        );

      
        this.add_CSS_Class(
            `.SlideLeft`,
            `
        -webkit-animation-name: SlideLeftRecommend;
        animation-name: SlideLeftRecommend;
        -webkit-animation-duration: 3s;
        animation-duration: 3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      
        
            `
          );
      
          this.add_CSS_Class(
            `.SlideRight`,
            `
        -webkit-animation-name: SlideRightRecommend;
        animation-name: SlideRightRecommend;
        -webkit-animation-duration: 3s;
        animation-duration: 3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      
        
            `
          );
      
      
          this.add_CSS_Class(
            `@-webkit-keyframes SlideRightRecommend`,
            `
      0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
               
          opacity:0;
     visibility: hidden;
        
        }
       95% {       
          opacity:1;
     visibility: visible;
        }
        
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
          opacity: 1;
            visibility: visible;
        }
          
              `
          );
      
          this.add_CSS_Class(
            `@keyframes SlideRightRecommend`,
            `
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
               
          opacity:0;
     visibility: hidden;
        
        }
       95% {       
          opacity:1;
     visibility: visible;
        }
        
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
          opacity: 1;
            visibility: visible;
        }
              `
          );
      
          this.add_CSS_Class(
            `@-webkit-keyframes SlideLeftRecommend`,
            `
       0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
             opacity:0;
     visibility: hidden;
        
        }
       95% {       
          opacity:1;
     visibility: visible;
        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
          opacity: 1;
            visibility: visible;
        }
          
              `
          );
      
          this.add_CSS_Class(
            `@keyframes SlideLeftRecommend`,
            `
               0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
              opacity:0;
     visibility: hidden;
        
        }
       95% {       
          opacity:1;
     visibility: visible;
        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
          opacity: 1;
            visibility: visible;
        }
        
              `
          );
        

        this.add_CSS_Class(
            ".Container_Recommend",
            `
display: grid;
    margin: 0 auto;
    column-gap: 2%;
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
`,GALSAN_CreateBlock.Screen_Middle
        );


          this.add_CSS_Class(
            ".dotted_line",
            `
    border-top: 2px dotted black;
`,GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Price",
            `
   font-size: 2.5vw;

`,GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Description",
            `

   font-size: 2vw;
`,GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Title",
            `
   font-size: 2.5vw;
`,GALSAN_CreateBlock.Screen_Middle
        );


        this.add_CSS_Class(
            ".Container_Recommend",
            `
    grid-template-columns: repeat(1, 1fr);
    
`,GALSAN_CreateBlock.Screen_Middle
        );


        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Price",
            `
   font-size: 4vw;

`,GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Description",
            `

   font-size: 3vw;
   font-family: cursive;
`,GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Title",
            `
   font-size: 5vw;
`,GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".img_Photo_min",
            `
 width: 100%;
`,GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            `.Content_Description`,
            `
          font-size: 2.5vw;
      

              `,GALSAN_CreateBlock.Screen_Mobile
          );

          this.add_CSS_Class(
            ".dotted_line",
            `
    border-top: 3px dotted black;

`,GALSAN_CreateBlock.Screen_Mobile
        );

     
        var PrincipalContainer = this.CreateElement_(
            "div",
            "Container_Grid_Wrapper"
        );

        PrincipalContainer.style.backgroundColor = this.BackColor_;

        var Container_Text = this.CreateElement_(
            "div",
            `Container_Text`
          );
      
          PrincipalContainer.appendChild(Container_Text);
    
    
          var title = this.CreateElement_(
            "h2",
            `Title`,
            this.Title_
          );
      
          Container_Text.appendChild(title);


        var Container_Recommend = this.CreateElement_(
            "div",
            `Container_Recommend`
          );
      
        PrincipalContainer.appendChild(Container_Recommend);


        GALSAN_CreateBlock.AttachID(Container_Recommend, "Container_RecommendID");

    }
}