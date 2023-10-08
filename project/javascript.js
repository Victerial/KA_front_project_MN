document.addEventListener('DOMContentLoaded', function() {
    const nightModeToggle = document.getElementById('nightModeToggle');
    nightModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
    });

    const addHourButtons = document.querySelectorAll('.addHourButton');

    addHourButtons.forEach(button => {
        button.addEventListener('click', function() {
            const hourDiv = document.createElement('div');
            hourDiv.classList.add('hour');
            hourDiv.innerHTML = '<input type="text" placeholder="Óra hozzáadása...">';
            const parentDay = button.parentElement;
            parentDay.appendChild(hourDiv);

            hourDiv.addEventListener('click', function() {
                hourDiv.classList.toggle('active');
                const input = hourDiv.querySelector('input');
                if (hourDiv.classList.contains('active')) {
                    input.focus();
                } else {
                    input.blur();
                }
            });
        });
    });
});