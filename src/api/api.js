import axios from "axios";

const API = axios.create({
  baseURL:  'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "0b89140e-0708-4b6f-a0c3-c65e92ec686f"
  }
})

export const getUsers = (currentPage, pageSize) => {
  return API.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
};

export const followUser = (id) => {
  return API.post(`follow/${id}`).then(response => response.data);
};

export const unfollowUser = (id) => {
  return API.delete(`follow/${id}`).then(response => response.data);
};

export const auth = () => {
  return API.get(`auth/me`).then(response => response.data);
};

export const setUsers = (id) => {
  return API.get(`profile/${id}`).then(response => response.data);
};

export const getUserStatus = (id) => {
  return API.get(`profile/status/${id}`).then(response => response.data);
};

export const updateUserStatus = (status) => {
  return API.put(`profile/status`, {
    status: status
  }).then(response => response.data);
};
