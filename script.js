const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
let dragElement = null;

console.log(todo, progress, done);

const task= document.querySelectorAll('.task');

task.forEach(task => {
    task.addEventListener("dragstart", (e) => {
        console.log("dragging",e);
        dragElement = task
    })
}) 

function addDragEventOnColumn(column) {
    column.addEventListener("dragenter",(e) => {
        e.preventDefault();
        column.classList.add("hover-over")
    })
    column.addEventListener("dragleave",(e) => {
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    
    column.addEventListener("drop", (e) => {
        e.preventDefault();


        console.log("dropped", dragElement, column);

        column.appendChild(dragElement);
        column.classList.remove("hover-over");

    })

}

addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);

/*Modal related logic*/
const toggleModalButton = document.querySelector('#toggle-modal');
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector('.modal');

toggleModalButton.addEventListener("click",() => {
    modal.classList.toggle("active");
})

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
})
/*Modal related logic*/