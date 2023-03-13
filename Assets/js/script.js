/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(a => a.classList.remove('active'));
  this.classList.add('active');
  /*Remove menu mobile*/
  /*const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')*/
}
navLink.forEach(n => n.addEventListener('click', linkAction));