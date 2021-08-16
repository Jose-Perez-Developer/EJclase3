import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';


const estilo=StyleSheet.create({
  Gazul:{
    color: 'blue',
  },

  rojo:{
    color: 'red',
  }


});

export default function App() {
  return (
    <View style={styles.container}>

      <Image
      style={{width: 300, height: 300}}
      //source={{uri:'//www.google.com/imgres?imgurl=https%3A%2F%2Fdeportesinc.com%2Fdepsite%2Fwp-content%2Fuploads%2F2016%2F12%2FPe%25C3%25B1as-del-Bar%25C3%25A7a.jpg&imgrefurl=https%3A%2F%2Fdeportesinc.com%2Fmarketing-patrocinio%2Fmarketing%2Fbarca-colores-mundo%2F&tbnid=PcsNeKUxAs2WTM&vet=12ahUKEwjhkZDj-rXyAhVHBd8KHbQvBlAQMygDegUIARCDAg..i&docid=HisWD4xNRynCQM&w=1102&h=742&q=barca&hl=es-419&client=opera&ved=2ahUKEwjhkZDj-rXyAhVHBd8KHbQvBlAQMygDegUIARCDAg'}}
      
      source={require('./assets/perfil.jpg') }
      />



      <Text style= {estilo.rojo}>Nombre: José Miguel Pérez Quintanilla</Text>
      <Text style= {estilo.Gazul}>Carrera: Ingenieria en Ciencias de la Computacion</Text>
      <Text style= {estilo.rojo}>Pasatiempos: Jugar video juegos, hacer deporte</Text>
      <Text style= {estilo.Gazul}>Lenguaje de programacion favorito: C# .net</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
