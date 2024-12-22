// Définition des bonnes réponses
const correctAnswers = {
    q1: "b", 
    q2: "a", 
    q3: "b", 
    q4: "c", 
    q5: "a", 
    q6: "a", 
    q7: "a", 
    q8: "b", 
    q9: "b", 
    q10: "a", 
    q11: "a", 
    q12: "c", 
    q13: "b", 
    q14: "b", 
    q15: "a"
};

// Sélectionne le bouton avec l'ID "submit-btn" et attache un gestionnaire d'événement pour écouter les clics.
// Lorsque le bouton est cliqué, la fonction définie est exécutée pour déclencher les actions associées.
document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0; // Initialiser le score
    const totalQuestions = Object.keys(correctAnswers).length; // Calculer le nombre total de questions // Object.keys() pour obtenir un tableau contenant toutes les clés de l'objet correctAnswers.
    const incorrectAnswers = []; // Liste des réponses incorrectes
    let resultText = ""; // Texte pour afficher les résultats

    // Vérification des réponses de chaque question
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`); // Récupérer la réponse de l'utilisateur
        const correctAnswer = correctAnswers[`q${i}`]; // Récupérer la bonne réponse
        const questionContainer = document.querySelector(`#question-${i}`); // Conteneur de la question

        if (!questionContainer) continue; // Si le conteneur de la question est introuvable, passer à la question suivante

        if (userAnswer) {
            const answerLabels = questionContainer.querySelectorAll('label'); // Récupérer les labels des réponses

            // Réinitialiser les labels en supprimant les symboles "✓" et "✘"
            answerLabels.forEach(label => {
                label.innerHTML = label.innerHTML.replace(' ✓', '').replace(' ✘', '');
            });

            // Ajouter les symboles "✓" et "✘" pour les réponses correctes et incorrectes
            answerLabels.forEach(label => {
                const input = label.querySelector('input');
                if (input.value === correctAnswer) {
                    label.innerHTML += " ✓"; // Bonne réponse
                } else if (input.value === userAnswer.value) {
                    label.innerHTML += " ✘"; // Mauvaise réponse
                }
            });

           
            if (userAnswer.value === correctAnswer) {
                score++;
                questionContainer.style.backgroundColor = "lightgreen"; // Bonne réponse
            } else {
                incorrectAnswers.push(i); // Ajouter la question à la liste des erreurs
                questionContainer.style.backgroundColor = "lightcoral"; // Mauvaise réponse
            }
        } else {
            // Si aucune réponse n'est sélectionnée, marquer comme incorrecte
            incorrectAnswers.push(i);
            questionContainer.style.backgroundColor = "lightcoral"; // Marquer incorrecte
        }
    }

    // Affichage du score avec couleur conditionnelle
    resultText += `
    <div class="score ${score < 8 ? 'red' : 'green'}">
        Your score: ${score} / ${totalQuestions}
    </div>`;

   
    if (score === totalQuestions) {
        resultText += `<p class="message "><strong>Well done! You have all the correct answers.</strong></p>`; // Message pour score parfait
        let utterance = new SpeechSynthesisUtterance("Congratulations, you are a champion! You scored a perfect score! Keep it up!");
        speechSynthesis.speak(utterance); 

    } else if (score >= 8) {
        resultText += `<p class="message "><strong>Well done! You have a good score.</strong></p>`; // Message pour score entre 8 et 14
    }

    else {
        resultText += `<p class="message "><strong>Try again! There are some mistakes.</strong></p>`; // Message pour score inférieur à 8
    }

    // Afficher les bonnes réponses pour les questions incorrectes
    if (incorrectAnswers.length > 0) {
        resultText += `<div class="incorrect-answers">
                        <strong> Here are the correct answers:</strong><ul>`;
        incorrectAnswers.forEach((questionNumber) => {
            resultText += `<li>Question ${questionNumber}: The correct answer is "<strong>${correctAnswers[`q${questionNumber}`]}</strong>"</li>`;
        });
        resultText += `</ul></div>`; // Liste des réponses correctes pour les questions incorrectes
    }

    // Affichage des résultats 
    document.getElementById("result").innerHTML = resultText;

    // Désactiver les interactions après soumission
    document.getElementById("submit-btn").disabled = true; // Désactiver le bouton de soumission
    document.querySelectorAll("input[type='radio']").forEach(input => input.disabled = true); // Désactiver tous les choix de réponses
});


let timeLimit = 120; 
let timerInterval = setInterval(function () {
    timeLimit--; 

    let minutes = Math.floor(timeLimit / 60); 
    let seconds = timeLimit % 60; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    document.getElementById("timer").innerText = `Temps restant : ${minutes}:${seconds}`; 

    if (timeLimit <= 0) {
        clearInterval(timerInterval); 
        document.getElementById("submit-btn").click(); 
    }
}, 1000);
