import { InteriorHTML } from "./Interiors.js";
import { PaintHTML } from "./Paints.js";
import { TechnologiesHTML } from "./Technologies.js";
import { WheelsHTML } from "./Wheels.js";

const render = async () =>{
    const paintHTML = await PaintHTML();
    const interiorHTML = await InteriorHTML();
    const technologiesHTML = await TechnologiesHTML();
    const wheelsHTML = await WheelsHTML();
    
    const html = `
        <h1>CARS-R-US</h1>
        <div id="main-container>
            <div id="choices-container>
                <div id="paint-choice">
                    <h2>Paint</h2>
                    <!--painthtml-->
                    ${paintHTML}
                </div>
                <div id="interior-choice">
                    <h2>Interior</h2>
                    <!--interiorHTML-->
                    ${interiorHTML}
                </div>
                <div id="technology-choice">
                    <h2>Technology</h2>
                    <!--technologiesHTML-->
                    ${technologiesHTML}
                </div>
                <div id="wheel-choice">
                    <h2>Wheels</h2>
                    <!--wheelsHTML-->
                    ${wheelsHTML}
                </div>
            </div>
            <div id="orders">
                <h2>Orders</h2>
                <div>
                    <!--ordersList-->
                </div>
            </div>
        </div>`
    
    const mainTarget = document.querySelector("#main");
    mainTarget.innerHTML = html;
}
document.addEventListener("orderSubmit", render);

render();