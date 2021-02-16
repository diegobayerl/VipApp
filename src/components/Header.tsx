import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface headerProps {
    title: string,
    showCancell?: boolean,
    showgobak?: boolean
}

export default function Header({ title, showCancell = false, showgobak = false }: headerProps){

    const navigation = useNavigation();

    function CancellCadastro(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            {showgobak ? (
                <BorderlessButton onPress={navigation.goBack}>
                  <Feather name="arrow-left" size={24} color="#dde3f0"/>
                </BorderlessButton>
            ): (
                <View />
            )}
            <Text style={styles.title}>{title}</Text>

            { showCancell ? (
                <BorderlessButton onPress={CancellCadastro}>
                <Feather name="x" size={24} color="#F2B1B1"/>
            </BorderlessButton>
            ) : (
                <View />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
 container: {
     padding: 24,
     backgroundColor: "#D13438",
     borderBottomWidth: 1,
     borderColor: "#D13438",
     paddingTop: 44,

     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
 },
 title: {
     fontFamily: 'Nunito_800ExtraBold',
     color: "#dde3f0",
     fontSize: 20
 }
})
//#8fa7b3