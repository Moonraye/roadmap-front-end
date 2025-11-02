document.addEventListener('DOMContentLoaded', () => {
    const allAccordionItems = document.querySelectorAll('.accordion-item');
    const allPanels = document.querySelectorAll('.panel');
    const allButtons = document.querySelectorAll('.accordion-item > button');
    function toggleAccordion(event) {
        const clickedButton = event.currentTarget;
        const panel = clickedButton.nextElementSibling;        
        // const isWasActive = panel.classList.contains('active');
        // allPanels.forEach(p => p.classList.remove('active'));
        // allButtons.forEach(b => b.classList.remove('active')); // Якщо необхідно обмежити можливість відкривати декілька секцій одночасно
        // if (!isWasActive) {
        //     panel.classList.add('active');
        //     clickedButton.classList.add('active');
        // }
        
        clickedButton.classList.toggle('active'); // Якщо необхідно залишити таку можливість
        panel.classList.toggle('active');
    }
    allButtons.forEach(button => button.addEventListener('click', toggleAccordion));
});
