const mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_mahasiswa'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("database terhubung..")
})

module.exports = conn;