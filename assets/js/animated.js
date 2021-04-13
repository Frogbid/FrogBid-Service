//our all services animated js start

$(document).ready(function(){
  $("#domain").mouseover(function(){
    $(this).addClass('animate__animated animate__bounce');
  });
  $("#domain").mouseout(function(){
     $(this).removeClass('animate__animated animate__bounce');
  });
});

$(document).ready(function(){
  $("#web_design").mouseover(function(){
    $(this).addClass('animate__animated animate__bounce');
  });
  $("#web_design").mouseout(function(){
     $(this).removeClass('animate__animated animate__bounce');
  });
});

$(document).ready(function(){
  $("#software_development").mouseover(function(){
    $(this).addClass('animate__animated animate__bounce');
  });
  $("#software_development").mouseout(function(){
     $(this).removeClass('animate__animated animate__bounce');
  });
});

$(document).ready(function(){
  $("#mobile_app").mouseover(function(){
    $(this).addClass('animate__animated animate__bounce');
  });
  $("#mobile_app").mouseout(function(){
     $(this).removeClass('animate__animated animate__bounce');
  });
});

$(document).ready(function(){
  $("#graphics_design").mouseover(function(){
    $(this).addClass('animate__animated animate__bounce');
  });
  $("#graphics_design").mouseout(function(){
     $(this).removeClass('animate__animated animate__bounce');
  });
});

$(document).ready(function(){
  $("#digital_marketing").mouseover(function(){
    $(this).addClass('animate__animated animate__bounce');
  });
  $("#digital_marketing").mouseout(function(){
     $(this).removeClass('animate__animated animate__bounce');
  });
});

// our service javascript code end



//who we are js code------------------
$(document).ready(function(){
  $(".img").mouseover(function(){
    $(this).addClass('animate__animated animate__swing');
  });
  $(".img").mouseout(function(){
     $(this).removeClass('animate__animated animate__swing');
  });
});


//who we are text---
$(document).ready(function(){
  $("#who_we_are_txt").mouseover(function(){
    $(this).addClass('animate__animated animate__slideInUp');
  });
});
//helpful_for_business
$(document).ready(function(){
  $("#helpful_for_business").mouseover(function(){
    $(this).addClass('animate__animated animate__slideInUp');
  });
});

//title shakIn effect

setInterval(() => {
   $(".shakeIn").addClass('animate__animated animate__bounceIn');
}, 3000);
setInterval(() => {
   $(".shakeIn").removeClass('animate__animated animate__bounceIn');
}, 6000);

//at a glance animation
setInterval(() => {
   $(".glance_image").addClass('animate__animated animate__zoomIn');
}, 3000);
setInterval(() => {
   $(".glance_image").removeClass('animate__animated animate__zoomIn');
}, 7000);





