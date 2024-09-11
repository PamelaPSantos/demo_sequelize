(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    await database.sync() //verifica os modelos do projeto com os dbs e checa se estão iguais.
})()