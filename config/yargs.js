
const  argv  = require('yargs')
.option('b', {

    alias: 'base',
    type: 'number',
    demandOption: true, //opcion obligatoria
    describe: 'Es la base de la tabla de multilicar'

}).option('l', {

    alias: 'listar',
    type: 'boolean',
    // demandOption: true,
    default: false, //listar no es obligatorio, imprimir en consola no es obligatorio
    describe: 'Muestra la tabla en consola'

}).option('h', {

    alias: 'hasta',
    type: 'number',
    demandOption: true, //opcion obligatoria
    describe: 'Es el limite de la tabla'

}).check( (argv, options) => {

    // console.log('yargs', argv)
    if ( isNaN( argv.b ) ){ //is Not a Number

        throw 'La base tiene que ser un numero'
    }

    if ( isNaN( argv.h ) ){

        throw 'El hasta tiene que ser un numero'
    }

    return true;

})
.argv;

module.exports = argv;
