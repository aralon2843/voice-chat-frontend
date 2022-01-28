import axios from "axios";

export const getUser = async (id: string) => {
  const token = localStorage.getItem("access_token");
  return axios
    .get(`http://localhost:3001/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};
