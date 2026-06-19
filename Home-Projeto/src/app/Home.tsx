import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function TelaHome () {
    return(

    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.nome}>+Saúde</Text>
            <Image source={require("@/images/Folha.png")}/>
        </View>

        <View style={styles.lupa}>
            <Ionicons name="search-outline" size={28} color="white" />
        </View>

        <View style={styles.fundoB}>
            <View style={styles.card1}>
                <Ionicons name ="notifications-outline" size={28} color="black" />
                <Text>Agendamento de conversa com o médico Rubens Junior feito com sucesso!</Text>
            </View>

            <View style={styles.card1}>
                <Ionicons name ="notifications-outline" size={28} color="black" />
                <Text>O resultado do seu exame saiu! Verifique seu chat.</Text>
            </View>
            
        </View>

        <View style={styles.menu}>
            <Ionicons name="home-outline" size={28} color="#2B4F68" />
            <Ionicons name="document-text-outline" size={28} color="white" />
            <Ionicons name="play-circle-outline" size={35} color="white" />
            <Ionicons name="chatbubble-outline" size={28} color="white" />
            <Ionicons name="person-outline" size={28} color="white" />
        </View>

    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#8EBCCD",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 55,
    },

    nome: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold",
    },

    lupa: {
        position: "absolute",
        top: 60,
        right: 20,
    },

    fundoB: {
        flex: 1,
        width: "100%",
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        paddingTop: 30,
        gap: 10,
},

    card1: {
        backgroundColor: "#E2E2E2",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        width: "90%",
        borderRadius: 10,
        gap: 10,
},

    menu: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#8EBCCD",
    },
});