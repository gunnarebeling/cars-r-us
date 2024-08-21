export const PaintHTML= async () => {
    const response = await fetch("http://localhost:8088/colors");
    const colors = await response.json();
    let html = `<select id="paint">`

    let paintChoiceArray = colors.map(color =>{
        return `<option value="${color.id}">${color.type}</option>`
    })
    html += paintChoiceArray.join();
    html += `</select>`
    return html
}