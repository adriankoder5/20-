console.log('Hello :3');
const inpF = document.querySelector('#inpF');//inputfield
const addB = document.querySelector('#addB');//addbutton
const listP = document.querySelector('#listP');//listParent
//const  = document.querySelector('#')

addB.addEventListener('click', ()=> {
    let inputV = inpF.value;
    console.log(inputV);
    let listItem = document.createElement('li');
    listItem.textContent = inputV;
    listP.appendChild(listItem);
});