let boxGrip = document.getElementById('grip-box');
let dropMenu = document.getElementById('drop__down__menu');
let closebtn = document.getElementById('closebtn');
let backG = document.getElementById('fondo');
let boxGripTwo = document.getElementById('grip-box-two');
let dropMenuTwo = document.getElementById('drop__down__menu__two');
let gripOne = document.getElementsByClassName('line-one')[0];
let gripTwo = document.getElementsByClassName('line-two')[0];

const showMenu = () => {
    dropMenu.style.left = '0px';
    document.body.style.overflow = 'hidden';
    backG.style.opacity = '1';
    backG.style.zIndex = '10000';
};

const closeMenu = () => {
    dropMenu.style.left = '';
    document.body.style.overflow = 'visible';
    backG.style.opacity = '0';
    backG.style.zIndex = '';
};

const closeMenuTwo = () => {
    document.body.style.overflow = 'visible';
    dropMenuTwo.style.top = '';
    gripOne.style.transform = 'rotate(0deg)';
    gripOne.style.top = '';
    gripTwo.style.transform = 'rotate(0deg)';
    gripTwo.style.bottom = '';
    boxGripTwo.onclick = showMenuTwo;
};

const showMenuTwo = () => {
    dropMenuTwo.style.top = '60px';
    document.body.style.overflow = 'hidden';
    gripOne.style.transform = 'rotate(40deg)';
    gripOne.style.top = '12px';
    gripTwo.style.transform = 'rotate(-40deg)';
    gripTwo.style.bottom = '12px';
    boxGripTwo.onclick = closeMenuTwo;
};

boxGrip.onclick = showMenu;
closebtn.onclick = closeMenu;
boxGripTwo.onclick = showMenuTwo;


let swtch = document.getElementById('swt');
let circle = document.getElementsByClassName('circle')[0];

const moveRight = () => {
    circle.style.transform = 'translateX(21px)';
    swtch.onclick = moveLeft;
    swtch.style.backgroundColor = 'rgb(0, 192, 3)';
};

const moveLeft = () => {
    circle.style.transform = '';
    swtch.onclick = moveRight;
    swtch.style.backgroundColor = '';
};

swtch.onclick = moveRight;



let form = document.getElementById('forms');
let signupBtn = document.getElementById('signupBtn');
let gripForm = document.getElementById('grip-box-form');
let formSignUp = document.getElementById('form__signup');
let formSignIn = document.getElementById('form__signin');
let textSignUp = document.getElementById('text__signup');
let textSignIn = document.getElementById('text__signin');
let lineSplice = document.getElementById('line__splice');
let container = document.getElementById('container');
let fondoForm = document.getElementById('fondo__form');


const showForm = () => {
    document.body.style.overflow = 'hidden';
    container.style.transform = 'translateX(0)';
    form.style.zIndex = '40000';
    gripForm.style.transform = 'translateX(0)';
};

const closeForm = () => {
    document.body.style.overflow = 'visible';
    container.style.transform = 'translateX(1300px)';
    gripForm.style.transform = 'translateX(400px)';
    form.style.zIndex = '';
};




const lineLeft = () => {
    lineSplice.style.transform = 'translateX(0)';
    textSignUp.style.opacity = '1';
    textSignIn.style.opacity = '.5';
    formSignIn.style.transform = 'translateX(500px)';
    formSignUp.style.transform = 'translateX(0px)';
};


const lineRight = () => {
    lineSplice.style.transform = 'translateX(120px)';
    textSignIn.style.opacity = '1';
    textSignUp.style.opacity = '.5';
    formSignUp.style.transform = 'translateX(-500px)';
    formSignIn.style.transform = 'translateX(0px)';
};

signupBtn.onclick = showForm;
gripForm.onclick = closeForm;
textSignIn.onclick = lineRight;
textSignUp.onclick = lineLeft;