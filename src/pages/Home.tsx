import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function Home(){

    const navigation = useNavigation();

    function navigateLogin() {
        navigation.navigate('Login');
    }
    function navigateLogout() {
        navigation.navigate('Logout');
    }

    return (
        <ImageBackground
            source={require('../images/backGround.png')}
            style={styles.container}
            imageStyle={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('window').height - 20,
            }}
        >

            <View style={styles.containerView}> 
                <View style={styles.ViewHeader}>
                    <Text style={styles.TextHeader}>Bem Vindo</Text>
                </View>

                <RectButton style={styles.bottonLogin} onPress={navigateLogin}>
                    <Text style={styles.textBotton}>Entrar</Text>
                </RectButton>

                <RectButton style={styles.bottonLogout} onPress={navigateLogout}>
                    <Text style={styles.textBottonLogOut}>Cadastrar</Text>
                </RectButton>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerView:{
        flex: 1,
        alignItems: 'center'
    },
    bottonLogin: {
        width: 290,
        height: 55,
        backgroundColor: '#D13438',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 8
    },
    textBotton: {
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
    },
    bottonLogout: {
        width: 290,
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00CC6A',
        borderWidth: 2,
        elevation: 8,
    },
    textBottonLogOut: {
        color: '#D13438',
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
    },
    ViewHeader: {
        marginTop: 70,
        marginBottom: 80,
        padding: 20,
    },
    TextHeader: {
        color: '#383232',
        fontSize: 35,
        fontFamily: 'Nunito_800ExtraBold',
    },
})