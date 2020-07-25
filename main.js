const toggleButton = document.querySelector('.toggleButton');
const input = document.querySelector('.input');
const inputContainer = document.querySelector(".input_div");
const ul = document.querySelector("ul");
const arr = [];
const item = document.getElementsByTagName("li");
const enterButton = document.querySelector(".addButton");
toggleButton.addEventListener('click', function() {
    if (inputContainer.style.display == "none") {
        inputContainer.style.display = "block";
    } else {
        inputContainer.style.display = "none";
    }
});
function inputLength() {
    return input.value.length;
}
function listLength() {
    return item.length;
}
function createList() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    
    arr.push(input.value)
    input.value = ""
    console.log(arr);

    
    let checkMark = document.createElement("button");
    checkMark.appendChild(document.createTextNode("✓"))
    checkMark.style.cssFloat = "right";
    checkMark.style.padding = "2px"
    checkMark.style.backgroundColor = "green"
    checkMark.style.marginLeft = "1px";
    checkMark.style.cursor ="pointer";
    checkMark.style.color = "#fff";
    li.appendChild(checkMark);
    checkMark.addEventListener("click", done);
    
    function done() {
        li.classList.add("done")
        alert("Successful");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("✖"));
    deleteBtn.style.cssFloat = "right";
    deleteBtn.style.padding = "2px";
    deleteBtn.style.backgroundColor = "red"
    deleteBtn.style.marginRight = "1px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.color = "#fff";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteList);
    deleteBtn.addEventListener("click", message)

    function deleteList(){
        
        let sure = confirm("Are you sure you want to delete?");
if (sure) {
//continue with delete code
li.classList.add("delete");
}  
    } 
    function message() {
        console.log
    } 
    
}

function addlistAfterClick() {
    if (inputLength() > 0) {
        createList();
    }
}

function addListAfterEnterKey(event) {
    if(inputLength() > 0 && event.which === 13) {
        createList();
    }
}
enterButton.addEventListener("click", addlistAfterClick);
input.addEventListener("keypress", addListAfterEnterKey);
