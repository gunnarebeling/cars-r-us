import { setInterior } from "./transientState.js";


const interiorSelected = (event) =>{
    if (event.target.id === "interior") {
        setInterior(parseInt(event.target.value))
    }
}
document.addEventListener("change", interiorSelected)
export const InteriorHTML= async () => {
    const response = await fetch("http://localhost:8088/interiors");
    const interiors = await response.json();
    let html = `<select id="interior">`

    let interiorChoiceArray = interiors.map(interior =>{
        return `<option value="${interior.id}">${interior.type}</option>`
    })
    html += interiorChoiceArray.join();
    html += `</select>`
    return html
}