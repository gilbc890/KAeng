const menu = document.querySelector('#nav_icon');
const nav = document.querySelector('.nav_list');

menu.addEventListener('click', () => {
  if(nav.style.display === "none"){
  nav.style.display = "block";
} else {
  nav.style.display = "none";
    }
})
function resize(){
if(window.innerWidth >= 576) {
    nav.style.display="block";
}  else{
    nav.style.display="none"
}  
}
