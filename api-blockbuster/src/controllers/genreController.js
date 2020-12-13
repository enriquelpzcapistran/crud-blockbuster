const connection = require('../config/connection');

function showGenres(req, res) {
    if (connection) {
        let sql = 'SELECT * FROM Generos';
        connection.query(sql, (err, Generos) => {
            if (err) {
                res.json(err);
            } else {
                res.json(Generos);
            }
        })
    }
}
function getGenre(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = 'SELECT * FROM Generos WHERE ID = ? '
        connection.query(sql, [id], (err, Genero) => {
            if (err) {
                res.json(err);
            } else {
                let msg = "";
                if (Genero === undefined || genero.length === 0)
                    msg = "Genero no encontrado"
                res.json({ data: genero, msg: msg })
            }

        })
    }
}
function addGenre(req, res) {
    if (connection) {
        const genero = req.body;
        if (!genero.Genero) {
            return res.status(400).send({ error: true, msg: "Información Obligatoria" })
        }
        let sql = 'insert into generos set ?';
        connection.query(sql, [genero], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: rows, msg: "Se agrego correctamente el genero" })
            }
        })
    }
}
function deleteGenre(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = 'DELETE FROM Generos WHERE ID = ?';
        connection.query(sql, [id], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                let msg = "";
                if (rows.affectedRows === 0) {
                    msg = "No existe el Genero en la BD"
                } else {
                    msg = "Genero eliminado con exito"
                }
                res.json({ error: false, data: rows, msg })
            }
        })
    }
}
module.exports = {
    showGenres,
    getGenre,
    deleteGenre,
    addGenre
}