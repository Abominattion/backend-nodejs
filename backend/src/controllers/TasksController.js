// Importando o model Task
const Task = require('../models/Task');

const getAll = async (req, res) => {
    // Peganado a função getAll do model Task
    const tasks = await Task.getAll();
    // Retorna o status 200 e o JSON com as tarefas
    res.status(200).json(tasks);
};

module.exports = {
    getAll
};