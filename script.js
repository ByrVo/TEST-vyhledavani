let searchResults = [];

async function search() {
    const apiKey = 'AIzaSyCw1N91nJ5leWXcGPBLVFD1hzQxlTKgEDU';
    const searchEngineId = 'c6d5829d601784133';
    const query = document.getElementById('searchInput').value;

    if (!query) {
        alert('Prosím, zadejte hledaný výraz.');
        return;
    }

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('network response not ok.');
        }
        const data = await response.json();
        const results = data.items || [];

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (results.length > 0) {
            searchResults = results;
            results.forEach(item => {
                const { title, link, snippet } = item;
                const resultElement = document.createElement('div');
                resultElement.innerHTML = `<h3><a href="${link}" target="_blank">${title}</a></h3>
                                           <p>${snippet}</p>`;
                resultsDiv.appendChild(resultElement);
            });
        }
    } catch (error) {
        console.error('Error: chyba vyhledávání', error);
        alert('Chyba při vyhledávání.');
    }
}