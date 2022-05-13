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
    dots:false,

    smartSpeed:1500,
    animateIn:'linear',
    animateOut:'linear',


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



 //tab-menu -start
  let catnames =document.querySelectorAll(".category-name div")
 let content = document.querySelectorAll(".picture")

 console.log(content);


  catnames.forEach(catname => {
    catname.addEventListener("click",function(){   
      let actived=document.querySelector(".active");
      actived.classList.remove("active");
      this.classList.add("active");

      content.forEach(contnt =>{
        if (this.getAttribute("data-id")!=contnt.getAttribute("data-id")) {
          contnt.classList.add("d-none")
        }

        else{
          contnt.classList.remove("d-none")
        }
      })
   
      


    })
    
  });
 //tab-menu end