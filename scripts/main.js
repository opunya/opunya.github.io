var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/impi.png") {
    myImage.setAttribute("src", "images/aquila.jpeg");
  } else {
    myImage.setAttribute("src", "images/impi.png");
  }
};


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Пожалуйста, введите ваше имя.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Является ли Россия империумом Человечества " + myName + "?";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Является ли Россия империумом Человечества, " + storedName + "?";
}


myButton.onclick = function () {
  setUserName();
};