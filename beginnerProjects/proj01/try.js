let body = document.getElementsByTagName("body")[0]
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const random = document.querySelector(".random")
const fontColor = document.querySelector(".fontCol")


red.addEventListener("click",()=>{
    body.style.backgroundColor="red"
})
green.addEventListener("click",()=>{
    body.style.backgroundColor="green"
})
blue.addEventListener("click",()=>{
    body.style.backgroundColor="blue"
})

function getRandomColor(){
    const randomCol = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
    body.style.backgroundColor=randomCol;
    
}

random.addEventListener("click",()=>{
        getRandomColor();
})