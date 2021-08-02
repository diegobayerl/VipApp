import React, { useState, useContext } from 'react';

import { 
  ScrollView,
  View,
  Text,
  TextInput,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import AuthContext from '../../constexts/auth';

import styles from './styles';

export default function Create(){
  const { SignIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [number, setNumber] = useState(0);
  const [reference, setReference] = useState('');
  const [note, setNote] = useState('sem observação...');

  const [mandatory, setMandatory] = useState(false);
  const [load, setLoad] = useState(false);

  async function checkUser(){

    setLoad(true);

    const { data } = await api.get(`user?telephone=${telephone}`);

    if(data.telephone === telephone){
      setLoad(false);
      Alert.alert(
        'Ops...',
        'Já existe usuário com esse telefone cadastrado 😀',
        [
          {
            text: 'OK',
            onPress: () => {
              setTelephone('')
            }
          }
        ]
      )
      return;
    }

    if(name && telephone && city && bairro && rua && number &&reference && note){
      setLoad(true);
      createUser()
      return;
    }

    setMandatory(true);
    
    Alert.alert(
      'Ops...',
      'Preencha todos os campos obrigatórios 😀',
      [
        {
          text: 'OK',
          onPress: () => {
            setTelephone('')
          }
        }
      ]
    )

    setLoad(false);
  }

  async function createUser(){

      await api.post('/user', {
        name,
        telephone,
        city,
        bairro,
        rua,
        number,
        reference,
        note,
      });

      await SignIn({telephone});

      Alert.alert(
        'Ebaa...',
        'Usuário criado com sucesso 💞',
        [
          {
            text: 'OK',
          }
        ]
      )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Dados pessoais</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={mandatory && name === '' ? styles.false : styles.input }
        placeholder="digite seu nome..."
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInputMask
              value={telephone}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              style={styles.input}
              placeholder="(99) 99999-9999"
              onChangeText={text => setTelephone(text)}
        />
   
        <Text style={styles.title}>
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
          ):(
            <ActivityIndicator size='small' color='#FFF' />
          )}
        </TouchableOpacity>
      </View>
     
    </ScrollView>
  )
}

