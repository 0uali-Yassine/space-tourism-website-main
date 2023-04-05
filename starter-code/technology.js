let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let header = document.querySelector('.header1');
let subHeader = document.querySelector('.subheader2');
let paragr = document.querySelector('p');
let img = document.querySelector('img');

one.addEventListener('click',()=>{
    one.style.backgroundColor = 'white';
    one.style.color = 'black';
    two.style.backgroundColor = 'transparent';
    two.style.color = 'white';
    three.style.backgroundColor = 'transparent';
    three.style.color = 'white';
    subHeader.innerText = 'LAUNCH VEHICLE';
    paragr.innerText = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
    img.setAttribute('src','/starter-code/assets/technology/image-launch-vehicle-portrait.jpg')
});

two.addEventListener('click',()=>{
    two.style.backgroundColor = 'white';
    two.style.color = 'black';
    one.style.backgroundColor = 'transparent';
    one.style.color = 'white';
    three.style.backgroundColor = 'transparent';
    three.style.color = 'white';
    subHeader.innerText  = 'SPACEPORT';
    paragr.innerText = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
    img.setAttribute('src','/starter-code/assets/technology/image-spaceport-portrait.jpg')
});

three.addEventListener('click',()=>{
    three.style.backgroundColor = 'white';
    three.style.color = 'black';
    one.style.backgroundColor = 'transparent';
    one.style.color = 'white';
    two.style.backgroundColor = 'transparent';
    two.style.color = 'white';
    subHeader.innerText  = 'SPACE CAPSULE';
    paragr.innerText = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;
    img.setAttribute('src','/starter-code/assets/technology/image-space-capsule-portrait.jpg');
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