const hbs = require('hbs');

hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');

    for (const i in palabras) {
        let palabra = palabras[i];
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }

    return palabras.join(' ');

});