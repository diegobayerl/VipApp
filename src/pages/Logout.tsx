import React, { useState, useContext } from 'react';

import { 
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../services/api';
import AuthContext from '../constexts/auth';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function Logout() {

  const { SignIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState(0);
  const [telephone, setTelephone] = useState(0);
  const [city, setCity] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [number, setNumber] = useState(0);
  const [reference, setReference] = useState('');
  const [note, setNote] = useState('sem observação...');

  const [mandatory, setMandatory] = useState(false);
  const [load, setLoad] = useState(false);

  async function checkUser(){

    const { data } = await api.get(`user?CPF=${cpf}`);

    if(data.cpf === cpf){
      setVisible(true);
      return;
    }

    if(name && cpf && telephone && city && bairro && rua && number &&reference && note){
      setLoad(true);
      createUser()
      return;
    }

    setMandatory(true);
    setVisible(true);

  }

  async function createUser(){

    console.log("teste")

      await api.post('/user', {
        name,
        cpf,
        telephone,
        city,
        bairro,
        rua,
        number,
        reference,
        note,
      });

      await SignIn({cpf});
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <Modal
          animationType='slide'
          transparent
          visible={visible}
        >
            <View style={styles.viewExternaModal}>
              <View style={styles.containerModal}>
                <View style={styles.modalView}>
                  <Text style={styles.textModal}>Ops!</Text>
                  
                    {!mandatory ? (
                      <Text style={styles.textModalSub}>
                        O usuário já cadastrado!
                      </Text>
                    ): (
                      <Text style={styles.textModalSub}>
                        Campo(s) obrigatório(s) em branco! preencha todos!
                      </Text>
                    )}

                    {!mandatory ? (
                      <>
                      <TouchableHighlight onPress={()=> {
                        setVisible(!visible);
                        setCpf(0);
                        }} style={[styles.bottonModal, {backgroundColor: '#D13438'}]}>
                                <Text  style={[styles.textButton, {color: '#FFF'}]}> Tentar novamente </Text>
                    </TouchableHighlight>

                  <TouchableHighlight onPress={() => {
                      setVisible(!visible);
                      navigation.goBack();
                  }} style={styles.bottonModal}>
                            <Text  style={styles.textButton}> Cancelar </Text>
                  </TouchableHighlight>
                  </>
                    ): (
                      <TouchableHighlight onPress={()=> {
                        setVisible(!visible);
                        }} style={[styles.bottonModal, {backgroundColor: '#D13438'}]}>
                                <Text  style={[styles.textButton, {color: '#FFF'}]}> OK </Text>
                      </TouchableHighlight>
                    )}
                </View>
              </View>
            </View>
        </Modal>

      <Text style={styles.title}>Dados pessoais</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={mandatory && name === '' ? styles.false : styles.input }
        placeholder="digite seu nome..."
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={mandatory && cpf === 0 ? styles.false : styles.input}
        keyboardType='numeric'
        value={cpf !== 0 ? (String(cpf)) : ('')}
        placeholder="000.000.000-00"
        onChangeText={text => setCpf(Number(text))}

      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        keyboardType='numeric'
        value={telephone !== 0 ? (String(telephone)) : ('')}
        onChangeText={text => setTelephone(Number(text))}
        placeholder="DDD + numero"
        style={mandatory && telephone === 0 ? styles.false : styles.input}
      />
   
        
        <Text style={styles.title}>
          <MaterialIcons style={{ marginRight: 20 }} name="my-location" size={20} color="#333" />
            Endereço
        </Text>
      

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        style={mandatory && city === '' ? styles.false : styles.input}
        placeholder="digite sua cidade..."
      />

      <Text style={styles.label}>Bairro</Text>
      <TextInput
        value={bairro}
        onChangeText={setBairro}
        style={mandatory && bairro === '' ? styles.false : styles.input}
        placeholder="digite seu bairro..."
      />
      <Text style={styles.label}>Rua</Text>
      <TextInput
        value={rua}
        onChangeText={setRua}
        style={mandatory && rua === '' ? styles.false : styles.input}
        placeholder="digite o nome da rua...."
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        keyboardType='numeric'
        value={number !== 0 ? (String(number)) : ('')}
        onChangeText={text => setNumber(Number(text))}
        style={mandatory && number === 0 ? styles.false : styles.input}
        placeholder="Ex: 137..."
      />

      <Text style={styles.label}>Referência</Text>
      <TextInput
        value={reference}
        onChangeText={setReference}
        style={mandatory && reference === '' ? [styles.false, , {height: 100}] : [styles.input, {height: 100}]}
        placeholder="Ex: próximo ao supermecado do exemplo..."
        multiline
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput
        value={note === 'sem observação...' ? ('') : note}
        onChangeText={setNote}
        style={mandatory && note === '' ? styles.false : [styles.input, {height: 100}]}
        placeholder="Ex: Apartamento 16... (campo não obrigatório)"
        multiline
      />
      <View style={styles.viewBotton}>
        <TouchableOpacity style={!load ? styles.nextButton : [styles.nextButton, {backgroundColor: '#AE696A'}] } disabled={load} onPress={checkUser}>
          {!load ? (
            <Text style={styles.nextButtonText}>Cadastrar</Text>
          ): (
            <ActivityIndicator size='small' color='#FFF' />
          )}
        </TouchableOpacity>
      </View>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },

  title: {
    color: '#333',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 15,
    borderBottomWidth: 0.8,
    borderBottomColor: '#3333',
  },

  label: {
    color: '#333',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#3333',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  viewBotton:{
    width: '100%',
    alignItems: 'center'
  },
  nextButton: {
    backgroundColor: '#D13438',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    width: 200,
    marginTop: 32,
    marginBottom: 50
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },
  false:{
    backgroundColor: '#FFF6F7',
    borderWidth: 1.4,
    borderColor: '#DA8C8E',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
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
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 10
  },
  textModalSub:{
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 30,
    alignItems: 'center',
    textAlign: 'justify'
  },
  textButton:{
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    color: '#D13438'
  },
  bottonModal: {
    backgroundColor: '#FFF',
    width: 150,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D13438',
    marginBottom: 5
    
  },
  textMesageModal: {
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 30
  },
})