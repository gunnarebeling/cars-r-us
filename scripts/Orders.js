import { submitOrder } from "./transientState.js"


const orderSubmited = (event)=>{
    if (event.target.id === "submitbutton") {
        
        submitOrder();
    }
}
export const SubmitButton = () =>{
    document.addEventListener("click", orderSubmited)
    return `<button  id="submitbutton" class="btn btn-primary">Submit</button>`
}


export const OrdersList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=colors&_expand=interiors&_expand=technologies&_expand=wheels")
    const orders = await response.json();
    
    let html = `<ul id="orders">`
    const ordersArray = orders.map(order =>{
        let priceTotal = 0;
        
        priceTotal = order.colors.price+order.interiors.price+order.wheels.price+order.technologies.price
        priceTotal = priceTotal.toLocaleString("en-US", {
            style: "currency" ,
            currency: "USD"
        })

        return  `<li class="order">Order #${order.id} price is ${priceTotal} </li>`
    })

    html += ordersArray.join("");
    html += `</ul>`
    return html
}