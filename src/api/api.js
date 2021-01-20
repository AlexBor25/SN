import axios from "axios";

const API = axios.create({
  baseURL:  'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "0b89140e-0708-4b6f-a0c3-c65e92ec686f"
  }
})

export const getUsers = (currentPage, pageSize) => {
  return API.get(`users?page=${currentPage}&count=${pageSize}`);
};

export const followUser = (id) => {
  return API.post(`follow/${id}`);
};

export const unfollowUser = (id) => {
  return API.delete(`follow/${id}`);
};

export const auth = () => {
  return API.get(`auth/me`);
};

export const setUsers = (id) => {
  return API.get(`profile/${id}`);
};

export const getUserStatus = (id) => {
  return API.get(`profile/status/${id}`);
};

export const updateUserStatus = (status) => {
  return API.put(`profile/status`, {
    status: status
  });
};

export const signIn = (email, password, rememberMe = false) => {
  return API.post(`auth/login`, {
    email, password, rememberMe
  });
};

export const signOut = () => {
  return API.delete(`auth/login`);
};
