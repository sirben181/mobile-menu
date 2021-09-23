const navToggle=document.querySelector(".navToggle");
const links=document.querySelector(".links");
 navToggle.addEventListener("click", function(){
    //  if(links.classList.contains('show-links')){
    //      links.classList.remove('show-links')
    //  }else{
    //      links.classList.add('show-links')
    //  }
    //  console.log(links.classList.contains('show-links'))
    links.classList.toggle('show-links')
 })
 const changecolor=document.querySelector('.btn-changecolor');
 changecolor.addEventListener("click", function(){
  document.body.classList.toggle("dark")
 })