
//Add CSS



GALSAN_CreateBlock.add_CSS_Class('.popover__title',
    `
    font-size: 2vw;
    cursor: pointer;
    text-align: center;
    color: rgb(0 0 0);
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.popover__wrapper',
    `
    position: relative;
    margin: 3vw 0;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.popover__content',
    `
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 36vw;
    transform: translate(0, 10px);
    background-color: #cadf55;
    padding: 1.5rem;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
    width: auto;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.popover__content:before',
    `
    position: absolute;
    z-index: -1;
    content: "";
    right: calc(50% - 10px);
    top: -8px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #bfbfbf transparent;
    transition-duration: 0.3s;
    transition-property: transform;
    
    `
);




GALSAN_CreateBlock.add_CSS_Class('.popover__message',
    `
    text-align: center;
    
    `
);





popover__wrapper = GALSAN_CreateBlock.CreateElement("div", "popover__wrapper");


popover__title_wrapper = GALSAN_CreateBlock.CreateElement("div", "popover__title_wrapper");
popover__wrapper.appendChild(popover__title_wrapper);

popover__title = GALSAN_CreateBlock.CreateElement("p", "popover__title", "Hover me");
popover__title_wrapper.appendChild(popover__title);
GALSAN_CreateBlock.Attach_Attribute_onmouseover(popover__title, "HoverContent()");
GALSAN_CreateBlock.Attach_Attribute_onmouseout(popover__title, "OnMouseleftContent()");


popover__div = GALSAN_CreateBlock.CreateElement("div", "popover__div");
popover__wrapper.appendChild(popover__div);



popover__content = GALSAN_CreateBlock.CreateElement("div", "popover__content");
GALSAN_CreateBlock.AttachID(popover__content, "content");
popover__div.appendChild(popover__content);

Popovermessage = GALSAN_CreateBlock.CreateElement("p", "Popovermessage", "Popovermessage");
popover__content.appendChild(Popovermessage);

imagen = GALSAN_CreateBlock.CreateElement("img", "imagen", "assets/img/cross.png");
popover__content.appendChild(imagen);



function HoverContent() {


        document.getElementById("content").setAttribute("style", "z-index: 10 ; opacity: 1; visibility: visible; transform: translate(0, -20px); transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97;"); 

}


function OnMouseleftContent() {


    document.getElementById("content").setAttribute("style", "opacity: 0; visibility: hidden; position: absolute; left: 36vw; transform: translate(0, 10px); background-color: #cadf55; padding: 1.5rem; box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%); width: auto;"); 

}
