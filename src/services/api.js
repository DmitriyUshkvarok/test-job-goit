import axios from 'axios';

function fetchUsers() {
  return axios
    .get(`https://6442c7f376540ce2259567c9.mockapi.io/users`)
    .then(response => response.data);
}

function updateFollowers(id, followers) {
  return axios.put(`https://6442c7f376540ce2259567c9.mockapi.io/users/${id}`, {
    followers,
  });
}

const apiUsers = {
  fetchUsers,
  updateFollowers,
};
export default apiUsers;
