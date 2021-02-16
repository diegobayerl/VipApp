import React from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function Logout() {
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Dados pessoais</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        multiline
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.title}>Endereço</Text>

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Bairro</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.label}>Rua</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Referência</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        multiline
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        multiline
      />

      <RectButton style={styles.nextButton} onPress={() => { }}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },

  title: {
    color: '#8fa7b3',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#8fa7b3',
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },


  nextButton: {
    backgroundColor: '#D13438',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
    marginBottom: 50
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})