import React from 'react';
import { Button, Text, TextInput, StyleSheet, View,} from 'react-native';

function Principal(){

  const estilos = StyleSheet.create( {
      
      inputColor: {
        backgroundColor: "gainsboro",
        borderBottomColor: "darkgrey"
      },
      inputSize: {
        paddingLeft: 10,
        paddingVertical: 15,
        borderBottomWidth: 2
      },
      viewPrincipal:{
        marginTop: 20
      },
      botao:{
        backgroundColor: "darkcyan",
        borderColor: "cyan",
        borderWidth: 3,
        borderRadius: 20,
        marginTop: 20
      },
      botaoTexto: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
        textShadowColor: "white",
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3
      }
    });

  return(
    <View style={ estilos.viewPrincipal }>
      <TextInput style={[estilos.inputColor, estilos.inputSize]} 
        placeholder="Nome do pet:"
        placeholderTextColor="darkgrey" />
      <TextInput style={[estilos.inputColor, estilos.inputSize]} 
        placeholder="Raça:"
        placeholderTextColor="darkgrey" />
      <TextInput style={[estilos.inputColor, estilos.inputSize]} 
        placeholder="Nascimento:"
        placeholderTextColor="darkgrey" />
      <TextInput style={[estilos.inputColor, estilos.inputSize]} 
        placeholder="Nome do dono:"
        placeholderTextColor="darkgrey" />
        <View style={estilos.botao}>
          <Text style={estilos.botaoTexto}>Cadastrar</Text>
        </View>
      </View>
  );
}

export default Principal;
