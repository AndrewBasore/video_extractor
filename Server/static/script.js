var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

// Add Event Handler to Button
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

// Create function for Event Handler to trigger
function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}