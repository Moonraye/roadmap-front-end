    const allTabs = document.querySelectorAll('.tab-link');
    const allPanels = document.querySelectorAll('.tab-panel'); 
    function handleTabClick(event) {
        const clicked = event.currentTarget;
        const tabID = clicked.getAttribute('data-tab');
        allTabs.forEach(t => t.classList.remove('active'));
        allPanels.forEach(p => p.classList.remove('active'));
        clicked.classList.add('active');
        document.getElementById(tabID).classList.add('active');
    }
    allTabs.forEach(tab => tab.addEventListener('click', handleTabClick));
    allTabs.forEach(panel => panel.addEventListener('click', handleTabClick));