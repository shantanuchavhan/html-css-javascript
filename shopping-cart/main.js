


/*
  (function(){
    for (let i=0; i<shopItemsData.length; i++ ){
        console.log("a")
        additem(shopItemsData[i])
    }
    
  })()
  function additem(i){
    const shop=document.querySelector("#shop")
    const item=document.createElement("div")
  
    item.classList.add('item')
    item.innerHTML=`
    <img width="200px" src="./${i.img}" alt="">
              <div class="details">
                  <h3>${i.name}</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <div class="price-quantity">
                      <h3>${i.price}</h3>
                      <div class="buttons">
                          <i class="fa-solid fa-plus"></i>
                          <div class="quantity">0</div>
                          <i class="fa-solid fa-minus"></i>
                      </div>
                  </div>
              </div>
    `
    shop.appendChild(item)
  }
  */



  
  



let genrateshop=() =>{
    return (shop.innerHTML=shopItemsData.map((x)=>{
        return `
        <div class="item">
            
        
        <img width="200px" src="./${x.img}" alt="">
              <div class="details">
                  <h3>${x.name}</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <div class="price-quantity">
                      <h3>${x.price}</h3>
                      <div class="buttons">
                          <i onclick='increment(${x.id})' class="fa-solid fa-plus"></i>
                          <div id='${x.id}' class="quantity">0</div>
                          <i onclick=" decrement(${x.id})"  class="fa-solid fa-minus"></i>
                      </div>
                  </div>
              </div>
        </div>
        `
    }))
}
genrateshop()

var itemlist=JSON.parse(localStorage.getItem('itemlist')) || [] 
function get_quantity(){
  for(i of itemlist){
    update(i.id)
  }
}

get_quantity()

let cart_active=0


var itemlist=JSON.parse(localStorage.getItem('itemlist')) || [] 
function increment(itemid){
  cart_active=1
  CartDetails()
  let counter=0
  let num=0 
  itemid=itemid.id
  for(let i of itemlist){
    if (itemid == i.id){
      counter+=1
      itemlist[num].item+=1
    }
    num+=1
  }
  if (counter==0){
    itemlist.push({
      id:itemid,
      item:1
    })
  }
  update(itemid)
  
}

function decrement(itemid){
  cart_active=1
  CartDetails() 
  let counter=0
  let num=0
  itemid=itemid.id
  for(let i of itemlist){
    if (itemid == i.id){
      counter+=1
      if(itemlist[num].item<1){
        itemlist[num].item=0
        update_itemlist()
      }
      else{
        itemlist[num].item-=1
      }
    }
    num+=1
  }
  if (counter==0){
    return update_itemlist()
  }
  update(itemid)
}
function update_itemlist(){
  updated_list=[]
  for(i of itemlist){
    if(i.item!=0){
        updated_list.push(i)
    }
  }
  itemlist=updated_list
  localStorage.setItem('itemlist',JSON.stringify(itemlist))
}
function update(id){
  let count=0
  let totalQuantity=0
  for(let i of itemlist){
    
    if (id==i.id){
      console.log(i.item)
      document.getElementById(id).innerHTML=i.item
    }
    totalQuantity+=i.item
  }
  const amount=document.getElementById('cartAmount').innerHTML=totalQuantity
  
  
  localStorage.setItem('itemlist',JSON.stringify(itemlist))
  


}

function removeBtn(){
  document.getElementById('btnHolder').innerHTML = '';
}



function CartDetails(){
  
  
  let itemlist=JSON.parse(localStorage.getItem('itemlist')) || [] 
  let filtered_list=shopItemsData.filter((x)=>{
    for(const i of itemlist){
      if(i.id==x.id){
        return x
      }
    }
  })
  console.log(filtered_list)
  if (cart_active==0){
    cart_active=1
    addBtn()
    
  }else{
    cart_active=0
    removeBtn()
  }
  if (cart_active==1){
    
    console.log(filtered_list)
    genratecart(filtered_list)
  


    }
    else{
      const cartitemss=document.querySelector(".cart_itemss")
      cartitemss.innerHTML='';
    }
  }
  
  let genratecart=(filtered_list) =>{
    let updated_filtered_list=[]
    let totalamount=0
    let itemlist=JSON.parse(localStorage.getItem('itemlist')) || [] 
    console.log(itemlist)
    for(i of itemlist){
      let quantity=i.item
      let {name,price,image}=get_data(i.id)
      
      let amount=price*quantity
      totalamount+=amount
    
      updated_filtered_list.push({
        
        name:name,
        price:price,
        quantity:quantity,
        img:image,
        amount:amount
      })
      
    }
    const item=document.createElement("div")
  
    item.classList.add('totalamount')
    item.innerHTML=`<h2>${totalamount}</h2>`
    const cartitemss=document.querySelector(".cart_itemss")
    
    return (cartitemss.innerHTML=updated_filtered_list.map((x)=>{
        return `  
        <div id="cart_items" class="cart_items" >
            <img height="50px" width="50px" src="./${x.img}" alt="">
            <div id="cartitemdetails">
                <H3 >${x.name}</H3>
                <div class="buttons">
                  <h4>Quantity:${x.quantity}</h4>
                  <h4>Amount: ${x.amount}</h4>
                    
                </div>
            </div>
        </div>`
      })) }
  
function get_data(id){
    for(i in shopItemsData){
      if(shopItemsData[i].id==id){
        let name=shopItemsData[i].name
        let price=shopItemsData[i].price
        let image=shopItemsData[i].img

        return {name,price,image}
      }
    }
}
 

  /*<div id="cart_items" class="cart_items" >
            <img height="50px" width="50px" src="./images/img-1.jpg" alt="">
            <div id="cartitemdetails">
                <H3 >MENTSHIRT</H3>
                <div class="buttons">
                    <div id='${x.id}' class="quantity">0</div>
                    
                </div>
            </div>
        </div>
  */
  
  



  
  

  


