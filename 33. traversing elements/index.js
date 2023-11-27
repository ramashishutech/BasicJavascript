// traversing

// const elm = document.getElementById('intro')
// console.log(elm);
// const parent = elm.parentElement;
// console.log(parent);
// parent.innerHTML= "content changed"


// const elm1 = document.getElementById("intro1")
// const child = elm1.firstElementChild;
// console.log('child', child)
// const lastchild = elm1.lastElementChild;
// console.log(lastchild);


// const elm2 = document.getElementById("intro2")
// const childs =elm2.nextElementSibling.nextElementSibling
// console.log('childs ',childs)
// const childS = elm2.previousElementSibling.previousElementSibling
// console.log('previous ',childS)
// childS.innerHTML = '<h1>take one</h1>'
// childS.innerText = '<h1>take one</h1>'
const itam=document.getElementById("li");
console.log(itam);
const p=itam.parentElement;
console.log(p);
p.innerHTML="garapes"
p. innerText='<h1>gauava</h1>'
const itam1=document.getElementById('item')
//this is check the the firstchild element
const child1=itam1.firstElementChild;
console.log(child1);
//this is check the lastshild element
const lastchild=itam1.lastElementChild;
console.log(lastchild);
// this is privesElementsibling
const itam2=document.getElementById('item')
const prives=itam2.lastElementChild.previousElementSibling
console.log(prives);
// this is nextElementSibling
const item3=document.getElementById('item')
const next=item3.firstElementChild.nextElementSibling
console.log(next);
