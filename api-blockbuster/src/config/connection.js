const mysql = require('mysql');
const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user":"root",
    "password": "root",
    "database": "bd-blockbuster"
}
const myConn = mysql.createConnection(objectConnection);
myConn.connect((err)=>{
    if(err){
        console.log("Error:", err);
    } else {
        console.log("Base de datos conectada satisfactoriamente");
    }
});
module.exports = myConn;