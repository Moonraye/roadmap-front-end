document.addEventListener('DOMContentLoaded', function () {
    const authBlock = document.querySelector('.content-block.authorization');
    const tabsBlock = document.querySelector('.content-block.tabs-container');
    const STORAGE_KEY = 'app_user';
    const loginBtn = document.querySelector('.authorization-btn.login');
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    const registerBtn = document.querySelector('.authorization-btn.register');
    const regUsername = document.getElementById('reg-username');
    const regPassword = document.getElementById('reg-password');

    function showAuth(show) {
        if (show) {
            authBlock.classList.add('active');
            tabsBlock.classList.remove('active');
        } else {
            authBlock.classList.remove('active');
            tabsBlock.classList.add('active');
        }
    }
    function setUserAndEnter(username) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }));
        showAuth(false);
    }
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            const username = (loginUsername && loginUsername.value || '').trim();
            const password = (loginPassword && loginPassword.value || '').trim();
            if (!username) {
                alert('Please enter username');
                if (loginUsername) loginUsername.focus();
                return;
            }
            if (!password) {
                alert('Please enter password');
                if (loginPassword) loginPassword.focus();
                return;
            }
            setUserAndEnter(username);
        });
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', function () {
            const username = (regUsername && regUsername.value || '').trim();
            const password = (regPassword && regPassword.value || '').trim();
            if (!username) {
                alert('Please enter username');
                if (regUsername) regUsername.focus();
                return;
            }
            if (!password) {
                alert('Please enter password');
                if (regPassword) regPassword.focus();
                return;
            }
            setUserAndEnter(username);
            alert('Registration successful. Welcome, ' + username + '!');
        });
    }
});