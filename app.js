
function create(element,father,clas,content = ""){
    let child = document.createElement(element)
    let container = document.querySelector(father)
    child.classList.add(clas)
    child.innerText = content;
    container.appendChild(child)
    
}


document.querySelector("button").addEventListener("click",()=>{
    let input =  document.querySelector("input")
    create("li","#list","item",input.value)
    input.value=""
})