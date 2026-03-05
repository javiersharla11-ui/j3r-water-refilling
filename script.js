let price=25

let orders=[]

function placeOrder(){

let name=document.getElementById("name").value
let address=document.getElementById("address").value
let phone=document.getElementById("phone").value
let qty=document.getElementById("qty").value

let order=name+" - "+qty+" gallons"

orders.push(order)

alert("Order Sent!")

}

function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user=="admin" && pass=="1234"){

document.getElementById("dashboard").style.display="block"

showOrders()

}else{

alert("Wrong login")

}

}

function showOrders(){

let list=document.getElementById("orders")

list.innerHTML=""

orders.forEach(o=>{
let li=document.createElement("li")
li.textContent=o
list.appendChild(li)
})

}

function updatePrice(){

let newPrice=document.getElementById("newPrice").value

document.getElementById("price").innerText=newPrice

alert("Price Updated")

}
