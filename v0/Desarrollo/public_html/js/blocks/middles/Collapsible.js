        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('.collapsible ',
            `
            background-color: #eee;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
    
    `
        );

        /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */

        GALSAN_CreateBlock.add_CSS_Class('.active, .collapsible:hover',
            `
            background-color: #ccc;
    `
        );
        GALSAN_CreateBlock.add_CSS_Class('.contentCollapsible',
            `
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #f1f1f1;
    
    `
        );


        //Create element and associate a classes
        var Boton = GALSAN_CreateBlock.CreateElement("button", "collapsible", "Open Collapsible", GALSAN_CreateBlock.Site_Column_Center);
        GALSAN_CreateBlock.AttachType(Boton, "button");

        var Content = GALSAN_CreateBlock.CreateElement("Div", "contentCollapsible");

        var P = GALSAN_CreateBlock.CreateElement("p", null, "asfadfa");
        Content.appendChild(P)


        //Code JS

        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }