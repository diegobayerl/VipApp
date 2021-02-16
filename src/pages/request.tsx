import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Request() {
    const navigation = useNavigation();

    function NavigateMaps(){
        navigation.navigate('Maps')
    }

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Meus Pedidos</Text>


                <View style={styles.viewText}>

                    <View style={styles.viewName}>
                        <Text style={styles.textName}>Diego Bayerl Hupp</Text>
                        <Text style={styles.textName}>000.000.000-00</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>PRODUTO:</Text>
                        <Text style={styles.textItens}>Brahma (Caixa)</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>VALOR:</Text>
                        <Text style={styles.textItens}> R$ 75.00</Text>
                    </View>



                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>QUANTIDADE:</Text>
                        <Text style={styles.textItens}>10</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>ENTREGA:</Text>
                        <Text style={styles.textItens}> Delivery</Text>
                    </View>


                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>VALOR DA ENTREGA:</Text>
                        <Text style={styles.textItens}>R$ 5.00</Text>
                    </View>


                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>VALOR TOTAL:</Text>
                        <Text style={styles.textItens}>R$ 80.00</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>FORMA DE PAGAMENTO:</Text>
                        <Text style={styles.textItens}>Cartão</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>BANDEIRA:</Text>
                        <Text style={styles.textItens}>Banescard</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>CÓDIGO DO VENDEDOR:</Text>
                        <Text style={styles.textItens}>01</Text>
                    </View>


                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>CÓDIGO DA COPRA:</Text>
                        <Text style={styles.textItens}>01(id)</Text>
                    </View>
                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>HORÁRIO DA COMPRA:</Text>
                        <Text style={styles.textItens}>12:00</Text>
                    </View>


                    <Text style={styles.textItens}>STATUS:</Text>

                    <View style={[styles.viewStatus, { backgroundColor: '#F46717' }]}>
                    <RectButton onPress={NavigateMaps} style={styles.BottonNavigate}>
                        <Text style={styles.textStatuseItens}>Pendente</Text>
                       
                            <MaterialCommunityIcons name="google-maps" size={24} color="#FFF" />
                        </RectButton>
                    </View>



                </View>

                <View style={styles.viewText}>

                    <View style={styles.viewName}>
                        <Text style={styles.textName}>Diego Bayerl Hupp</Text>
                        <Text style={styles.textName}>000.000.000-00</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>PRODUTO:</Text>
                        <Text style={styles.textItens}>Brahma (Caixa)</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>VALOR:</Text>
                        <Text style={styles.textItens}> R$ 75.00</Text>
                    </View>



                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>QUANTIDADE:</Text>
                        <Text style={styles.textItens}>10</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>ENTREGA:</Text>
                        <Text style={styles.textItens}> Delivery</Text>
                    </View>


                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>VALOR DA ENTREGA:</Text>
                        <Text style={styles.textItens}>R$ 5.00</Text>
                    </View>


                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>VALOR TOTAL:</Text>
                        <Text style={styles.textItens}>R$ 80.00</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>FORMA DE PAGAMENTO:</Text>
                        <Text style={styles.textItens}>Cartão</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>BANDEIRA:</Text>
                        <Text style={styles.textItens}>Banescard</Text>
                    </View>

                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>CÓDIGO DO VENDEDOR:</Text>
                        <Text style={styles.textItens}>01</Text>
                    </View>


                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>CÓDIGO DA COPRA:</Text>
                        <Text style={styles.textItens}>01(id)</Text>
                    </View>
                    <View style={styles.viewTitleItens}>
                        <Text style={styles.textItensTitle}>HORÁRIO DA COMPRA:</Text>
                        <Text style={styles.textItens}>12:00</Text>
                    </View>


                    <Text style={styles.textItens}>STATUS:</Text>


                    <View style={[styles.viewStatus, { backgroundColor: '#00CC6A' }]}>
                        <Text style={styles.textStatuseItens}>Concluido</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#8fa7b3',
        fontSize: 24,
        fontFamily: 'Nunito_700Bold',
        borderBottomColor: '#8fa7b3',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10
    },
    viewText: {
        backgroundColor: '#ACACAC',
        width: Dimensions.get('screen').width - 30,
        padding: 20,
        borderRadius: 20,
        elevation: 2,
        marginBottom: 20
    },
    viewName: {
        marginHorizontal: 5,
        backgroundColor: '#696969',
        borderRadius: 10,
        padding: 5
    },
    textName: {
        fontSize: 15,
        fontFamily: 'Nunito_800ExtraBold',
        marginLeft: 5
    },

    textItens: {
        fontSize: 15,
        fontFamily: 'Nunito_600SemiBold',
        marginLeft: 20,
        marginTop: 10
    },
    viewStatus: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    textStatuseItens: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 15,
        padding: 5
    },

    viewTitleItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 5
    },

    textItensTitle: {
        fontSize: 15,
        fontFamily: 'Nunito_800ExtraBold',
        marginLeft: 5,
        marginTop: 10
    },
    BottonNavigate: {
        alignItems: 'center',
        marginTop: 5, 
        marginBottom: 5}
})