const fs = require('fs');
let listadoPorHacer = [];

const cargarDb = () => {
    try {
        listadoPorHacer = require('../Db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {

    cargarDb();
    return listadoPorHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./Db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar ', err);
    });

}

const crear = (descripcion) => {
    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}