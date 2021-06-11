import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


interface check{
title: string,
visible: boolean,
children: {}
}

export default function Check({ title, visible, children }: check){
    if(visible){
        return(
            <View style={styles.container}>
                <Entypo style={styles.emoji} name="emoji-sad"/>
                <Text style={styles.text}>
                    Nenhum produto em {title} encontrado!
                </Text>
            </View>
        )
    }

    return(
        <>
        {children}
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text:{
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 20,
        width: '60%',
        color: '#333',
        paddingHorizontal: 10
    },
    emoji:{
        fontSize: 54,
        color: '#333',
        marginBottom: 20
    },
})