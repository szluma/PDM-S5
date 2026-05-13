// Primeira parte
import React from "react";
import Cat from "@/src/components/cat"
import Dog from "@/src/components/dog"
import { ScrollView } from "react-native";

const App = () =>{
    return(
      <ScrollView style={{flex: 1, backgroundColor: "#8ebccd", alignContent: "center"}}>
        <Cat></Cat>
        <Dog></Dog>
      </ScrollView>
  );
}


// Segunda parte (gato)
// import React from "react";
// import Cat from "@/src/components/cat"
// import Dog from "@/src/components/dog"
// import { ScrollView, Text } from "react-native";

// const App = () =>{
//   return(
//     <ScrollView style={{flex: 1, backgroundColor: "#8ebccd", alignContent: "center"}}>
//       <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Bar dos gatos!</Text>
//       <Cat name="Nim"></Cat>
//       <Cat name="Pelé"></Cat>
//       <Cat name="Cherry"></Cat>
//     </ScrollView>
// );
// }

//Segunda parte (cachorro)
// import React from "react";
// import Cat from "@/src/components/cat"
// import Dog from "@/src/components/dog"
// import { ScrollView, Text } from "react-native";

// const App = () =>{
//   return(
//     <ScrollView style={{flex: 1, backgroundColor: "#8ebccd", alignContent: "center"}}>
//       <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Bar dos cachorros!</Text>
//       <Dog name="Miza"></Dog>
//       <Dog name="Tom"></Dog>
//       <Dog name="Dobby"></Dog>
//     </ScrollView>
// );
// }

export default App;