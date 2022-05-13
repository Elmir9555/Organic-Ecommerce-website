//header start ALL CATEGORIES dropdown
  $(document).ready(function(){

    $(".dropbtns").click(function(){
      console.log("salam");
      $("#myDropdown").toggle(1000);
    });
  
  });
  


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtns')) {
      var dropdowns = document.getElementsByClassName("dropdown-contents");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //header end ALL CATEGORIES dropdown


  //start searchfilter

  $(document).ready(function(){

   $("#all-categ").click(function(){
     $(".dropdown-content-cate").toggle(800);
    
   })
  });


  //end searchfilter

  //owl-carousel start
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
 })
 //owl-carousel start