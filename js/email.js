document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("aziendaForm");
    const inviaButton = document.getElementById("inviaButtonEM");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        console.log("Submit button clicked");

        const nomeAzienda = document.getElementById("nomeAzienda").value;
        const emailAzienda = document.getElementById("emailAzienda").value;
        const cellulareAzienda = document.getElementById("cellulareAzienda").value;
        const messaggio = document.getElementById("messaggio").value;

        console.log("Dati registrati:");
        console.log("Nome:", nomeAzienda);
        console.log("Email:", emailAzienda);
        console.log("Cellulare:", cellulareAzienda);
        console.log("Messaggio:", messaggio);

        const emailData = {
            service_id: 'ServizioMio',
            template_id: 'TemplateMio',
            user_id: 'DYAuk3nJ1S4O-Y948',
            template_params: {
                nomeAzienda,
                emailAzienda,
                cellulareAzienda,
                messaggio,
            },
        };

        try {
            await emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id);
            const aziendaMessage = document.getElementById("aziendaMessage");
            aziendaMessage.textContent = "Informazioni inviate con successo!";
        } catch (error) {
            console.error("Errore nell'invio dell'email:", error);
        }
    });

    inviaButton.addEventListener("click", function(event) {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));
    });
});
