export default (services = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "FETCH_SERVICE":
      return { ...state, service: action.payload.service };
    case "CREATE":
      return [...services, action.payload];
    default:
      return services;
  }
};
