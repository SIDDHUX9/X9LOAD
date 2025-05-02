// Load data for different shipments
const loadData = {
    "001": { origin: "Delhi", destination: "Mumbai", price: "₹25,000" },
    "002": { origin: "Bengaluru", destination: "Hyderabad", price: "₹18,000" },
    "003": { origin: "Chennai", destination: "Kolkata", price: "₹22,000" },
    "004": { origin: "Pune", destination: "Ahmedabad", price: "₹30,000" },
    "005": { origin: "Pune", destination: "Maharashtra", price: "₹31,000" }
};

// Get load ID from URL parameters
function getLoadIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('loadId');
}

// Display load details based on URL parameter
function displayLoadDetails() {
    const loadId = getLoadIdFromUrl();
    const details = loadData[loadId];
    const loadDetailsElement = document.getElementById('load-details');
    
    if (details) {
        loadDetailsElement.innerHTML = `
            <p><strong>Origin:</strong> ${details.origin}</p>
            <p><strong>Destination:</strong> ${details.destination}</p>
            <p><strong>Price:</strong> ${details.price}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        `;
    } else {
        loadDetailsElement.innerHTML = `<p class="error">Load details not found for ID: ${loadId}</p>`;
    }
}

// Handle form submission
document.getElementById("driver-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const loadId = getLoadIdFromUrl();
    const loadDetails = loadData[loadId];
    
    if (loadDetails) {
        // Get form values
        const driverName = document.getElementById('driver-name').value;
        const truckNumber = document.getElementById('truck-number').value;
        
        // Store driver details in localStorage
        localStorage.setItem('driverDetails', JSON.stringify({
            name: driverName,
            truckNumber: truckNumber,
            loadId: loadId,
            ...loadDetails
        }));
        
        // Redirect to confirmation page
        window.location.href = `confirmation.html?origin=${encodeURIComponent(loadDetails.origin)}&destination=${encodeURIComponent(loadDetails.destination)}&price=${encodeURIComponent(loadDetails.price)}`;
    } else {
        alert("Invalid Load ID");
    }
});

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayLoadDetails();
    
    // Focus on first input field
    document.getElementById('driver-name').focus();
});
