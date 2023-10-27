const ul = document.getElementById('heading')
const clone = ul.cloneNode(true)
console.log(clone);

document.body.appendChild(clone)
clone.id = 'test'
clone.className ='container'