

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.data-scroll-container'),
//     smooth: true
// });
function page3(){
var page3=document.querySelector('.page3')
var fixed_div=document.querySelector('.fixed-image')
page3.addEventListener('mouseenter',function(){
    
    
    fixed_div.style.display="block"
    
    
})
page3.addEventListener('mouseleave',function(){
    
    
    fixed_div.style.display="none"
    
    
})


var elems = document.querySelectorAll(".hor-div");
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("mouseenter", function() {
        var image = this.getAttribute("data");
        fixed_div.style.backgroundImage = `url(${image})`;
    });
}

 }
 function page4(){
    var head1=document.querySelector('.heading1')
    var head2=document.querySelector('.heading2')
    var head3=document.querySelector('.heading3')
    var right_3=document.querySelector(".right-3");
    head1.addEventListener("click",function(){
        var img=head1.getAttribute('image');
        right_3.style.backgroundImage= `url(${img})`
        head3.style.borderColor='#504A45';
        head2.style.borderColor='#504A45';
        head2.style.color='#504A45';
        head3.style.color='#504A45';
        head1.style.color='white';

    })
    head2.addEventListener("click", function(){
        head1.style.color='#504A45';
        head2.style.color='white';
        
        head3.style.color='#504A45';
        head2.style.borderColor='red';
        head1.style.borderColor='#504A45';
        head3.style.borderColor='#504A45';
        
          right_3.style.backgroundImage="url('https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg')"
    })
    head3.addEventListener("click",function(){
        head1.style.color='#504A45';
        head2.style.color='504A45';
        head3.style.color='white';
        head3.style.borderColor='red';
        head1.style.borderColor='#504A45';
        head2.style.borderColor='#504A45';

        right_3.style.backgroundImage="url('https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg')"
    
    })
 }
 
 function loader(){
    var loader=document.querySelector('.loader');
  
        loader.style.top = 0
    
    }
var menu=document.querySelector('#h4-menu');
var nav=document.querySelector('.nav-bar img');
var black_div=document.querySelector('.black');


menu.addEventListener('click',function(){
  
    
    black_div.style.top=0;
    
    loader()
   
  
})
function close(){
    var black_div=document.querySelector('.black');
    var close=document.querySelector('#close')
var load=document.querySelector('.loader');
close.addEventListener('click',function(){
    black_div.style.top='-150%';
    load.style.top='-100%'
})
}
function swiper()
{
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 2, // Default number of slides to show
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 1, // Number of slides to show when screen width is <= 600px
            },
            // You can add more breakpoints here if needed
            1024: {
                slidesPerView: 3, // Number of slides to show when screen width is > 600px
            }
        }
    });
}
function loading(){

    var tl = gsap.timeline();

    // Make each h1 appear, wait for a moment, then disappear
    tl.to(".loading h1:nth-child(1)", {
     opacity:1,
     duration:0.7
    })
    tl.to(".loading h1:nth-child(1)",{
        opacity:0,
        duration:0.9
    })
    tl.to(".loading h1:nth-child(2)", {
        opacity:1,
        duration:0.7
       })
       tl.to(".loading h1:nth-child(2)",{
           opacity:0,
           duration:0.9
       })
       tl.to(".loading h1:nth-child(3)", {
        opacity:1,
        duration:0.7
       })
       tl.to(".loading h1:nth-child(3)",{
           opacity:0,
           duration:0.9
       })
    
    

    tl.to(".loading",{
        y:"-150%",
        duration:1
    })
//     var tl = gsap.timeline();

// // Make each h1 appear, wait for a moment, then disappear
// tl.to(".loading h1", {
//   opacity: 1,
//   duration: 1,
//   stagger: {
//     each: 3, // Wait for 3 seconds before starting the next animation
//     onComplete: function() {
//       gsap.to(this.targets(), {
//         opacity: 0,
//         duration: 1
//       });
//     }
//   }
// });

}
page3()
page4()
close()
swiper()
loading()


