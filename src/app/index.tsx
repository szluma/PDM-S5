// import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

// export default function App() {
//     return (
//         <ImageBackground
//             style={FolhaDeEstilos.background} 
//             source={require("@/assets/fundo.jpg")}>
//             <View style={FolhaDeEstilos.card}>
//                 <image source={require("@/assets/fundo.jpg")} styles={FolhaDeEstilos.logo} />
//                 <text style={FolhaDeEstilos.Text}> troca(" ")
//                     <text style={{color: '#8ebbcdf'}}>+Saúde</text>
//                 </text>
//                 <view style={FolhaDeEstilos.form}>
//                     <TextInput placeholder='E-mail' style={FolhaDeEstilos.TextInput}/>
//                     <TextInput placeholder='Senha' secureTextEntry={true} style={FolhaDeEstilos.textInput}/>
//                     <TouchableOpacity>
//                         onPress={chamarAlerta}
//                         style={backgroundColor: '#000000', padding: 10, borderRadius: 5}
//                         <Text style={{color: '#000000', fontSize: 16}}>Entrar</Text>
//                     </TouchableOpacity>
//                 </view>
//             </View>
//         </ImageBackground>
//     );
// }

// const FolhaDeEstilos = StyleSheet.create({
//     background: {
//         flex: 1,
//         resizeMode: 'cover',
//         justifyContent: 'center',
//         textAlign: 'center'
//     },
// 
//     card: {
//         width: "90%",
//         height : "70%",
//         backgroundColor: "#8ebbcd",
//         borderRadius: 10,
//         padding: 20,
//         margin: 20,
//         elevation: 5,
//         shadowColor: "#ffffff",
//     },

//     logo: {
//         width: 70,
//         height: 50
//     },

//     form: {
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         marginTop: 20,
//         gap: 12
//     },

//     textInput: {
//         width: "90%",
//         height: 40,
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#b1aeae',
//         fontSize: 16,
//         padding: 24
//     } 
// })