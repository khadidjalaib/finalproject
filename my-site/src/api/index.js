import axios from "axios";

const url = "http://localhost:5000/services";

export const fetchServices = () => axios.get(url);
export const fetchService = (id) => axios.get(`${url}/${id}`);
export const createService = (newService) => axios.post(url, newService);
