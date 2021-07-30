import axios from "axios";

export const axiosWithAuth = () => {
    
  return axios.create({
    headers: {
      Authorization: window.localStorage.getItem("token")
    },
    baseURL: "https://anytime-fitness-unit4.herokuapp.com",
  });
};

export default axiosWithAuth


