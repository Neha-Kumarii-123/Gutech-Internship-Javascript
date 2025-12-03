const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

// grandparent.addEventListener('click', e =>{
//     console.log (e.target)
// })

// grandparent.addEventListener("click", 
//     e =>{
       
//     console.log ("Grandparent Capture")
// }, {
//     capture: true
// })

// grandparent.addEventListener("click", e =>{
//     console.log ("Grandparent Bubble")
// })

// parent.addEventListener("click", e =>{
     
//     console.log ("parent Capture")
// }, {
//     capture: true
// })

// parent.addEventListener("click", e =>{
//     console.log ("Parent Bubble")
// })

// child.addEventListener("click", e =>{
//     console.log ("Child Capture")
// }, {
//     capture: true
// })

// child.addEventListener("click", e =>  {
//      e.stopPropagation()
   
//     console.log ("Child Bubble")
// })

// document.addEventListener("click", e =>{
//     console.log ("Document Capture")
// }, {
//     capture: true
// })





//  Part 2

grandparent.addEventListener("click", e =>{
    console.log ("Grandparent Bubble")
})

parent.addEventListener("click", () =>{
    console.log("hi")

})   
     setTimeout(()=>{
        parent.removeEventListener("click", () =>{
            console.log("hi")
        })

     }, 30000)

child.addEventListener("click", e =>  {
   
   
    console.log ("Child Bubble")
})

function printHi(){
    console.log("Hi")

}


// //Part 3

// const divs=document.querySelectorAll('div')

// // divs.forEach(div =>{
// //     div.addEventListener('click',() =>{

// //         console.log("hi")
// //     })
// // })

// addGlobalEventListener("click", 'div', e =>{
//    if(e.target.matches("div")){
//     console.log("hi")
// }
// })

// function addGlobalEventListener(type, selector, callback){

//     document.addEventListener(type, e =>{
//         if (e.target.matches(selector))callback(e)
//     })

// }

// const newDiv =document.createElement('div')
// newDiv.style.width='200px'

// newDiv.style.height='200px'
// newDiv.style.backgroundColor="purple"
// // newDiv.addEventListener ('click', () =>{
// //     console.log("hi")
// // })
// document.body.append(newDiv)