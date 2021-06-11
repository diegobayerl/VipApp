import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function Logout() {
  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState(0);
  const [telephone, setTelephone] = useState(0);
  const [city, setCity] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [number, setNumber] = useState(0);
  const [reference, setReference] = useState('');
  const [note, setNote] = useState('');

  const navigation = useNavigation();

  async function createUser(){

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

      navigation.navigate('MainTab');
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Dados pessoais</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="digite seu nome..."
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
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
        style={styles.input}
      />
   
        
        <Text style={styles.title}>
          <MaterialIcons style={{ marginRight: 20 }} name="my-location" size={20} color="#333" />
            Endereço
        </Text>
      

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        style={styles.input}
        placeholder="digite sua cidade..."
      />

      <Text style={styles.label}>Bairro</Text>
      <TextInput
        value={bairro}
        onChangeText={setBairro}
        style={styles.input}
        placeholder="digite seu bairro..."
      />
      <Text style={styles.label}>Rua</Text>
      <TextInput
        value={rua}
        onChangeText={setRua}
        style={styles.input}
        placeholder="digite o nome da rua...."
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        keyboardType='numeric'
        value={number !== 0 ? (String(number)) : ('')}
        onChangeText={text => setNumber(Number(text))}
        style={styles.input}
        placeholder="Ex: 137..."
      />

      <Text style={styles.label}>Referência</Text>
      <TextInput
        value={reference}
        onChangeText={setReference}
        style={[styles.input, {height: 100}]}
        placeholder="Ex: próximo ao supermecado do exemplo..."
        multiline
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        style={[styles.input, {height: 100}]}
        placeholder="Ex: Apartamento 16..."
        multiline
      />
      <View style={styles.viewBotton}>
        <RectButton style={styles.nextButton} onPress={createUser}>
          <Text style={styles.nextButtonText}>Cadastrar</Text>
        </RectButton>
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
  }
})