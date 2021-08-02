import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ImageView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      backgroundColor: '#fff',
      paddingVertical: 10,
      padding: 10,
      borderTopRightRadius: 1,
      borderTopLeftRadius: 1,
      elevation: 1,
    },
    TextScroll: {
      fontFamily: 'Nunito_700Bold',
      fontSize: 18,
      marginLeft: 10,
      color: '#333',
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 20,
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
    EntregaView: { 
      backgroundColor: '#fff', 
      marginHorizontal: 10,
      padding: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: '#333',
      elevation: 1,
    },
    ViewInput: {
      padding: 20,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      elevation: 1,
    },

    title: {
      fontSize: 24,
      fontFamily: 'Nunito_700Bold',
      borderBottomColor: '#8fa7b3',
      marginTop: 10,
      marginBottom: 10,
      color: '#333'
    },

    viewOptionsCartDin: {
      paddingHorizontal: 20,
      paddingTop: 20
    },

    label: {
      fontFamily: 'Nunito_700Bold',
      marginBottom: 8,
      fontSize: 18,
      color: '#333',
    },
  
    input: {
      backgroundColor: '#fff',
      borderRadius: 8,
      height: 56,
      paddingVertical: 18,
      paddingHorizontal: 24,
      textAlignVertical: 'top',
      marginBottom: 20,
      color: '#333',
      elevation: 0.5
    },
    botton: {
      width: 236,
      height: 55,
      backgroundColor: '#D13438',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#D13438',
      borderWidth: 2,
      elevation: 1,
      marginTop: 8
    },
  

    ViewBotton: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24
    },
    textBotton: {
      color: "#FFF",
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 16
    },
    
  
    TextScrollValue: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 18,
      marginRight: 20,
      color: '#333'
    },
  })

  export default styles;