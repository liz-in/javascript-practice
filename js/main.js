var myImage = document.querySelector('img');
myImage.onclick = function () {
    let imgSrc = myImage.getAttribute('src');
    if (imgSrc === 'assets/photo-ocean.jpg') {
        myImage.setAttribute('src', 'assets/photo-farm.jpg')
    } else {
        myImage.setAttribute('src', 'assets/photo-ocean.jpg')
    }
}

var myButton = document.querySelector('button');
var myTitle = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (myName && myName !== null) {
        localStorage.setItem('name', myName);
        myTitle.innerHTML = 'Hi, ' + myName;
    }
}

if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    if (!storedName || storedName === null) {
        setUserName()
    } else {
        myTitle.innerHTML = storedName + ', nice to see you again! :) <br> Keywords are tokens that have special meaning in JavaScript: break, case, catch, continue, debugger, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, and with.';
    }
} else {
    setUserName();
}

myButton.onclick = function () {
    setUserName();
}