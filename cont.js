
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 


    // Récupère les valeurs saisies dans les champs
    const name = document.querySelector("input[placeholder='Full Name']").value.trim();
    const email = document.querySelector("input[placeholder='Email Address']").value.trim();
    const phone = document.querySelector("input[placeholder='Mobile Number']").value.trim();
    const subject = document.querySelector("input[placeholder='Email Subject']").value.trim();
    const message = document.querySelector("textarea[placeholder='Your Message']").value.trim();

    // Définition des expressions régulières pour valider les champs
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const phonePattern = /^\d{8}$/; 
    const subjectPattern = /^[a-zA-Z\s]+$/; 

    // Validation de l'email
    if (!email.match(emailPattern)) {
        isValid = false; // Marquer le formulaire comme invalide
        displayError("Email Address", "Please enter a valid email address (e.g., example123@domain.com).");
    }

    // Validation du numéro de téléphone
    if (!phone.match(phonePattern)) {
        isValid = false;
        displayError("Mobile Number", "Please enter a valid 8-digit phone number.");
    }
    //permet d'extraire des correspondances à partir d'une chaîne de caractère

    // Validation du sujet
    if (!subject.match(subjectPattern)) {
        isValid = false;
        displayError("Email Subject", "Subject should only contain letters and spaces.");
    }

    // Validation des champs obligatoires
    if (name === "") {
        isValid = false;
        displayError("Full Name", "Please enter your full name.");
    }
    if (message === "") {
        isValid = false;
        displayError("Your Message", "Please enter your message.");
    }

    // Si toutes les validations sont passées
    if (isValid) {
        document.querySelector("#feedback").innerHTML = `<p class="success-message">Form submitted successfully!</p>`;
        document.querySelector("form").reset(); // Réinitialiser le formulaire
    }
});

// Fonction pour afficher les messages d'erreur
function displayError(fieldName, message) {
    const field = document.querySelector(`input[placeholder='${fieldName}'], textarea[placeholder='${fieldName}']`);
    field.classList.add("error"); // Ajoute la classe "error" pour souligner le champ incorrect

    const errorMsg = document.createElement("div"); // Crée un élément div pour afficher le message d'erreur
    errorMsg.classList.add("error-message"); // Applique une classe pour le style
    errorMsg.textContent = message; // Ajoute le texte du message d'erreur
    field.parentElement.appendChild(errorMsg); // Ajoute le message en dessous du champ
}
