document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    const currentCount = document.querySelector('.current-count');
    const maxLength = parseInt(textarea.getAttribute('maxlength'), 10);
    textarea.addEventListener('input', function() {
        const currentLength = textarea.value.length;
        currentCount.textContent = currentLength;
        if (currentLength >= maxLength) {
            textarea.classList.add('error');
        }
        else {
            textarea.classList.remove('error');
        }
    });
});