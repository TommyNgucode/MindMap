let nodes = []
let edges = []

const interactiveBoard = document.getElementById("interactiveBoard")
const options = document.getElementById("options")

interactiveBoard.addEventListener("click", (e) =>{
    const container = document.createElement("div");
    container.className = "nodes"
    container.style.position = "absolute"
    container.style.top = e.clientY + "px"
    container.style.left = e.clientX + "px"
    container.style.display = "block"
    container.style.cursor = "move"
    container.style.transitionDuration = 0
    
    
    const input = document.createElement("input")
    container.appendChild(input)
    
    input.readOnly = true
    
    // To type double click node
    input.addEventListener("dblclick", ()=>{
        input.readOnly = false
    })

    // Press enter to lock text into node
    input.addEventListener("keydown", (e)=> {

        const keyPressed = e.key

        if (keyPressed == "Enter") {
            input.readOnly = true
        }
         
    })
    options.appendChild(container)

    // Delays opacity of node for transition to occur
    setTimeout(() => {
        container.style.opacity = 1
    }, 10)

    // Add node to nodes list
    nodes.push({
        el: container,
        x: e.clientX,
        y: e.clientY 
    })

    // Drag/ Move node
    let offsetX = 0;
    let offsetY = 0;

    container.addEventListener("mousedown", (e) => {
        
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    });
    
    // get all rendering content of canvas
    // const ctx = interactiveBoard.getContext("2d")
    // const rect = interactiveBoard.getBoundingClientRect()
    
    function mouseMove(e) {
        container.style.left = (e.clientX - offsetX) + "px";
        container.style.top = (e.clientY - offsetY) + "px";

        // Detect nearby nodes

        // const currX = parseFloat(container.style.left = (e.clientX - offsetX) + "px")
        // const currY = parseFloat(container.style.top = (e.clientY - offsetY) + "px")


        // ctx.clearRect(0, 0, interactiveBoard.width, interactiveBoard.height); // clear canvas to avoid overdraw

        // nodes.forEach((node) =>{
        //     const nodeX = node.x - rect.left
        //     const nodeY = node.y - rect.top

            
        //     // calculate distance formula
        //     const distance = Math.sqrt(((nodeX - currX) ** 2) + ((nodeY - currY) ** 2))

        //     // Connect nodes
        //     if (distance <= 70) {

        //         const edge = `${currX},${currY}-${nodeX},${nodeY}`
        //         const reverseEdge = `${nodeX},${nodeY}-${currX},${currY}`

        //         // if edge doesnt exist add
        //         if (!edges.includes(edge) && !edges.includes(reverseEdge)) {
        //             edges.push(edge)
        //             edges.push(reverseEdge)

        //             // draw line between
        //             ctx.lineWidth = 2
        //             ctx.beginPath()
        //             ctx.moveTo(currX, currY)
        //             ctx.lineTo(nodeX, nodeY)
        //             ctx.stroke()

        //         }

        //     }

        // })
    }

    function mouseUp() {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
        
    }


    function connectNode() {

    }

})


