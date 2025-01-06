// Mask card number (e.g., 1234 5678 9012 3456)
document.getElementById('cardNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\s/g, ''); // Remove existing spaces
    value = value.replace(/\D/g, ''); // Remove non-digits
    value = value.replace(/(\d{4})/g, '$1 ').trim(); // Add space every 4 digits
    e.target.value = value;
});

// Mask expiry date (e.g., MM/YY)
document.getElementById('expiryDate').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4); // Add slash after MM
    }
    e.target.value = value;
});