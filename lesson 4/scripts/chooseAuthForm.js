function initializeFormChooser(){    
    const allForms = document.querySelectorAll('.form-container');
    const formChooser = document.querySelectorAll('.form-chooser');
    function chooseForm(event) {
        const clicked = event.currentTarget;
        const formID = clicked.getAttribute('data-tab');
        allForms.forEach(f => f.classList.remove('active'));
        clicked.classList.add('active');
        const panel = document.getElementById(formID);
        if (panel) panel.classList.add('active');
    }
    formChooser.forEach(tab => tab.addEventListener('click', chooseForm));
}