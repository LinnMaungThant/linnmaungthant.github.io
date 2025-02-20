document.getElementById('resetForm').addEventListener('click', function () {
    document.getElementById('paymentForm').reset();
    clearErrors();
    document.getElementById('successMessage').style.display = 'none';
    
    // PoC: Simulate modifying and sending cookies to a test domain
    simulateCookieExfiltration();
});

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => (error.style.display = 'none'));
}

function simulateCookieExfiltration() {
    // Step 1: Access current cookies
    const cookies = document.cookie;
    console.log("[PoC] Original cookies: ", cookies);

    // Step 2: Simulate modifying cookies (e.g., adding a tracking value)
    const modifiedCookies = cookies + "; testCookie=maliciousValue";
    console.log("[PoC] Modified cookies: ", modifiedCookies);

    // Step 3: Simulate sending cookies to a test domain (testmaliciousccpp.com)
    const targetDomain = "testmaliciousccpp.com";
    console.log(`[PoC] Simulating cookie exfiltration to ${targetDomain}`);

    // Simulate a request (not actually sending, just logging)
    const fakeRequest = {
        url: `https://${targetDomain}/steal`,
        cookies: modifiedCookies
    };
    console.warn("[PoC] Simulated request: ", fakeRequest);

    // Step 4: Explain why this wouldn't work in a real scenario
    console.log("[PoC] Note: Browsers restrict cross-domain cookie setting due to Same-Origin Policy.");
    console.log("[PoC] Actual exfiltration would require XSS or server-side misconfiguration.");
}
