function search() {
	const apiKey = 'AIzaSyCw1N91nJ5leWXcGPBLVFD1hzQxlTKgEDU';  
	const searchEngineId = 'c6d5829d601784133';  
	const query = document.getElementById('searchInput').value;

	const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;

	fetch(url)
	  .then(response => response.json())
	  .then(data => {
		const results = data.items;
		const resultsDiv = document.getElementById('results');
		resultsDiv.innerHTML = '';  // Vyčištění předchozích výsledků

		if (results) {
		  results.forEach(item => {
			const title = item.title;
			const link = item.link;
			const keyWord = item.keyWord;

			const resultElement = document.createElement('div');
			resultElement.innerHTML = `<h3><a href="${link}" target="_blank">${title}</a></h3>
									   <p>${keyWord}</p>`;
			resultsDiv.appendChild(resultElement);
		  });
		} else {
		  resultsDiv.innerHTML = '<p>No results found.</p>';
		}
	  })
	  .catch(error => {
		console.error('Error:', error);
		const resultsDiv = document.getElementById('results');
		resultsDiv.innerHTML = '<p>Error fetching results.</p>';
	  });
  }

  
