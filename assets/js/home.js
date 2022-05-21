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
 let content = document.querySelectorAll(".product-image .row")

 


  catnames.forEach(catname => {
    catname.addEventListener("click",function(){ 
        
      let actived=document.querySelector(".category-name .active");
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


 //start sliders col-6



 $('.owl-carousel').owlCarousel({

  nav:true,
  // Infinity:true,
  autoplay:true,
  autoplayTimeout:1000,
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
 
 //end sliders col-6





 //Basket starts

 let products=document.querySelectorAll("#addproduct")



 let productList=[];

 products.forEach(product => {
  
  product.addEventListener("click",function(e){
   
    console.log(this);

    let productimage=this.parentNode.parentNode.previousElementSibling.getAttribute("src")
    let productname=this.parentNode.parentNode.nextElementSibling.childNodes[1].innerText
    
   
    productList.push({
      image:productimage,
      name:productname

    });

   

  

    localStorage.setItem("products", JSON.stringify(productList))
    
  

    e.preventDefault();
  });
  
  


  


  // localStorage.setItem("products", JSON.stringify([]))
  // let products=localStorage.getItem("products")

  // if (localStorage.getItem("products")!=null) {
 
  //   products=JSON.parse(localStorage.getItem("products"))
 
  // }
  
  
 })

 //Basket-End



