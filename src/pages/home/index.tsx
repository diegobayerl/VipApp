import React, { useState, useContext } from 'react';

import { 
    Text, 
    View, 
    TextInput, 
    Alert,
    ActivityIndicator
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import AuthContext from '../../constexts/auth';

import styles from './styles';

export default function Home(){

    const { SignIn } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [Loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateLogout(){
      navigation.navigate('Create');
    }

    async function navigateLogin() {

      setLoading(true);

      if(name === '' || telephone === ''){
        Alert.alert(
          'Ops!',
          'Preencha com seu nome e número de telefone 😥',
          [
            {text: 'OK', onPress: ()=> {}}
          ]
        )
        setLoading(false);
        return;
      }

      const response =  await SignIn({telephone});

      if(!response){
        Alert.alert(
          'Ops...',
          'Não existe usuário com esse número de telefone 😮',
          [
            {
              text: 'OK',
              onPress: () => {
                setName('');
                setTelephone('');
              }
            }
          ]
        )
        setLoading(false);
        return;
      }

      Alert.alert(
        'Olá',
        `Que bom ter você de volta  ${name} ✌️☺️`,
        [
          {
            text: 'OK',
          }
        ]
      )
    }

    return (

        <View  style={styles.container}>
        <View style={styles.viewLogin}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholder="digite seu nome ...."
            />

            <Text style={styles.label}>Telefone</Text>
          
            <TextInputMask
              value={telephone}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              style={styles.input}
              placeholder="(99) 99999-9999"
              onChangeText={text => setTelephone(text)}
            />

            <View style={styles.viewBotton}>
                    <RectButton style={styles.bottonLogin} onPress={navigateLogin}>
                        {!Loading ? (
                          <>
                          <View />
                          <Text style={styles.textBotton}>Entrar</Text>
                          <AntDesign name="login" size={18} color="#FFF" />
                          </>
                        ): (
                          <ActivityIndicator size='small' color='#F2F2F2' />
                        )}
                    </RectButton>

                    <RectButton style={styles.bottonLogout} onPress={navigateLogout}>
                        <Text style={styles.textBottonLogOut}>Não possui uma conta ?</Text>
                    </RectButton>
            </View> 

            </View>


            <View style={styles.logo}>
                    <Text style={styles.Text}>VIP</Text>

                    <View style={styles.star}>
                        <Entypo name="star-outlined" size={24} color="#B07F00" />
                        <Entypo name="star-outlined" size={24} color="#B07F00" />
                        <Entypo name="star-outlined" size={24} color="#B07F00" />
                        <Entypo name="star-outlined" size={24} color="#B07F00" />
                        <Entypo name="star-outlined" size={24} color="#B07F00" />
                    </View>

            </View>

            <View style={styles.ViewHeader}>
                  <AntDesign name="user" size={32} color="#333" />
            </View>
        
        </View>
    )
}