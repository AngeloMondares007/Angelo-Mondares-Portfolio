window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

ScrollReveal({ 
    //reset: true,
distance:'80px',
duration: 1700,
delay: 90 
});

ScrollReveal().reveal('.title, .home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .card, .grid-three-column, .nunkama, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .text-3, .about .about-content .left, .navbar .logo, .skills .skills-content .left, .contact .contact-content .left', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .navbar .menu, .text-1, .about .about-content .right, .skills .skills-content .right', { origin: 'right'});



$(document).ready(function(){
    $(window).scroll(function(){
       
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

        // $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
       
        $('html').css("scrollBehavior", "smooth");
    });

   
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing", {
        strings: ["System Developer", "App Developer", "UI/UX Designer", "Game Developer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["System Developer", "App Developer", "UI/UX Designer", "Game Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

 
   
});
