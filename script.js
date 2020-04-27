var button = document.getElementById("button");
var input = document.getElementById("enter");
var ul = document.getElementById("ul");

function inputLength() {
 return  input.value.length ;
}

function createElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
      createElement() ;
    }
  }

function addListAfterKeyPress() {
    if (inputLength() > 0 && event.keyCode === 13) {
      createElement() ;
    }
  }
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
