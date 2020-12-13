const mysql = require('mysql');
const objectConnection = {
    "host": "127.0.0.1",
    "port": 3306,
    "user":"root",
    "password": "root",
    "database": "bdblockbuster"
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