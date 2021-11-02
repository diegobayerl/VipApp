import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  
    ViewMenuSuper: {
      paddingTop: 10,
      width: "100%",
      borderBottomWidth: 0.5,
      borderBottomColor: "#03A63C",
      paddingBottom: 7,
      backgroundColor: "#03A63C",
    },
    viewMenuSuperInter: {
      padding: 5,
      paddingHorizontal: 8,
      backgroundColor: "#f3f3f3",
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 5,
      borderWidth: 0.5,
      borderColor: "#03A63C",
    },
    textViewMenu: {
      fontSize: 18,
      fontFamily: "Nunito_800ExtraBold",
      color: "#303A52",
    },
    modalView: {
      margin: 8,
      marginTop: 36,
      height: '80%',
      backgroundColor: 'white',
      borderRadius: 8,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalInterView:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 24
    },
    modalText:{
      fontSize: 18
    },
    containerModal:{
      alignItems: 'center',
     
      marginLeft: 20,

    },
    cardmodal:{
      flexDirection: 'row',
      justifyContent: 'space-between',

      marginBottom: 8,

      margin: 8,

      padding: 8,

      width: '87%',
      backgroundColor: '#204040',
      elevation: 1
    },
    cardmodalInter:{
      padding: 8,
      borderRadius: 2,
      width: 100,

      justifyContent: 'space-evenly'
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: "cover",
      borderRadius: 20,
    },

    text: {
      fontFamily: "Nunito_700Bold",
      color: '#f3f3f3'
    }
    
});

export default styles;