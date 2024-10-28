// caesarEncrypt

function caesarEncrypt(text, shift) {
    return text.split('').map(function(char) {
        let code = char.charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            let lowerBoundary = (code >= 97) ? 97 : 65; 
            return String.fromCharCode(((code - lowerBoundary + shift) % 26) + lowerBoundary);
        }
        return char;
    }).join('');
}

//caesarDecrypt
function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, 26 - shift);
}

// vigenereEncrypt

function vigenereEncrypt(text, key) {
    let encryptedText = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = char === char.toUpperCase();
            let keyChar = key[j % key.length].toLowerCase(); 
            encryptedText += caesarEncrypt(char, shift);
            j++;
        } else {
            encryptedText += char; 
        }
    }
    return encryptedText;
}

//vigenereDecrypt
function vigenereDecrypt(text, key) {
    let decryptedText = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            let keyChar = key[j % key.length].toLowerCase();
            let shift = keyChar.charCodeAt(0) - 97;
            decryptedText += caesarDecrypt(char, shift);
            j++;
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}


document.getElementById('convert').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    var cipherType = document.getElementById('cipherType').value;
    var key = document.getElementById('key').value;
    var encrypted;

    if (cipherType === 'base64') {
        encrypted = btoa(unescape(encodeURIComponent(password)));
    } else if (cipherType === 'caesar') {
        var shift = parseInt(key) || 0;
        encrypted = caesarEncrypt(password, shift);
    } else if (cipherType === 'vigenere') {
        encrypted = vigenereEncrypt(password, key);
    }

    document.getElementById('encrypted').textContent = encrypted;
});


document.getElementById('convert-dec').addEventListener('click', function() {
    var password = document.getElementById('password-dec').value;
    var cipherType = document.getElementById('cipherTypeDec').value;
    var key = document.getElementById('key-dec').value;
    var decrypted;

    if (cipherType === 'base64') {
        decrypted = decodeURIComponent(escape(atob(password)));
    } else if (cipherType === 'caesar') {
        var shift = parseInt(key) || 0;
        decrypted = caesarDecrypt(password, shift);
    } else if (cipherType === 'vigenere') {
        decrypted = vigenereDecrypt(password, key);
    }

    document.getElementById('decrypted').textContent = decrypted;
});


document.getElementById('enc').addEventListener('click', function() {
    document.querySelector('.global').style.display = 'none';
    document.querySelector('.global1').style.display = 'grid';
});

document.getElementById('dec').addEventListener('click', function() {
    document.querySelector('.global').style.display = 'grid';
    document.querySelector('.global1').style.display = 'none';
});
