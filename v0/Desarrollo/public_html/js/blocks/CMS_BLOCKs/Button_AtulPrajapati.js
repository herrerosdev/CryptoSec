/*clase que crea  Crea un panel de botones */

class Button_AtulPrajapati {
  constructor(id) {

    this.ID_ = id;
    this.ViewConstructor();
  }

  getClassName() {
    return this.constructor.name;
  }

  //Añade un boton al panel
  addButton(Params) {

    var link = Params.link;
    var _function = Params.function;
    //var Name = Params.Style_Button;

    var General_Container = document.getElementById(
      `${this.getClassName()}_GeneralContainer${this.ID_}`
    );

    var a_Link = GALSAN_CreateBlock.CreateElement("a");

    if (link != -1 && _function == -1) {
      a_Link.setAttribute("href", link); //Add Link to button
  } else if (_function != -1 && link == -1) {
      a_Link.setAttribute("onclick", _function); //Add function to button
  }

    //CREATE BUTTON DIV
    var button1 = GALSAN_CreateBlock.CreateElement(
      "button",
      `${this.getClassName()}btn`,
      Params.Text,
      GALSAN_CreateBlock.Site_Column_Center
    );

    //Add second class to button1
    button1.classList.add(`${this.getClassName()}btn1`);

    a_Link.appendChild(button1);

    General_Container.appendChild(a_Link);
  }




  ViewConstructor() {
    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}container`,
      `
          perspective: 320px;
          text-decoration: none;
          `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}container a`,
      `
          text-decoration: none;
          `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}btn`,
      `
      display: block;
      margin: 10% auto;
      width: 240px;
      height: 80px;
      border: none;
      background-color: #183550;
      color: #fff;
      font-size: 18px;
      border-radius: 6px;
      outline: none;
      cursor: pointer;
      transition: .3s linear;
      text-decoration: none;
            `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}btn1:hover`,
      `
          transform: rotateX(15deg);
    box-shadow: 0 15px 15px #00a8ff;
              `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}btn2:hover`,
      `
          transform: rotateX(-15deg);
          box-shadow: 0 -15px 15px #00a8ff;
                `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}btn3:hover`,
      `
          transform: rotateY(15deg);
          box-shadow: -15px 0 15px #00a8ff;
                `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      `.${this.getClassName()}btn4:hover`,
      `
          transform: rotateY(-15deg);
          box-shadow: 15px 0 15px #00a8ff;
                `
    );

    var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement(
      "div",
      `${this.getClassName()}container`,
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    GALSAN_CreateBlock.AttachID(
      ContenedorPrincipal,
      `${this.getClassName()}_GeneralContainer${this.ID_}`
    );
  }
}
