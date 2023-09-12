let form=document.querySelector(".myform");
let Name=document.querySelector(".name");
let Quantity=document.querySelector(".quantity");
let Price=document.querySelector(".price");
let Productimg=document.querySelector(".image");

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let newProduct={image:Productimg.value,name:Name.value,quantity:Quantity.value,price:Price.value};
    //console.log(newProduct.length);
    let productData=localStorage.getItem("products");
    console.log(productData);
    if(productData==null){
        productData=[];
        
    }else{
        productData=JSON.parse(productData);
    }
    // console.log(productData);

    // if(productData.includes(newProduct)){
    //     newProduct.quantity+=newProduct.quantity;
    // }
    productData.push(newProduct);
    localStorage.setItem("products",JSON.stringify(productData));
    //showItem(productData);
    
})


// localStorage ko clear krne k liye
//  localStorage.clear();

// let productJson=localStorage.getItem("products");
// let productcon=JSON.parse(productJson);

// let container=document.querySelector(".container");

// showItem(productcon);
// function showItem(productData){
   
//         console.log(container);
//         container.innerHTML="";
   

// for(let i=0;i<productData.length;i++){
//     let product=productData[i];
//     let div=document.createElement("div");
//     div.classList.add("product");
//     div.innerHTML=`<div class="img-container">
//     <img src="${product.value}" alt="${product.value}">
// </div>
// <div class="product-info">
//     <p class="name">Name: ${product.value}</p>
   
//     <p class="quantity">Quantity: ${product.value}</p>
   
//     <p class="price">Price: ₹${product.value}</p>
   
// </div>`

//     container.append(div);


// }
// }