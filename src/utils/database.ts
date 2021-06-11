import AsyncStorage from '@react-native-async-storage/async-storage';

interface dataSave {
    id: number;
    name: string;
    cpf: number;
    telephone: number;
    city: string;
    bairro: string;
    rua: string;
    number: string;
    reference: string;
    note: string;
}

export async function Get(key: string){
    const data = await AsyncStorage.getItem(key) as string;
    let response = JSON.parse(data) || false;
    return response;
};

export async function Post(key: string, data: dataSave){
    await AsyncStorage.setItem(key, JSON.stringify(data));
};

export async function Delete(key: string){
    await AsyncStorage.removeItem(key);
};