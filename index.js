const http = require('http');
const express = require('express');

const lessonsRoutes = require('./routes/api/v1/lessons');
const studentsRoutes = require('./routes/api/v1/students');
const teachersRoutes = require('./routes/api/v1/teachers');
const groupsRoutes = require('./routes/api/v1/groups');

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/api/v1/lessons', lessonsRoutes);
app.use('/api/v1/students', studentsRoutes);
app.use('/api/v1/teachers', teachersRoutes);
app.use('/api/v1/groups', groupsRoutes);

app.get('*', (req, res) => {
    res.send({
        req: 'GET index'
    })
});

app.use((error, req, res, next) => {
    res.send({
        error: error.message
    });
});

const server = http.createServer(app);

server.listen(5000);
console.log(`Server running at http://www.localhost:5000`);
