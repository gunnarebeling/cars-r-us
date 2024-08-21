import { setTechnology } from "./transientState.js";

const technologySelected = (event) =>{
    if (event.target.id === "technology") {
        setTechnology(parseInt(event.target.value))
    }
}
document.addEventListener("change", technologySelected)

export const TechnologiesHTML= async () => {
    const response = await fetch("http://localhost:8088/technologies");
    const technologies = await response.json();
    let html = `<select id="technology">`

    let technologiesChoiceArray = technologies.map(technology =>{
        return `<option value="${technology.id}">${technology.type}</option>`
    })
    html += technologiesChoiceArray.join();
    html += `</select>`
    return html
}