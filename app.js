let addToDobutton = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputfield');

addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDocontainer.removeChild(paragraph);
    })
})