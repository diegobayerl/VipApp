import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import AuthContext from '../../constexts/auth';

import styles from './styles';

interface headerProps {
    title: string,
    showCancell?: boolean,
    showgobak?: boolean
    deslog?: boolean
}

export default function Header({ title, showCancell = false, showgobak = false, deslog = false }: headerProps){
    const { SignOut } = useContext(AuthContext);
    const navigation = useNavigation();

    async function deslogar(){
        SignOut();
    }


    function CancellCadastro(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            {showgobak ? (
                <BorderlessButton onPress={navigation.goBack}>
                  <Feather name="arrow-left" size={24} color="#FFF"/>
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
                deslog ? (
                    <BorderlessButton onPress={deslogar}>
                        <AntDesign name="logout" size={24} color="#FFF" />
                    </BorderlessButton>
                ):(
                <View />
                )
            )}
        </View>
    )
}