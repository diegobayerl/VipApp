import { StyleSheet } from "react-native";

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
      marginLeft: 2,
    },
  
    input: {
      backgroundColor: '#fff',
      borderWidth: 1.4,
      borderColor: '#3333',
      borderRadius: 8,
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
      borderRadius: 4,
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
      borderRadius: 8,
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
  });

  export default styles;