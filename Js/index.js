// ads display
function swiperOne(){


const swiper = new Swiper(".swiper-container", {
    loop: true, // Add this option to enable continuous sliding
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
  });

}

swiperOne()


  // services section

  function swiperTwo() {
    
 

  let swiperServices = new Swiper(".services_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   }
 });

}


swiperTwo();

// expert section

function swiperThree() {
    
 

  let swiperServices = new Swiper(".expert_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   }
 });

}


swiperThree();


// trending services

function swiperFour() {
    
 

  let swiperServices = new Swiper(".trending_services", {
    loop: true,
    spaceBetween: 48,


  //  pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true, 
  //    dynamicBullets: true,
  //  }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   },
 
 });

}


swiperFour();


let swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,


//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true, 
//    dynamicBullets: true,
//  }, 
 breakpoints: {
     568: {
         slidesPerview: 2,
     }
 }
});
