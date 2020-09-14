let descripcion = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

let completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('listar', 'Lista el contenido de la base de datos', { descripcion })
    .command('borrar', 'Borra el elemento de la base de datos que coincide con la tarea indicada', { descripcion })
    .command('actualizar', 'Actualizar el estado completado de una tarea', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}