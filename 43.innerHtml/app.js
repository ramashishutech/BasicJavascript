const elm=document.getElementById("intro");
// this data patch by html
let content=elm.innerHTML
console.log(content);
//this is sore data on html

elm.innerHTML="<h1>This is first heading</h1>"

let get=document.getElementById("hello");
let geteliment=get.innerHTML
console.log(geteliment);
//this way i aca changse on html
get.innerHTML="<h2>I'm second heading</h2>"
