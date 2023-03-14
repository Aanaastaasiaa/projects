document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header").classList.toggle("open")
  })
})

jQuery(document).ready(function(){ 
    
    $("[data-trigger='dropdown']").on("mouseenter",function(){
    var hiddenmenu = $(this).parent().find(".hiddenmenu");
    hiddenmenu.addClass("active");
    hiddenmenu.fadeIn(300);

    $(".hiddenmenu").on("mouseleave",function(){
      hiddenmenu.removeClass("active");
      hiddenmenu.fadeOut(1);
    })
    });
})

