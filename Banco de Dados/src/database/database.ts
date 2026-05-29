import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseAsync('aluno.db');

export const initializeDatabase = () => {
    
    try{
        db?.execSync(
            'CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL, 
            cgu TEXT NOT NULL UNIQUE);
        ');

    }catch(error){
        console.error('Erro ao criara a tabela de alunos')
    }


};