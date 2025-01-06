document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const name = document.getElementById('name').value;

    // Predefined test card data
    const testCardNumber = '1234567812345678';
    const testExpiryDate = '12/24';
    const testCVV = '123';
    const testName = 'Test User';

    // Check if the entered data matches the test data
    if (
        cardNumber === testCardNumber &&
        expiryDate === testExpiryDate &&
        cvv === testCVV &&
        name === testName
    ) {
        // Payment successful
        document.getElementById('message').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
    } else {
        // Payment failed
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('message').style.display = 'none';
    }
});