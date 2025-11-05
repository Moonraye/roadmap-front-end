const authBlock = document.querySelector('.content-block.authorization');
const tabsBlock = document.querySelector('.content-block.tabs-container');
const STORAGE_KEY = 'userLoggedIn';
const savedLog = localStorage.getItem(STORAGE_KEY);
const loginBtn = document.querySelector('.authorization-btn.login');
const logoutBtn = document.querySelector('.logout-btn');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const registerBtn = document.querySelector('.authorization-btn.register');
const regUsername = document.getElementById('reg-username');
const regPassword = document.getElementById('reg-password');

checkInitialAuthState();
if (loginBtn) {
  loginBtn.addEventListener("click", createAuthHandler(loginUsername, loginPassword, loginUser));
}
if (registerBtn) {
  registerBtn.addEventListener( "click", createAuthHandler(regUsername, regPassword, registerUser));
}
function createAuthHandler(usernameInput, passwordInput, onSuccessCallback) {
  return function () {
    const username = ((usernameInput && usernameInput.value) || "").trim();
    const password = ((passwordInput && passwordInput.value) || "").trim();
    if (!username) {
      alert("Please enter username");
      if (usernameInput) usernameInput.focus();
      return;
    }
    if (!password) {
      alert("Please enter password");
      if (passwordInput) passwordInput.focus();
      return;
    }
    onSuccessCallback(username, password);
  };
}
function handleSuccessfulAuth() {
  localStorage.setItem(STORAGE_KEY, "true");
  showAuth(false);
}
function registerUser(username) {
  handleSuccessfulAuth(username);
  alert("Registration successful. Welcome, " + username + "!");
}
function loginUser(username) {
  handleSuccessfulAuth(username);
  console.log("isLoggedIn = true");
}
function checkInitialAuthState() {
  const isLoggedIn = localStorage.getItem(STORAGE_KEY);
  if (isLoggedIn === "true") {
    showAuth(false);
  } else {
    showAuth(true);
  }
}
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem(STORAGE_KEY);
    alert("You have been logged out. See you again!");
    window.location.reload();
  });
}
function showAuth(show) {
  if (show) {
    authBlock.classList.add("active");
    tabsBlock.classList.remove("active");
  } else {
    authBlock.classList.remove("active");
    tabsBlock.classList.add("active");
  }
}
