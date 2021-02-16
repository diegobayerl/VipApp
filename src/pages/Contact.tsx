import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function Contact() {
    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Contatos</Text>
            </View>

            <View style={styles.viewTitleWhats}>
                <Text style={styles.titleWhats}>WhatsApp</Text>
            </View>

            <View style={styles.viewTitleWhats}>
                <RectButton style={styles.ViewBotton}>
                    <Text style={styles.textViewBotton}>Enviar mensagem</Text>
                </RectButton>
            </View>

            <View style={styles.viewTitleWhats}>
                <Text style={styles.titleWhats}>E-mail</Text>
            </View>

            <View style={styles.viewTitleWhats}>
                <RectButton style={styles.ViewBotton}>
                    <Text style={styles.textViewBotton}>Enviar E-mail</Text>
                </RectButton>
            </View>

            <View style={styles.viewTitleWhats}>
                <Text style={styles.titleWhats}>Telefone</Text>
            </View>

            <View style={styles.viewTitleWhats}>
                <RectButton style={styles.ViewBotton}>
                    <Text style={styles.textViewBotton}>Ligar</Text>
                </RectButton>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    viewTitle: {
        width: '96%',
        height: 50,
        backgroundColor: '#D13438',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF'
    },
    viewTitleWhats: {
        width: '95%',
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleWhats: {
        fontSize: 20,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#343328',
        marginTop: 40
    },
    ViewBotton: {
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#291284'
    },
    textViewBotton: {
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
    },
})