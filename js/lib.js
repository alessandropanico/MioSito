// JavaScript per mostrare/nascondere il menu a tendina
var progettiLink = document.getElementById('progetti-link');
var progettiDropdown = document.getElementById('progetti-dropdown');

// Aggiungi l'event listener al link per mostrare/nascondere il menu a tendina
progettiLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita il comportamento di default del link
    progettiDropdown.style.display = (progettiDropdown.style.display === 'block') ? 'none' : 'block';
});

// Aggiungi l'event listener al documento per nascondere il menu a tendina se l'utente clicca altrove
document.addEventListener('click', function(event) {
    var targetElement = event.target;
    if (targetElement !== progettiLink && !progettiDropdown.contains(targetElement)) {
        progettiDropdown.style.display = 'none';
    }
});

//PORTA ALLA PAGINA "CHI SONO"
function chiSono() {
    window.location.href = "chisono.html";
  }


//IMMAGINE CHE SI SPOSTA NEL DIV NELLA HOME (Simile al sito di Luca)
window.addEventListener("scroll", function() {
    var scrollImg = document.getElementById("scrollImg");
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var translation = scrollTop * 0.4; // Modifica il valore 0.4 per regolare la velocità dello spostamento
  
    scrollImg.style.transform = "translateX(-" + translation + "px)";
  });


//INVIO EMAIL
function sendEmail() {
    var message = document.getElementById("message").value;
    var recipientEmail = "panico.alessandro1995@gmail.com";
    var subject = "Nuovo messaggio da form";

    var mailtoLink = "mailto:" + recipientEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
    window.location.href = mailtoLink;
}



