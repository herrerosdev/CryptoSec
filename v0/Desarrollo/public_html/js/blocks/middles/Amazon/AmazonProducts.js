class AmazonProducts {
  ////////////////OPCIONES DEL MOSTRADO DE PRODUCTOS
  static MODE_RANDOM = 1;
  static MODE_LINEAL = 2;

  //////////Opciones de la vista del bloque
  static simple_view = 1;
  static page_products_view = 2;

  
  //Array where products are stored
  static productos_src = [];

  constructor(Model = AmazonProducts.simple_view) {
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

    //Create View: Dynamic HTMLL CSS: Node
    this.ViewConstructor(Model);
  }

  Add_Product_src(src) {
    AmazonProducts.productos_src.push(src);
  }

  //Show ramdon products of the vector
  ShowPrducts(
    init = 0,
    Num_Products2show = AmazonProducts.productos_src.length,
    Mode = AmazonProducts.MODE_LINEAL,
    site = GALSAN_CreateBlock.Site_Column_Center
  ) {
    if (Num_Products2show <= AmazonProducts.productos_src.length) {
      let ContenedorPrincipal = this.CreateElement_(
        "div",
        "ContenedorPrincipal",
        null,
        site
      );

      for (let i = init; i < Num_Products2show; i++) {
        //Create element and associate a classes
        let ProductElement = this.CreateElement_("iframe", "Product", null, site);

        //Depend of the mode catch product from vector randomly or linealy
        ProductElement.src =
          Mode === AmazonProducts.MODE_LINEAL
            ? AmazonProducts.productos_src[i]
            : AmazonProducts.productos_src[
                Math.floor(Math.random() * AmazonProducts.productos_src.length)
              ];
        //alert(ProductElement.src);
        ProductElement.scrolling = "no";
        ProductElement.border = 0;
        ProductElement.marginwidth = 0;
        ProductElement.marginheight = 0;
        ProductElement.style = "width:120px;height:240px;";
        ProductElement.frameborder = 0;
        ProductElement.sandbox =
          "allow-popups allow-scripts allow-modals allow-forms allow-same-origin";

        ContenedorPrincipal.appendChild(ProductElement);
      }
    } else {
      alert("Not enough products to show");
      return -1;
    }
  }

  ViewConstructor(model) {
    //Create CSS

    switch(model){

      case AmazonProducts.simple_view:
    this.add_CSS_Class(
      ".ContenedorPrincipal",
      `
                  width: 100%;
                  height: auto;
                  display: block;
                  margin: 0 auto;
                  max-width: 100%;
                  text-align: center;
          `,
      GALSAN_CreateBlock.Screen_Complete
    );

    break;
      
    case AmazonProducts.page_products_view:

    this.add_CSS_Class(
      ".ContenedorPrincipal",
      `
                  width: 100%;
                  height: auto;
                  display: block;
                  margin: 0 auto;
                  max-width: 100%;
                  text-align: center;
          `,
      GALSAN_CreateBlock.Screen_Complete
    );


    this.add_CSS_Class(
      ".Product",
      `
        margin: 8%;
        border: none;
        padding: 3%;
        /* background: whitesmoke; */
        box-shadow: rgb(0 0 0 / 35%) 1px 21px 22px;
        z-index: 99999;
          `,
      GALSAN_CreateBlock.Screen_Complete
    );

    
    this.add_CSS_Class(
      ".Product",
      `
        margin: 8%;
        border: none;
        padding: 9%;
        /* background: whitesmoke; */
        box-shadow: rgb(0 0 0 / 35%) 1px 21px 22px;
        z-index: 99999;
          `,
      GALSAN_CreateBlock.Screen_Mobile
    );



    this.add_CSS_Class(
      ".Product",
      `
      margin: 9%;
      border: none;
      padding: 5%;
      /* background: whitesmoke; */
      box-shadow: rgb(0 0 0 / 35%) 1px 21px 22px;
      z-index: 99999;
          `,
      GALSAN_CreateBlock.Screen_Middle
    );

    break;


    default:
    break;
  }
}

}