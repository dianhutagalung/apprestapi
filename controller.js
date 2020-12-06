'use strict';

const response = require('./res');
let connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
}

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            connection.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}

//menampilkan mahasiswa berdasarkan id
exports.tampilmahasiswa = function(req,res){
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa=?',[id], function(error, rows, fields){
        if(error){
            connection.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}

//menambah data mahasiswa
exports.tambahMahasiswa = function(req, res){
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',[nim,nama,jurusan], function(error, rows, fields){
        if(error){
            connection.log(error)
        }else{
            response.ok("Berhasil Menambahkan Data..",res)
        }
    })

}

//ubah data mahasiswa
exports.ubahDataMhs = function(req, res){
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',[nim,nama,jurusan,id], function(error, rows, fields){
        if(error){
            connection.log(error)
        }else{
            response.ok("Berhasil Update Data..",res)
        }
    })

}

//hapus data mahasiswa
exports.deleteDataMhs = function(req, res){
    let id = req.body.id_mahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id], function(error, rows, fields){
        if(error){
            connection.log(error)
        }else{
            response.ok("Berhasil Menghapus Data..",res)
        }
    })
}