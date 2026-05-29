import {Alert,
        Text,
        TextInput,
        TouchableOpacity,
        View} from "react-native";
        import {Styles} from ../style
import { styles } from "./style";

export default function CadastroAluno(){
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>Cadastro de Aluno</Text>

            <TextInput style={styles.input}placeholder="Nome do Aluno"/>
            <TextInput style={styles.input}placeholder="CGU do Aluno"/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTetx}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

