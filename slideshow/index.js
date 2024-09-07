const sliders = document.querySelector('.slider');
const left =  document.querySelector('.left');
const right =  document.querySelector('.right');
const images = document.querySelectorAll('.slide');
let counter = 1;
let length = images.length;


right.addEventListener('click' , () =>{
    if(counter<length){
    sliders.style.transform = `TranslateX(-${ counter * 800}px)`;
    counter++;
    }
    else{
        sliders.style.transform = `TranslateX(-${0}px)`; 
        counter = 1;
    }
})
left.addEventListener('click' , () =>{    
    if(counter>1) {
        sliders.style.transform = `TranslateX(-${ (counter -2) * 800}px)`;
        counter--;
       
    }
    else{
       sliders.style.transform =  `Translate(-${0}px)`;
    }
})

