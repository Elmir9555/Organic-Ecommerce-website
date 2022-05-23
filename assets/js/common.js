export function getCount (list){
    return list.length;
}

export function getCountheart (heart){
    return heart.length;
}

export function basketCount(sum){
    sum.innerText=JSON.parse(localStorage.getItem("products")).length
}

export function favoriCount(sum){
    sum.innerText=JSON.parse(localStorage.getItem("FavoriProduct")).length
}