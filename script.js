const prawidlowehaslo = 'MICHAlekdaWID3137';

function sprawdzHaslo() {
    const wprowadzonehaslo = prompt('Podaj Haslo:');
    if (wprowadzonehaslo === prawidlowehaslo) {
        document.body.style.display = 'block';
        alert('Haslo prawidlowe. Dostep zostal przyznany do strony w wersji BETA 0.8');
    } else {
        alert('Haslo nieprawidlowe. Odmowa dostepu.');
        window.location.reload();

    }
}


window.onload = sprawdzHaslo;