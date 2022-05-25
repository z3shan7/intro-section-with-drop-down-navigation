const featured = document.getElementById('drop-feature');
const company = document.getElementById('comp');
const dropDownLinks = document.querySelector('.featured');
const arrowImg = document.querySelector('.arrow-toggle');
const dropdown = document.querySelector('.company')
const arrow = document.querySelector('.arrow-toggle');
const arrow2 = document.getElementById('arrow-2')


featured.addEventListener('click' , function () {
    dropDownLinks.classList.toggle('toggler');
  arrow.classList.toggle('arrowRotate');
  
  
})

company.addEventListener('click', function (){
    dropdown.classList.toggle('comp-toggler')
    arrow2.classList.toggle('arrowRotate');

})

// toggle section sidenav

const menuOpen = document.querySelector('.open-icon');
const closeMenu = document.querySelector('.close-icon');
const sideNav = document.querySelector('.nav-list');


menuOpen.addEventListener('click' , function (){
    sideNav.classList.add('show')
    if(sideNav.classList.contains('show')){
        menuOpen.style.display = 'none'
        closeMenu.style.display = 'block'
    } 
    if(closeMenu.style.display = 'block'){
        closeMenu.addEventListener('click' , function (){
            sideNav.classList.remove('show')
            closeMenu.style.display = 'none'
            menuOpen.style.display = 'block'

        })
    }   
})
    

