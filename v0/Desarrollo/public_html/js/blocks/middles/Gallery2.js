

GALSAN_CreateBlock.add_CSS_Class('.gallery',
`
position:relative;
height:100%;
width:100%;

`
);


GALSAN_CreateBlock.add_CSS_Class('.gallery:after',
`
content:'';

`
);

GALSAN_CreateBlock.add_CSS_Class('.shadow',
`
position: absolute;
top: 500px;
left: 100px;
width: 500px;
height: 40px;
border-radius: 50%;
background: radial-gradient(#805d78,rgba(0,0,0,0) 70%);
`
);


GALSAN_CreateBlock.add_CSS_Class('.clipped_border',
`
-webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
padding:5px;
background:linear-gradient(grey,lightgrey);
width:var(--border-width);
height:var(--border-height);
max-height:250px;
max-width:250px;
height: var(--height);
width:var(--width);
transition:transform 0.2s;
position:absolute;
cursor:pointer;
`
);

  

GALSAN_CreateBlock.add_CSS_Class('.clipped_border:before',
`
content:'';
position:absolute;
opacity:0.5;
width:350px;
height:70px;
background:white;
top:0;
left:0;
z-index:1;
transform:rotate(45deg);
transition:transform 0.5s;
`
);


GALSAN_CreateBlock.add_CSS_Class('.clipped_border:hover:before',
`
transform: translate(-100px,400%) rotate(45deg);
transition:transform 0.5s;
`
);

GALSAN_CreateBlock.add_CSS_Class('.clipped_border:nth-child(2)',
`
top:196px;
left:118px;
`
);


GALSAN_CreateBlock.add_CSS_Class('.clipped_border:nth-child(3)',
`
top:0;
left:235px;
`
);

GALSAN_CreateBlock.add_CSS_Class('.clipped_border:nth-child(4)',
`
top:196px;
left:353px;
`
);


GALSAN_CreateBlock.add_CSS_Class('.clipped_border:nth-child(5)',
`
top:0;
left:470px;
`
);

GALSAN_CreateBlock.add_CSS_Class('clipped_border:hover',
`
transform:scale(1.2);
transition:transform 0.2s;
z-index:10;
`
);


GALSAN_CreateBlock.add_CSS_Class('clipped',
`
-webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
`
);


GALSAN_CreateBlock.add_CSS_Class('Imagen',
`
transform:scale(0.4);
width: 3vw;
`
);

  

  
  
/*   @media screen and (max-width:500px){
    .clipped-border{
      width:100px;
      height:100px;
    }
    
    .clipped-border:nth-child(2){
      top:0;
      left:100px;
    }
    
    .clipped-border:nth-child(3){
      left:200px;
    }
    
    .clipped-border:nth-child(4){
      top:82px;
      left:50px;
    }
    
    .clipped-border:nth-child(5){
      top:82px;
      left:150px;
    }
  } */
  




  gallery = GALSAN_CreateBlock.CreateElement("div", "gallery");

  clipped_border = GALSAN_CreateBlock.CreateElement("div", "clipped_border");
  gallery.appendChild(clipped_border);


  Imagen = GALSAN_CreateBlock.CreateElement("img", "Imagen", "assets/img/infantiles.jpeg");
  clipped_border.appendChild(Imagen);



  clipped_border = GALSAN_CreateBlock.CreateElement("div", "clipped_border");
  gallery.appendChild(clipped_border);


  Imagen = GALSAN_CreateBlock.CreateElement("img", "Imagen", "assets/img/infantiles.jpeg");
  clipped_border.appendChild(Imagen);



  clipped_border = GALSAN_CreateBlock.CreateElement("div", "clipped_border");
  gallery.appendChild(clipped_border);


  Imagen = GALSAN_CreateBlock.CreateElement("img", "Imagen", "assets/img/infantiles.jpeg");
  clipped_border.appendChild(Imagen);



  clipped_border = GALSAN_CreateBlock.CreateElement("div", "clipped_border");
  gallery.appendChild(clipped_border);


  Imagen = GALSAN_CreateBlock.CreateElement("img", "Imagen", "assets/img/infantiles.jpeg");
  clipped_border.appendChild(Imagen);



  clipped_border = GALSAN_CreateBlock.CreateElement("div", "clipped_border");
  gallery.appendChild(clipped_border);


  Imagen = GALSAN_CreateBlock.CreateElement("img", "Imagen", "assets/img/infantiles.jpeg");
  clipped_border.appendChild(Imagen);


  shadow = GALSAN_CreateBlock.CreateElement("div", "shadow");
  gallery.appendChild(shadow);



