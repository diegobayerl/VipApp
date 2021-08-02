import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#D13438'
    },

    ViewHeader: {
        marginTop: 5,

        width: 96,
        height: 96,

        marginLeft: (Dimensions.get('screen').width/2) - 46,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 3.84,
        elevation: 2,
        position: 'absolute',
    },

    label: {
        color: '#3349',
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        marginLeft: 4,
    },
    
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#3333',
        borderRadius: 1,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
    },

    viewLogin:{
        padding: 32,
        paddingVertical: 48,
        width: '100%',
        marginTop: 30,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 3.84,
        elevation: 1,
    },
    bottonLogin: {
        width: 200,
        height: 40,
        backgroundColor: '#D13438',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 1, 
        marginTop: 30,
        flexDirection: 'row',
    },
    textBotton: {
        color: '#FFF',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
    },
    bottonLogout: {
        width: 290,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        elevation: 1,
    },
    textBottonLogOut: {
        color: '#D13438',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    },
    viewBotton:{
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 24,
        marginBottom: 60
    },
    Text: {
        fontSize: 50,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF'
    },

    star:{
        flexDirection: 'row',
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

export default styles;