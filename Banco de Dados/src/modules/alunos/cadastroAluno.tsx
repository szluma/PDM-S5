import {Alert,
        Text,
        TextInput,
        TouchableOpacity,
        View} from "react-native";
import { styles } from "./style";
import { AlunoService } from "./alunoService";
import { useState } from "react";

export default function CadastroAluno(){
    const [nome, setNome] = useState('');
     const [cgu, setcgu] = useState('');

    const handleSalvar = () => {
        // Lógica para salva o aluno usando AlunoService.inserir(nome)

        try{
            AlunoService.inserir(nome,cgu);
            setNome('');
            setcgu('');
        }catch(error){
            console.error('Erro ao salvar o aluno:', error);
        }
    };


    return(
        <View style={styles.container}>
            <Text style ={styles.title}>Cadastro de Aluno</Text>

            <TextInput 
            style={styles.input} 
            value={nome} 
            placeholder="Nome do Aluno" 
            onChangeText={setNome}/>

            <TextInput 
            style={styles.input} 
            value={cgu}
            placeholder="CGU do Aluno"
            onChangeText={setcgu}/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTetx}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}