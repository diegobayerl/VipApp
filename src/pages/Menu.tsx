import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { BorderlessButton } from 'react-native-gesture-handler';


export default function Menu(){
    return(
        <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                    
                        <Entypo name="menu" size={24} color="#ACACAC" />
                        <Text style={styles.TextHeader}>Menu</Text>
                    </View>
                </View>

                <View style={styles.Body}>

                    <BorderlessButton>
                        <View style={styles.ViewButton}>
                        <MaterialIcons name="request-page" size={24} color="#333" />
                            <Text style={styles.textViewButton}>Meus Pedidos</Text>
                        </View>
                    </BorderlessButton>

                    <BorderlessButton>
                        <View style={styles.ViewButton}>
                        <MaterialIcons name="contacts" size={24} color="#333" />
                            <Text style={styles.textViewButton}>Contato</Text>
                        </View>
                    </BorderlessButton>


                </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    headerContainer:{
        padding: 10,
        width: '100%',
        alignItems: 'center'
    },
    header:{
        flexDirection: 'row',
        backgroundColor: '#333',
        width: '95%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 15
    },
    TextHeader: {
       color: '#ACACAC',
       fontSize: 18,
       fontFamily: 'Nunito_800ExtraBold'
    },
    Body:{
        width: '95%',
        height: '100%',
        backgroundColor: '#333',
        borderTopRightRadius: 15
    },
    ViewButton:{
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ACACAC',
        height: 50,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10,
        borderRadius: 10
    },
    textViewButton:{
        color: '#333',
        fontSize: 15,
        fontFamily: 'Nunito_700Bold'
    }
})