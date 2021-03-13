const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended = true}));
app.use(express.json());


app.get('/', (res, req) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (res, req) => res.sendFile(path.join(__dirname, '/public/notes.html')));