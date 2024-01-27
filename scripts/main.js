let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/snow_3.jpeg') {
    myImage.setAttribute ('src','images/me_3.jpeg');
  } else {
    myImage.setAttribute ('src','images/snow_3.jpeg');
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
    myHeading.innerHTML = 'Meet Nidhi Pillai, ' + myName;
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