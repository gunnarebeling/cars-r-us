import { InteriorHTML } from "./Interiors.js";
import { OrdersList, SubmitButton } from "./Orders.js";
import { PaintHTML } from "./Paints.js";
import { TechnologiesHTML } from "./Technologies.js";
import { WheelsHTML } from "./Wheels.js";

const render = async () =>{
    const paintHTML = await PaintHTML();
    const interiorHTML = await InteriorHTML();
    const technologiesHTML = await TechnologiesHTML();
    const wheelsHTML = await WheelsHTML();
    const submitbuttonHTML = SubmitButton();
    const orderHTML = await OrdersList()
    
    const html = `
        <h1 id="title" class="text-center mt-3 mb-5">CARS-R-US</h1>
        <div id="main-container class="container">
            <div id="choices-container" class="row border justify-content-center mx-3 mb-3 pt-5 pb-3" style="gap:30px">
                <div id="paint-choice" class="col-md-5 p-3 text-center border border-4 shadow choice-container">
                    <h2>Paint</h2>
                    <!--painthtml-->
                    ${paintHTML}
                </div>
                <div id="interior-choice" class="col-md-5 p-3 text-center border border-4 shadow choice-container"  >
                    <h2>Interior</h2>
                    <!--interiorHTML-->
                    ${interiorHTML}
                </div>
                <div id="technology-choice" class="col-md-5 p-3 text-center border border-4 shadow choice-container">
                    <h2>Technology</h2>
                    <!--technologiesHTML-->
                    ${technologiesHTML}
                </div>
                <div id="wheel-choice" class="col-md-5 p-3 text-center border border-4 shadow choice-container">
                    <h2>Wheels</h2>
                    <!--wheelsHTML-->
                    ${wheelsHTML}
                </div>
                <div class="d-flex justify-content-center">
                    ${submitbuttonHTML}
                </div>
            </div>
            <div id="orders" class="m-4 d-inline-block ">
                <h2 class="ms-3">Orders</h2>
                <div>
                    <!--ordersList-->
                    ${orderHTML}
                </div>
            </div>
        </div>`
    
    const mainTarget = document.querySelector("#main");
    mainTarget.innerHTML = html;
}
document.addEventListener("orderSubmit", render);

render();