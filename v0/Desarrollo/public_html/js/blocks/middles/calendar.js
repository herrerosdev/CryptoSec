///////////////////////////////
///////Calendar Block////////// 
///////////////////////////////

class CCalendarBlock {

    constructor(Site = GALSAN_CreateBlock.Site_Column_Center) {
        this.Site_ = Site;
        this.GenerateView();
    }



    GenerateView() {
        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('ul',
            `
    list-style-type: none;
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.month',
            `
    padding: 10%px 0px;
    width: 100%;
    background: #1abc9c;
    text-align: center;
    `
        );

        //Contenedor que contiene todos los botones
        GALSAN_CreateBlock.add_CSS_Class('.month ul',
            `
    margin: 0;
    padding: 0;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.month ul li',
            `
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    `
        );

        /* Previous button inside month header */
        GALSAN_CreateBlock.add_CSS_Class('.month .prev',
            `
    float: left;
    padding-top: 10px;
    `
        );

        /* Next button */
        GALSAN_CreateBlock.add_CSS_Class('.month .next',
            `
    float: right;
    padding-top: 10px;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.weekdays',
            `
    margin: 0;
    padding: 10px 0;
    background-color:#ddd;
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.weekdays li',
            `
    display: inline-block;
    width: 13.6%;
    color: #666;
    text-align: center;
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.days',
            `
    padding: 10px 0;
    background: #eee;
    margin: 0;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.days li',
            `
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:12px;
    color: #777;
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.days li .active',
            `
    padding: 5px;
    background: #1abc9c;
    color: white !important
    
    `
        );



        //Create element and associate a classes
        var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", null, null, this.Site_);

        var Month = GALSAN_CreateBlock.CreateElement("div", "month", null);
        ContenedorPrincipal.appendChild(Month);

        var ul = GALSAN_CreateBlock.CreateElement("ul", null);

        Month.appendChild(ul);

        var li = GALSAN_CreateBlock.CreateElement("li", "prev", "");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", "next", '');
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", "prev", "August");
        ul.appendChild(li);
        ContenedorPrincipal.appendChild(ul);

        span = GALSAN_CreateBlock.CreateElement("span", "font-size:18px", " 2021");
        li.appendChild(span);

        //Week
        ul = GALSAN_CreateBlock.CreateElement("ul", "weekdays");
        li = GALSAN_CreateBlock.CreateElement("li", null, "M");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "T");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "W");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "Th");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "F");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "S");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "Su");
        ul.appendChild(li);

        ContenedorPrincipal.appendChild(ul);
        //Days: Generate days with for loop
        var Today = 12;

        ul = GALSAN_CreateBlock.CreateElement("ul", "days");

        for (let Day = 1; Day <= 31; Day++) {

            if (Day == Today) {

                li = GALSAN_CreateBlock.CreateElement("li", null);
                ul.appendChild(li);
                span = GALSAN_CreateBlock.CreateElement("span", "active", `${Day}`);
                li.appendChild(span);

            } else {
                li = GALSAN_CreateBlock.CreateElement("li", null, `${Day}`);
                ul.appendChild(li);
            }
        }

        ContenedorPrincipal.appendChild(ul);

        /* ul = GALSAN_CreateBlock.CreateElement("ul", "days");
        li = GALSAN_CreateBlock.CreateElement("li", null, "1");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "2");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "3");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "4");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "5");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "6");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "7");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null);
        ul.appendChild(li);
        span = GALSAN_CreateBlock.CreateElement("span", "active", "8");
        li.appendChild(span);
        li = GALSAN_CreateBlock.CreateElement("li", null, "9");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "10");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "11");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "12");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "13");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "14");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "15");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "16");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "17");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "18");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "14");
        ul.appendChild(li);
        li = GALSAN_CreateBlock.CreateElement("li", null, "15");
        ul.appendChild(li); */


    }

}

o_CCalendar = new CCalendarBlock(GALSAN_CreateBlock.Site_Column_Right);