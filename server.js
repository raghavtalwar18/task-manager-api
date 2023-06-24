const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let tasks = []; // This will store our tasks
let currentId = 1; // This will be used to generate task IDs

// GET /tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /tasks/:id
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) {
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
});

// POST /tasks
app.post('/tasks', (req, res) => {
    if (!req.body.title || !req.body.description) {
        res.status(400).send('Invalid request body');
    } else {
        const task = {
            id: currentId++,
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed || false
        };
        tasks.push(task);
        res.json(task);
    }
});

// PUT /tasks/:id
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) {
        res.status(404).send('Task not found');
    } else if (!req.body.title && !req.body.description && req.body.completed === undefined) {
        res.status(400).send('Invalid request body');
    } else {
        if (req.body.title !== undefined) task.title = req.body.title;
        if (req.body.description !== undefined) task.description = req.body.description;
        if (req.body.completed !== undefined) task.completed = req.body.completed;
        res.json(task);
    }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === Number(req.params.id));
    if (index === -1) {
        res.status(404).send('Task not found');
    } else {
        const task = tasks[index];
        tasks.splice(index, 1);
        res.json(task);
    }
});


app.listen(3000, () => {
    console.log('Task Manager API is running on port 3000');
});
