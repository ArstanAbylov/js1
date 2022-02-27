// //Method 1
// document.body.innerHTML = "<h1>Hello world</h1>";

// //create
// let.h1Element = document.querySelector('h1');

// //FIng
// h1Element.style.color = "rgb(255,0,0)";

// //MEthod 2
// //create
// let h2Element = document.createElement('h2');

// //Attach
// document.body.prepend(h2Element);

// //MOdify
// h2Element.textContent = "Nice to meet you!";

let exarcisesElement = document.querySelector('#exarcises');
// apped - insert element

let h1Element = document.createElement('h1');
h1Element.textContent = "H1 header";
exarcisesElement.append(h1Element);

let h2Element = document.createElement('h2');
h2Element.textContent = "H2 header";
exarcisesElement.append(h2Element);

let h3Element = document.createElement('h3');
h3Element.textContent = "H3 header";
exarcisesElement.append(h3Element);

let h4Element = document.createElement('h4');
h4Element.textContent = "H4 header";
exarcisesElement.append(h4Element);

let h5Element = document.createElement('h5');
h5Element.textContent = "H5 header";
exarcisesElement.append(h5Element);

let h6Element = document.createElement('h6');
h6Element.textContent = "H6 header";
exarcisesElement.append(h6Element);

// Exarcises
let exarcises1 = document.querySelector('#exarcises1');
exarcises1.before('before');
exarcises1.prepend('prepend');
exarcises1.append('append');
exarcises1.after('after');
// exarcises1.replanceWith('replance');

// let button = document.createElement('button');
// exarcisesElement.prepend('button');
// button.textContent = "Launch Meeting";
// button.style
let buttonElement = document.createElement('button'); //Create
buttonElement.textContent = "Launch Meeting"; //Modify
exarcisesElement.prepend(buttonElement); //Attach
buttonElement.style.color = "white";
buttonElement.style.background = "blue";
buttonElement.style.padding = "15px 25px";
buttonElement.style.border = "none";
buttonElement.style.borderRadius = "8px";
buttonElement.style.fontFamily = "sans-serf";
buttonElement.style.fontSize = "18px";

let shoppingList = ['Apple', 'Banana', 'Pinapple'];
// Create UL
let listElement = document.createElement('ul');
exarcisesElement.prepend(listElement);
// Create LI
for (let i = 0; i < shoppingList.length; i++) {
    let listItemElement = document.createElement('li');
    listElement.append(listItemElement);
    listItemElement.textContent = shoppingList[i];
}
// create a list UL
// use for (....) to create LI
// use textContent to set LI text

// How to copy
let button2 = button.cloneNode();
button2.textContent = "Hello";
exarcisesElement.prepend(button2);

// 
let list2 = listElement.cloneNode(true);
exarcisesElement.prepend(list2);

let table = document.createElement('table');
exarcisesElement.prepend(table);

for (let i = 0; i < shoppingList.length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    let td = document.createElement('td');
    tr.append(td);
    td.style.border = "1px solid black";
    td.textContent = shoppingList[i];
}