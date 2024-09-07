
// Copy EMail to Clipboard
document.addEventListener('DOMContentLoaded', function () {
    const emailImage = document.getElementById('emailImage');
    const email = 'kbartonbyfield@gmail.com'; 

    emailImage.addEventListener('click', function (event) {
        // Prevent the click event from propagating to parent elements
        event.stopPropagation();

        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);

        // Select the text in the input
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices

        try {
            // Execute the copy command
            document.execCommand('copy');
            alert('Email copied to clipboard!');
        } catch (err) {
            alert('Failed to copy email.');
        }

        // Remove the temporary input element
        document.body.removeChild(tempInput);
    });
});

//---------------------------------------------------------------------------------------
// select project




document.addEventListener('DOMContentLoaded', function () {
    const skillBoxes = document.querySelectorAll('.skill-box');
    const projectImages = document.querySelectorAll('.grid-image');

    // Function to show all project images
    function showAllImages() {
        projectImages.forEach(image => image.classList.add('show'));
    }

    // Function to hide all project images
    function hideAllImages() {
        projectImages.forEach(image => image.classList.remove('show'));
    }

    // Show all images when the page loads
    showAllImages();

    skillBoxes.forEach(skillBox => {
        skillBox.addEventListener('click', function () {
            // Toggle active class for the clicked skill
            this.classList.toggle('active');

            // Collect all active skills
            const activeSkills = Array.from(document.querySelectorAll('.skill-box.active')).map(skill => skill.getAttribute('data-skill'));

            // If no skill is selected, show all images
            if (activeSkills.length === 0) {
                showAllImages();
            } else {
                // Hide all images initially
                hideAllImages();

                // Show images that match ALL selected skills
                projectImages.forEach(image => {
                    const imageSkills = image.getAttribute('data-skill').split(', ');
                    const matchesAllSkills = activeSkills.every(skill => imageSkills.includes(skill));

                    if (matchesAllSkills) {
                        image.classList.add('show');
                    }
                });
            }
        });
    });
});
