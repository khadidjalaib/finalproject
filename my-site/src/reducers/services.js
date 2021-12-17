
export default (services=[],action) =>{
  switch (action.type) {
      case 'FETCH_ALL':
          return action.payload;
       case 'CREATE' :   
         return [...services, action.payload];
      default:
         return services;
}}