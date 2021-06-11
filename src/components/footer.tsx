import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


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
                    <MaterialCommunityIcons name="food-fork-drink" size={26} color="#303A52" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigatePromo} style={styles.botton}>
                        <MaterialCommunityIcons name="food-fork-drink" size={26} color="#fff" />
                    </RectButton>

                )}

            {statusTela == 'Drinks' ? (
                <RectButton onPress={navigateDrinks} style={styles.botton}>
                    <Entypo name="cup" size={26} color="#303A52" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigateDrinks} style={styles.botton}>
                        <Entypo name="cup" size={26} color="#fff" />
                    </RectButton>

                )}

            {statusTela == 'Gas' ? (
                <RectButton onPress={navigateDrinks} style={styles.botton}>
                    <MaterialCommunityIcons name="gas-cylinder" size={26} color="#303A52" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigateGas} style={styles.botton}>
                        <MaterialCommunityIcons name="gas-cylinder" size={26} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Water' ? (
                <RectButton onPress={navigateWater} style={styles.botton}>
                    <MaterialCommunityIcons name="bottle-soda-classic" size={24} color="#303A52" />
                </RectButton>
            ) : (
                    <RectButton onPress={navigateWater} style={styles.botton}>
                        <MaterialCommunityIcons name="bottle-soda-classic" size={26} color="#fff" />
                        
                    </RectButton>

                )}

            {statusTela == 'Request' ? (
                <RectButton onPress={navigateMenu} style={styles.botton}>
                     <MaterialIcons name="menu" size={26} color="#303A52" />
                </RectButton>
            ) : (
                <RectButton onPress={navigateMenu} style={styles.botton}>
                <MaterialIcons name="menu" size={26} color="#FFF" />
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