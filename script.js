let searchResults = []; 

function search() {
    const apiKey = 'AIzaSyCw1N91nJ5leWXcGPBLVFD1hzQxlTKgEDU';
    const searchEngineId = 'c6d5829d601784133';
    const query = document.getElementById('searchInput').value;

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('network response ok.');
            }
            return response.json();
        })
        .then(data => {
            const results = data.items;
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; 

            if (results && results.length > 0) {
                searchResults = results; 
                results.forEach(item => {
                    const title = item.title;
                    const link = item.link;
                    const text = item.text;

                    const resultElement = document.createElement('div');
                    resultElement.innerHTML = `<h3><a href="${link}" target="_blank" >${title} </a></h3>
                                               <p>${text}</p>`;
                    resultsDiv.appendChild(resultElement);
                });
            } else {
                resultsDiv.innerHTML = '<p>Nebyly nalezeny žádné výsledky.</p>';
                alert('Proveďte hledání před stažením PDF.'); // Upozornění na prázdné pole před stahováním
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const resultsDiv = document.getElementById('results');
            alert('Nebylo provedeno hledání.'); // Upozornění na nevypsaný input před vyhledáváním
        });
}