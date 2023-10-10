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
let  numberview=1.5;
if(window.screen.width >= 767){
    console.log('ss');
    numberview=2.5;
}

/*--------------------لي نقلتها تاع تحريك العنصر  Initialize Swiper--------------------*/
var swiper = new Swiper(".mySwiper", {
        loop:true,
        spaceBetween:24,
        slidesPerVew:'auto',
        grabCursor:true,
        slidesPerView: numberview,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: numberview,
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
    if(screen.width>=767){
    window.scroll(0,1061.10009765625);}
    else{
        window.scroll(0,1372.500244140625);
    }
    
    
    
}
function scrollfeatured(){
    if(screen.width>=767){
    window.scroll(0,2193.10009765625);}
    else{
        window.scroll(0,2595.000732421875);
    }
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
    /*------------------------------------COLOR THE HEDEAR----------------------------/*/
    
    function headercolor() {
        let home = document.querySelector('li a[href="#home"]');
        if (scrollY < 707.4000244140625) {
            home.style.color = '#4178dc';
        } else {
            home.style.color = 'hsl(219, 8%, 95%)';
        }
    
        let about = document.querySelector('li a[href="#about"]');
        if (scrollY >= 700.4000244140625 && scrollY < 1061.10009765625) {
            about.style.color = '#4178dc';
        } else {
            about.style.color = 'hsl(219, 8%, 95%)';
        }
    
        let popular = document.querySelector('li a[href="#popular"]');
        if (scrollY >= 1061.10009765625 && scrollY < 2193.10009765625) {
            popular.style.color = '#4178dc';
        } else {
            popular.style.color = 'hsl(219, 8%, 95%)';
        }
    
        let featured = document.querySelector('li a[href="#featured"]');
        if (scrollY >= 2193.10009765625) {
            featured.style.color = '#4178dc';
        } else {
            featured.style.color = 'hsl(219, 8%, 95%)';
        }
    }
    
    headercolor(); 
    
    window.addEventListener('scroll', headercolor);  
    
/*-------------------------------END   header scroll---------------------------------- */

/*----------------------------------loading--------------------*/
let loading=document.querySelector('.preloader');
window.addEventListener('load',()=>{
    loading.style.display='none';
})







/*-------------------------------showinformation-------------------*-*/
let featuredcards = document.querySelectorAll('.featured-card');
let origencod;
let test = true;

function showinformation(button) {
    if (test) {
        test = false;
        let card = button.closest('.card');
        let price = card.querySelector('.price').innerText;
        origencod = card.innerHTML;
        card.innerHTML =
            `
        <div class="enter-information">
                <form class="information-card" >
                    
                <i class="ri-mail-close-line" onclick="closeinformation(this)"></i>
                    <h2 class="information-title">Buyer information </h2>
                     <div class="labelwitheinput">
                    <label class="information-label" for="firstName">First Name </label>
                    <input type="text" class="information-input" id="firstName" name="firstName" placeholder="First Name" required>
                </div>
        
                <div class="labelwitheinput">
                <label class="information-label" for="firstName">Phone Number </label>
                    <input type="tel" class="information-input" id="phoneNumber" name="phoneNumber"pattern="\\+[0-9]{1,4}[0-9]{1,14}" placeholder="+213669150661" >
                    </div>
                    <div class="information-price">
                    <button type="button" class="information-input information-submit" onclick="popoe()">Add</button>
                        <span class="information-price-value">${price}</span>
                    </div>
                </form>
                
                </div>
        `;
        if(screen.width>=767){
        card.style.padding = '0 1rem';}
        else{
            card.style.padding = '0.6rem 1rem';
        }
    }
}   

function closeinformation(button) {
    let card = button.closest('.card');
    card.innerHTML = origencod;
    card.style.padding = '2rem 1.5rem 1.5rem';
    test = true;
}
function fleps(button){
    let card = button.closest('.card');
    card.style.cssText='animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both';

}


      
/*-------------------------------end showinformation-------------------*-*/
/**---------------------------------know more buttn------------------ */
let aboutbtn=document.querySelector('.about-section .button');
let aboutdescription=document.querySelector('.about-data-description');
let testbtn=true;
aboutbtn.addEventListener('click',()=>{
    if(testbtn){
 aboutdescription.innerHTML=`
 See the future with high-performance 
 electric cars produced by renowned brands. They feature futuristic 
 builds and designs with new and innovative platforms that last a long time <br>

 <div class="about-data-description-part2">Step into the future with high-performance electric cars from renowned brands
 . These vehicles redefine excellence and offer a sustainable driving experience. With triple the innovation, style,
  and eco-friendliness, they're not just cars but a bridge to a greener tomorrow. Explore cutting-edge technology,
  sleek designs, and a silent drive that propels you effortlessly.
  Buckle up for a future where every journey is a step towards a more sustainable and electrifying world.</div><img src="img/design2.png" alt="electric car" class="know-more-img">
 `;
 aboutbtn.innerHTML="Know Less <i class='ri-arrow-up-line'></i>";testbtn=false;
 if(screen.width>767){
    aboutbtn.classList.add('button-know-less-position');
        document.querySelector('.about-card').style.visibility='hidden'; 
        document.querySelector('.know-more-description').classList.remove('displaynone');
  }

 
}
else{
    aboutdescription.innerHTML=`
See the future with high-performance 
electric cars produced by renowned brands. They feature futuristic 
builds and designs with new and innovative platforms that last a long time
    `;
    aboutbtn.innerHTML="Know More <i class='ri-arrow-down-line'></i> ";testbtn=true;
    document.querySelector('.about-card').style.visibility='visible';
    document.querySelector('.know-more-description').classList.add('displaynone');
    aboutbtn.classList.remove('button-know-less-position');
}
})

/*--------------------scroll revealanimatoin------------ */
const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay: 200,
    //reset:true
})
sr.reveal(`.home-title , .popular-container , .features-img , .featured-filters`)
sr.reveal(`.home-subtitle`,{delay: 300})
sr.reveal(`.home-elec`,{delay: 400})
sr.reveal(`.home-img`,{delay: 500})
sr.reveal(`.home-car-data`,{delay: 600 , interval:100, origin: 'bottom'})
sr.reveal(`.home-div-button`,{delay: 700 , origin: 'bottom'})
sr.reveal(`.about-group ,.offer-data`,{origin: 'left'})
sr.reveal(`.about-data ,.offer-img`,{origin: 'right'})
sr.reveal(`.features-map`,{delay:400, origin: 'buttom'})
sr.reveal(`.features-card`,{interval:300})
sr.reveal(`.featured-card , .logo-content , .footer-content ,.fotter-content`,{interval:100})

