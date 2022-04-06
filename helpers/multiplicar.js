
const fs = require( 'fs' ); //file system para grabar los archivos en el pc
const colors = require('colors');

const crearArchivo = async( base, listar, hasta ) => {

    try {

        let salida = '';
        let consola = '';

        for ( i=1; i<=hasta; i++ ){

            // \n salto de linea
            salida += `${base} 'X' ${i} '=' ${base * i}\n`; // esto sera el .txt y no se deforma
            consola += `${base} ${'X'.blue} ${i} ${'='.red} ${base * i}\n`; // esto imprime en consola
            
        }

        if ( listar ){

            console.log('===================='.green);
            console.log(`  Tabla del ${ colors.magenta(base) } `);
            console.log('===================='.green);
            console.log(consola);

        }

        fs.writeFileSync( `./salida/Tabla-del-${base}.txt`, salida );

        // console.log(`Tabla del ${base} creada!!!`);

        return `Tabla del ${base} creada!!!`;

    } catch ( error ){

        throw error;
    }

}

module.exports = { //esto equivale al exports en javaScript

    crearArchivo
}




/*

const fs = require( 'fs' ); //file system para grabar los archivos en el pc

const crearArchivo = ( base, hasta ) => {

    console.log('====================');
    console.log(`  Tabla del ${base} `);
    console.log('====================');

    let salida = '';

    for ( i=1; i<=hasta; i++ ){

        salida += `${base} X ${i} = ${base * i}\n`; //    \n salto de linea
    }

    console.log(salida);

    fs.writeFileSync( `Tabla del ${base}.txt`, salida );

    console.log(`Tabla del ${base} creada!!!`);

}

module.exports = { //esto equivale al exports en javaScript

    crearArchivo
}


*/