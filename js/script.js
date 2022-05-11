alert('Adivina mi numero favorito.\n Pista: es entre el 20 y el 30');
let inicio = parseInt(prompt('Que comience el juego!!\n Escribe cuál pensas que es mi número favorito.'))


while (inicio != 24) {
    switch (inicio) {
        case 20:
            alert('Frío Otoñal. Lero Lero!!! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 21:
            alert('Seguí participando. Lero Lero!!! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 22:
            alert('Guarda que quema!!! Lero Lero!!! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 23:
            alert('Arde la ciudad!!! Lero Lero!!! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 25:
            alert('Ayyyyyy me prendo fuego!! Lero Lero!!! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 26:
            alert('Lo intentaste pero no fue suficiente, esta tibiecito. El número ' + inicio + ' no es mi número favorito.');
            break;

        case 27:
            alert('Lo intentaste, pero no...TIBIO!!! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 28:
            alert('Me aburro! ni cerca!. El número ' + inicio + ' no es mi número favorito.');
            break;

        case 29:
            alert('Dedicate a otra cosa... Estamos en el polo norte! El número ' + inicio + ' no es mi número favorito.');
            break;

        case 30:
            alert('Hoy claramente no es tu dia de suerte! El número ' + inicio + ' no es mi número favorito.');
            break;

        default:
            alert('Esa no es una opción válida, presta atención a las instrucciones!!');
            break;
    }
    inicio = parseInt(prompt('Que comience el juego!!\n Escribe cuál pensas que es mi número favorito.'));
}
alert('ADIVINASTE!!! EL 24 ES MI NÚMERO FAVORITO!!\n El premio pase a buscarlo por Avenida Siempre Viva 742');