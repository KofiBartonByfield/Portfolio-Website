// search-container.js
function loadSearchContainer() {
    const searchHTML = `
        <div class="search-container">
            <input type="text" id="search-bar" class="search-bar" placeholder="R, Python, HTML, ..." onfocus="showProjects()" onblur="hideProjects()" onkeyup="searchProjects()">
            <ul id="search-project-list">
                <a href="Data_Blog_on_HIV.html">
                    <li class="search-project-item" data-keywords="python">Data Driven Blog on HIV</li>
                </a>
                <a href="business_analytic_exe.html">
                    <li class="search-project-item" data-keywords="R data Latex">Employee Retention Analytics</li>
                </a>
                <a href="CDN_Exeter.html">
                    <li class="search-project-item" data-keywords="MATLAB Latex">SIR Model in MATLAB</li>
                </a>
                <a href="Graphs_cw.html">
                    <li class="search-project-item" data-keywords="Mathematica Latex Excel">Ontology Report</li>
                </a>
                <a href="Exeter_Diss.html">
                    <li class="search-project-item" data-keywords="HTML CSS Latex">Exeter University Dissertation</li>
                </a>
                  <a href="CDN_Exeter_2.html">
                    <li class="search-project-item" data-keywords="MATLAB Latex">Chaos in a controlled population model</li>
                </a>
            </ul>

<span class="search-icon" aria-label="Search">&#9816;</span>
    </div>

    `;
    document.getElementById('search-container-placeholder').innerHTML = searchHTML;
}

// Call the function to load the search container
loadSearchContainer();
