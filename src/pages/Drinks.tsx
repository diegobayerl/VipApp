import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Drinks() {

    const [status, setStatus] = useState('Cervejas');

    const navigation = useNavigation();

    function DetailsNavigation() {
        navigation.navigate('Details');
    }

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.ViewMenuSuper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={status != 'Cervejas' ? styles.viewMenuSuperInter : [styles.viewMenuSuperInter, {backgroundColor: '#767676'}]}>
                        <BorderlessButton onPress={() => setStatus('Cervejas')}>
                        <Text style={styles.textViewMenu}>Cervejas</Text>
                        </BorderlessButton>
                    </View>

                    <View style={status != 'Cervejas Especiais' ? styles.viewMenuSuperInter : [styles.viewMenuSuperInter, {backgroundColor: '#767676'}]}>
                        <BorderlessButton onPress={() => setStatus('Cervejas Especiais')}>
                        <Text style={styles.textViewMenu}>Cervejas Especiais</Text>
                        </BorderlessButton>
                    </View>

                    <View style={status != 'Refrigerantes' ? styles.viewMenuSuperInter : [styles.viewMenuSuperInter, {backgroundColor: '#767676'}]}>
                        <BorderlessButton onPress={() => setStatus('Refrigerantes')}>
                        <Text style={styles.textViewMenu}>Refrigerantes</Text>
                        </BorderlessButton>
                    </View>

                </ScrollView>
            </View>

                <View style={styles.ViewTitle}>
                    <Text style={styles.title}>{status}</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {status == 'Cervejas' ? (
                        <>
                        <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Brahma</Text>
                                    <Text style={styles.TextValue}>Lata</Text>
                                    <Text style={styles.TextValue}>R$ 3.50 Unid</Text>
                                </View>
                                <Image style={styles.image} source={{ uri: 'https://ogimg.infoglobo.com.br/in/14334450-423-927/FT1086A/652/brahma.jpg' }} />

                            </View>
                        </BorderlessButton>
                    </View>
                    </>
                    ) : (status == 'Cervejas Especiais' ? (
                        <>
                    <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Skol Beat</Text>
                                    <Text style={styles.TextValue}>Lata</Text>
                                    <Text style={styles.TextValue}>R$ 7.50 Unid</Text>
                                </View>
                                <Image style={styles.image} source={{ uri: 'https://opiniaobomvaleapena.com.br/imagens/cerveja-skol-beats-senses-69ml-caixa-com-8-unidades.png' }} />

                            </View>
                        </BorderlessButton>
                    </View>
                    </>
                    ):(
                        <>
                        <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Coca-Cola</Text>
                                    <Text style={styles.TextValue}>Garrafa</Text>
                                    <Text style={styles.TextValue}>R$ 6.50 Unid</Text>
                                </View>
                                <Image style={styles.image} source={{ uri: 'https://statig3.akamaized.net/bancodeimagens/bz/3m/ju/bz3mjuci7hvylehj4px7fy78r.jpg' }} />

                            </View>
                        </BorderlessButton>
                    </View>

                    <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Fanta Uva</Text>
                                    <Text style={styles.TextValue}>Garrafa</Text>
                                    <Text style={styles.TextValue}>R$ 5.00 Unid</Text>
                                </View>
                                <Image style={styles.image} source={{ uri: 'https://vitoribrasdelivery.loja2.com.br/img/880d8a93e75d6afaf5da25ce2dd97537.png' }} />

                            </View>
                        </BorderlessButton>
                    </View>
                    </>
                    ))    }

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
    },

    ViewMenuSuper:{
        paddingTop: 10,
        width: '100%',
    },
    viewMenuSuperInter: {
        padding: 5,
        backgroundColor: '#333',
        marginRight: 10,
        borderRadius: 5,
        marginLeft: 10,
        elevation: 5
    },
    textViewMenu:{
        fontSize: 18,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#BABABA'
    }
})