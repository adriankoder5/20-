console.log('Hello :3');
const inpF = document.querySelector('#inpF');//inputfield
const addB = document.querySelector('#addB');//addbutton
const listP = document.querySelector('#listP');//listParent
//const  = document.querySelector('#')

addB.addEventListener('click', ()=> {
    let inputV = inpF.value;
    console.log(inputV);
    let listItem = document.createElement('li');
    listItem.textContent = inputV + ' ';
    listP.appendChild(listItem);
    let crosB = document.createElement('BUTTON');//button for crossing over text
    crosB.textContent = '✓';
    listItem.appendChild(crosB);
    crosB.addEventListener('click', ()=> {
        console.log('det virker crosB');
        if (listItem.style.textDecoration == 'line-through'){
            listItem.style.textDecoration = 'inherit';
            crosB.textContent ='✓';
        }else {listItem.style.textDecoration = 'line-through';
               crosB.textContent='X';
        }});
    let killB = document.createElement('BUTTON');// Kill li
    killB.textContent = 'slett';
    listItem.appendChild(killB);
    killB.addEventListener('click', ()=> {
        console.log('delete inisiated');
        listItem.remove();
    });
});

