import { View, ActivityIndicator, Text } from 'react-native';
import CadastroAluno from '../modules/alunos/cadastroAluno';
import { initializeDatabase } from '@/database/database';
import { useEffect, useState } from 'react';

export default function App() {
    const [dbinicialized, setDBinicialized] = useState(false);
    useEffect(() => {
        try{
            // initializeDatabase();
            setDBinicialized(true);
        }catch(error){
            console.error('Erro ao inicializar o banco de dados: ', error)
        }
    }, []);

    if(!dbinicialized){
        return (
        <View>
            <ActivityIndicator size="large" color="#0f659e"/>
            <Text>Inicializando bando de dados...</Text>
        </View>
        );
    }
    return(
        <View>
            <CadastroAluno/>
        </View>
    );
}