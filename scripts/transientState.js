let transientState = 
{
    paintsId: 0,
    interiorsId: 0,
    technologiesId: 0,
    wheelsId: 0,
}

export const setPaint = (event) =>{
    if (event.target.id === "paint") {
        transientState.paintsId = event.target.value
    }

}
export const setInterior = (event) =>{
    if (event.target.id === "interior") {
        transientState.interiorsId = event.target.value
    }

}
export const setTechnology = (event) =>{
    if (event.target.id === "technology") {
        transientState.technologiesId = event.target.value
    }

}
export const setWheels = (event) =>{
    if (event.target.id === "Wheels") {
        transientState.wheelsId = event.target.value
    }

}