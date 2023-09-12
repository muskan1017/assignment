
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



   
