
        
        
        
        GALSAN_CreateBlock.add_CSS_Class('.dtchart',
        `
        font-size: 1.3rem;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.ddchart',
        `
        width: 100%;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('.divchart',
        `
        display: flex;
        margin: 10px;
        width: 100%;
        align-items: center;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('.bar',
        `

    height: auto;
    min-height: 1.5rem;
    color: #fff;
    /* padding: 4px; */
    text-align: center;
    background: rgb(205 202 151);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 13px;
    border: solid #29556b;
    -webkit-animation-name: bar;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-out;
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('@-webkit-keyframes bar',
        `
         {
            0% { width:0%; }
            100% { width:60%; }
            }
        `
        );

        GALSAN_CreateBlock.add_CSS_Class('&:before',
        `
        position:absolute;
        left:0;right:0;top:100%;
        padding:5px 1em 0;
            display:block;
        text-align:center;
        content:attr(title);
        word-wrap: break-word;
        `
        );


        GALSAN_CreateBlock.add_CSS_Class('@keyframes draw',
        `
        0%{height:0;}
        `
        );





var dlchart = GALSAN_CreateBlock.CreateElement("dl", "chart");
dlchart.style= "width: 100%";

var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
dlchart.appendChild(divchart);



var dtchart = GALSAN_CreateBlock.CreateElement("dt", "dtchart", "prr");
divchart.appendChild(dtchart);


var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
divchart.appendChild(ddchart);


var bar = GALSAN_CreateBlock.CreateElement("div", "bar");
bar.style = "width:55%";
ddchart.appendChild(bar);




var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
dlchart.appendChild(divchart);



var dtchart = GALSAN_CreateBlock.CreateElement("dt", "dtchart", "prr");
divchart.appendChild(dtchart);


var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
divchart.appendChild(ddchart);


var bar = GALSAN_CreateBlock.CreateElement("div", "bar");
bar.style = "width:15%";
GALSAN_CreateBlock.AttachID(bar, "data-two");
ddchart.appendChild(bar);





var divchart = GALSAN_CreateBlock.CreateElement("div", "divchart");
dlchart.appendChild(divchart);



var dtchart = GALSAN_CreateBlock.CreateElement("dt", "dtchart", "prr");
divchart.appendChild(dtchart);


var ddchart = GALSAN_CreateBlock.CreateElement("dd", "ddchart");
divchart.appendChild(ddchart);


var bar = GALSAN_CreateBlock.CreateElement("div", "bar");
bar.style = "width:5%";

GALSAN_CreateBlock.AttachID(bar, "data-three");
ddchart.appendChild(bar);




























































































































































































































