document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.querySelector('.cookie-container');
    const cookieCloseBtn = document.querySelector('.cookie-close-btn');
    const cookieKey = 'cookieAccepted';
    const storedValue = localStorage.getItem(cookieKey);
    console.log("Статус cookieAccepted в localStorage: "+ storedValue);
    if (storedValue === 'true') cookie.classList.add('hidden');
    if (localStorage.getItem(cookieKey) !== 'true') cookie.classList.remove('hidden');
    cookieCloseBtn.addEventListener('click', function() {
    console.log('--- Натиснуто кнопку "Закрити" (Accept) ---');
    cookie.classList.add('hidden');
    localStorage.setItem(cookieKey, 'true');
    console.log('-> Дія: Зберегли "true" в localStorage.');
    }); 
});