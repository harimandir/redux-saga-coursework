import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api";

export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};
