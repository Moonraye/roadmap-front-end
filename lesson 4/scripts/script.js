document.addEventListener('DOMContentLoaded', function () {
    const authBlock = document.querySelector('.content-block.authorization');
    const tabsBlock = document.querySelector('.content-block.tabs-container');
    const loginBtn = document.querySelector('.authorization-submit-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const STORAGE_KEY = 'app_user';
    function isLoggedIn() {
        return !!localStorage.getItem(STORAGE_KEY);
    }
    function showAuth(show) {
        if (show) {
            authBlock.classList.add('active');
            tabsBlock.classList.remove('active');
        } else {
            authBlock.classList.remove('active');
            tabsBlock.classList.add('active');
        }
    }
    function login(username) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }));
        showAuth(false);
    }
    loginBtn.addEventListener('click', function () {
        const username = (usernameInput.value || '').trim();
        const password = (passwordInput.value || '').trim();
        if (!username) {
            alert('Please enter username');
            usernameInput.focus();
            return;
        }
        if (!password) {
            alert('Please enter password');
            passwordInput.focus();
            return;
        }
        login(username);
    });
});