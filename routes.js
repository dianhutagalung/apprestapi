'use srict';

module.exports = function(app){
    let jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/mhs')
    .get(jsonku.tampilsemuamahasiswa)

    app.route('/mhs/:id')
    .get(jsonku.tampilmahasiswa)

    app.route('/mhs')
    .post(jsonku.tambahMahasiswa)

    app.route('/mhs')
    .put(jsonku.ubahDataMhs)

    app.route('/mhs')
    .delete(jsonku.deleteDataMhs)

    app.route('/mhsmatkul')
    .get(jsonku.tampilgroupmatakuliah)
}