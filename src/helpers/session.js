// Define local storage
const ACCESS_TOKEN = "access_token";

export default {
  // For access token
  setAccessToken(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },

  clearAll() {
    localStorage.clear();
  }
};
