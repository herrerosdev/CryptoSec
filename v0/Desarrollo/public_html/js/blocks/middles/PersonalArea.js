class PersonalAreaBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////
    static IsOpen = 0;

    constructor() {


        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();

        
    }


    ///functions


    ExpandData() {
        if(PersonalAreaBlock.IsOpen == 0) {
            document.getElementById("ContainerPersonalAreaID").style.display = "flex";
            PersonalAreaBlock.IsOpen = 1;
        } else {
            document.getElementById("ContainerPersonalAreaID").style.display = "none";
            PersonalAreaBlock.IsOpen = 0;
        }
        
     
    }


    Set_New_Data(Data, State) {
        var Profile = document.getElementById("DivProfile2ID");


        var ProfileNickDiv = GALSAN_CreateBlock.CreateElement("div", "ProfileNickDiv");


        Profile.appendChild(ProfileNickDiv);

        var ProfileNick = GALSAN_CreateBlock.CreateElement("p", "ProfileNick", Data);

        GALSAN_CreateBlock.AttachID(ProfileNick, "ProfileNick2ID");


        ProfileNickDiv.appendChild(ProfileNick);

        var ProfileNickDiv = GALSAN_CreateBlock.CreateElement("div", "ProfileNickDiv");



        Profile.appendChild(ProfileNickDiv);

        var ProfileNick = GALSAN_CreateBlock.CreateElement("p", "ProfileNick", State);


        ProfileNickDiv.appendChild(ProfileNick);


        var ProfileNick = GALSAN_CreateBlock.CreateElement("img", "iconEdit2", "./assets/img/icon/draw.png");

        GALSAN_CreateBlock.Attach_Attribute_onClick(ProfileNick, "PageManager.o_Personal.Edit_State()");

        ProfileNickDiv.appendChild(ProfileNick);


    }


    static Hoverimg() {
        document.getElementById("OverlayId").classList.add("overlayDisplay");

    };

    static UnHoverimg() {
        document.getElementById("OverlayId").classList.remove("overlayDisplay");

    };


    static ShowGridImages() {
        document.getElementById("OverlayGrid").style.display = "block";
    }

    static RemoveGridImages() {
        document.getElementById("OverlayGrid").style.display = "none";
    }


    Set_Images_Profile(Img) {
      var Grid =  document.getElementById("GridImagesID");

      var Images = GALSAN_CreateBlock.CreateElement("img", "Images", Img);

      Grid.appendChild(Images);

      GALSAN_CreateBlock.Attach_Attribute_onClick(Images, "PageManager.o_Personal.SelectImg(" + "'" + Img + "'" + ")")
    }


    Edit_State() {
        var Profile = document.getElementById("DivProfile2ID");

        var divEditState = GALSAN_CreateBlock.CreateElement("div", "divEditState");
    
        Profile.appendChild(divEditState);


        var ProfileNick = GALSAN_CreateBlock.CreateElement("input", "input_State");
        ProfileNick.placeholder = "Introduce tu nuevo estado";

        GALSAN_CreateBlock.AttachID(ProfileNick, "input_StateID");

        divEditState.appendChild(ProfileNick);


        var ProfileNick = GALSAN_CreateBlock.CreateElement("img", "iconEdit2","./assets/img/icon/check.png");
        GALSAN_CreateBlock.Attach_Attribute_onClick(ProfileNick, "PageManager.o_Personal.Change_State()");

        divEditState.appendChild(ProfileNick);
    }



    Change_State() {
        var input = document.getElementById("input_StateID").value;

        var CharactersPATTERN = /^[\s\S]{1,150}$/;

        if (input == null || input == "" || !CharactersPATTERN.test(input)) {

            alert("150 caracteres máximos");

        } else {

        var form_data = new FormData();

        form_data.append("OPERATION", "Change_State_OPERATION");
        form_data.append("input", input);

        CPetition.$Ajax_PETITION("./API/AreaPersonal.php", form_data);

        window.location.reload();
        }

      
    }


    SelectImg(Img) {

        var ProfileImgID =  document.getElementById("ProfileImgID");

        ProfileImgID.src = Img;

        var form_data = new FormData();

        form_data.append("OPERATION", "Insert_Image_OPERATION");
        form_data.append("Img", Img);

        CPetition.$Ajax_PETITION("./API/AreaPersonal.php", form_data);

        PersonalAreaBlock.RemoveGridImages();




    }


    SetImgProfileUser(Img) {

        var DivID =  document.getElementById("divProfileID");


        var ProfileImage = GALSAN_CreateBlock.CreateElement("img", "ProfileImage", Img);
        GALSAN_CreateBlock.AttachID(ProfileImage, "ProfileImgID");

        DivID.appendChild(ProfileImage);
    }



    ViewConstructor() {


        GALSAN_CreateBlock.add_CSS_Class('.DesplegablePersonalArea',
        `
        width: 80%;
        height: auto;
        font-size: 2vw;
        text-align: center;
        padding: 1vw;
        margin: 4vh auto;
        background-color: rgb(41 85 107);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        
        `
    
        );


        GALSAN_CreateBlock.add_CSS_Class('.DesplegablePersonalArea',
`
font-size: 3.5vw;

`, GALSAN_CreateBlock.Screen_Mobile
);

        GALSAN_CreateBlock.add_CSS_Class('.ContainerPersonalArea',
    `
    width: 100%;
    height: auto;
    display: none;
    
    `

    );

    GALSAN_CreateBlock.add_CSS_Class('.ContainerPersonalArea',
    `
    flex-direction: column;
    
    `, GALSAN_CreateBlock.Screen_Mobile

    );


    GALSAN_CreateBlock.add_CSS_Class('.divEditState',
    `
    display: flex;
    margin: 0 auto;
    width: 80%;
    
    `

    );

    GALSAN_CreateBlock.add_CSS_Class('.DivProfile1',
    `
    width: 30%;
    height: auto;
  /*   background-color: orange; */
    display: flex;
    flex-direction: column;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.DivProfile1',
`
width: auto;


`, GALSAN_CreateBlock.Screen_Mobile
);


GALSAN_CreateBlock.add_CSS_Class('.DivProfile2',
`
width: 70%;
height: 100%;
/* background-color: pink; */
display: flex;
flex-direction: column;
`
);


GALSAN_CreateBlock.add_CSS_Class('.DivProfile2',
`
width: auto;


`, GALSAN_CreateBlock.Screen_Mobile
);

GALSAN_CreateBlock.add_CSS_Class('.ProfileImage',
`
width: 15vw;
/* margin: 5% auto; */
height: 15vw;
background-color: #7da4b8;
border-radius: 50%;


`
);


GALSAN_CreateBlock.add_CSS_Class('.ProfileNickDiv',
`
width: 80%;
margin: 2vh auto;
height: auto;
display: flex;
border-radius: 25px;
background-color: white;
flex-direction: row;
justify-content: center;
align-items: center;



`
);



GALSAN_CreateBlock.add_CSS_Class('.ProfileNick',
`
color: black;
    text-align: center;
    margin: 1vw 3vw;

    font-size: 1.8vw;
    font-weight: 600;



`
);


GALSAN_CreateBlock.add_CSS_Class('.divProfileOverlay',
`
margin: 0 auto;
position: relative;

`
);


GALSAN_CreateBlock.add_CSS_Class('.overlayDisplay',
`
display: block !important;


`
);





GALSAN_CreateBlock.add_CSS_Class('.OverlayProfile',
`
position: absolute;
display: none;
    width: 100%;
    height: 15vw;
    background: rgb(41 85 107 / 68%);
    border-radius: 50%;

`
);


GALSAN_CreateBlock.add_CSS_Class('.iconEdit',
`
width: 2vw;
position: relative;
margin: 0 auto;
top: 45%;
display: flex;

`
);


GALSAN_CreateBlock.add_CSS_Class('.iconEdit2',
`
width: 2vw;
height: 2vw;
margin: 0 1vw;

`
);


GALSAN_CreateBlock.add_CSS_Class('.input_State',
`
width: 90%;
margin: 0 auto;
font-size: 2vw;

`
);


GALSAN_CreateBlock.add_CSS_Class('.ProfileNick',
`
font-size: 3vw;

`, GALSAN_CreateBlock.Screen_Mobile
);






GALSAN_CreateBlock.add_CSS_Class('.BackgroundOverlayGrid',
`
position: fixed;
display: none;
width: 100%;
height: 100%;
top: 0;
overflow: auto;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
z-index: 12;
cursor: pointer;



`
);



GALSAN_CreateBlock.add_CSS_Class('.GridImages',
`
display: grid;
grid-template-columns: 24% 24% 24% 24%;
grid-auto-rows: minmax(7%, auto);
text-align: center;
position: relative;
column-gap: 7px;
row-gap: 7px;
margin: 0 auto;
height: auto;


`
);


GALSAN_CreateBlock.add_CSS_Class('.DivLimit',
`
width: 64%;
margin: 2vw auto;
`
);


GALSAN_CreateBlock.add_CSS_Class('.Images',
`
max-width: 100%;
width: auto;
background-color: aliceblue;
height: 100%;
border: black solid 2px;
`
);




var DesplegablePersonalArea = GALSAN_CreateBlock.CreateElement("div", "DesplegablePersonalArea", "Mis datos");
GALSAN_CreateBlock.Attach_Attribute_onClick(DesplegablePersonalArea, "PageManager.o_Personal.ExpandData()");

var ContainerPersonalArea = GALSAN_CreateBlock.CreateElement("div", "ContainerPersonalArea");
GALSAN_CreateBlock.AttachID(ContainerPersonalArea, "ContainerPersonalAreaID");




var DivProfile1 = GALSAN_CreateBlock.CreateElement("div", "DivProfile1");


ContainerPersonalArea.appendChild(DivProfile1);

var div = GALSAN_CreateBlock.CreateElement("div", "divProfileOverlay");

GALSAN_CreateBlock.AttachID(div, "divProfileID");
GALSAN_CreateBlock.Attach_Attribute_onmouseover(div, "PersonalAreaBlock.Hoverimg()");
GALSAN_CreateBlock.Attach_Attribute_onmouseout(div, "PersonalAreaBlock.UnHoverimg()");


DivProfile1.appendChild(div);



var OverlayProfileImage = GALSAN_CreateBlock.CreateElement("div", "OverlayProfile");

GALSAN_CreateBlock.AttachID(OverlayProfileImage, "OverlayId");
GALSAN_CreateBlock.Attach_Attribute_onClick(OverlayProfileImage, "PersonalAreaBlock.ShowGridImages()");

div.appendChild(OverlayProfileImage);


var iconEdit = GALSAN_CreateBlock.CreateElement("img", "iconEdit", "./assets/img/icon/draw.png");


OverlayProfileImage.appendChild(iconEdit);






var ProfileNickDiv = GALSAN_CreateBlock.CreateElement("div", "ProfileNickDiv");


DivProfile1.appendChild(ProfileNickDiv);


var ProfileNick = GALSAN_CreateBlock.CreateElement("p", "ProfileNick", Session_UserName);


ProfileNickDiv.appendChild(ProfileNick);






var DivProfile2 = GALSAN_CreateBlock.CreateElement("div", "DivProfile2");
GALSAN_CreateBlock.AttachID(DivProfile2, "DivProfile2ID");

ContainerPersonalArea.appendChild(DivProfile2);




var BackgroundOverlay = GALSAN_CreateBlock.CreateElement("div", "BackgroundOverlayGrid");
GALSAN_CreateBlock.AttachID(BackgroundOverlay, "OverlayGrid");

var DivLimit = GALSAN_CreateBlock.CreateElement("div", "DivLimit");

BackgroundOverlay.appendChild(DivLimit);


var GridImages = GALSAN_CreateBlock.CreateElement("div", "GridImages");

DivLimit.appendChild(GridImages);

GALSAN_CreateBlock.AttachID(GridImages, "GridImagesID");

                
    }             

}     










        





