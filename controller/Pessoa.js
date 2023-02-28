import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT, documento INTEGER, tipo TEXT, senha TEXT)');
    });
}

export async function insertPessoa(pessoa) {
    openDb().then(db => {
        db.run('INSERT INTO Pessoa (nome, email, documento, tipo, senha) VALUES (?,?,?,?,?)', [pessoa.nome, pessoa.email, pessoa.documento, pessoa.tipo, pessoa.senha]);
    });
}

export async function updatePessoa(pessoa) {
    openDb().then(db => {
        db.run('UPDATE Pessoa SET nome=?, email=?, documento=?, tipo=?, senha=? WHERE id=?', [pessoa.nome, pessoa.email, pessoa.documento, pessoa.tipo, pessoa.senha, pessoa.id]);
    });
}