import { submitOrder } from "./transientState.js"
document.addEventListener("click", orderSubmited)
export const SubmitButton = () =>{
    return `<button  id="submitbutton "class="btn">Submit<button>`
}
const orderSubmited = (event)=>{
    if (event.target.id === "submitbutton") {
        
        submitOrder();
    }
}