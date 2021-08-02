import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import styles from './styles';

export default function Footer() {

    const [statusTela, setStatusTela] = useState('Drinks');

    const navigation = useNavigation()

    function navigateDrinks() {
        navigation.navigate('Drinks')
        setStatusTela('Drinks')
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

            <View style={styles.view}>
                <RectButton onPress={navigateDrinks} style={styles.botton}>
                    <Fontisto name="shopping-store" style={statusTela === 'Drinks' ? styles.iconTrue : styles.iconFalse} />
                    
                            <Text style={statusTela === 'Drinks' ? styles.textTrue : styles.textFalse}>
                                Home
                            </Text>
    
                </RectButton>
            </View>

            <View style={styles.view}>
                <RectButton onPress={navigatePromo} style={styles.botton}>
                    <Fontisto name="train-ticket" style={statusTela === 'Promo' ? styles.iconTrue : styles.iconFalse} />
                       
                            <Text style={statusTela === 'Promo' ? styles.textTrue : styles.textFalse}>
                                Promoções
                            </Text>
        
                </RectButton>
            </View>

            <View style={styles.view}>
                <RectButton onPress={navigateMenu} style={styles.botton}>
                    <MaterialCommunityIcons name="clipboard-text" style={statusTela === 'Request' ? styles.iconTrue : styles.iconFalse} />
                    
                            <Text style={statusTela === 'Request' ? styles.textTrue : styles.textFalse}>
                                Pedidos
                            </Text>
    
                </RectButton>
            </View>
        </View>
    )
}