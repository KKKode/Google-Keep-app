const addButton = document.querySelector("#add");


const localStorageData = ()=>{

const textareaData = document.querySelectorAll('textarea');
const notes=[];
// console.log(typeof(textareaData));
textareaData.forEach((curElem)=>{
        return notes.push(curElem.value);
})
// console.log(notes);
localStorage.setItem("keyData",JSON.stringify(notes));

}


const addNewNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add("note");

    const htmlData = `
     <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>`
    note.insertAdjacentHTML('afterbegin',htmlData)

    const editBtn = note.querySelector(".edit");
    const delBtn = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const Textarea = note.querySelector("Textarea");

    delBtn.addEventListener('click',()=>{
        note.remove();
        localStorageData();
    });

    Textarea.value=text;
    mainDiv.innerHTML=text;

    editBtn.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden')
        Textarea.classList.toggle('hidden')
    })
    Textarea.addEventListener('change',(e)=>{
        mainDiv.innerHTML=e.target.value;
        // we can write this also
        // const display = e.target.value;
        // mainDiv.innerHTML=display;
        localStorageData();
    })


    document.body.appendChild(note);

}
const gettingItems = JSON.parse(localStorage.getItem('keyData'));
if(gettingItems){gettingItems.forEach((curElm)=>addNewNote(curElm))}

addButton.addEventListener("click",() => addNewNote());
