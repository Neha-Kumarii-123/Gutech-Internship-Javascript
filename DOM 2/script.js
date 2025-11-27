
const box1=document.getElementById('box-1');
// box1.innerHTML ="<h1>Hello</h1> <p>Hello World</p>";

box1.style.backgroundColor="purple";
box1.style.color="white";



const box=document.getElementsByClassName('box');

for (let i=0; i<box.length; i++ ){
box[i].classList.add('round-border');
}

box1.classList.remove('round-border');

//Creating New element

const newParagraph=document.createElement('p');

newParagraph.innerText ="This is brand new Car Of Model 2025";

newParagraph.classList.add('box');

const container=document.getElementById('container');

container.appendChild(newParagraph);















// //Part 1 
// const myBody=document.body;
// // myBody.style.backgroundColor="Orange";
// console.log(myBody);

// const box2=document.getElementById('box-2');

// console.log(box2);
// const divs=document.getElementsByTagName('p');
// console.log(divs);

// const boxes=document.getElementsByClassName('random');
// console.log(boxes);

// const random=document.querySelectorAll('.container .random');
// console.log(random);





