const ul = document.getElementById("heading")
const create = document.createElement('li')
create.textContent="new list"
const add = ul.firstElementChild.nextElementSibling.nextElementSibling

ul.insertBefore(create,add)

const ele=document.getElementById("demo")
const cr=document.createElement("li")
cr.textContent="date"
const ad=ele.lastElementChild.previousElementSibling
ele.insertBefore(cr,ad);
const h1=document.getElementById("hello")
const write=document.createElement("h1")
write.textContent="Hello Ashish"
console.log(write);