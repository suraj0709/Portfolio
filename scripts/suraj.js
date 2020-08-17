// GSAP

gsap.from("#intro img", {duration: 5, opacity: 0});

const timeline = gsap.timeline();

timeline
.from("#intro h1", {duration: 1, y: "-150%", opacity:0})
.from("#intro h6", {duration: 1, y: "-150%", opacity:0})
.from("#intro p", {duration: 0.5, y: "-150%", opacity:0},)
.from("#intro .social-media a", {duration: 1, opacity:0, stagger: 0.4})

const tl_about = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top center"
  }
});

tl_about
.from("#about h2", {duration: 1, y: "-100%", opacity:0})
.from("#about p", {duration: 1, y: "-100%", opacity:0}, "-=0.5")

const tl_contact = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "bottom bottom"
  }
});

tl_contact
.from("#contact h4", {duration: 1, opacity:0})
.from("#contact button", {duration: 0.5, opacity:0}, "-=0.5")

const tl_work = gsap.timeline({
  scrollTrigger: {
    trigger: ".work",
    start: "conter bottom"
  }
});

tl_work
.from("#work img", {duration: 1, y: "50%", opacity:0})

// Navbar onclick
$(".scroll").click(function(e){
  e.preventDefault();
  gsap.to(window, {duration: 2, scrollTo: {y: $(this.hash), offsetY: 50}, ease: "power3.inOut"});
})

$("#footer i").click(function(){
  gsap.to(window, {duration: 2, scrollTo: {y: "#intro", offsetY: 50}, ease: "power3.inOut"});
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggler:visible').click();
});

//Active links
$(window).scroll(function(){
  let scrollBarLocation = $(this).scrollTop();

  $(".scroll").each(function(){
    let sectionOffset = $(this.hash).offset().top - 60;
      if (sectionOffset <= scrollBarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
      if (scrollBarLocation < 300) {
        $(".navbar ul li").removeClass("active");
      }

  })
})
