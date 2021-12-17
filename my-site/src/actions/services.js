import * as api from"../api/index.js"



 export const getServices=()=>async (dispatch)=>{
    
    try {
        const{data}= await api.fetchServices();
         dispatch({   type: "FETCH_ALL",  payload:data  });
         console.log(data)
    } catch (error) {
        console.log(error.message);
    }
    
 
   
}
export const createService=(service)=>async (dispatch)=>{

    try {
        const {data}= await api.createService(service);
        dispatch({type:'CREATE',payload: data})
    } catch (error) {
        console.log(error.message);
    }
}