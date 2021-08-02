import React, { useState, useEffect, useContext } from 'react';

import {
  View,
  Text, ScrollView,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import AuthContext from '../../constexts/auth';

import { Picker } from '@react-native-picker/picker'
import { useNavigation, useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';

interface useRouteParams {
  id: number;
}

interface products {
  name: string,
  value: number,
  url: string,
  description: string,
}

export default function form() {

  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState<products>();

  const [load, setLoad] = useState(false);

  const { user } = useContext(AuthContext);

  const nameProduct = product?.name;
  const value = product?.value;
  const [quantidade, setQuantidade] = useState(1);
  const [entrega, setEntrega] = useState('Delivery');
  const [valorEntrega, setValueEntrega] = useState(5);
  const [formaPag, setTipopay] = useState('Cartão');
  const [bandeira, setBandeira] = useState('Visa');
  const [valorCliente, setValueClient] = useState(0);

  let valorTotal = (Number(product?.value) * quantidade) + valorEntrega;
  let troco = valorCliente == 0 ? 0 : (valorCliente - valorTotal);

  const route = useRoute();
  const params = route.params as useRouteParams;

  const navigation = useNavigation();

  useEffect(()=>{
    setValueClient(0);
    troco = 0;
  }, [formaPag]);

  useEffect(()=>{
    api.get(`product/${params.id}`).then(response =>{
        setProduct(response.data);
    })
  },[params.id]);

  if(!!product == false){
    return (
      <View  style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
      }}>
          <ActivityIndicator size='large' color='#D13438' />
      </View>
    ) 
  }

  async function createRequest(){

    setLoad(true);

    await api.post('/request',{
      nameUser: user?.name,
      telephone: user?.telephone,
      idUser: user?.id,
      idProduct: params.id,
      nameProduct,
      description: product?.description,
      value,
      quantidade,
      entrega,
      valorEntrega,
      valorTotal,
      formaPag,
      bandeira,
      valorCliente,
      troco,
    })
    
    Alert.alert(
      'Pedido realizado com sucesso',
      'Muito obrigado(a) pela preferência! ❤️',
      [
        {text: 'OK', onPress: ()=> navigateRoute()}
      ]
    );

    setLoad(false);

  }

  function navigateRoute(){
    entrega == 'Delivery' ? 
      navigation.goBack() : (
        navigation.goBack(),
        Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=-18.719617,-39.8528851'
      ));
  }

  function SetSomaQuatidadeItens() {
    setQuantidade(quantidade + 1)
  }

  function SetSubtraiQuatidadeItens() {
    quantidade > 1 ? setQuantidade(quantidade - 1) : null
  }

  function FormEntrega(text: string){
      setEntrega(text);
      text == 'Delivery' ? setValueEntrega(5) : setValueEntrega(0);
  }

  return (

    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImageView}>
          <View style={{
            justifyContent: 'space-between',
            height: 80
          }}>
            <Text style={styles.TextScroll}>{product?.name}</Text>
            <Text style={styles.TextScroll}>R$ {product?.value.toFixed(2)}</Text>
          </View>
          <Image style={styles.image} source={{ uri: product?.url }} />
        </View>

        <View style={styles.viewQtd}>
          <AntDesign onPress={SetSubtraiQuatidadeItens} name="minus" size={32} color="#D13438" />
          <TextInput
            keyboardType="numeric"
            style={styles.inputQuantidade}
            value={String(quantidade)}
            onChangeText={text => setQuantidade(Number(text))}
          />
          <AntDesign onPress={SetSomaQuatidadeItens} name="plus" size={32} color="#2BD65B" />
        </View>

        <View style={styles.EntregaView}>
            <Text style={styles.TextScroll}>Valor total:</Text>
            <Text style={styles.TextScrollValue}>R$ {valorTotal.toFixed(2)}</Text>
        </View>

        <View style={styles.ViewInput}>
          <Text style={styles.label}>Entrega</Text>
          <Picker
            selectedValue={entrega}
            style={{  color: '#BABABA',}}
            mode='dropdown'
            accessibilityViewIsModal
            onValueChange={text => FormEntrega(String(text))}
          >
            <Picker.Item label="Delivery" value="Delivery" />
            <Picker.Item label="Drive Thru" value="Drive Thru" />
          </Picker>
        </View>


        <View style={formaPag == 'Dinheiro' ? [styles.ViewInput, {borderBottomRightRadius: 8, borderBottomLeftRadius: 8}] : styles.ViewInput}>
          <Text style={styles.label}>Forma de pagamento</Text>

          <Picker
            selectedValue={formaPag}
            mode='dropdown'
            style={{  color: '#BABABA',}}
            accessibilityViewIsModal
            onValueChange={text => setTipopay(String(text))}
          >
            <Picker.Item label="Dinheiro" value="Dinheiro" />
            <Picker.Item label="Cartão" value="Cartão" />
          </Picker>
        </View>

        {formaPag == 'Dinheiro' ? (
          <View style={styles.viewOptionsCartDin}>
            <Text style={[styles.label, { color: '#333'}]}>Valor de pagameto</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder='digite o valor....'
              onChangeText={text => setValueClient(Number(text))}
            />
            <Text style={[styles.label, { color: '#333'}]}>Troco:  R$ {troco.toFixed(2)} </Text>
          </View>

        ) : (
            <View style={[styles.ViewInput, {borderBottomRightRadius: 1, borderBottomLeftRadius: 1}]}>
              <Text style={styles.label}>Qual baneira ?</Text>

              <Picker
                selectedValue={bandeira}
                mode='dropdown'
                style={{  color: '#BABABA',}}
                accessibilityViewIsModal
                onValueChange={text => setBandeira(String(text))}
              >
                <Picker.Item label="Visa" value="Visa" />
                <Picker.Item label="Mastercard" value="Mastercard" />
                <Picker.Item label="Banescard" value="Banescard" />
                <Picker.Item label="American Express" value="American Express" />
                <Picker.Item label="Elo" value="Elo" />
                <Picker.Item label="Alelo" value="Alelo" />
                <Picker.Item label="Sodexo" value="Sodexo" />
                <Picker.Item label="TicKet" value="TicKet" />
                <Picker.Item label="Google Pay" value="Google Pay" />
                <Picker.Item label="Apple Pay" value="Apple Pay" />
                <Picker.Item label="Qr code Pay" value="Qr code Pay" />
              </Picker>
            </View>
          )}

        <View style={styles.ViewBotton}>
            <TouchableOpacity disabled={load} onPress={createRequest} style={!load ? styles.botton : [styles.botton, {backgroundColor: '#AE696A'}] }>
              {!load ? (
                 <Text style={styles.textBotton}>Finalizar pedido</Text>
              ): (
                <ActivityIndicator size='small' color='#FFF' />
              )}
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}