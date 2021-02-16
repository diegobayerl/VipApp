import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function Gas() {
    const navigation = useNavigation();

    function DetailsNavigation() {
        navigation.navigate('Details');
    }

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewTitle}>
                    <Text style={styles.title}>Gás</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.viewScroll}>
                        <BorderlessButton onPress={DetailsNavigation}>
                            <View style={styles.viewCard}>

                                <View style={styles.ViewTextScroll}>
                                    <Text style={styles.TextTitle}>Liquigás</Text>
                                    <Text style={styles.TextValue}>Botija</Text>
                                    <Text style={styles.TextValue}>R$ 75.50 Unid</Text>
                                </View>

                                <Image style={styles.image} source={{ uri: 'https://diariodamanhapelotas.com.br/site/wp-content/uploads/2020/11/liquigas-300x247.png' }} />

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