let productjson=localStorage.getItem("products");

let productData=JSON.parse(productjson);
let addProduct=document.querySelector(".addProducts");
let container=document.querySelector(".container");
let showProduct=document.querySelector(".showProducts");
console.log(showProduct);
console.log(container);
console.log(productData);
addProduct.addEventListener("click",(ev)=>{
    window.open("addProduct.html","popupWindow","width=50px;height=400px")
})
showProduct.addEventListener("click",(ev)=>{
    showItem(productData);
});
function showItem(productData){
   
        // console.log(container);
        container.innerHTML="";
   

for(let i=0;i<productData.length;i++){
    let product=productData[i];
    console.log(product);
    let div=document.createElement("div");
    div.classList.add("product");
    div.innerHTML=`<div class="img-container">
    <img src="${product.image}" alt="${product.name}">
</div>
<div class="product-info">
    <p class="name">Name: ${product.name}</p>
   
    <p class="quantity">Quantity: ${product.quantity}</p>
   
    <p class="price">Price: ₹${product.price}</p>
   
</div>`

    container.append(div);


}
}