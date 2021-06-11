import React, { useState, useEffect } from 'react';

import {
  View,
  StyleSheet,
  Text, ScrollView,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker'
import { useNavigation, useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

interface useRouteParams {
  id: number;
}

interface products {
  name: string,
  value: number,
  url: string,
  description: string,
}

export default function Details() {
  const [modalVisible, setModalVisible] = useState(false);

  const [product, setProduct] = useState<products>();


  const nameUser = "Diego";
  const cpfUser = 19713767799;
  const idUser = 1;

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

  async function createRequest(){
    await api.post('/request',{
      nameUser,
      cpfUser,
      idUser,
      nameProduct,
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

    setModalVisible(!modalVisible);

  }

  function navigateModal(){
    setModalVisible(false);
    entrega == 'Delivery' ? navigation.goBack() : navigation.navigate('Maps');
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

        <Modal
          animationType='slide'
          transparent
          visible={modalVisible}
        >
            <View style={styles.viewExternaModal}>
              <View style={styles.containerModal}>
                <View style={styles.modalView}>
                  <MaterialIcons name="fact-check" size={24} color="#333" />
                  <Text style={styles.textModal}>Pedido efetuado com sucesso!!</Text>
                  
                    <Text style={styles.textModalSub}>
                      Agradecemos a preferência e te esperamos de volta! ok?
                    </Text>
        
                  <TouchableHighlight onPress={navigateModal} style={styles.bottonModal}>
                    <Entypo name="check" size={24} color="#FFF" />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
        </Modal>

        <View style={styles.ImageView}>
          <View style={{
            justifyContent: 'space-between',
            height: 80
          }}>
            <Text style={styles.TextScroll}>{product?.name}</Text>
            <Text style={styles.TextScroll}>R$ {product?.value}0</Text>
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
          <View style={styles.ViewTextScroll}>
            <Text style={styles.TextScroll}>Valor total:</Text>
            <Text style={styles.TextScrollValue}>R$ {valorTotal}</Text>
          </View>
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


        <View style={formaPag == 'Dinheiro' ? [styles.ViewInput, {borderBottomRightRadius: 20, borderBottomLeftRadius: 20}] : styles.ViewInput}>
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
              placeholder='Ex: 100'
              onChangeText={text => setValueClient(Number(text))}
            />
            <Text style={[styles.label, { color: '#333'}]}>Troco:  R$ {troco} </Text>
          </View>

        ) : (
            <View style={[styles.ViewInput, {borderBottomRightRadius: 20, borderBottomLeftRadius: 20}]}>
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
            <RectButton onPress={createRequest} style={styles.botton}>
              <Text style={styles.textBotton}>Comprar</Text>
            </RectButton>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    borderBottomColor: '#8fa7b3',
    marginTop: 10,
    marginBottom: 10,
    color: '#333'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  viewOptionsCartDin: {
    paddingHorizontal: 20,
    paddingTop: 20
  },

  ViewTextScroll: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#333',

  },
  TextScroll: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  label: {
    fontFamily: 'Nunito_700Bold',
    marginBottom: 8,
    fontSize: 18,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#3333',
    borderRadius: 15,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: '#333',
  },
  botton: {
    width: 290,
    height: 55,
    backgroundColor: '#D13438',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D13438',
    borderWidth: 2,
    elevation: 1,
    marginTop: 20
  },

  ViewInput: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    elevation: 1,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderColor: '#3333',
  },
  ImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    padding: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 1,
    borderWidth: 1.2,
    borderBottomWidth: 0,
    borderColor: '#3333',

  },
  ViewBotton: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  textBotton: {
    color: "#FFF",
    fontFamily: 'Nunito_700Bold',
    fontSize: 20
  },
  viewQtd: {
    padding: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    elevation: 1,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderColor: '#3333',
  },
  inputQuantidade: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#3333',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
    elevation: 1,
  },
  TextScrollValue: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    marginRight: 20,
    color: '#333'
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewExternaModal:{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(136, 136, 136, 0.5)',
    marginTop: 66
    
  },
  modalView: {
    margin: 20,
    width: '80%',
    height: '35%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3.84,
    elevation: 1,
    justifyContent: 'center',
  },
  textModal: {
    fontSize: 23,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 30
  },
  textModalSub:{
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 30,
  },
  bottonModal: {
    backgroundColor: '#2BD65B',
    width: 80,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textMesageModal: {
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 30
  },
  EntregaView: { 
    backgroundColor: '#fff', 
    marginHorizontal: 10,
    elevation: 1,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderColor: '#3333',
  }
})