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



   
  $(".pagination-blog div").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");

   


    // $(this).css("color","white");
    // $(this).css("background-color","#7fad39");
    // $(this).css("border","none");
})


 
$(".count").click(function(){
    $(".active").removeClass("active");
   

   


    // $(this).css("color","white");
    // $(this).css("background-color","#7fad39");
    // $(this).css("border","none");
})