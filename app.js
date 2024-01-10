let text = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click", function todo() {
    
    if (text.value === '') {
        alert("You must write something")
    }
    else{

        let newDiv = document.createElement("div");
        lists.appendChild(newDiv);

        let newList = document.createElement("input");
        newList.value = text.value
        newList.setAttribute("readonly","readonly");
        newList.classList.add("inputs");
        newDiv.appendChild(newList);
    

    text.value = '';


    //  Edit Button

    let editBtn = document.createElement("button");
    editBtn.innerHTML="Edit";
    editBtn.classList.add("edit");
    newDiv.appendChild(editBtn)

    editBtn.addEventListener("click", () =>{
        newList.removeAttribute("readonly","readonly");
    })


    // save button

    let saveBtn = document.createElement("button");
    saveBtn.innerHTML="Save";
    saveBtn.classList.add("save");
    newDiv.appendChild(saveBtn)

    saveBtn.addEventListener("click", () =>{
        newList.setAttribute("readonly","readonly");
    })


    //  delete Button
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML="Delete";
    deleteBtn.classList.add("delete")
    newDiv.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", () =>{
        newDiv.style.display = "none";
    })
    }
})