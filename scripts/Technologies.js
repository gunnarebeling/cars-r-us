export const TechnologiesHTML= async () => {
    const response = await fetch("http://localhost:8088/technology");
    const technologies = await response.json();
    let html = `<select id="technology">`

    let technologiesChoiceArray = technologies.map(technology =>{
        return `<option value="${technology.id}">${technology.type}</option>`
    })
    html += technologiesChoiceArray.join();
    html += `</select>`
    return html
}