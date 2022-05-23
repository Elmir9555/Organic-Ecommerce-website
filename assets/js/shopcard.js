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



$(document).on("click",".plus",function(e){

    var count=Number(e.target.parentElement.children[1].innerText)
   count++;
   e.target.parentElement.children[1].innerText=count

})

$(document).on("click",".minus",function(e){
  var count=Number(e.target.parentElement.children[1].innerText)
  if(count==0){
    count=0;
  }
  else{
    count--;
    e.target.parentElement.children[1].innerText=count
  }


})

//increase count





//basket-start

let cart=document.querySelector(".cart .container")
let removeall=document.querySelector(".all-remove button")
removeall.addEventListener("click",function(e){
  localStorage.clear();
  window.location.reload();
})
// let productss=[];
if (localStorage.getItem!=null) {
   productss= JSON.parse(localStorage.getItem("products"))
   
}



ShowBasket();
function ShowBasket(){
  for (const prduct of productss) {
    cart.innerHTML+=` 
    <div class="products-cart">
    <div class="image-name">
    <div class="img">
        <img src="${prduct.image}" style="width: 100%;height: 100%;"alt="">
    </div>
    <div class="names">
        ${prduct.name}
    </div>
  </div>
  <div class="value-price-count-total">
    <div class="price-value">
       ${prduct.price}
    </div>
    <div class="count-price">
        <span class="minus">
            -
        </span>
  
        <span  class="cnt">
         1
        </span>
        <span class="plus">
            +
        </span>
    </div>
  
    <div class="total-value">
    ${prduct.price}
    </div>
    <div class="x">
        <i class="fas fa-times"></i>
    </div>
  </div>
  </div>
    `
    
  
  }
}
 




//end-basket