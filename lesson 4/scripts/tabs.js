function initializeTabs() {
  const allTabs = document.querySelectorAll('.tab-link');
  const allPanels = document.querySelectorAll('.tab-panel');
  function handleTabClick(clicked) {
    return function () {
      const tabID = clicked.getAttribute('data-tab');
      allTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      allPanels.forEach(panel => {
        panel.classList.remove('active');
      });
      clicked.classList.add('active');
      document.getElementById(tabID).classList.add('active');
    }
  }
  allTabs.forEach(tab => tab.addEventListener('click', handleTabClick(tab)));
}  
