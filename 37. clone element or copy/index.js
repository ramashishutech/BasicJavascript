const ul = document.getElementById('heading')
const clone = ul.cloneNode(true)
console.log(clone);

document.body.appendChild(clone)
clone.id = 'test'
clone.className ='container'

const child=document.getElementById("child");
const clon1=child.cloneNode(true);
console.log(clon1);

document.body.appendChild(clon1);
clon1.id="text"
clon1.className="demo1"