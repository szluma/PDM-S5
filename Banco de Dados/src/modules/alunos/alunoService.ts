import {db} from '../../database/database';
import {Aluno} from './type';

export const AlunoService ={
    // C - Create
    inserir(nome:string, cgu: string): void{
        if(!db) return;
            db.runAsync('INSERT INTO alunos (nome, cgu) VALUES (?, ?);', [nome, cgu]);
    },
    // R - Read
    buscar todos(): Aluno []{
        if(!db) return [];
            return db.getAllSync('SELECT * FROM alunos;');
    },
    // U - Update 
    atualizar(id: number, nome: string, cgu: string): void{
        if(!db) return;
        db.runAsync('UPADTE alunos SET nome = ?, cgu = ? WHERE id = ?;', [nome, cgu, id]);
    },
    // D - Delete
    deletar(id:number): void{
        if(!db) return;
        db.runAsync('DELETE FROM alunos WHERE id = ?;', [id]);
    }
}