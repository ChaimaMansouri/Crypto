document.addEventListener('DOMContentLoaded', function() {
    // Au chargement de la page, afficher la section .global1
    document.querySelector('.global').style.display = 'none'; // Masquer .global par défaut
    document.querySelector('.global1').style.display = 'grid'; // Afficher .global1 par défaut
    
    // Ajouter l'écouteur d'événement pour le bouton Convert (Encryption)
    document.getElementById('convert').addEventListener('click', function() {
        var password = document.getElementById('password').value;
        var encrypted = btoa(unescape(encodeURIComponent(password)));
        document.getElementById('encrypted').textContent = encrypted;
    });
    
    // Ajouter l'écouteur d'événement pour le bouton Convert-Dec (Decryption)
    document.getElementById('convert-dec').addEventListener('click', function() {
        var password = document.getElementById('password-dec').value;
        var decrypted = decodeURIComponent(escape(atob(password)));
        document.getElementById('decrypted').textContent = decrypted;
    });

    // Ajouter l'écouteur d'événement pour le bouton Encryption
    document.getElementById('enc').addEventListener('click', function() {
        document.querySelector('.global').style.display = 'none';
        document.querySelector('.global1').style.display = 'grid';
    });

    // Ajouter l'écouteur d'événement pour le bouton Decryption
    document.getElementById('dec').addEventListener('click', function() {
        document.querySelector('.global').style.display = 'grid';
        document.querySelector('.global1').style.display = 'none';
    });
});
