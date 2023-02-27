import React, {useState} from 'react';
import { WebView } from 'react-native-webview';
import {TextInput, View, Text, Image, Button} from 'react-native'

const Cat = props => {
    const [isHungry, setIsHungry] = useState(true);

        return(
            <View>
                <Image
                    source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png',}}
                    style={{width: 100, height: 100}}
                />
            <Text>I am cat {props.name}, {isHungry? 'Faminto':'Alimentado'}!
            </Text>
            <Button
                onPress={() => {
                  setIsHungry(false);
                  }}
                  disabled={!isHungry}
                  title={isHungry ? 'Adicione leite na tigela, por favor' : 'Obrigado!'}
            />
        </View>
        );
       };


export default function App(){
    var jsx = 'https://fiap.com.br'
return(
    <View>
        <TextInput
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            }}
            defaultValue="Name me!"
        />
        <Cat />
        <Cat name='Mike'/>
        <Cat name='Mia'/>
        <Cat name='Mel'/>
    </View>
   );
}