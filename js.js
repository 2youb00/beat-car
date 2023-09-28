/*    font-family: 'Exo', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;*/








/////////////// show menu and hidde ///////////////
let toggle=document.querySelector('.nav-toggle');
let divnav=document.querySelector('.div-nav');
let navclose=document.querySelector('.nav-close');
let navlinks=document.querySelectorAll('.ul-nav li a');
toggle.addEventListener('click',()=>{
divnav.style.right='0';
})
navclose.addEventListener('click',()=>{
    divnav.style.right='-100%';
})
navlinks.forEach(navlink=>navlink.addEventListener('click',()=>{
    divnav.style.right='-100%';
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