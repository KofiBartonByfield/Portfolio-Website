document.addEventListener('DOMContentLoaded', function () {
    const skillBoxes = document.querySelectorAll('.skill-box');
    const projectImages = document.querySelectorAll('.grid-image');
    let selectedSkill = null; // Variable to track the currently selected skill

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

    skillBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const skill = this.getAttribute('data-skill');

            // If the same skill is clicked, unselect it
            if (selectedSkill === skill) {
                // Remove 'selected' class from all skill boxes
                skillBoxes.forEach(box => box.classList.remove('selected'));
                selectedSkill = null; // Reset selected skill

                // Show all images (since none is selected)
                showAllImages();
            } else {
                // Select a new skill
                selectedSkill = skill;

                // Remove 'selected' class from all skill boxes
                skillBoxes.forEach(box => box.classList.remove('selected'));

                // Add 'selected' class to the clicked box
                this.classList.add('selected');

                // Hide all images
                hideAllImages();

                // Show images that match the selected skill
                projectImages.forEach(image => {
                    if (image.getAttribute('data-skill') === selectedSkill) {
                        image.classList.add('show');
                    }
                });
            }
        });
    });
});




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
