let transientState = 
{
    paintsId: 0,
    interiorsId: 0,
    technologiesId: 0,
    wheelsId: 0,
}

export const setPaint = (currentState) =>{
        transientState.paintsId = currentState
        

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
        header: 
        {   
            "Content-Type": "application/json"

        },
        body: JSON.stringify(transientState)

    }
    const response = await fetch("http://localhost:8088/orders", postOptions);
    const submitCall = new CustomEvent("orderSubmit");
    document.dispatchEvent(submitCall);
}