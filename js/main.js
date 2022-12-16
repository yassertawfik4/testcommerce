let open=document.querySelector('.btn')
let close=document.querySelector('#close-card')
let card =document.querySelector('.card')
var cheack=document.querySelector('.cheack')
//open cared
open.addEventListener('click',()=>{
    card.classList.add('active')
})
//close card
close.addEventListener('click',()=>{
    card.classList.remove('active')
})
//make data of prodects


var prodectArray=[
    {
    imgProdect:'image/product1.jpg',
    ProdectTitle:'AEROREADY SHIRT',
    prodectPrice:'$25',
    id:Date.now()
    },
    {
        imgProdect:'image/product2.jpg',
        ProdectTitle:'WIRELESS EARBOUDS',
        prodectPrice:'$100',
        id:Date.now()
    },
    {
        imgProdect:'image/product3.jpg',
        ProdectTitle:'HOODED PARKA',
        prodectPrice:'$45',
        id:Date.now()
    },
    {
        imgProdect:'image/product4.jpg',
        ProdectTitle:'STRAW METAL BOTTLE',
        prodectPrice:'$24.05',
        id:Date.now()
    },
    {
        imgProdect:'image/product5.jpg',
        ProdectTitle:'METAL SUNGLASSES',
        prodectPrice:'$50',
        id:Date.now()
    }

]

// add prodects to page
var contentbox=document.getElementsByClassName('content-box')[0]
var container=``
for(var i=0; i <prodectArray.length;i++){
        if(localStorage.getItem('prodect')==null||(localStorage.getItem('prodect')=='[]')){
            container+=`
        <div class="prodect-box" data-id="${prodectArray[i].id}">
        <img class="prodect-img" src="${prodectArray[i].imgProdect}" alt="">
        <h2 class="prodect-title">${prodectArray[i].ProdectTitle}</h2>
        <span class="price">${prodectArray[i].prodectPrice}</span>
        <i class="fa-solid fa-check cheack"></i>
        <i class="bg fa-solid fa-bag-shopping add-card"></i>
        </div>` 
    }
    else{
        container+=`
    <div class="prodect-box">
    <img class="prodect-img" src="${prodectArray[i].imgProdect}" alt="">
    <h2 class="prodect-title">${prodectArray[i].ProdectTitle}</h2>
    <span class="price">${prodectArray[i].prodectPrice}</span>
    <i class="fa-solid fa-check cheack"></i>
    </div>` 
    }
    }
    contentbox.innerHTML=container;


//add to card
var addCard=document.getElementsByClassName('add-card')
for(var i=0; i < addCard.length;i++){
    var button=addCard[i]
    button.addEventListener('click',addCaredClicked)
    
}
var array;
if(localStorage.getItem('prodect')==null){
    array=[]
}
else{
    array=JSON.parse(localStorage.getItem('prodect'))
    dispalyProdect();
}
var boxContent=document.getElementsByClassName('content-box')[0]

boxContent.addEventListener('click',(e)=>{
    if(e.target.classList.contains('add-card')){
    e.target.classList.add('dispalsh')
    }
})

function addCaredClicked(e){
        var button=e.target
        var shopProdect=button.parentElement
        const prodect={
            title:shopProdect.getElementsByClassName('prodect-title')[0].innerText,
            price:shopProdect.getElementsByClassName('price')[0].innerText,
            prodectImg:shopProdect.getElementsByClassName('prodect-img')[0].src,
        };
        array.push(prodect)
        localStorage.setItem('prodect',JSON.stringify(array))
        alert('You Have Aleardy add this item to card') 
        dispalyProdect();
    }
    function dispalyProdect(){
    var cartoon=``
    for(var i =0 ;i < array.length;i++){
        cartoon+=`<div class="card-box">
        <img class="card-img" src="${array[i].prodectImg}" alt="">
        <div class="card-info">
            <div class="card-prodect-title">${array[i].title}</div>
            <div class="card-price">${array[i].price}</div>
        </div>
        <i onclick="removeCardItem(${i})" class="bx fa-solid fa-trash-can card-remove"></i>
        </div>`
    }
    var cardcontent=document.getElementsByClassName('card-content')[0]
    cardcontent.innerHTML=cartoon    
    
}
function removeCardItem(prodectInex){
    array.splice(prodectInex,1)
    localStorage.clear()

    localStorage.setItem('prodect',JSON.stringify(array))
    dispalyProdect()
}
var btnBuy=document.getElementsByClassName('btn-buy')
function test(){
    alert('all prodect buy')
    array.splice(0,5)
    localStorage.setItem('prodect',JSON.stringify(array))
    dispalyProdect()
}
