// Primeira parte
import React from "react";
import { Text, TextInput, View } from "react-native";

const getFullName = (primeiroNome: string, segundoNome: string, terceiroNome: string) =>{
    return primeiroNome + " " + segundoNome + " " + terceiroNome;
}

const Cat = () =>{
    const name = "Pequeno"
    return(
            <Text> Olá, Eu sou o gato {getFullName ("Nim", "de Moura", "Vieira")}</Text>
    );
}


// Segunda parte
// const Cat = (props: {name: string}) =>{
//     const name = "Pequeno"
//     return(
//         <View>
//             <Text> Olá, Eu sou o gato {props.name}!</Text>
//             {/* <TextInput style = {{height: 40, borderColor: 'gray', borderWidth:'1', borderRadius: '12'}} placeholder="Digite seu nome"></TextInput> */}
//         </View>
//     );
// }

export default Cat;