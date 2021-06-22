import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, Modal, TouchableHighlight, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import AuthContext from '../constexts/auth';


export default function Home(){

    const { SignIn } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState(0);
    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);

    async function navigateLogin() {
      if(name === '' || cpf === 0){

        setVisible(!visible);
        return;
      }

      const response =  await SignIn({cpf});

      if(!response){
        setVisible(!visible);
      }

    }

    function navigateLogout() {
        navigation.navigate('Logout');
    }

    return (

        <View  style={styles.container}>

        <Modal
          animationType='slide'
          transparent
          visible={visible}
        >
            <View style={styles.viewExternaModal}>
              <View style={styles.containerModal}>
                <View style={styles.modalView}>
                  <Text style={styles.textModal}>Ops!</Text>
                  
                    <Text style={styles.textModalSub}>
                      O usuário não foi encontrado! Verifique se preencheu os dados corretamente! ok?
                    </Text>
        
                    <TouchableHighlight onPress={()=> {
                        setVisible(!visible);
                        setCpf(0);
                        }} style={[styles.bottonModal, {backgroundColor: '#D13438'}]}>
                                <Text  style={[styles.textButton, {color: '#FFF'}]}> Tentar novamente </Text>
                    </TouchableHighlight>

                  <TouchableHighlight onPress={() => {
                      navigateLogout();
                      setVisible(!visible);
                      setCpf(0);
                  }} style={styles.bottonModal}>
                            <Text  style={styles.textButton}> Criar conta </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
        </Modal>

           
            

            <View style={styles.viewLogin}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholder="digite seu nome completo...."
            />

            <Text style={styles.label}>CPF</Text>
            <TextInput
                keyboardType="numeric"
                value={cpf !== 0 ? (String(cpf)) : ('')}
                onChangeText={text => setCpf(Number(text))}
                style={styles.input}
                placeholder="000.000.000-00"
            />

            <View style={styles.viewBotton}>
                    <RectButton style={styles.bottonLogin} onPress={navigateLogin}>
                        <View />
                        <Text style={styles.textBotton}>Sign in</Text>
                        <AntDesign name="login" size={18} color="#FFF" />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#D13438'
    },

    ViewHeader: {
        marginTop: 5,

        width: 104,
        height: 96,

        marginLeft: (Dimensions.get('screen').width/2) - 52,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
    },

    label: {
        color: '#333',
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        marginBottom: 8,
    },
    
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#3333',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    viewLogin:{
        padding: 40,
        paddingVertical: 80,
        width: '100%',
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 3.84,
        elevation: 1,
    },
    bottonLogin: {
        width: 200,
        height: 40,
        backgroundColor: '#D13438',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 5,
        elevation: 1, 
        marginTop: 10,

        flexDirection: 'row',
    },
    textBotton: {
        color: '#FFF',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
    },
    bottonLogout: {
        width: 290,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        elevation: 1,
    },
    textBottonLogOut: {
        color: '#D13438',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    },
    viewBotton:{
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
        marginBottom: 60
    },
    Text: {
        fontSize: 50,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#ACACAC'
    },

    star:{
        flexDirection: 'row',
    },


    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      viewExternaModal:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(136, 136, 136, 0.5)',
      },
    modalView: {
        margin: 20,
        width: '80%',
        height: '35%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 3.84,
        elevation: 1,
        justifyContent: 'center',
      },
      textModal: {
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 10
      },
      textModalSub:{
        fontSize: 16,
        fontFamily: 'Nunito_600SemiBold',
        marginBottom: 30,
        alignItems: 'center',
        textAlign: 'justify'
      },
      textButton:{
        fontSize: 16,
        fontFamily: 'Nunito_600SemiBold',
        color: '#D13438'
      },
      bottonModal: {
        backgroundColor: '#FFF',
        width: 150,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D13438',
        marginBottom: 5
        
      },
      textMesageModal: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 30
      },
})