//INVIO DATI TRAMITE WHATSAPP
document.addEventListener("DOMContentLoaded", function () {
    const inviaButton = document.getElementById("inviaButtonWH");

    inviaButton.addEventListener("click", async function (event) {
        event.preventDefault();

        const nomeAzienda = document.getElementById("nomeAzienda").value;
        const emailAzienda = document.getElementById("emailAzienda").value;
        const cellulareAzienda = document.getElementById("cellulareAzienda").value;
        const messaggio = document.getElementById("messaggio").value;

        console.log("Dati registrati:");
        console.log("Nome:", nomeAzienda);
        console.log("Email:", emailAzienda);
        console.log("Cellulare:", cellulareAzienda);
        console.log("Messaggio:", messaggio);

        const message = `Nuova richiesta da parte di una azienda:
        Nome azienda: ${nomeAzienda}
        Email azienda: ${emailAzienda}
        Cellulare azienda: ${cellulareAzienda}
        Messaggio: ${messaggio}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/3664629084?text=${encodedMessage}`; //INSERIRE NUMERO DI TELEFONO ADEGUATO

        window.open(whatsappLink, '_blank');
    });
});
