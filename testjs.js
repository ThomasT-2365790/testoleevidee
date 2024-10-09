function fetchAndDownloadPage() {
    fetch(window.location.href)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netwerkreactie was niet ok');
            }
            return response.text();
        })
        .then(text => {
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'current_page.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log('Download gestart!');
        })
        .catch(error => {
            console.error('Fout bij het ophalen of downloaden van de pagina:', error);
        });
}
