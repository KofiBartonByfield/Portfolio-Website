
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






// Search Funtion

function showProjects() {
    const projectList = document.getElementById('search-project-list');
    projectList.style.display = 'block';
}

function hideProjects() {
    // Delay hiding to allow for clicks on the dropdown items
    setTimeout(() => {
        const projectList = document.getElementById('search-project-list');
        projectList.style.display = 'none';
    }, 150);
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



// Contents dropdown
function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.classList.toggle('show');
}
