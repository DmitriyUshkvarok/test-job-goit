import axios from 'axios';

function fetchUsers() {
  return axios
    .get(`https://6442c7f376540ce2259567c9.mockapi.io/users`)
    .then(response => response.data);
}

function updateFollowers(id, followers, isFollowed) {
  return axios.put(`https://6442c7f376540ce2259567c9.mockapi.io/users/${id}`, {
    followers,
    isFollowed,
  });
}

function filterUsersByFollowStatus(isFollowed) {
  const status = isFollowed ? 'true' : 'false';
  return axios
    .get(
      `https://6442c7f376540ce2259567c9.mockapi.io/users?isFollowed=${status}`
    )
    .then(response => response.data);
}

const apiUsers = {
  fetchUsers,
  updateFollowers,
  filterUsersByFollowStatus,
};
export default apiUsers;
