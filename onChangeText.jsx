import React from 'react';
import {View, Text, TextInput} from 'react-native';

function alerta() { 
  alert("Você saiu do Text Input");
}

function textoModificado(texto){
  alert(texto);
}

function Principal () { 
  return (
    <View>
      <Text>Nome Completo:</Text>
      <TextInput onBlur={alerta} onChangeText={textoModificado}/>
    </View>
  )
}

export default Principal;
