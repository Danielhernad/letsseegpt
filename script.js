// Update the current date and time every second
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    document.getElementById('datetime').innerText = now.toLocaleString(undefined, options);
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set immediately on load
