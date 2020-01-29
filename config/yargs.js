const argv_options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l',
    },
}

const argv = require('yargs')
    .command(
        'listar',
        'Imprime en consola la tabla de multiplicar', argv_options)
    .command(
        'crear',
        'Crear o actualiza un archivo de la tabla de multiplicar', argv_options)
    .help()
    .argv;

module.exports = {
    argv
}