document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("fullname").value.trim();
    let age = document.getElementById("Age").value;
    let email = document.getElementById("Email").value.trim();
    let game = document.getElementById("game").value;

    if (!name || !age || !email || !game) {
        alert("⚠️ Please fill in all required fields.");
        return;
    }
    if (isNaN(age) || age < 5 || age > 100) {
        alert("⚠️ Please enter a valid age between 5 and 100.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    alert("✅ Registration successful!");
    this.submit();
});