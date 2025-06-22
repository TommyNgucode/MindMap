let nodes = []
let edges = []

const interactiveBoard = document.getElementById("interactiveBoard")
const options = document.getElementById('options')

interactiveBoard.addEventListener("click", (e) =>{
    console.log(e.clientX, e.clientY)
    let el = "<div>"
    
    el += "<input type='text'  placeholder='Enter' >"
    options.style.position = "absolute"
    options.style.top = e.clientY + "px"
    options.style.left = e.clientX + "px"
    options.style.display = "block"
    options.style.opacity = "1"

    el += "</div>"
    options.innerHTML = el
})


// checks if node already exist at x and y
// returns boolean 
// function nodeExist()

