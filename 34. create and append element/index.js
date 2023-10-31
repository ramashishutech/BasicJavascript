// const head = document.getElementById("heading")

// const pTag = document.createElement("p")
// const create = document.createTextNode('This is dynamic content coming from js file')
// pTag.appendChild(create)
// head.appendChild(pTag)




// using property
const head = document.getElementById("heading")
const pTag = document.createElement('li')
pTag.textContent='coming form second way'
pTag.className="container"
pTag.id='content'
head.appendChild(pTag)


console.log(head.textContent);
