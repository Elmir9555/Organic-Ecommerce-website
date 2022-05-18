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


  //increase count

let minus=document.querySelector(".minus");
let plus=document.querySelector(".plus");
let i=document.querySelector(".cnt");
console.log(i);
let count = 0;
i.innerText=count;

console.log(i);


minus.addEventListener("click",function(){
  if(count==0){
    i.innerText=0;
  }
  else{
    count--;
    i.innerText=count;
  }
})


plus.addEventListener("click",function(){
  count++;
  i.innerText=count;

})



//increase count