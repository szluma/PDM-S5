// Primeira parte
import React from "react";
import { Text, TextInput, View } from "react-native";

const getFullName = (primeiroNome: string, segundoNome: string, terceiroNome: string) =>{
    return primeiroNome + " " + segundoNome + " " + terceiroNome;
}

const Dog = () =>{
    const name = "Miza"
    return(
        <Text> Olá, Eu sou a cadela {getFullName ("Miza", "Torres", "Pinheiro" )} </Text>
    );
}


// Segunda parte
// const Dog = (props: {name: string}) =>{
//     const name = "Hank"
//     return(
//         <View>
//             <Text> Olá, Eu sou o cachorro {props.name}!</Text>
//             {/* <TextInput style = {{height: 40, borderColor: 'gray', borderWidth:'1', borderRadius: '12'}} placeholder="Digite seu nome"></TextInput> */}
//         </View>
//     );
// }

export default Dog;