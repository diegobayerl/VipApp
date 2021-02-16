import React, { useState } from 'react';

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
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Details() {

  const [modalVisible, setModalVisible] = useState(false);

  const [entrega, setEntrega] = useState('Delivery');
  const [tipoPay, setTipopay] = useState('Dinheiro');
  const [bandeira, setBandeira] = useState('nenhuma');
  const [quantidade, setQuantidade] = useState(1);

  if (entrega == 'Drive Thru') {
    var valor = 0.00
  } else {
    var valor = 5.00
  }

  const navigation = useNavigation();

  function button(){
    if(entrega === 'Delivery'){
      setModalVisible(!modalVisible)
    } else {
      setModalVisible(!modalVisible)
    }
  }

  function navigationHome() {
    setModalVisible(!modalVisible)
  }

  function navigationMaps() {
    setModalVisible(!modalVisible)
    navigation.navigate('Maps')
  }

  function SetSomaQuatidadeItens() {
    setQuantidade(quantidade + 1)
  }

  function SetSubtraiQuatidadeItens() {
    quantidade > 1 ? setQuantidade(quantidade - 1) : null
  }

  return (

    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
        >
          {entrega == 'Drive Thru' ? (
            <View style={styles.container}>
              <View style={styles.modalView}>
                <Text style={styles.textModal}>Obrigado pela compra!</Text>
                <Text style={styles.textMesageModal}>Vamos ir buscar o pedido ?</Text>
                <View style={styles.MenuModalItens}>
                  <Text style={[styles.TextScroll, {color: '#333'}]}>Dados da compra</Text>

                  <Text style={styles.textModalItens}>Entrega: Drive Thru</Text>
                  <Text style={styles.textModalItens}>Quantidade: 10 </Text>
                  <Text style={styles.textModalItens}>Valor: R$ 75.90 </Text>
                  <Text style={styles.textModalItens}>Forma de pagamento: Cartão </Text>

                </View>
                <TouchableHighlight onPress={navigationMaps} style={[styles.bottonModal, { backgroundColor: '#00CC6A' }]}>
                  <MaterialCommunityIcons name="google-maps" size={24} color="#FFF" />
                </TouchableHighlight>
              </View>
            </View>
          ) : (
              <View style={styles.containerModal}>
                <View style={styles.modalView}>
                  <Text style={styles.textModal}>Obrigado pela compra!</Text>
                  <View style={styles.MenuModalItens}>
                    <Text style={[styles.TextScroll, {color: '#333'}]}>Dados da compra</Text>

                    <Text style={styles.textModalItens}>Entrega: Drive Thru</Text>
                    <Text style={styles.textModalItens}>Quantidade: 10 </Text>
                    <Text style={styles.textModalItens}>Valor: R$ 75.90 </Text>
                    <Text style={styles.textModalItens}>Forma de pagamento: Cartão </Text>

                  </View>

                  <TouchableHighlight onPress={navigationHome} style={styles.bottonModal}>
                    <Entypo name="home" size={24} color="#FFF" />
                  </TouchableHighlight>
                </View>
              </View>
            )}
        </Modal>

        <View style={styles.ImageView}>
          <View style={{
            justifyContent: 'space-between',
            height: 80
          }}>
            <Text style={styles.TextScroll}>Brahma</Text>
            <Text style={styles.TextScroll}>R$ 2.50</Text>
          </View>

          <Image style={styles.image} source={{ uri: 'https://ogimg.infoglobo.com.br/in/14334450-423-927/FT1086A/652/brahma.jpg' }} />
        </View>

        <View style={styles.viewQtd}>
          <Text style={styles.label}>Quantidade:</Text>
          <AntDesign onPress={SetSubtraiQuatidadeItens} name="minus" size={24} color="#BABABA" />
          <TextInput
            keyboardType="numeric"
            style={styles.inputQuantidade}
            value={String(quantidade)}
            editable={false}
          />
          <AntDesign onPress={SetSomaQuatidadeItens} name="plus" size={24} color="#BABABA" />
        </View>

        <View style={styles.EntregaView}>
          <View style={styles.ViewTextScroll}>
            <Text style={styles.TextScroll}>Entrega:</Text>
            <Text style={styles.TextScrollValue}>R$ {valor}.00</Text>
          </View>

          <View style={styles.ViewTextScroll}>
            <Text style={styles.TextScroll}>Valor total:</Text>
            <Text style={styles.TextScrollValue}>R$ {75.50 + valor}</Text>
          </View>
        </View>

        <View style={styles.ViewInput}>
          <Text style={styles.label}>Entrega</Text>

          <Picker
            selectedValue={entrega}
            style={{  color: '#BABABA',}}
            mode='dialog'
            accessibilityViewIsModal
            onValueChange={(itemValor, itemIndex) => { setEntrega(String(itemValor)) }}
          >
            <Picker.Item label="Delivery" value="Delivery" />
            <Picker.Item label="Drive Thru" value="Drive Thru" />
          </Picker>
        </View>


        <View style={styles.ViewInput}>
          <Text style={styles.label}>Forma de pagamento</Text>

          <Picker
            selectedValue={tipoPay}
            mode='dialog'
            style={{  color: '#BABABA',}}
            accessibilityViewIsModal
            onValueChange={(itemValor, itemIndex) => { setTipopay(String(itemValor)) }}
          >
            <Picker.Item label="Dinheiro" value="Dinheiro" />
            <Picker.Item label="Cartão" value="Cartão" />
          </Picker>
        </View>



        {tipoPay == 'Dinheiro' ? (
          <View style={styles.viewOptionsCartDin}>
            <Text style={[styles.label, { color: '#333'}]}>Valor de pagameto</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder='Ex: 100'
            />
            <Text style={[styles.label, { color: '#333'}]}>Troco: R${100 - 80.50 + valor}</Text>
          </View>

        ) : (
            <View style={styles.ViewInput}>
              <Text style={styles.label}>Qual baneira ?</Text>

              <Picker
                selectedValue={bandeira}
                mode='dialog'
                style={{  color: '#BABABA',}}
                accessibilityViewIsModal
                onValueChange={(itemValor, itemIndex) => { setBandeira(String(itemValor)) }}
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
                <Picker.Item label="Outra..." value="Outra" />
              </Picker>
              {bandeira == "Outra" ? (
                <View style={styles.viewOptionsCartDin}>

                  <TextInput
                    style={styles.input}
                    placeholder='digite aqui...'
                  />
                </View>
              ) : (null)
              }
            </View>
          )}


        <View style={styles.ViewBotton}>


         
            <RectButton onPress={button} style={styles.botton}>
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
    color: '#BABABA'
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
    color: '#BABABA',

  },
  TextScroll: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
    marginLeft: 10,
    color: '#BABABA',
  },
  label: {
    fontFamily: 'Nunito_800ExtraBold',
    marginBottom: 8,
    fontSize: 20,
    color: '#BABABA',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: '#BABABA',
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
    elevation: 8,
    marginTop: 20
  },

  ViewInput: {
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
    elevation: 2,
  },
  ImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: '#333',
    paddingVertical: 10,
    padding: 10,
    borderRadius: 15,
    elevation: 8,

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    margin: 10,
    borderRadius: 15
  },
  inputQuantidade: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  TextScrollValue: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    marginRight: 20,
    color: '#BABABA'
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    width: '85%',
    height: '95%',
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
  },
  textModal: {
    fontSize: 23,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 30
  },
  bottonModal: {
    backgroundColor: '#D13438',
    width: 100,
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
  MenuModalItens: {
    backgroundColor: '#ACACAC',
    padding: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 15
  },
  textModalItens: {
    fontSize: 15,
    fontFamily: 'Nunito_700Bold',
    marginTop: 5
  },
  EntregaView: { 
    backgroundColor: '#333', 
    marginHorizontal: 10, 
    borderRadius: 15
  }

})