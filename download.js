window.jsPDF = window.jspdf.jsPDF;

function downloadPDF() {
  var elementHTML = document.querySelector("#results");
  var docPDF = new jsPDF();
    if (searchResults.length === 0) {
      alert('Proveďte hledání alespoň jednou před stahováním PDF.'); // Upozornění na opětovné provedení hledání
      return;
    }

  html2canvas(elementHTML).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 300; // A4 šířka v mm
      var pageHeight = 300; // A4 výška v mm
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var position = 0;

      docPDF.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          docPDF.addPage();
          docPDF.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
      }

      docPDF.save('search_results.pdf');
  });

 }