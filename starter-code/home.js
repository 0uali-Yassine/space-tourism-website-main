let home = document.querySelector('.home');
let destination = document.querySelector('.destination');
let crew = document.querySelector('.crew');
let technology = document.querySelector('.technology');

home.addEventListener('click',()=>{
    home.style.textDecorationLine = 'underline';
    home.style.textDecorationThickness =  '2px';
    home.style.textUnderlineOffset =  '27px';
    destination.style.textDecorationLine = 'none';
    crew.style.textDecorationLine = 'none';
    technology.style.textDecorationLine = 'none';
    
});
destination.addEventListener('click',()=>{
    destination.style.textDecorationLine = 'underline';
    destination.style.textDecorationThickness =  '2px';
    destination.style.textUnderlineOffset =  '27px';
    home.style.textDecorationLine = 'none';
    crew.style.textDecorationLine = 'none';
    technology.style.textDecorationLine = 'none';
    
});
crew.addEventListener('click',()=>{
    crew.style.textDecorationLine = 'underline';
    crew.style.textDecorationThickness =  '2px';
    crew.style.textUnderlineOffset =  '27px';
    home.style.textDecorationLine = 'none';
    destination.style.textDecorationLine = 'none';
    technology.style.textDecorationLine = 'none';
    
});
technology.addEventListener('click',()=>{
    technology.style.textDecorationLine = 'underline';
    technology.style.textDecorationThickness =  '2px';
    technology.style.textUnderlineOffset =  '27px';
    home.style.textDecorationLine = 'none';
    destination.style.textDecorationLine = 'none';
    crew.style.textDecorationLine = 'none';
    
});



let burger = document.querySelector('.burger');
let clos = document.querySelector('.close');
let list = document.querySelector('.list');
burger.addEventListener('click',(e)=>{
    list.classList.toggle('hidden');
    list.classList.add('flex');
    burger.style.display = 'none';
    clos.style.display = 'block';
    clos.style.zIndex = '10';
});

clos.addEventListener('click',()=>{
    clos.style.display = 'none';
    burger.style.display = 'block';
    list.classList.toggle('hidden');
});

