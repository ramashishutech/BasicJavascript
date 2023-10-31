const ul = document.getElementById('heading')
const elm = ul.lastElementChild ;
ul.removeChild(elm);

const child=document.getElementById("child")
const delet=child.firstChild
child.removeChild(delet);//here is delete first child in parents

const del=child.lastChild
child.removeChild(del);//here is delete last child in parents