aboutbtn.addEventListener('click',()=>{
    sr.reveal(`.about-data-description-part2`,{ distance:'10px'})
    sr.reveal(`.know-more-description`,{delay: 300})
    sr.reveal(`.know-more-img`,{delay: 400 ,origin: 'right'})}
   
)

/*------------------popoe-------------/*/ 
let onetime=true;
let popoevar = document.querySelector('.popoe');
let popoevar2 = document.querySelector('.popoe2');
function popoe(){
let isphonenumbertrue=document.getElementById('phoneNumber');
const pattern = /\+[0-9]{0,4}[0-9]{10}/;
const userInput = isphonenumbertrue.value;
const isMatching = pattern.test(userInput);
if (isMatching) {
    popoevar.classList.remove('displaynone');
    setTimeout(closepopoe,3000,popoevar);
} else {
    popoevar2.classList.remove('displaynone');
    setTimeout(closepopoe,3000,popoevar2);
}

}
function closepopoe(popoevar) {
    let opacitytest = 1;
    function reduceOpacity() {
        opacitytest = opacitytest - 0.1; 
        popoevar.style.opacity = `${opacitytest.toFixed(1)}`; 
        if (opacitytest > 0 && onetime) {
            setTimeout(reduceOpacity, 50); } 
        else {
            popoevar.classList.add('displaynone');
            popoevar2.classList.add('displaynone');onetime=false;
        }
    }

    reduceOpacity(); 
}



/*------------------end popoe-------------/*/ 