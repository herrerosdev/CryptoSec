class NotificationConfirmBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////


    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        
    }





    Set_Notification(ModalHeader, ModalBody) {

        var modal = GALSAN_CreateBlock.CreateElement("div", "modal");
        GALSAN_CreateBlock.AttachID(modal, "ContentModalID");



        var modal_content = GALSAN_CreateBlock.CreateElement("div", "modal_content");
            
            modal.appendChild(modal_content);

        

        var modal_header = GALSAN_CreateBlock.CreateElement("div", "modal_header");
        modal_content.appendChild(modal_header);

             var modal_title = GALSAN_CreateBlock.CreateElement("h1", "modal_title" , ModalHeader);
             modal_header.appendChild(modal_title);


             var modal_body = GALSAN_CreateBlock.CreateElement("div", "modal_body");
             modal_content.appendChild(modal_body);
     
                  var modal_p = GALSAN_CreateBlock.CreateElement("p", "modal_p" , ModalBody);
                  modal_body.appendChild(modal_p);


    }









    ViewConstructor() {




GALSAN_CreateBlock.add_CSS_Class('.modal',
`
display: flex;
align-items: center;
justify-content: center;
padding: 2vw 0;
position: relative;
width: auto;
pointer-events: none;

`
);

GALSAN_CreateBlock.add_CSS_Class('.modal_content',
`
position: relative;
display: flex;
flex-direction: column;
width: 80%;
pointer-events: auto;
background-color: #ffffff8c;
border: 1px solid rgba(0,0,0,.2);
border-radius: 0.3rem;
outline: 0;

`
);


GALSAN_CreateBlock.add_CSS_Class('.modal_header',
`
display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

`
);


GALSAN_CreateBlock.add_CSS_Class('.modal_title',
`
margin-bottom: 0;
line-height: 1.5;

`
);


GALSAN_CreateBlock.add_CSS_Class('.modal_body',
`
position: relative;
flex: 1 1 auto;
padding: 1rem;

`
);

GALSAN_CreateBlock.add_CSS_Class('.modal_p',
`
margin-top: 0;
    margin-bottom: 1rem;

`
);


GALSAN_CreateBlock.add_CSS_Class('.modal_footer',
`
display: flex;
flex-wrap: wrap;
flex-shrink: 0;
align-items: center;
justify-content: flex-end;
padding: 0.75rem;
border-top: 1px solid #dee2e6;
border-bottom-right-radius: calc(0.3rem - 1px);
border-bottom-left-radius: calc(0.3rem - 1px);

`
);


GALSAN_CreateBlock.add_CSS_Class('.modal_p',
`
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`
);



        
            }             

        }   

