var myImage = document.querySelector('img');
myImage.onclick = function () {
    let imgSrc = myImage.getAttribute('src');
    if (imgSrc === 'assets/photo-ocean.jpg') {
        myImage.setAttribute('src', 'assets/photo-farm.jpg');
    } else {
        myImage.setAttribute('src', 'assets/photo-ocean.jpg');
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
        setUserName();
    } else {
        myTitle.innerHTML = storedName + ', nice to see you again! :)';
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'Story:<br><br>There was once a shoemaker, who worked very hard and was very honest, but still he could not earn enough to live upon; and at last all he had in the world was gone, save just leather enough to make one pair of shoes.Then he cut his leather out, all ready to make up the next day, meaning to rise early in the morning to his work. His conscience was clear and his heart light amidst all his troubles; so he went peaceably to bed, left all his cares to Heaven, and soon fell asleep.<br><br>In the morning after he had said his prayers, he sat himself down to his work; when, to his great wonder, there stood the shoes already made, upon the table. The good man knew not what to say or think at such an odd thing happening. He looked at the workmanship; there was not one false stitch in the whole job; all was so neat and true, that it was quite a masterpiece. The same day a customer came in, and the shoes suited him so well that he willingly paid a price higher than usual for them; and the poor shoemaker, with the money, bought leather enough to make two pairs more.<br><br>In the evening he cut out the work, and went to bed early, that he might get up and begin betimes next day; but he was saved all the trouble, for when he got up in the morning the work was done ready to his hand. Soon in came buyers, who paid him handsomely for his goods, so that he bought leather enough for four pair more. He cut out the work again overnight and found it done in the morning, as before; and so it went on for some time: what was got ready in the evening was always done by daybreak, and the good man soon became thriving and well off again.';
        document.querySelector('.content').appendChild(paragraph);
    }
} else {
    setUserName();
}

myButton.onclick = function () {
    setUserName();
}