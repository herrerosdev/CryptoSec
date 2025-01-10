class LoaderPaul {

  
  static View_Sandia = 3;


  constructor(Params) {

    //Estructura 
    //{"Delay": "", "BackGroundColor": "", "Color": "", "Num_Loader": ""}

    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
    this.Delay_ = Params.Delay;
    this.PrincipalContainerElement = null;
    this.BackGroundColor = Params.BackGroundColor;
    this.Color = Params.Color;
    this.Num_Loader_ = Params.Num_Loader;

    //Create View: Dynamic HTMLL CSS: Node
    this.CreateView();

    this.HideLoader(); 
  }

  static item_counter = 0;
  
  static View_Sandia = 4;
  static View_Studio = 1;
  static View_Paul = 0;
  static View_In_Construction = 2;
  static View_Salon = 3;

  ////////////////////////////
  ///////CreateView//////////
  //////////////////////////

  ShowLoader() {
    $(document).ready(function () {
      //$("#PrincipalContainerElement").hide();
      $("#PrincipalContainerElement").fadeIn(this.Delay_);
    });
  }

  HideLoader() {

    $(window).on("load", function() {
      $(document).ready(function () {
        CUtils.sleep(1000);
        //$("#PrincipalContainerElement").hide();
        $("#PrincipalContainerElement").fadeOut(this.Delay_);
      });;
  });


   
  }

  CreateView() {
    //Add fonts
    GALSAN_CreateBlock.addFont("FontHeader", this.font_);

    //Create element and associate a classes
    this.add_CSS_Class(
      `.background`,
      `
      position: fixed;
    height: 100%;
    width: 100%;     
      min-height: 100vh;
width: 100%;
top: 0;
bottom: 0;
left: 0;
right:0;
    max-width: 100%; 
      background-color: ${this.BackGroundColor};
      z-index: 999;

      
            `
    );


    
   
    switch (this.Num_Loader_) {
      case LoaderPaul.View_Paul:
        this.add_CSS_Class(
          `.loaderTitle`,
          `

        font-size: 4vw;
    font-weight: 600;
    display: flex;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${this.Color};
    box-sizing: border-box;
    animation: spotlight 2s linear infinite alternate;
    margin: 15vh auto;
    justify-content: center;

  
              `
        );

        this.add_CSS_Class(
          `@keyframes spotlight`,
          `
        0% , 20% {
          opacity: 1;
          letter-spacing: 1vw;
         }
       80% , 100% {
          opacity: 0;
          letter-spacing: 1vw;
         }
  
              `
        );

        this.add_CSS_Class(
          `.Spinner`,
          `
        width: 60px;
        height: 40px;
        position: relative;
        --base-color: ${this.BackGroundColor}; /*use your base color*/
        margin: 1vh auto;
  
              `
        );

        this.add_CSS_Class(
          `.Spinner::before`,
          `
      content: '';  
      left: 0;
      top: 0;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: ${this.Color};
      background-image: radial-gradient(circle 8px at 18px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, var(--base-color) 100%, transparent 0);
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: rotationBack 3s linear infinite;

            `
        );

        this.add_CSS_Class(
          `.Spinner::after`,
          `
      content: '';  
      left: 35px;
      top: 15px;
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${this.Color};
      background-image: radial-gradient(circle 5px at 12px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, var(--base-color) 100%, transparent 0);
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: rotationBack 4s linear infinite reverse;

            `
        );

        this.add_CSS_Class(
          `@keyframes rotationBack`,
          `
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }

            `
        );

        break;


      case LoaderPaul.View_Studio:  ///Studio loader (square hypnotic)
      
      this.add_CSS_Class(
        `.loaderTitle`,
        `

        font-size: 4vw;
        font-weight: 600;
        display: inline-block;
        letter-spacing: 2px;
        font-family: Arial, Helvetica, sans-serif;
        color: ${this.Color};
        box-sizing: border-box;
        animation: spotlight 2s linear infinite alternate;
        width: 10vh;
        /* height: 10vh; */
        /* text-align: center; */
        margin: 15vh 38vw;
        /* align-items: center; */


            `
      );

      this.add_CSS_Class(
        `@keyframes spotlight`,
        `
      0% , 20% {
        opacity: 1;
        letter-spacing: 1vw;
       }
     80% , 100% {
        opacity: 0;
        letter-spacing: 1vw;
       }

            `
      );

      this.add_CSS_Class(
        `.Spinner`,
        `
 width: 115px;
 max-width: 100%;
        aspect-ratio: 1;
        color: ${this.Color};
        border: 4px solid;
        display: grid;
        box-sizing: border-box;
        animation: l1 4s infinite linear;
    margin: 1vh auto;
            `
      );

      this.add_CSS_Class(
        `.Spinner::before`,
        `
    content: "";
        grid-area: 1/1;
        margin: auto;
        width: 70.7%;
        aspect-ratio: 1;
        border: 4px solid;
        box-sizing: content-box;
        animation: inherit;

          `
      );

      this.add_CSS_Class(
        `.Spinner::after`,
        `
    content: "";
        grid-area: 1/1;
        margin: auto;
        border: 4px solid;
        box-sizing: content-box;
        animation: inherit;
               width: 50%;
        aspect-ratio: 1; 
        animation-duration: 2s;
          `
      );

      this.add_CSS_Class(
        `@keyframes l1`,
        `

        100% {transform:rotate(1turn)}
      

          `
      );
   
      break;



      case LoaderPaul.View_In_Construction: /// loader sin terminar

      this.add_CSS_Class(
        `.loaderTitle`,
        `

        font-size: 4vw;
        font-weight: 600;
        display: inline-block;
        letter-spacing: 2px;
        font-family: Arial, Helvetica, sans-serif;
        color: ${this.Color};
        box-sizing: border-box;
        animation: spotlight 2s linear infinite alternate;
        width: 10vh;
        /* height: 10vh; */
        /* text-align: center; */
        margin: 15vh 38vw;
        /* align-items: center; */


            `
      );



      this.add_CSS_Class(
        `.Spinner`,
        `
 width: 65px;
  aspect-ratio: 1;
  --g: radial-gradient(farthest-side,#0000 calc(95% - 3px),#fff calc(100% - 3px) 98%,#0000 101%) no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 30px 30px;
  animation: l10 1.5s infinite;
            `
      );



      this.add_CSS_Class(
        `@keyframes l10`,
        `
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
      

          `
      );

      break;
     
      case LoaderPaul.View_Salon: ///Salon loader (circles rotating pendular movement)
        
      this.add_CSS_Class(
        `.loaderTitle`,
        `


        color: black;
       font-size: 4vw;
    font-weight: 600;
    display: flex;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    animation: spotlight 2s linear infinite alternate;
    width: auto;
    margin: 15vh auto;
    text-align: center;
    align-items: center;
    justify-content: center;


            `
      );



      this.add_CSS_Class(
        `.Spinner`,
        `
width: 136px;
    aspect-ratio: 1;
    padding: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    display: grid;
    filter: blur(1px);
    mix-blend-mode: darken;
            `
      );

      this.add_CSS_Class(
        `.Spinner::before`,
        `

content: "";
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
   color: ${this.Color};
    background: currentColor;
    box-shadow: -50px 0, 50px 0, 0 50px, 0 -50px;
    animation: l6 1.3s infinite alternate;

          `
      );


      this.add_CSS_Class(
        `@keyframes l6`,
        `
90%,100% {box-shadow: -5px 0,5px 0,0 5px, 0 -5px;transform: rotate(210deg)}

          `
      );

      break;
  
      case LoaderPaul.View_Sandia:  //restaurant loader (sandia)

      this.add_CSS_Class(
        `.loaderTitle`,
        `


        color: black;
       font-size: 4vw;
    font-weight: 600;
    display: flex;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    animation: spotlight 2s linear infinite alternate;
    width: auto;
    margin: 15vh auto;
    text-align: center;
    align-items: center;
    justify-content: center;


            `
      );



      this.add_CSS_Class(
        `.Spinner`,
        `
 margin: 0 auto;
    width: 25vw;
    height: 13vw;
    border-radius: 0 0 12vw 12vw;
    border: 0.5vw solid #538a2d;
    border-top: 0;
    box-sizing: border-box;
    background: radial-gradient(farthest-side at top, #0000 calc(100% - 1.5vw), #e7ef9d calc(100% - 0.3vw)), radial-gradient(0.1vw 0.3vw, #5c4037 89%, #0000) 0 0 / 1.7vw 1.2vw, #ff1643;
    --c: radial-gradient(farthest-side, #000 94%, #0000);
    -webkit-mask: linear-gradient(#000 0 0), var(--c) 3vw -4vw, var(--c) 9vw -3vw, var(--c) 15vw -4vw, var(--c) 5vw 1vw, var(--c) 12.5vw 1vw, var(--c) 10vw 3vw, linear-gradient(#0000 0 0);
    mask: linear-gradient(#000 0 0), var(--c) 3vw -4vw, var(--c) 9vw -3vw, var(--c) 15vw -4vw, var(--c) 5vw 1vw, var(--c) 12.5vw 1vw, var(--c) 10vw 3vw, linear-gradient(#0000 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude, add, add, add, add, add, add;
    -webkit-mask-repeat: no-repeat;
    animation: l8 3s infinite;
            `
      );



      this.add_CSS_Class(
        `@keyframes l8`,
        `
 0%   {-webkit-mask-size: auto,0 0,0 0,0 0,0 0,0 0,0 0}
 15%  {-webkit-mask-size: auto,7vw 7vw,0 0,0 0,0 0,0 0,0 0}
 30%  {-webkit-mask-size: auto,7vw 7vw,7vw 7vw,0 0,0 0,0 0,0 0}
 45%  {-webkit-mask-size: auto,7vw 7vw,7vw 7vw,7vw 7vw,0 0,0 0,0 0}
 60%  {-webkit-mask-size: auto,7vw 7vw,7vw 7vw,7vw 7vw,7vw 7vw,0 0,0 0}
 75%  {-webkit-mask-size: auto,7vw 7vw,7vw 7vw,7vw 7vw,7vw 7vw,7vw 7vw,0 0}
 90%,
 100% {-webkit-mask-size: auto,7vw 7vw,7vw 7vw,7vw 7vw,7vw 7vw,7vw 7vw,7vw 7vw}

          `
      );

        break;


      default:
        break;
    }


    this.PrincipalContainerElement = this.CreateElement_(
      "div",
      "background",
      null,
      GALSAN_CreateBlock.Site_Body
    );

    this.PrincipalContainerElement.id = "PrincipalContainerElement";

  

     var SpinnerTitle = this.CreateElement_("span", "loaderTitle", "LOADING", null);

     this.PrincipalContainerElement.appendChild(SpinnerTitle); 


     var Spinner = this.CreateElement_("div", "Spinner", null, null);

     this.PrincipalContainerElement.appendChild(Spinner);

    
  }
}


//var o_loader_block = new LoaderPaul({"Delay": 6000, "BackGroundColor": "#46768ff2", "mode": 0});

//$(window).on("load", function() {
    //PageManager.GetInstance();
   // CUtils.sleep(2000);
  //  o_loader_block.HideLoader();
//});



