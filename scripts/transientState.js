let transientState = 
{
    colorsId: 1,
    interiorsId: 1,
    technologiesId: 1,
    wheelsId: 1,
}

export const setPaint = (currentState) =>{
        transientState.colorsId = currentState
        

}
export const setInterior = (currentState) =>{
    
        transientState.interiorsId = currentState
        
        
    

}
export const setTechnology = (currentState) =>{
    
        transientState.technologiesId = currentState
        

}
export const setWheels = (currentState) =>{
    
        transientState.wheelsId = currentState
        

}

export const submitOrder = async () => {
    const postOptions = 
    {
        method: "POST",
        headers: 
        {   
            "Content-Type": "application/json"

        },
        body: JSON.stringify(transientState)

    }
    const response = await fetch("http://localhost:8088/orders", postOptions);
    const submitCall = new CustomEvent("orderSubmit");
    document.dispatchEvent(submitCall);
}