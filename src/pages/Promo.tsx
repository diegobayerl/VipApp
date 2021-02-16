import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Promo() {
    const navigation = useNavigation();

    function DetailsNavigation() {
        navigation.navigate('Details');
    }

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewTitle}>
                    <Text style={styles.title}>Promoções</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Brahma</Text>
                                    <Text style={styles.TextValue}>Lata</Text>
                                    <Text style={styles.TextValue}>R$ 2.50 Unid</Text>
                                </View>
                                <Image style={styles.image} source={{ uri: 'https://ogimg.infoglobo.com.br/in/14334450-423-927/FT1086A/652/brahma.jpg' }} />

                            </View>
                        </BorderlessButton>
                    </View>

                    <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Skol Beat</Text>
                                    <Text style={styles.TextValue}>Lata</Text>
                                    <Text style={styles.TextValue}>R$ 6.00 Unid</Text>
                                </View>
                                <Image style={styles.image} source={{ uri: 'https://opiniaobomvaleapena.com.br/imagens/cerveja-skol-beats-senses-69ml-caixa-com-8-unidades.png' }} />

                            </View>
                        </BorderlessButton>
                    </View>

                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: '#666666',
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        borderBottomColor: '#8fa7b3',
        marginTop: 20,
        marginLeft: 20,
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
        borderRadius: 20
    },
    viewScroll: {
        padding: 15,
        backgroundColor: '#333',
        margin: 15,
        marginBottom: 10,
        marginTop: 0,
        borderRadius: 15,
        elevation: 5
    },

    viewCard: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    ViewTextScroll: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8,
    },
    TextTitle: {
        fontFamily: 'Nunito_800ExtraBold',
        paddingHorizontal: 10,
        color: '#BABABA',

        fontSize: 25
    },
    TextValue: {
        fontFamily: 'Nunito_700Bold',
        paddingHorizontal: 10,
        fontSize: 20,
        color: '#A4A4A4'
    },
    ViewTitle: {
        width: '93%',
        alignItems: 'flex-end',
        marginBottom: 5
    }
})