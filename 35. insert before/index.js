const ul = document.getElementById("heading")
const create = document.createElement('li')
create.textContent="new list"
const add = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling

ul.insertBefore(create,add)
