document.getElementById('resetForm').addEventListener('click', function () {
    document.getElementById('paymentForm').reset();
    clearErrors();
    document.getElementById('successMessage').style.display = 'none';
});

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => (error.style.display = 'none'));
}