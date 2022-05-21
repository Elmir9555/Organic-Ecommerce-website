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


//basket-start
// let products=[];

// if (localStorage.getItem!=null) {
//   let productss=localStorage.getItem("products")


// for (const product of productss) {
//   `<div class="products-cart">
//   <div class="image-name">
//       <div class="img">
//           <img src="./assets/img/banner.jpeg" style="width: 100%;height: 100%;"alt="">
//       </div>
//       <div class="names">
//           ${product.name}
//       </div>
//   </div>
//   <div class="value-price-count-total">
//       <div class="price-value">
//           $55.00
//       </div>
//       <div class="count-price">
//           <span class="minus">
//               -
//           </span>

//           <span  class="cnt">
//            0
//           </span>
//           <span class="plus">
//               +
//           </span>
//       </div>

//       <div class="total-value">
//           $110.00
//       </div>
//       <div class="x">
//           <i class="fas fa-times"></i>
//       </div>
//   </div>
  
// </div>`
// }
  
// }


//end-basket