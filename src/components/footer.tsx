import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';


import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
        navigation.navigate('Menu');
        setStatusTela('Menu')
    }

    return (
        <View style={styles.container}>

            {statusTela == 'Promo' ? (
                <RectButton onPress={navigatePromo} style={[styles.botton, { backgroundColor: '#862A2A', marginBottom: 35, height: 50, elevation: 10 }]}>
                    <Ionicons name="megaphone" size={24} color="#333" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigatePromo} style={styles.botton}>
                        <Ionicons name="megaphone" size={24} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Drinks' ? (
                <RectButton onPress={navigateDrinks} style={[styles.botton, { backgroundColor: '#862A2A', marginBottom: 35, height: 50, elevation: 10 }]}>
                    <FontAwesome name="beer" size={24} color="#333" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigateDrinks} style={styles.botton}>
                        <FontAwesome name="beer" size={24} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Gas' ? (
                <RectButton onPress={navigateDrinks} style={[styles.botton, { backgroundColor: '#862A2A', marginBottom: 35, height: 50, elevation: 10 }]}>
                    <MaterialCommunityIcons name="gas-cylinder" size={24} color="#333" />
                </RectButton>
            ) : (

                    <RectButton onPress={navigateGas} style={styles.botton}>
                        <MaterialCommunityIcons name="gas-cylinder" size={24} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Water' ? (
                <RectButton onPress={navigateWater} style={[styles.botton, { backgroundColor: '#862A2A', marginBottom: 35, height: 50, elevation: 10 }]}>
                    <Entypo name="water" size={24} color="#333" />
                </RectButton>
            ) : (
                    <RectButton onPress={navigateWater} style={styles.botton}>
                        <Entypo name="water" size={24} color="#FFF" />
                    </RectButton>

                )}

            {statusTela == 'Menu' ? (
                <RectButton onPress={navigateMenu} style={[styles.botton, { backgroundColor: '#862A2A', marginBottom: 35, height: 50, elevation: 10 }]}>
                     <MaterialIcons name="menu" size={24} color="#333" />
                </RectButton>
            ) : (
                <RectButton onPress={navigateMenu} style={styles.botton}>
                <MaterialIcons name="menu" size={24} color="#FFF" />
                </RectButton>

                )}




        

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#D13438',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 20,
    },
    botton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#AA3535',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10
    }
})