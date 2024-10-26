// /*array of object*/
const Electronicproduct = [ 
    {
    imgurl :"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/h/s/a/-original-imagys3daxenenr6.jpeg?q=70",
    Name : "Monitor",
    price : 4799,
    brand :"HP",
    
    },
    {
        imgurl :"https://rukminim2.flixcart.com/image/416/416/xif0q/printer/x/l/e/-original-imagnuwegzdxxdmq.jpeg?q=70&crop=false",
        name : "Printers",
        
        
        price : 47999,
        brand : " HP ,Asus, Dell & More"
    
        },
        {
            imgurl :"https://rukminim2.flixcart.com/image/200/200/xif0q/projector/m/m/m/-original-imagu892v92agucu.jpeg?q=70",
            name : "Projectoe",
            
            price : 6990,
            brand : " Egate"
        
            },
            {
                imgurl :"https://rukminim2.flixcart.com/image/200/200/kvr01ow0/security-software/l/d/e/quick-heal-original-imag8kpmjygxhzgh.jpeg?q=70",
                name : "Book",
                
                price : 90,
                brand : " Kasperky, Quiekheal"
            
                },
                {
                    imgurl :"https://rukminim2.flixcart.com/image/200/200/kynb6vk0/router/8/d/8/r-04-d-link-original-imagau9zkdhqprga.jpeg?q=70",
                    name : "Wireless Router",
                    
                    price : 899,
                    brand : " R04"
                
                    },
                    {
                        imgurl :"https://rukminim2.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
                        name : "Best of Shavers",
                        
                        
                        price : 1649,
                        brand : " Philips & Havells"
                    
                        },
                        {
                            imgurl :"https://rukminim2.flixcart.com/image/200/200/jwzabgw0/trimmer/y/4/r/sensitive-touch-expert-veet-original-imafhjh5ah7vf9zc.jpeg?q=70",
                            name : "Best of Trimers",
                        
                            
                            price : 599,
                            brand : " Veet, Broun, Philps & More"
                        
                            }
                            
                        

                    
                
            
]

let renderproduct = "";
let cardproductcontainer = document.getElementById("card-product-container")


for(let i =0; i<Electronicproduct .length; i++){
   
    renderproduct +=`
      <div class="card-product">
// //       <div class = "productImageContainer">
// //       <img src = "${Electronicproduct[i].imgurl}">
// //       </div>
// //       <img src = "${Electronicproduct[i].imgurl}">
// //       <h3 class="card-productName">${Electronicproduct[i].name}</h3>
// //       <p class="productsPrice">From ₹${Electronicproduct[i].price}</p>
// //      <p class="card-productDes">${Electronicproduct[i].brand}</p>
// //       </div>
// //     `
}

cardproductcontainer.innerHTML = renderproduct;