//  Navigation

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.manu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu)  {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        
        showMenu = false;
    }
} 

// Funkelnde Worte
document.addEventListener('DOMContentLoaded', () => {
    let textTags = document.querySelectorAll('.home h2, .kontakt h2, .text-secondary');

    textTags.forEach(textTag => {
        let text = textTag.textContent;
        let splittedText = text.split('');
        textTag.innerHTML = ''; 

        for (let i = 0; i < splittedText.length; i++) {
            if (splittedText[i] === " ") {
                splittedText[i] = "&nbsp;";
            }
            textTag.innerHTML += `<span>${splittedText[i]}</span>`;
        }

        let k = 0;
        let direction = 1;
        let spans = textTag.querySelectorAll('span');

        setInterval(() => {
            spans.forEach(span => span.classList.remove('glow'));

            let singleSpan = spans[k];
            singleSpan.classList.add('glow');

            k += direction;

            if (k === spans.length || k < 0) {
                direction *= -1;
                k += direction;
            }
        }, 100);
    });
});



// Avatar

const moveSpeed =30; 


const avatar = document.getElementById('avatar');

let leftOffset = 0;
let rightOffset = 0;


function moveAvatar() {

    leftOffset = (leftOffset + moveSpeed / 60) % 360; 
    rightOffset = (rightOffset - moveSpeed / 60) % 360; 
    
    avatar.style.transform = `perspective(500px) rotateY(${leftOffset}deg) rotateY(180deg) translateZ(0)
                               perspective(500px) rotateY(${rightOffset}deg) rotateY(180deg) translateZ(0)`;
    
    requestAnimationFrame(moveAvatar);
}

moveAvatar();




//Die Bewegung des Wortes

let textTag = document.querySelector('.home_section.section1 h1 ' ); 

let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] === " ") {
        splittedText[i] = "&nbsp;";
    }

    if (i === splittedText.length - 1) {
        textTag.innerHTML += `<span>${splittedText[i]}</span>`;
    } else {
        textTag.innerHTML += `<span>${splittedText[i]}</span>`;
    }
}

let k = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];

    singleSpan.classList.add('fadeMove'); 

    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }
}, 60);



