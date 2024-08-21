import { setWheels } from "./transientState.js";

const wheelsSelected = (event) =>{
    if (event.target.id === "wheels") {
        setWheels(parseInt(event.target.value))
    }
}
document.addEventListener("change", wheelsSelected)

export const WheelsHTML= async () => {
    const response = await fetch("http://localhost:8088/wheels");
    const wheelsets = await response.json();
    let html = `<select id="wheels">`

    let wheelChoiceArray = wheelsets.map(wheels =>{
        return `<option value="${wheels.id}">${wheels.type}</option>`
    })
    html += wheelChoiceArray.join();
    html += `</select>`
    return html
}