// La partie du cv

// variables

document.getElementById('bioBtn').addEventListener('click', function() {
    showSection('bio');
});

document.getElementById('skillsBtn').addEventListener('click', function() {
    showSection('skills');
});

document.getElementById('edBtn').addEventListener('click', function() {
    showSection('ed');
});

// function 
function showSection(section) {
    // Hide all sections
    document.querySelector('.bio').classList.remove('visible');
    document.querySelector('.skills').classList.remove('visible');
    document.querySelector('.ed').classList.remove('visible');

    // Show the selected section
    document.querySelector('.' + section).classList.add('visible');
}

const buttons = document.querySelectorAll('.but');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');
    });
});
