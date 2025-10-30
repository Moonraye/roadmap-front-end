    document.addEventListener('DOMContentLoaded', function() {
    const allTabs = document.querySelectorAll('.tab-link');
    const allPanels = document.querySelectorAll('.tab-panel'); 
    const cookie = document.querySelector('.cookie-container');
    const cookieCloseBtn = document.querySelector('.cookie-close-btn');
    const cookieKey = 'cookieAccepted';
    console.log('--- Сторінку завантажено (DOMContentLoaded) ---');
    const storedValue = localStorage.getItem(cookieKey);
    console.log("Статус cookieAccepted в localStorage: "+ storedValue);
    if (storedValue === 'true') {
        console.log('-> Рішення: Банер НЕ показуємо, бо вже прийнято.');
        cookie.classList.add('hidden');
    } else {
        console.log('-> Рішення: Банер поки не чіпаємо, чекаємо кліку.');
    }
    function handleTabClick(event) {
        const clicked = event.currentTarget;
        const tabID = clicked.getAttribute('data-tab');
        allTabs.forEach(t => t.classList.remove('active'));
        allPanels.forEach(p => p.classList.remove('active'));
        clicked.classList.add('active');
        document.getElementById(tabID).classList.add('active');
        // cookie.classList.remove('hidden');
    if (localStorage.getItem(cookieKey) !== 'true') {
                cookie.classList.remove('hidden');
        }    
    }
    allTabs.forEach(tab => tab.addEventListener('click', handleTabClick));
    allPanels.forEach(panel => panel.addEventListener('click', handleTabClick));
    cookieCloseBtn.addEventListener('click', function() {
        console.log('--- Натиснуто кнопку "Закрити" (Accept) ---');
        cookie.classList.add('hidden');
        localStorage.setItem(cookieKey, 'true');
        console.log('-> Дія: Зберегли "true" в localStorage.');
    }); 
});
