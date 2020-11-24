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

export const createUser = ({ firstName, lastName }) => {
  return axios.post("/users", { firstName, lastName });
};

export const deleteUser = (id) => {
  return axios.delete(`/users/${id}`);
};
