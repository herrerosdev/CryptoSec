
class Social_Media_Sidebar {
    constructor(Number_RRSS_Visible) {

      //Estructura
      //{"Number": 4}

       //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

      this.Number_RRSS_Visible = Number_RRSS_Visible.Number
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
 
    Add_Social_Media(Params) {

     //Estructura
      //{"Name":"","Icon":"","Action": "", "Background": ""}

      var ul_ID = document.getElementById("ul_ID");

      var li_List = this.CreateElement_(
        "li",
        `li_List`
    );

    ul_ID.appendChild(li_List);

    

    var a_List = this.CreateElement_(
      "img",
      `a_List`,
      Params.Icon
  );

  li_List.appendChild(a_List);

  a_List.alt = Params.Name;

  a_List.classList.add(`${this.getClassName()}` + Params.Name);

  a_List.style.background = Params.Background;



  li_List.onclick = function(){window.open(Params.Action)}; 

      if(this.Number_RRSS_Visible < ul_ID.children.length) {

        li_List.style.visibility = "hidden";

      };

    }


  
    ViewConstructor() {
    
      
      this.add_CSS_Class(
        `.Container`,
        `
  position: fixed; 
	left: 0; 
	top: 200px; 
	z-index: 2000; 
      height: 100%;
    overflow: hidden;
        `
    );

    this.add_CSS_Class(
      `.Container_Child`,
      `

      height: 100%;
      margin-right: -50px;
      padding-right: 50px;
      overflow-y: scroll;
      `
  );



    this.add_CSS_Class(
      `.ul_List`,
      `
    list-style: none;
    padding: 0;
    min-width: 4vw;
      `
  );

  this.add_CSS_Class(
    `.li_List`,
    `
width: 100%;
    `
);


  this.add_CSS_Class(
    `.a_List`,
    `
    display: flex;
    color: #fff;
    background: #000;
    padding: 10px 15px;
    text-decoration: none;
    -webkit-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    width: auto;
    justify-content: center;
    height: 3vw;
    align-content: center;
    align-items: center;

    `
);


this.add_CSS_Class(
  `.a_List:hover`,
  `
  background: #000 !important; /* Cambiamos el fondo cuando el usuario pase el mouse */
  padding: 10px 30px;

  `
);



this.add_CSS_Class(
  `.Mail`,
  `
background: #666666;

  `
);




this.add_CSS_Class(
  `.Google`,
  `


  `
);

this.add_CSS_Class(
  `.Pinterest`,
  `
background: #ae181f;

  `
);




this.add_CSS_Class(
  `.Invisible`,
  `
display: none;

  `
);



this.add_CSS_Class(
  `.Container`,
  `
	top: 150px; 


`, GALSAN_CreateBlock.Screen_Middle
);




        var Container_principal = this.CreateElement_(
            "div",
            `Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        var Container_Child = this.CreateElement_(
          "div",
          `Container_Child`
      );
  
      Container_principal.appendChild(Container_Child);

        var ul_List = this.CreateElement_(
          "ul",
          `ul_List`
      );
  
      Container_Child.appendChild(ul_List);

      GALSAN_CreateBlock.AttachID(ul_List, "ul_ID");
        




    }
  }
  