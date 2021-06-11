import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

import { Get, Post } from '../utils/database';


export default function Home(){

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState(0);
    const [load, setLoad] = useState(true);
    const navigation = useNavigation();

    useEffect(()=>{
        async function Storage(){
            await Get('@users').then(t =>{
                if(t){
                    navigation.navigate('MainTab');
                }
            });
        }
        Storage();
    }, []);

    async function navigateLogin() {
        const { data } = await api.get(`user?CPF=${cpf}`);

        if(data?.cpf === cpf){
            await Post('@users', data);
            navigation.navigate('MainTab');
        }
        else{
            alert("Usuário não cadastrado");
        }     
    }

    function navigateLogout() {
        navigation.navigate('Logout');
    }

    return (

        <View  style={styles.container}>




            <View style={styles.ViewHeader}>
                    <Text style={styles.TextHeader}>Olá, bem Vindo</Text>
            </View>

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
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    ViewHeader: {
        marginTop: 40,
        marginLeft: 12
    },
    TextHeader: {
        color: '#303A52',
        fontSize: 25,
        fontFamily: 'Nunito_800ExtraBold',
    },

    label: {
        color: '#303A52',
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
        padding: 20,
        width: '100%',
        borderRadius: 10,

        marginTop: 30,
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
        marginTop: 50,
        marginBottom: 60
    },
    Text: {
        fontSize: 50,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#ACACAC'
    },

    star:{
        flexDirection: 'row',
    }
})