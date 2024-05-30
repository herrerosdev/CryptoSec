////////////////////////////
///////HeaderBlock////////// 
////////////////////////////

//CSS
GALSAN_CreateBlock.add_CSS_Class('.header',
    `
    height: 10%;
    width: 90%;
    margin: 0 auto;
    background-color: rgba(0, 114, 15, 0);
    border: 1vw solid rgb(102, 102, 102);
    opacity: 80%;
    background-image: url('../assets/img/fondo.jpg');
    background-size: cover;
    margin-top: 4vw;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.content_header',
    `
    background-color: rgba(0, 0, 0, 0.692);
    width: 100%;
    padding-top: 0.1px;
    padding-bottom: 5%;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.HeaderTitle',
    `
    color: whitesmoke;
    line-height: 5px;
    text-align: center;
    font-size: 5vw;
    -webkit-text-stroke: 2px black;
    white-space: break-spaces;
    opacity: 100%;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.menu',
    `
    width: 100%;
    height: 6vh;
    background-color: rgba(0, 0, 0, 0);
    padding-top: 5% ;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.menu_item',
    `
    height: 100% ;
    width: 12vw;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    transition: width 1s;
    transition: all .2s ease-in-out;
    min-height: fit-content;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.menu_item:hover',
    `
    filter: contrast(20);
    width: 16 vw;
    transform: scale(1.2);
    `
);

GALSAN_CreateBlock.add_CSS_Class('.menu_item p',
    `
    font-size: auto;
    color: white;
    text-align: center;
    filter: invert();
    `
);


GALSAN_CreateBlock.add_CSS_Class('.icon_item',
    `
    width: 40% ;
    margin: auto;
    filter: invert();
    padding-left: 50% ;
    `
);



GALSAN_CreateBlock.add_CSS_Class('.shopping_car',
    `
    display: inline-block;
    height: 100%;
    width: 12vw;
    text-decoration: none;
    margin-right: 5vw;
    float: right;
    transition: all .2s ease-in-out;
    min-height: fit-content;
    cursor: pointer;
    transition: width 1s;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.shopping_car:hover',
    `
    filter: contrast(20);
    width: 16vw;
    transform: scale(1.1);
    `
);


GALSAN_CreateBlock.add_CSS_Class('.shopping_car img',
    `
    width: 40%;
    margin: auto;
    filter: invert();
    `
);

GALSAN_CreateBlock.add_CSS_Class('.shopping_car p',
    `
    display: inline-block;
    font-size: 100%;
    color: rgb(255, 255, 255);
    margin: auto;
    `
);

//Create element and associate a classes
ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "content_header", null, GALSAN_CreateBlock.Site_Header);

ContenedorTitulo = GALSAN_CreateBlock.CreateElement("div", "header");
ContenedorPrincipal.appendChild(ContenedorTitulo);



div = GALSAN_CreateBlock.CreateElement("p", "HeaderTitle", "Titulo");
ContenedorTitulo.appendChild(div);


ContenedorMenu = GALSAN_CreateBlock.CreateElement("div", "menu");
ContenedorPrincipal.appendChild(ContenedorMenu);

//New Menu Item
MenuItem = GALSAN_CreateBlock.CreateElement("a", "menu_item");
Icon_Item = GALSAN_CreateBlock.CreateElement("img", "icon_item", "assets/img/menu/hogar-ecologico.png");
MenuItem.appendChild(Icon_Item);
ContenedorMenu.appendChild(MenuItem);
GALSAN_CreateBlock.Attach_Attribute_onClick(MenuItem, "");

//New Menu Item
MenuItem = GALSAN_CreateBlock.CreateElement("a", "menu_item");
ContenedorMenu.appendChild(MenuItem);
Icon_Item = GALSAN_CreateBlock.CreateElement("img", "icon_item", "assets/img/menu/bolsa-de-la-compra.png");
MenuItem.appendChild(Icon_Item);
GALSAN_CreateBlock.Attach_Attribute_onClick(MenuItem, "");

//New Menu Item
MenuItem = GALSAN_CreateBlock.CreateElement("a", "menu_item");
ContenedorMenu.appendChild(MenuItem);
Icon_Item = GALSAN_CreateBlock.CreateElement("img", "icon_item", "assets/img/menu/information.png");
MenuItem.appendChild(Icon_Item);
GALSAN_CreateBlock.Attach_Attribute_onClick(MenuItem, "");

//New Menu Item
MenuItem = GALSAN_CreateBlock.CreateElement("a", "menu_item");
ContenedorMenu.appendChild(MenuItem);
Icon_Item = GALSAN_CreateBlock.CreateElement("img", "icon_item", "assets/img/menu/donacion.png");
MenuItem.appendChild(Icon_Item);
GALSAN_CreateBlock.Attach_Attribute_onClick(MenuItem, "");

//Shopping Car menu Item
MenuItem = GALSAN_CreateBlock.CreateElement("a", "shopping_car");
ContenedorMenu.appendChild(MenuItem);
Icon_Item = GALSAN_CreateBlock.CreateElement("p", null, "0");


MenuItem.appendChild(Icon_Item);
Icon_Item = GALSAN_CreateBlock.CreateElement("img", null, "assets/img/shopping-cart.png");
MenuItem.appendChild(Icon_Item);
GALSAN_CreateBlock.Attach_Attribute_onClick(MenuItem, "");