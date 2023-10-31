const parent = document.getElementById('heading')
const create = document.createElement('li')
create.textContent= 'new data'
let replace = parent.firstElementChild.nextElementSibling;
parent.replaceChild(create,replace);