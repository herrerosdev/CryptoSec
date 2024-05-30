////////////////////////////
///////carrouselBlock////////// 
////////////////////////////

//Add CSS
GALSAN_CreateBlock.add_CSS_Class('.container',
    `
    width: 100%;
    margin: 0;
    margin-top: 10%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-auto-rows: minmax(30vw, auto);
    row-gap: 0vw;
    column-gap: 5%;
    position: relative;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.item',
    `
    width: 100%;
    height: auto;
    background-color: #00000036;
    margin: 0;
    display: block;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.itemImg',
    `
    height: auto;
    width: 70%;
    margin: 10% auto 0vw auto;
    display: flex;
    justify-content: center;
    z-index: 1;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.imagen',
    `
    width: auto;
    height: 26%;
    max-width: 100%;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.itemText',
    `
    height          : auto;
    width: 28vw;
    display: block;
    margin-left: 3vw;
    z-index         : 2;
    `
);

GALSAN_CreateBlock.add_CSS_Class('.text',
    `
    height: auto;
    width: 28%;
    display: block;
    margin-left: 3vw;
    z-index: 2;
    `
);


//First

//Create element and associate a classes
ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "container");

ContenedorItem = GALSAN_CreateBlock.CreateElement("div", "item");
ContenedorPrincipal.appendChild(ContenedorItem);

ItemImg = GALSAN_CreateBlock.CreateElement("div", "itemImg");
ContenedorItem.appendChild(ItemImg);


ItemImg = GALSAN_CreateBlock.CreateElement("div", "itemImg");
ContenedorItem.appendChild(ItemImg);

Img = GALSAN_CreateBlock.CreateElement("img", "imagen", "assets/img/infantiles1.jpeg");
ItemImg.appendChild(Img);


ItemText = GALSAN_CreateBlock.CreateElement("div", "itemText");
ContenedorItem.appendChild(ItemText);


text = GALSAN_CreateBlock.CreateElement("p", "text", "Nombre");

ItemText.appendChild(text);

text = GALSAN_CreateBlock.CreateElement("p", "text", "sdfsdsd");

ItemText.appendChild(text);



//Second element

ContenedorItem = GALSAN_CreateBlock.CreateElement("div", "item");
ContenedorPrincipal.appendChild(ContenedorItem);

ItemImg = GALSAN_CreateBlock.CreateElement("div", "itemImg");
ContenedorItem.appendChild(ItemImg);


ItemImg = GALSAN_CreateBlock.CreateElement("div", "itemImg");
ContenedorItem.appendChild(ItemImg);

Img = GALSAN_CreateBlock.CreateElement("img", "imagen", "assets/img/infantiles1.jpeg");
ItemImg.appendChild(Img);

ItemText = GALSAN_CreateBlock.CreateElement("div", "itemText");
ContenedorItem.appendChild(ItemText);


text = GALSAN_CreateBlock.CreateElement("p", "text", "Nombre");

ItemText.appendChild(text);

text = GALSAN_CreateBlock.CreateElement("p", "text", "sdfsdsd");
ItemText.appendChild(text);




//Third element
ContenedorItem = GALSAN_CreateBlock.CreateElement("div", "item");
ContenedorPrincipal.appendChild(ContenedorItem);

ItemImg = GALSAN_CreateBlock.CreateElement("div", "itemImg");
ContenedorItem.appendChild(ItemImg);


ItemImg = GALSAN_CreateBlock.CreateElement("div", "itemImg");
ContenedorItem.appendChild(ItemImg);

Img = GALSAN_CreateBlock.CreateElement("img", "imagen", "assets/img/infantiles1.jpeg");
ItemImg.appendChild(Img);

ItemText = GALSAN_CreateBlock.CreateElement("div", "itemText");
ContenedorItem.appendChild(ItemText);


text = GALSAN_CreateBlock.CreateElement("p", "text", "Nombre");

ItemText.appendChild(text);

text = GALSAN_CreateBlock.CreateElement("p", "text", "sdfsdsd");
ItemText.appendChild(text);