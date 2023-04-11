// QUESTION:1

function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}
let innerFunction = sum(7);
innerFunction(9);

// QUESTION:2

function searchArray(arr, value, index = 0) {
  if (index >= arr.length) {
    return false;
  }
  if (arr[index] === value) {
    return true;
  }
  return searchArray(arr, value, index + 1);
}

// QUESTION:3
function addParagraphToDocument(text) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}
addParagraphToDocument("ANY TEXT TO BE ADDED IN PARAGRAPH"); 

// QUESTION:4
function addListItemToUnorderedList(text) {
  const newListItem = document.createElement("li");
  newListItem.textContent = text;
  const unorderedList = document.querySelector("ul");
  unorderedList.appendChild(newListItem);
}

// QUESTION:5
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

// QUESTION:6
function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

// QUESTION:7
function getObjectFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key); 
  if (storedValue) {
    return JSON.parse(storedValue); 
  }
  return null; 
}
// QUESTION:8
function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj)); 

function getObjectFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key); 
    return JSON.parse(storedValue); 
  }
  return null; 
}
