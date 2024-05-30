////////////////////////////
///////WrapperBlock////////// 
////////////////////////////


//Add CSS
GALSAN_CreateBlock.add_CSS_Class('.BackgroundOverlay',
    `
    position        : fixed;
    width           : 100%;
    height          : 100%;
    top             : 0;
    left            : 0;
    right           : 0;
    bottom          : 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index         : 4;
    cursor          : pointer;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.Container',
    `
    position     : fixed;
    top          : 50%;
    left         : 50%;
    padding      : 1vw;
    width        : 59vw;
    height       : auto;
    border       : 4px solid rgb(255, 255, 255);
    text-align   : center;
    background-color: #dfdddd;
    transform    : translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.DivTitle',
    `
    display: flex;
    border-bottom: 1px solid #a5a5a5;
    align-items: baseline;
    justify-content: space-evenly;
    align-content: space-between;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.DivTitle',
    `
    display        : flex;
    align-items    : baseline;
    justify-content: space-between;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.text',
    `
    font-size  : 3.5vw;
    color      : black;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.XClose',
    `
    width: 3vw;
    `
);



GALSAN_CreateBlock.add_CSS_Class('.DivBody',
    `
    height: auto;
    padding: 2vw;
    max-width: 59vw;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.ImagenBody',
    `
    height: 20vw;
    
    `
);



Overlay = GALSAN_CreateBlock.CreateElement("div", "BackgroundOverlay");

Container = GALSAN_CreateBlock.CreateElement("div", "Container");
Overlay.appendChild(Container);


DivTitle = GALSAN_CreateBlock.CreateElement("div", "DivTitle");
Container.appendChild(DivTitle);

text = GALSAN_CreateBlock.CreateElement("p", "text", "Nombre");
DivTitle.appendChild(text);


XClose = GALSAN_CreateBlock.CreateElement("img", "XClose", "assets/img/cross.png");
DivTitle.appendChild(XClose);

GALSAN_CreateBlock.Attach_Attribute_onClick(XClose, "esconder()");

DivBody = GALSAN_CreateBlock.CreateElement("div", "DivBody");
Container.appendChild(DivBody);

ImagenBody = GALSAN_CreateBlock.CreateElement("img", "ImagenBody", "assets/img/infantiles.jpeg");
DivBody.appendChild(ImagenBody);




function esconder() {

    Overlay.style.display ="none";

};