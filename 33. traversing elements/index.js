// traversing

const elm = document.getElementById('intro')
console.log(elm);
const parent = elm.parentElement;
console.log(parent);
parent.innerHTML= "content changed"


const elm1 = document.getElementById("intro1")
const child = elm1.firstElementChild;
console.log('child', child)
const lastchild = elm1.lastElementChild;
console.log(lastchild);


const elm2 = document.getElementById("intro2")
const childs =elm2.nextElementSibling.nextElementSibling
console.log('childs ',childs)
const childS = elm2.previousElementSibling.previousElementSibling
console.log('previous ',childS)
childS.innerHTML = '<h1>take one</h1>'
// childS.innerText = '<h1>take one</h1>'