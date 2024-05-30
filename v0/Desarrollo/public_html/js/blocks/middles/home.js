GALSAN_CreateBlock.add_CSS_Class('.home',
    `
    min-height: fit-content;
    background-position: 28900% center;
    width: 100%;
    min-width: 280px;
    height: auto;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background: transparent url(assets/img/body/Slider.png) repeat-x 0% center;
    background-size: auto 100%;
    -webkit-transition: background-position 1s ease-out 0.3s;
    -moz-transition: background-position 1s ease-out 0.3s;
    -o-transition: background-position 1s ease-out 0.3s;
    -ms-transition: background-position 1s ease-out 0.3s;
    transition: background-position 1s ease-out 0.3s;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.mask',
    `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #FECE1A;
    height: 100%;
    opacity: 0.85;
    filter: alpha(opacity=85);
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.container',
    `
    position: relative;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    zoom: 1;
    width: 80%;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.container:before, .container:after',
    `
    display: table;
    line-height: 0;
    content: "";
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.slide',
    `
    display: none;
    width: 100%;
    height: 100%;
    margin-top: 10vw;
    margin-bottom: 3vw;
    text-align: left;
    
    `
);

GALSAN_CreateBlock.add_CSS_Class('.textSlide',
    `
    display: block;
    width: 50%;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.da_img',
    `
    text-align: center;
    width: 50%;
    height: auto;
    
    `
);


GALSAN_CreateBlock.add_CSS_Class('.img_X',
    `
    width: 50%;
    height: auto;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.dotsDiv',
    `
    text-align:center;
    padding:  2vw 0;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.dot',
    `
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.active',
    `
    background-color: #717171;
    `
);


GALSAN_CreateBlock.add_CSS_Class('.fade',
    `
    -webkit-animation-name: fade;
    -webkit-animation-duration: 4s;
    animation-name: fade;
    animation-duration: 4s;
    `
);


GALSAN_CreateBlock.add_CSS_Class('@-webkit-keyframes fade',
    `
    from {opacity: .4} 
    to {opacity: 1}
    `
);


GALSAN_CreateBlock.add_CSS_Class('@keyframes fade',
    `
    from {opacity: .4} 
    to {opacity: 1}
    `
);

GALSAN_CreateBlock.add_CSS_Class('.moveToRight',
    `
    -webkit-animation-name: movetoRight;
    -webkit-animation-duration: 2s;
    animation-name: movetoRight;
    animation-duration: 2s;
    padding: 1vw 0;
    `
);



GALSAN_CreateBlock.add_CSS_Class('@-webkit-keyframes movetoRight',
    `
    0% {
        position: relative;
        left: 110%;
        opacity: 0;
        
    }
    100% {
        position: relative;
        left: 0%;
        opacity: 1;
        transform: rotate(360deg);
    }
    `
);


GALSAN_CreateBlock.add_CSS_Class('@keyframes movetoRight',
    `
    0% {
        position: relative;
        left: 110%;
        opacity: 0;
        
    }
    100% {
        position: relative;
        left: 0%;
        opacity: 1;
        transform: rotate(360deg);
    }
    `
);


GALSAN_CreateBlock.add_CSS_Class('.moveToLeft',
    `
    -webkit-animation-name: moveToLeft;
    -webkit-animation-duration: 2s;
    animation-name: moveToLeft;
    animation-duration: 2s;
    padding: 1vw 0;
    `
);



GALSAN_CreateBlock.add_CSS_Class('@-webkit-keyframes moveToLeft',
    `
    0% {
        position: relative;
        right: 110%;
        opacity: 0;
    }
    100% {
        position: relative;
        right: 0%;
        opacity: 1;
    }
    `
);


GALSAN_CreateBlock.add_CSS_Class('@keyframes moveToLeft',
    `
    0% {
        position: relative;
        right: 110%;
        opacity: 0;
    }
    100% {
        position: relative;
        right: 0%;
        opacity: 1;
    }
    `
);








home = GALSAN_CreateBlock.CreateElement("div", "home");

slider = GALSAN_CreateBlock.CreateElement("div", "da-slider");
home.appendChild(slider);


mask = GALSAN_CreateBlock.CreateElement("div", "mask");
slider.appendChild(mask);


container = GALSAN_CreateBlock.CreateElement("div", "container");
slider.appendChild(container);


slide = GALSAN_CreateBlock.CreateElement("div", "slide");
container.appendChild(slide);


textSlide = GALSAN_CreateBlock.CreateElement("div", "textSlide");
slide.appendChild(textSlide);


fittext2 = GALSAN_CreateBlock.CreateElement("h2", "fittext2", "Welcome to pluton theme");
textSlide.appendChild(fittext2);

fittext2 = GALSAN_CreateBlock.CreateElement("h4", "moveToLeft", "Clean & responsive");
textSlide.appendChild(fittext2);

fittext2 = GALSAN_CreateBlock.CreateElement("p", "moveToLeft", "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");
textSlide.appendChild(fittext2);


da_img = GALSAN_CreateBlock.CreateElement("div", "da_img");
slide.appendChild(da_img);


img_X = GALSAN_CreateBlock.CreateElement("img", "img_X", "assets/img/cross.png");
da_img.appendChild(img_X);




slide = GALSAN_CreateBlock.CreateElement("div", "slide");
container.appendChild(slide);

textSlide = GALSAN_CreateBlock.CreateElement("div", "textSlide");
slide.appendChild(textSlide);


fittext2 = GALSAN_CreateBlock.CreateElement("h2", "fittext2", "Welcome to pluton theme");
textSlide.appendChild(fittext2);

fittext2 = GALSAN_CreateBlock.CreateElement("h4", "moveToLeft", "Clean & responsive");
textSlide.appendChild(fittext2);

fittext2 = GALSAN_CreateBlock.CreateElement("p", "moveToLeft", "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");
textSlide.appendChild(fittext2);


da_img = GALSAN_CreateBlock.CreateElement("div", "da_img");
slide.appendChild(da_img);


img_X = GALSAN_CreateBlock.CreateElement("img", "img_X", "assets/img/cross.png");
da_img.appendChild(img_X);




slide = GALSAN_CreateBlock.CreateElement("div", "slide");
container.appendChild(slide);

textSlide = GALSAN_CreateBlock.CreateElement("div", "textSlide");
slide.appendChild(textSlide);


fittext2 = GALSAN_CreateBlock.CreateElement("h2", "fittext2", "Welcome to pluton theme");
textSlide.appendChild(fittext2);

fittext2 = GALSAN_CreateBlock.CreateElement("h4", "moveToLeft", "Clean & responsive");
textSlide.appendChild(fittext2);

fittext2 = GALSAN_CreateBlock.CreateElement("p", "moveToLeft", "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");
textSlide.appendChild(fittext2);


da_img = GALSAN_CreateBlock.CreateElement("div", "da_img");
slide.appendChild(da_img);


img_X = GALSAN_CreateBlock.CreateElement("img", "img_X", "assets/img/cross.png");
da_img.appendChild(img_X);


dotsDiv = GALSAN_CreateBlock.CreateElement("div", "dotsDiv");
container.appendChild(dotsDiv);

dot = GALSAN_CreateBlock.CreateElement("span", "dot");
dotsDiv.appendChild(dot);

dot = GALSAN_CreateBlock.CreateElement("span", "dot");
dotsDiv.appendChild(dot);

dot = GALSAN_CreateBlock.CreateElement("span", "dot");
dotsDiv.appendChild(dot);




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}