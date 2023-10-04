/*    font-family: 'Exo', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;*/
let startbtn=document.querySelector('.home-button')
let startsound=document.getElementById('car-start-sound');
let opensound=document.getElementById('car-open-sound');
let startcartest=false




/////////////// show menu and hidde ///////////////
let toggle=document.querySelector('.nav-toggle');
let divnav=document.querySelector('.div-nav');
let navclose=document.querySelector('.nav-close');
let navlinks=document.querySelectorAll('.ul-nav li a');
toggle.addEventListener('click',()=>{
    if(window.screen.width <= 767){
divnav.style.right='0';}
})
navclose.addEventListener('click',()=>{
    if(window.screen.width <=767){
    divnav.style.right='-100%';}
})
navlinks.forEach(navlink=>navlink.addEventListener('click',()=>{
    if(window.screen.width <= 767){
    divnav.style.right='-100%';}
}))
///////////////////////// end show menu and hidde//////////////////


/*--------------------changing background header with js--------------------*/
let header=document.querySelector('.header');
window.addEventListener('scroll',()=>{
    if(this.scrollY>=50){
        header.classList.add('scroll-header');
    }
    else{
        header.classList.remove('scroll-header');
    }
})
////////////////////////////////popular//////////////////////////////////////////////
let popularcard=document.querySelector('.popular-card');
///popularcard.style.width='256px';

//boll.forEach(cell => {cell.classList.add ('sss');});

/*--------------------لي نقلتها تاع تحريك العنصر  Initialize Swiper--------------------*/
var swiper = new Swiper(".mySwiper", {
        loop:true,
        spaceBetween:24,
        slidesPerVew:'auto',
        grabCursor:true,
        slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
     });
////////////////////////////////popular end//////////////////////////////////////////////
////////////////////////////////featured//////////////////////////////////////////////
//////////////////// مكتبة
let mixerFeatured = mixitup('.featured-content', {
        selectors: {
            target: '.featured-card'
        },
        animation: {
            duration: 300
        }
    });
/////////////////////////
let activefeatured=document.querySelectorAll('.featured-item');
function activefeaturedf(){
activefeatured.forEach(active=>active.classList.remove('active-featured'))
this.classList.add('active-featured');
}
activefeatured.forEach(active=>active.addEventListener('click',activefeaturedf));
/*-------------------------------header scroll AND STARTBTN---------------------------------- */
function scrollhome(){
    window.scroll(0,0);
    
}
function scrollabout(){
    window.scroll(0,707.4000244140625);
    
}
function scrollpopular(){
    window.scroll(0,1296.900146484375);
    
}
function scrollfeatured(){
    window.scroll(0,2475.89990234375);
    
}

startbtn.addEventListener('click',()=>{
    setTimeout(scrollabout,1550);
    if(!startcartest){
        startbtn.style.background='hsl(156 ,89%, 30%)';
    startsound.play();
    startcartest=true;
    }
    
})
startbtn.addEventListener('contextmenu',()=>{
    if(!startcartest){opensound.play();}
    })
/*-------------------------------END   header scroll---------------------------------- */

