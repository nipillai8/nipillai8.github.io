let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '/Users/nidhiwork/Desktop/web-projects/test-site/images/dee.jpeg') {
    myImage.setAttribute ('src','/Users/nidhiwork/Desktop/web-projects/test-site/images/images_2.jpeg');
  } else {
    myImage.setAttribute ('src','/Users/nidhiwork/Desktop/web-projects/test-site/images/dee.jpeg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Meet Nidhi Pillai, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}