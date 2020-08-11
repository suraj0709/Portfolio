$(".navbar .navbar-brand").hover(
  function(){
    $(".navbar .navbar-brand span").animate({paddingLeft: "10px"});
  }, function(){
    $(".navbar .navbar-brand span").animate({paddingLeft: "-10px"});
  }
)

//// Scroll Animation ////


$('.home-text').waypoint(function() {
  $(".home-text h1").addClass("animate__animated animate__fadeInDown");
  $(".home-text p, .home-btn button").addClass("animate__animated animate__fadeInUp");
}, {
  offset: '60%'
});

$(".project").waypoint(function(){
  $(".project-set .part-1").addClass("animate__animated animate__fadeInLeft");
  $(".project-set .part-2").addClass("animate__animated animate__fadeInRight");
  $("#sidebar .logo-div").addClass("animate__animated animate__fadeInLeft");
  $("#sidebar .sidebar").addClass("animate__animated animate__fadeInLeft");
},{
  offset: "50%"
});

$("#about").waypoint(function(){
  $("#about .card1").addClass("animate__animated animate__fadeInUp")
},{
  offset: "50%"
});


///// Smooth Page Scroll /////

$(".scroll").click(function(e){
  e.preventDefault();
  $("body,html").animate({
    scrollTop: $(this.hash).offset().top
  },1000);
})
