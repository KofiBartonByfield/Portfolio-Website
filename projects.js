const imageData = [
    
        {
            src: 'Images/Project Preview/Data blog on HIV.png',
            title: 'Data Driven Blog on HIV',
            description: 'An insightful blog analyzing data related to HIV trends and research findings using Python.',
            link: 'Pages/Data_Blog_on_HIV/Data_Blog_on_HIV.html'
        },
        {
            src: 'Images/Project Preview/Employee Retention Analytics.png',
            title: 'Employee Retention Analytics',
            description: 'A comprehensive analysis of employee retention strategies utilizing R, data analytics, and LaTeX for documentation.',
            link: 'Pages/Data_Analytics_Exe/business_analytic_exe.html'
        },
        {
            src: 'Images/Project Preview/SIR.png',
            title: 'SIR Model in MATLAB',
            description: 'Modeling infectious diseases using the SIR model in MATLAB, demonstrating the impact of various parameters.',
            link: 'Pages/CND/CDN_Exeter.html'
        },
        {
            src: 'Images/Project Preview/Graphs.png',
            title: 'Ontology Report',
            description: 'A detailed report on ontological structures created using Mathematica and documented in LaTeX.',
            link: 'Pages/Graphs_Coursework/Graphs_cw.html'
        },
        {
            src: 'Images/Project Preview/Exeter Dissertation.png',
            title: 'Exeter University Dissertation',
            description: 'An academic dissertation completed for Exeter University, showcasing extensive research and analysis in HTML and CSS.',
            link: 'Pages/Exeter_Diss/Exeter_Diss.html'
        },
        {
            src: 'Images/Project Preview/chaos.png',
            title: 'Chaos in a controlled population model',
            description: 'Description tbc...',
            link: 'Pages/CND/CDN_Exeter_2.html'
        },
        {
            src: 'Images/Project Preview/No Image.png',
            title: 'More Content coming soon!',
            description: 'Description tbc...',
            link: 'index.html'
        },
    
];

let currentPage = 0;
const imagesPerPage = 6;




function renderImages() {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = ''; // Clear previous images

    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;
    const currentImages = imageData.slice(start, end);

    currentImages.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item');

        // Create the clickable link
        const linkElement = document.createElement('a');
        linkElement.href = image.link;

        // Create the image element
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;

        // Create title and description
        const titleElement = document.createElement('h3');
        titleElement.textContent = image.title;

        const descElement = document.createElement('p');
        descElement.textContent = image.description;

        // Append image, title, and description to the link
        linkElement.appendChild(imgElement);
        linkElement.appendChild(titleElement);
        linkElement.appendChild(descElement);

        // Append the clickable link to the image item
        imageItem.appendChild(linkElement);

        // Append the image item to the grid
        imageGrid.appendChild(imageItem);
    });

    updateButtons();
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = (currentPage + 1) * imagesPerPage >= imageData.length;
}

function showNextPage() {
    currentPage++;
    renderImages();
}

function showPrevPage() {
    currentPage--;
    renderImages();
}

// Initial render
renderImages();
