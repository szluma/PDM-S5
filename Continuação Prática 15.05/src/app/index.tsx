import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import Cat from "../app/components/cat";

const App = () => {
    const router = useRouter();

    function irParatelaCadastro(){
        router.push('/telaCadastro');
    }

    return(
        <View style={{flex: 1, backgroundColor: "#8ebccd", alignContent: "center"}}>
            <Cat name={'Nim'} age={6}></Cat>
            <Button title= "Ir para Cadastro"
                onPress={irParatelaCadastro}>
            </Button>
        </View>
    )
}

export default App;