const womanImage = document.getElementById('woman');
const Slidetxt = document.getElementById('Slidetxt');
window.addEventListener('scroll',()=>{
       let scroll = window.scrollY;
       womanImage.style.top = scroll * 0.5 + 'px';
       Slidetxt.style.marginLeft = scroll * -2.5 + 'px';
});