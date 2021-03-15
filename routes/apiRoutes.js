const fs = require('fs');
const note = require('../db/db.json');
const uuid = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(note));

    app.post('/api/notes', (req, res) => {
       const newId = uuid;
       req.body['id'] = newId;
       note.push(req.body);
       res.json(true);
       fs.writeFileSync('./db/db.json', JSON.stringify(note));
    });

    app.delete('/api/notes/:id', (req, res) => {
        const noteIndex = note.findIndex(id => id === req.params.id);
        note.splice(noteIndex, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(note));
        res.end();
    });
};

