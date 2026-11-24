
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Haetaan lomakkeen kentät
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        const status = document.getElementById("form-status");

        // Tyhjennetään vanhat virheilmoitukset
        document.querySelectorAll(".error-message").forEach(function(error) {
            error.textContent = "";
        });

        document.querySelectorAll(".form-error").forEach(function(field) {
            field.classList.remove("form-error");
        });

        status.textContent = "";
        status.className = "";

        let isValid = true;

        // Tarkistetaan nimi
        if (name.value.trim() === "") {
            showError(name, "name-error", "Kirjoita nimesi.");
            isValid = false;
        }

        // Tarkistetaan sähköposti
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            showError(email, "email-error", "Tarkista sähköpostiosoitteesi.");
            isValid = false;
        }

        // Tarkistetaan aihe
        if (subject.value === "") {
            showError(subject, "subject-error", "Valitse viestin aihe.");
            isValid = false;
        }

        // Tarkistetaan viesti
        if (message.value.trim() === "") {
            showError(message, "message-error", "Kirjoita viestisi.");
            isValid = false;
        }

        // Jos löytyy virheitä
        if (!isValid) {
            status.textContent = "Tarkista lomakkeessa olevat virheet.";
            status.className = "failure";
            return;
        }

        // Jos kaikki tiedot ovat kunnossa
        status.textContent =
            "Kiitos! Viestisi on valmis. Tämä lomake ei vielä lähetä sähköpostia.";

        status.className = "success";

        form.reset();
    });

    function showError(field, errorId, text) {
        document.getElementById(errorId).textContent = text;
        field.classList.add("form-error");
    }
}
