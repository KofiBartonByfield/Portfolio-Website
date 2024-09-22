// search-container.js
function loadSearchContainer() {
    const searchHTML = `
        <div id="search-container">
            <input type="text" id="search-bar" placeholder="R, Python, HTML, ..." onfocus="showProjects()" onblur="hideProjects()" onkeyup="searchProjects()">
            <ul id="search-project-list">
                <a href="Pages/Data_Blog_on_HIV/Data_Blog_on_HIV.html">
                    <li class="search-project-item" data-keywords="python">Data Driven Blog on HIV</li>
                </a>
                <a href="Pages/Data_Analytics_Exe/business_analytic_exe.html">
                    <li class="search-project-item" data-keywords="R data Latex">Employee Retention Analytics</li>
                </a>
                <a href="Pages/CND/CDN_Exeter.html">
                    <li class="search-project-item" data-keywords="MATLAB Latex">SIR Model in MATLAB</li>
                </a>
                <a href="Pages/Graphs_Coursework/Graphs_cw.html">
                    <li class="search-project-item" data-keywords="Mathematica Latex">Ontology Report</li>
                </a>
                <a href="Pages/Exeter_Diss/Exeter_Diss.html">
                    <li class="search-project-item" data-keywords="HTML CSS Latex">Exeter University Dissertation</li>
                </a>
            </ul>

<span class="search-icon" aria-label="Search">&#9816;</span>

        </div>
    `;
    document.getElementById('search-container-placeholder').innerHTML = searchHTML;
}

// Call the function to load the search container
loadSearchContainer();
