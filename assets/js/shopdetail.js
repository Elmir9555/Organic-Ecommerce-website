//header start ALL CATEGORIES dropdown
$(document).ready(function(){

    $(".dropbtns").click(function(){
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


$(document).ready(function(){
  $("span").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
  })

 

})


let btn=document.querySelectorAll(".center span")
let content=document.querySelectorAll(".tab-menu .description")


btn.forEach(btns=>{
  btns.addEventListener("click",function(){

    
    content.forEach(contnt=>{
      if(this.getAttribute("data-id")!=contnt.getAttribute("data-id")){
        contnt.classList.add("d-none");
      }
      else{
        contnt.classList.remove("d-none");
      }
    })
   
  })
})




