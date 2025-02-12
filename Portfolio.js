document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const targetPosition = targetSection.offsetTop;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let startTime = null;
                
                function scrollAnimation(currentTime) {
                    if (!startTime) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    window.scrollTo(0, startPosition + distance * progress);

                    if (timeElapsed < duration) {
                        requestAnimationFrame(scrollAnimation);
                    }
                }
                
                requestAnimationFrame(scrollAnimation);
            }
        });
    });
});

// Feedback Modal (nicht löschen)
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackModal = document.getElementById('feedbackModal');
const closeBtn = document.getElementById('closeBtn');

feedbackBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === feedbackModal) {
        feedbackModal.style.display = 'none';
    }
});

// Bild-Modal für Projektbilder
document.addEventListener('DOMContentLoaded', function() {
    // Suche alle Projektbilder
    const projectImages = document.querySelectorAll('.project-gallery img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');
    const closeModal = document.getElementById('closeModal');

    // Event-Listener für jedes Projektbild hinzufügen
    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';  // Modal anzeigen
            modalImage.src = this.src;    // Setzt das Bild im Modal
            modalText.textContent = this.alt; // Setzt den Text unter das Bild
        });
    });

    // Schließen des Modals
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Schließt das Modal
    });

    // Modal schließen, wenn außerhalb des Inhaltsbereichs geklickt wird
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// ____________________________________-


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('feedback-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite

        // Formulardaten erfassen (dies könnte in einer echten Anwendung an einen Server gesendet werden)
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Hier würdest du normalerweise eine Anfrage an deinen Server senden (AJAX, Fetch, etc.)
        // Da wir ohne Backend arbeiten, machen wir einfach so, als ob etwas schiefgeht.

        // Simuliere einen Fehler beim "Senden"
        setTimeout(function() {
            alert("❌ Die Funktion ist momentan in Bearbeitung. Bitte versuche es später erneut.");
        }, 500);
    });
});
