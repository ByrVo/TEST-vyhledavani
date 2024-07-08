
 function downloadJSON() {
  if (searchResults.length === 0) {
      alert('Proveďte hledání před stažením JSON.'); // Upozornění na prázdné pole před stažením
      return;
  }
  
  const jsonData = JSON.stringify(searchResults, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'search_results.json';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
  }, 0);
}

function downloadXML() {
  if (searchResults.length === 0) {
      alert('Proveďte hledání před stažením XML.'); // Upozornění na prázdné pole před stažením
      return;
  }
  
  let xmlData = '<?xml version="1.0" encoding="UTF-8"?><results>';
  searchResults.forEach(item => {
      xmlData += `<item>
                      <title>${item.title}</title>
                      <link>${item.link}</link>
                      <text>${item.text}</text>
                  </item>`;
  });
  xmlData += '</results>';

  const blob = new Blob([xmlData], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'search_results.xml';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
  }, 0);
}
