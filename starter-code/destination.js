let moon = document.querySelector('.moon');
let mars = document.querySelector('.mars');
let europa = document.querySelector('.europa');
let titan = document.querySelector('.titan');
let img = document.querySelector('img');
moon.addEventListener('click',()=>{
    moon.style.textDecorationLine = 'underline';
    moon.style.textDecorationThickness =  '2px';
    moon.style.textUnderlineOffset =  '10px';
    moon.style.color = 'white';
    mars.style.textDecorationLine = 'none';
    europa.style.textDecorationLine = 'none';
    titan.style.textDecorationLine = 'none';
    mars.style.color = 'rgb(107 114 128)';
    europa.style.color = 'rgb(107 114 128)';
    document.querySelector('.destinations_name').innerText = "MOON";
    document.querySelector('.para_destinations').innerText = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`;
    document.querySelector('.avg_destinations').innerText = '384,400 km';
    document.querySelector('.est_travel').innerText = ' 3 days';
    img.setAttribute('src','/starter-code/assets/destination/image-moon.png');
});
mars.addEventListener('click',()=>{
    mars.style.color = 'white';
    mars.style.textDecorationLine = 'underline';
    mars.style.textDecorationThickness =  '2px';
    mars.style.textUnderlineOffset =  '10px';
    moon.style.textDecorationLine = 'none';
    europa.style.textDecorationLine = 'none';
    titan.style.textDecorationLine = 'none';
    moon.style.color = 'rgb(107 114 128)';
    europa.style.color = 'rgb(107 114 128)';
    titan.style.color = 'rgb(107 114 128)';
    img.style.src = '/starter-code/assets/destination/image-mars.png';
    document.querySelector('.destinations_name').innerText = "MARS";
    document.querySelector('.para_destinations').innerText = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!`;
    document.querySelector('.avg_destinations').innerText = '225 mil. km';
    document.querySelector('.est_travel').innerText = ' 9 months';
    img.setAttribute('src','/starter-code/assets/destination/image-mars.png');
});
europa.addEventListener('click',()=>{
    europa.style.color = 'white';
    europa.style.textDecorationLine = 'underline';
    europa.style.textDecorationThickness =  '2px';
    europa.style.textUnderlineOffset =  '10px';
    moon.style.textDecorationLine = 'none';
    mars.style.textDecorationLine = 'none';
    titan.style.textDecorationLine = 'none';
    moon.style.color = 'rgb(107 114 128)';
    mars.style.color = 'rgb(107 114 128)';
    titan.style.color = 'rgb(107 114 128)';
    document.querySelector('.destinations_name').innerText = "EUROPA";
    document.querySelector('.para_destinations').innerText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`;
    document.querySelector('.avg_destinations').innerText = '628 mil. km';
    document.querySelector('.est_travel').innerText = '3 years';
    img.setAttribute('src','/starter-code/assets/destination/image-europa.png');
}); 
titan.addEventListener('click',()=>{
    titan.style.color=  'white';
    titan.style.textDecorationLine = 'underline';
    titan.style.textDecorationThickness =  '2px';
    titan.style.textUnderlineOffset =  '10px';
    moon.style.textDecorationLine = 'none';
    europa.style.textDecorationLine = 'none';
    mars.style.textDecorationLine = 'none';
    moon.style.color = 'rgb(107 114 128)';
    europa.style.color = 'rgb(107 114 128)';
    mars.style.color = 'rgb(107 114 128)';
    document.querySelector('.destinations_name').innerText = "TITAN";
    document.querySelector('.para_destinations').innerText = `The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`;
    document.querySelector('.avg_destinations').innerText = '1.6 bil. km';
    document.querySelector('.est_travel').innerText = '7 years';
    img.setAttribute('src','/starter-code/assets/destination/image-titan.png');
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
