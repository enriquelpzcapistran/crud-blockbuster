const connection = require('../config/conmection');

function showMovies(req,res)
{
    if(connection){
        let sql = 'SELECT * FROM Peliculas';
        connection.query(sql,(err,Peliculas)=>{
            if(err){
                res.json(err);
            }else{
                res.json(Peliculas);
            }
        })
    }
}
function searchMovie(req,res){
    if(connection){
        const {id} = req.params;
        let sql = 'Select * FROM Peliculas WHERE ID = ? '
        connection.query(sql,[id],(err,Pelicula)=>{
            if(err){
                res.json(err);
            }else{
                let msg ="";
                if(Pelicula === undefined || Pelicula.length ===0)
                msg = "La Película no se encuentra en la BD"
                res.json({data: pelicula, msg:msg})
            }

        })
    }
}
function addMovie(req,res){
    if(connection){
        const pelicula = req.body;
        if(!pelicula.titulo){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        if(!pelicula.director){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        if(!pelicula.anio){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        if(pelicula.anio && pelicula.anio.length !==4){
            return res.status(400).send({error:true, msg:"Información Obligatoria(4 digitos)"})
        }
        if(!pelicula.genero){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        let sql = 'INSERT INTO Oeliculas SET ?';
        connection.query(sql,[pelicula],(err,rows)=>{
            if(err){
                res.json(err);
            } else {
                res.json({error:false, data: rows, msg:"Película agregada exitosamente"})
            }
        })
    }
}
function modifyMovie(req, res){
    if(connection){
        const { id } = req.params;
        const pelicula = req.body;
        let sql = 'UPDATE Peliculas SET ? WHERE ID = ?';
        connection.query(sql, [pelicula,id],(err,rows)=> {
            if(err){
                res.json(err);
            } else{
                let msg = "";
               if(rows.changedRows ===0)
                msg = "Información SIN CAMBIOS"
               else
                msg = "Pelicula modificada con exito"
                res.json({error:false,data: rows,msg:msg})
            }
        })
    }
}
function deleteMovie(req,res){
    if(connection){
        const {id} = req.params;
        let sql = 'DELETE FROM Peliculas WHERE ID = ?';
        connection.query(sql,[id],(err,rows)=>{
            if(err){
                res.json(err);
            } else {
                let msg = "";
                if(rows.affectedRows ===0){
                    msg = "No hubo coincidencias con la pelicula por eliminar"
                }else{
                    msg = "Pelicula eliminado con exito"
                }
                res.json({error:false,data:rows,msg})
            }
        })
    }

}
module.exports ={
    showMovies,
    modifyMovie,
    deleteMovie,
    searchMovie,
    addMovie,
}