
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
    const projectItems = document.querySelectorAll('.project-item');

    // Function to show all project items
    function showAllItems() {
        projectItems.forEach(item => {
            item.classList.add('show');
            item.style.visibility = 'visible'; // Ensure the item is visible
            item.style.display = 'flex'; // Make sure it's shown in the layout
        });
    }

    // Function to hide all project items
    function hideAllItems() {
        projectItems.forEach(item => {
            item.classList.remove('show');
            item.style.visibility = 'hidden'; // Keep the item in the layout but invisible
            item.style.display = 'none'; // Remove it from the layout
        });
    }

    // Show all items when the page loads
    showAllItems();

    skillBoxes.forEach(skillBox => {
        skillBox.addEventListener('click', function () {
            // Toggle active class for the clicked skill
            this.classList.toggle('active');

            // Collect all active skills
            const activeSkills = Array.from(document.querySelectorAll('.skill-box.active'))
                                      .map(skill => skill.getAttribute('data-skill'));

            // If no skill is selected, show all items
            if (activeSkills.length === 0) {
                showAllItems();
            } else {
                // Hide all items initially
                hideAllItems();

                // Show items that match ALL selected skills
                projectItems.forEach(item => {
                    const imageSkills = item.querySelector('img').getAttribute('data-skill').split(', ');
                    const matchesAllSkills = activeSkills.every(skill => imageSkills.includes(skill));

                    if (matchesAllSkills) {
                        item.classList.add('show');
                        item.style.visibility = 'visible'; // Ensure the matching items are visible
                        item.style.display = 'flex'; // Show the matching item in the layout
                    }
                });
            }
        });
    });
});






// Search Funtion

function showProjects() {
    const projectList = document.getElementById('search-project-list');
    projectList.style.display = 'block';
    limitProjects();
}

function hideProjects() {
    // Delay hiding to allow for clicks on the dropdown items
    setTimeout(() => {
        const projectList = document.getElementById('search-project-list');
        projectList.style.display = 'none';
    }, 150);
}

function keepDropdownOpen() {
    // Prevent the dropdown from closing when clicking on the project list
    document.getElementById('search-project-list').onblur = null;
}

function searchProjects() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const projectItems = document.querySelectorAll('.search-project-item');
    let visibleCount = 0;

    projectItems.forEach(item => {
        const keywords = item.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(input)) {
            if (visibleCount < 6) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        } else {
            item.style.display = 'none';
        }
    });
}

function limitProjects() {
    const projectItems = document.querySelectorAll('.search-project-item');
    projectItems.forEach((item, index) => {
        if (index < 6) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

