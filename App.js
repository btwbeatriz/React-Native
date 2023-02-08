import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function Principal(){

  let position = {"textAlign": "center"}

  return(
    <View style={ position }>
      <Text>AuMiau</Text>
      <Text><hr></hr></Text>
      <Text>Nome do Pet</Text>
      <TextInput/>
      <Text>Raça</Text>
      <TextInput/>
      <Text>Peso</Text>
      <TextInput/>
      <Text>Nascimento</Text>
      <TextInput/>
      <Text>Nome do Dono</Text>
      <TextInput/>
      <Button
        title="Cadastrar"
        color="#008b8b"
        onPress={() => alert('Cadastro realizado!')}
      />
    </View>
  );
}

export default Principal;
