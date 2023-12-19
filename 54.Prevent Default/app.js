let link=document.getElementById("demo")
link.addEventListener('click',function(element){
    console.log("linked cliked.....");
    element.preventDefault();
})
let input=document.getElementById("myform")
input.addEventListener('click',function(element){
    console.log("clickd");
    element.preventDefault();
});
