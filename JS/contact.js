$(document).ready(function() {
    $(".list-container").hide().fadeIn(1000);
    $(".radio-container").hide().slideDown(1000);
    $("#contact-details-title").animate({ "font-size": "40px" }, 2000);
  
    // Swaying effect for images
    let images = $(".picture-container img");
  
    function swayImages() {
      images.animate({ marginLeft: "20px" }, 1000, function() {
        images.animate({ marginLeft: "-20px" }, 1000, swayImages);
      });
    }
  
    swayImages();
  });
  