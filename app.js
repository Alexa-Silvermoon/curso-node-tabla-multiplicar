
const { crearArchivo } = require('./helpers/multiplicar.js'); //esto equivale al import en javaScript
const argv = require('./config/yargs.js');
const colors = require('colors'); //agrega colores en la consola o require('colors');

console.clear();

//bloque de yargs:
// console.log( process.argv );
// console.log( argv );
// console.log('base: yargs', argv.base);

// para ingresar base o hasta desde la consola:
// const [ , , arg3 = 'base = 5' ] = process.argv;
// const [ , base = 5  ] = arg3.split('=');



// crear tabla de multiplicar:
// const base = 2;      // tabla del...
// const hasta = 10;   // hasta el...

crearArchivo( argv.b, argv.l, argv.h ) // crearArchivo( base, listar, hasta )
        .then( mensaje => console.log( mensaje.rainbow )) //rainbow letras en colores de consola
        .catch( error => console.log( error ) );

//COMANDOS PARA EJECUTAR EN EL CMD:
// node app.js -b 6 -l -h 15
// node app.js -b 4 -l    en donde la base sera 4, se creara un .txt y quiero que me haga un listado en el cmd
// node app.js -b 5        en donde la base sera 5, se creara un .txt y NO quiero que me haga un listado en el cmd
//-b con alias base
//-l con alias listar
//-h con alias hasta
// node app.js --help      por si necesitas ayuda y descripcion
