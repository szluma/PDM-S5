import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const Cat = (propsCat: { name: string, age: number }) =>{
    const [isHungry, setIsHungry] = useState(true);

    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 20, fontWeight: "bold"}}> Olá, Eu sou o gato(a) {propsCat.name}! E tenho {propsCat.age} anos.</Text>
            </View>
            <Button 
            onPress={() => {
                setIsHungry(false);
            }}
            disabled={!isHungry}
            title={isHungry? "Por favor, me dê um pouco de comida!": "Obrigado!"}>
            </Button>
        </View>
    );
}

export default Cat;