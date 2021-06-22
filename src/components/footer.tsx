import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 

export default function Footer() {

    const [statusTela, setStatusTela] = useState('Promo');

    const navigation = useNavigation()

    

    function navigateDrinks() {
        navigation.navigate('Drinks')
        setStatusTela('Drinks')
    }

    function navigateGas() {
        navigation.navigate('Gas');
        setStatusTela('Gas')
    }

    function navigateWater() {
        navigation.navigate('Water');
        setStatusTela('Water')
    }

    function navigatePromo() {
        navigation.navigate('Promo');
        setStatusTela('Promo')
    }

    function navigateMenu() {
        navigation.navigate('Request');
        setStatusTela('Request')
    }

    return (
        <View style={styles.container}>

            {statusTela == 'Promo' ? (
                <RectButton onPress={navigatePromo} style={styles.botton}>
                    <Fontisto name="train-ticket" size={22} color="#333" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigatePromo} style={styles.botton}>
                        <Fontisto name="train-ticket" size={22} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Drinks' ? (
                <RectButton onPress={navigateDrinks} style={styles.botton}>
                    <Fontisto name="shopping-store" size={20} color="#333" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigateDrinks} style={styles.botton}>
                        <Fontisto name="shopping-store" size={20} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Gas' ? (
                <RectButton onPress={navigateDrinks} style={styles.botton}>
                    <Fontisto name="test-bottle" size={22} color="#333" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigateGas} style={styles.botton}>
                       <Fontisto name="test-bottle" size={22} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Water' ? (
                <RectButton onPress={navigateWater} style={styles.botton}>
                    
                    <MaterialCommunityIcons name="bottle-tonic-outline" size={24} color="#333" />
                </RectButton>
            ) : (
                    <RectButton onPress={navigateWater} style={styles.botton}>
                        <MaterialCommunityIcons name="bottle-tonic-outline" size={24} color="#fff" />
                    </RectButton>

                )}

            {statusTela == 'Request' ? (
                <RectButton onPress={navigateMenu} style={styles.botton}>
                    <MaterialCommunityIcons name="clipboard-text" size={24} color="#333" />
                </RectButton>
            ) : (
                <RectButton onPress={navigateMenu} style={styles.botton}>
                     <MaterialCommunityIcons name="clipboard-text" size={24} color="#FFF" />
                </RectButton>

                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginRight:0,
        flexDirection: 'row',
        backgroundColor: '#D13438',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 20,
        elevation: 2,
    },
    botton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        marginBottom: 10
    }
})