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