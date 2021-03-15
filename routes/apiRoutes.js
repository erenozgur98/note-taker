const note = require('../db/db.json');

module.exports = (app) => {
    app.get('./api/notes', (req, res) => res.json(note));

    app.post('./api/notes', (req, res) => {
       note.push(req.body);
       res.json(true);
    });
}