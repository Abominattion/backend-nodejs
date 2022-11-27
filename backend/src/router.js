const express = require('express');
const router = express.Router();

// Importa o controller
const taskController = require('./controllers/TasksController');

// Rotas
router.all('/', (req, res) => res.status(200).send("API service"));
router.get('/tasks', taskController.getAll);

module.exports = router;