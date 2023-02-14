import React from 'react';
import {View, Text} from 'react-native';

function Principal () { 
  return (
    <View>
      <View style={{
        backgroundColor: "blue",
        height: 100,
        width: 100,
        // borderRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
      }}>
        <Text>Circulo</Text>
      </View>
      <View style={{
        backgroundColor: "transparent",
        borderLeftWidth: 50,
        borderLeftColor: "transparent",
        borderRightWidth: 50,
        borderRightColor: "transparent",
        borderBottomWidth: 100,
        borderBottomColor: "red",
        width: 0,
        height: 0,
        borderStyle: "solid"}}>
        <Text>Triangulo</Text>
      </View>
    </View>
  )
}

export default Principal;
