import React, { useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import api from '../services/api';

import Shimmer from '../components/shimmer';
import Check from '../components/check';

interface product {
    id: number,
    name: string,
    type: string,
    value: number,
    url: string,
    description: string,
    promotion: boolean,
}

export default function Gas() {
    const [gas, setGas] = useState<product[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(()=>{
        api.get('product?type=gas').then(response =>{
            setGas(response.data);
        });
            setLoading(false);
    },[]);

    function DetailsNavigation(id: number) {
        navigation.navigate('Details', {id});
    }

    return (
        <View style={styles.container}>
            <Shimmer visible={loading}>
            <Check title="gás" visible={gas.length < 1}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop: 20}} />
                {gas.map(Gas =>{
                            return(
                                <View
                                key={Gas.id}
                                >
                                <View style={styles.viewScroll}>
                                <BorderlessButton onPress={()=> DetailsNavigation(Gas.id)}>
                                <View style={styles.viewCard}>

                                    <View style={styles.ViewTextScroll}>
                                        <Text style={styles.TextTitle}>{Gas.name}</Text>
                                        <Text style={styles.TextValue}>{Gas.description}</Text>
                                        <Text style={styles.TextValue}>R$ {Gas.value.toFixed(2)} Unid</Text>
                                    </View>
                                    <Image style={styles.image} source={{ uri: Gas.url }} />

                                </View>
                                </BorderlessButton>
                                </View>
                                </ View>
                            )
                        })
                    }
            </ScrollView>
            </Check>
            </Shimmer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    viewScroll: {
        padding: 15,
        backgroundColor: '#fff',
        margin: 15,
        marginBottom: 10,
        marginTop: 0,
        borderRadius: 15,
        elevation: 1,
        borderWidth: 1.2,
        borderColor: '#3333',
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
        color: '#303A52',
        fontSize: 25,

        width: 150,
        marginBottom: 5
    },
    TextValue: {
        fontFamily: 'Nunito_700Bold',
        paddingHorizontal: 10,
        fontSize: 20,
        color: '#303A52',

        width: 165
    },
    ViewTitle: {
        width: '93%',
        alignItems: 'flex-end',
        marginBottom: 5
    },
    
})