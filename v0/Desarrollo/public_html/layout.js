//Page Structure: Esto solo se cambia par adaptar la maquetacion global de la pagina
//Add CSS
GALSAN_CreateBlock.add_CSS_Class('body',
    `
    width: 100%;
    display: grid;
    grid-template-columns: 0% 100% 0%;
    grid-template-rows: min-content;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    `
);

GALSAN_CreateBlock.add_CSS_Class('body',
    `

    grid-template-columns: 0% 100% 0%;

    `,
    GALSAN_CreateBlock.Screen_Middle
);

GALSAN_CreateBlock.add_CSS_Class('body',
    `

    grid-template-columns: 0% 100% 0%;

    `,
    GALSAN_CreateBlock.Screen_Mobile
);

//background-image: linear-gradient(rgb(255 255 255 / 56%), rgb(255 255 255 / 0%)), url(assets/img/backgrounds/background.png);
/* 
GALSAN_CreateBlock.add_CSS_Class('#GS_Footer',
    `
        margin: 0;
        z-index: 0;
        display: grid;
        padding: 0;
        grid-column-start: 1;
        grid-column-end: 4;
        background-color: #000000;
        box-shadow: 0 22px 0px 0px white, 0 -22px 0px 0px #ffffff00, 12px 0 15px -4px rgb(0 0 0 / 80%), -12px 0 15px -4px rgb(0 0 0 / 80%);
    `
);
 */
/* GALSAN_CreateBlock.add_CSS_Class('#GS_Footer',
    `
    font-size: 3vw;

    `,
    GALSAN_CreateBlock.Screen_Mobile
);
 */

GALSAN_CreateBlock.add_CSS_Class('#GS_Column_Left',
    `
    margin: 0;
    padding: 0;
    width: 100%;
    grid-column: 1;
    height: 100%;
    align-items: center;

    `
);

GALSAN_CreateBlock.add_CSS_Class('#GS_Column_Center',
    `
        position: relative;
        margin: 0;
        padding: 0;
        margin-left: 0%;
        width: 100%;
        grid-column: 2;
        height: 100%;
        /* box-shadow: 0 50px 0px 0px white, 0 -22px 0px 0px white, 12px 5px 15px -4px rgba(31, 73, 125, 0.8), -12px 5px 15px -4px rgba(31, 73, 125, 0.8); */
        display: grid;
        z-index: 0;
    `
);

GALSAN_CreateBlock.add_CSS_Class('#GS_Column_Right',
    `
    margin: 0;
    padding: 0;
    width: 100%;
    grid-column: 3;
    height: 100%;
    align-items: center;

    `
);


/* 
GALSAN_CreateBlock.add_CSS_Class('#GSheader',
    `
        margin: 0;
        min-height: 28vw;
        padding: 0;
        grid-column-start: 1;
        background-color: #000000;
        grid-column-end: 4;
        height: fit-content;
        box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;
        padding-bottom: 0%;
        display: grid;
        transition-duration: 0.5s;
        background-repeat: no-repeat;

        background-size: contain;

    `
);
 */
//Create structure GS Page
Div = GALSAN_CreateBlock.CreateElement('Div', "", null, GALSAN_CreateBlock.Site_Body);
GALSAN_CreateBlock.AttachID(Div, "GS_Footer");

Div = GALSAN_CreateBlock.CreateElement('Div', '', null, GALSAN_CreateBlock.Site_Body);
GALSAN_CreateBlock.AttachID(Div, "GS_Column_Right");

Div = GALSAN_CreateBlock.CreateElement('Div', '', null, GALSAN_CreateBlock.Site_Body);
GALSAN_CreateBlock.AttachID(Div, "GS_Column_Center");

Div = GALSAN_CreateBlock.CreateElement('Div', '', null, GALSAN_CreateBlock.Site_Body);
GALSAN_CreateBlock.AttachID(Div, "GS_Column_Left");

Div = GALSAN_CreateBlock.CreateElement('Div', "", null, GALSAN_CreateBlock.Site_Body);
GALSAN_CreateBlock.AttachID(Div, "GSheader");