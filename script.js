let nodes = []
let edges = []

const interactiveBoard = document.getElementById("interactiveBoard")
// const node = document.querySelectorAll(".nodes")
interactiveBoard.addEventListener("click", (e) =>{
    const container = document.createElement("div");
    container.className = "nodes"
    container.clas
    container.style.position = "absolute"
    container.style.top = e.clientY + "px"
    container.style.left = e.clientX + "px"
    container.style.display = "block"
    container.style.cursor = "move"
    
    const input = document.createElement("input")
    container.appendChild(input)

    // input.addEventListener("dblclick", (e) => {
    //     e.stopPropagation()
    // })
    
    options.appendChild(container)

    setTimeout(() => {
        container.style.opacity = 1
    }, 10)

    
    // drag node
    let offsetX = 0;
    let offsetY = 0;

    container.addEventListener("mousedown", (e) => {
        input.blur()
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    });
    
    function mouseMove(e) {
        container.style.left = (e.clientX - offsetX) + "px";
        container.style.top = (e.clientY - offsetY) + "px";
    }

    function mouseUp() {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
        
    }

        

})



// when mousedown
// track mouse movement
// when mouse relaesd (mourseup) stop it






// checks if node already exist at x and y
// returns boolean 
// function nodeExist()

