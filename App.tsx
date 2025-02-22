import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MeuBotao from './componentes/MeuBotao';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <MeuBotao titulo="Clique aqui" 
      OnPress={()=>{Alert.alert("Atenção", "Botão /clicado")}}>
      </MeuBotao>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    flex: 1,
    backgroundColor: '#000',
    elevation: 10,
    shadowColor: "#000",
   shadowOffset: {
    width: 5,
    height: 10,
   },
   shadowOpacity: 0.5,
     },
  titulo:
  {
    color:'#fff',
    fontSize: 50,
    fontWeight:'bold',
  }
});
