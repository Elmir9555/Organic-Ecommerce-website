import {favoriCount,basketCount,getCountheart} from "./common.js"
let fav=document.querySelector(".products .row")

let favories=[];
if (localStorage.getItem!=null) {
   favories= JSON.parse(localStorage.getItem("FavoriProduct"))
   
}

ShowFavoruites();

function ShowFavoruites() {
    for (const favs of favories) {
        fav.innerHTML+=`  <div class="col-lg-3 col-sm-12">
        <div class="picture">
            <img src="${favs.image}" alt="banana">
            <div class="icons">
               
                <div class="basket-icon">
                    <a href=""> <i class="fas fa-shopping-cart"></i></a>
                </div>
                <div class="detail-icon">
                    <a href=""> <i class="fas fa-info"></i></a>
                </div>
            </div>
            <div class="name">
                <a href="#">${favs.name}</a>
            </div>
            <div class="price">
                ${favs.price}
            </div>
        </div>
    </div>`
    }
   
}


let heartcount=document.querySelector(".heart-count")
favoriCount(heartcount)


let basketcount=document.querySelector(".basket-count")
basketCount(basketcount)

let countfavo=document.querySelector(".product-count strong")
countfavo.innerText=localStorage.getItem("FavoriProduct").length


