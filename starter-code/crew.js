let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
let p = document.querySelector('p');
let liste  = document.querySelectorAll('.liste');
let image = document.querySelector('.images');

liste[0].addEventListener('click',()=>{
    h1.innerText = 'COMMANDER';
    h2.innerHTML  = 'DOUGLAS <br> HURLEY';
    p.innerText = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`;
    image.setAttribute('src','/starter-code/assets/crew/image-douglas-hurley.png');
    liste[0].style.backgroundColor = 'gray';
    liste[1].style.backgroundColor = 'white';
    liste[2].style.backgroundColor = 'white';
    liste[3].style.backgroundColor = 'white';
});

liste[1].addEventListener('click',()=>{
    h1.innerText = 'MISSION SPECIALIST';
    h2.innerHTML  = 'MARK<br> SHUTTLEWORTH';
    p.innerText = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system.
     Shuttleworth became the first South African to travel to space as a space tourist.
    `;
    image.setAttribute('src','/starter-code/assets/crew/image-mark-shuttleworth.png');
    liste[0].style.backgroundColor = 'white';
    liste[1].style.backgroundColor = 'gray';
    liste[2].style.backgroundColor = 'white';
    liste[3].style.backgroundColor = 'white';
});

liste[2].addEventListener('click',()=>{
    h1.innerText = 'PILOT';
    h2.innerHTML  = 'VICTOR GLOVER';
    p.innerText = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`;
    image.setAttribute('src','/starter-code/assets/crew/image-victor-glover.png');
    liste[0].style.backgroundColor = 'white';
    liste[1].style.backgroundColor = 'white';
    liste[2].style.backgroundColor = 'gray';
    liste[3].style.backgroundColor = 'white';
});

liste[3].addEventListener('click',()=>{
    h1.innerText = 'FLIGHT ENGINEER';
    h2.innerHTML  = 'ANOUSHEH <br> ANSARI';
    p.innerText = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`;
    image.setAttribute('src','/starter-code/assets/crew/image-anousheh-ansari.png');
    liste[0].style.backgroundColor = 'white';
    liste[1].style.backgroundColor = 'white';
    liste[2].style.backgroundColor = 'white';
    liste[3].style.backgroundColor = 'gray';
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