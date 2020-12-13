const connection = require('../config/connection');

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
        const Pelicula = req.body;
        if(!Pelicula.titulo){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        if(!Pelicula.director){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        if(!Pelicula.anio){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        if(Pelicula.anio && Pelicula.Anio.length !==4){
            return res.status(400).send({error:true, msg:"Información Obligatoria(4 digitos)"})
        }
        if(!Pelicula.genero){
            return res.status(400).send({error:true, msg:"Información Obligatoria"})
        }
        let sql = 'INSERT INTO Peliculas SET ?';
        connection.query(sql,[Pelicula],(err,rows)=>{
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
        const { ID } = req.params;
        const Pelicula = req.body;
        let sql = 'UPDATE Peliculas SET ? WHERE ID = ?';
        connection.query(sql, [Pelicula,ID],(err,rows)=> {
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