const imageData = [
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 1',
        description: 'This is a description of image 1.',
        link: 'https://example.com/page1'  // Add a link for each image
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 2',
        description: 'This is a description of image 2.',
        link: 'https://example.com/page2'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 3',
        description: 'This is a description of image 3.',
        link: 'https://example.com/page3'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 4',
        description: 'This is a description of image 4.',
        link: 'https://example.com/page4'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 5',
        description: 'This is a description of image 5.',
        link: 'https://example.com/page5'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 6',
        description: 'This is a description of image 6.',
        link: 'https://example.com/page6'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 7',
        description: 'This is a description of image 7.',
        link: 'https://example.com/page7'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 8',
        description: 'This is a description of image 8.',
        link: 'https://example.com/page8'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 9',
        description: 'This is a description of image 9.',
        link: 'https://example.com/page9'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 10',
        description: 'This is a description of image 10.',
        link: 'https://example.com/page10'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 11',
        description: 'This is a description of image 11.',
        link: 'https://example.com/page11'
    },
    {
        src: 'Images/projects example.jpeg',
        title: 'Image Title 12',
        description: 'This is a description of image 12.',
        link: 'https://example.com/page12'
    }
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
        linkElement.target = '_blank'; // Opens the link in a new tab

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
