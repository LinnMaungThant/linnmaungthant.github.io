document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Validate inputs
    const isCardNumberValid = validateCardNumber();
    const isExpiryDateValid = validateExpiryDate();
    const isCVVValid = validateCVV();
    const isNameValid = validateName();

    // If all inputs are valid, show success message
    if (isCardNumberValid && isExpiryDateValid && isCVVValid && isNameValid) {
        document.getElementById('successMessage').style.display = 'block';
    }
});

// Validate Card Number (16 digits, numeric only)
function validateCardNumber() {
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, ''); // Remove spaces
    const cardNumberError = document.getElementById('cardNumberError');

    if (/^\d{16}$/.test(cardNumber)) {
        return true;
    } else {
        cardNumberError.style.display = 'block';
        return false;
    }
}

// Validate Expiration Date (MM/YY, future date)
function validateExpiryDate() {
    const expiryDate = document.getElementById('expiryDate').value;
    const expiryDateError = document.getElementById('expiryDateError');

    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Last two digits of the year
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed

    if (
        /^\d{2}\/\d{2}$/.test(expiryDate) &&
        month >= 1 && month <= 12 &&
        (year > currentYear || (year == currentYear && month >= currentMonth))
    ) {
        return true;
    } else {
        expiryDateError.style.display = 'block';
        return false;
    }
}

// Validate CVV (3 or 4 digits, numeric only)
function validateCVV() {
    const cvv = document.getElementById('cvv').value;
    const cvvError = document.getElementById('cvvError');

    if (/^\d{3,4}$/.test(cvv)) {
        return true;
    } else {
        cvvError.style.display = 'block';
        return false;
    }
}

// Validate Name on Card (alphabetic characters only)
function validateName() {
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');

    if (/^[A-Za-z\s]+$/.test(name)) {
        return true;
    } else {
        nameError.style.display = 'block';
        return false;
    }
}

// Clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => (error.style.display = 'none'));
    document.getElementById('successMessage').style.display = 'none';
}