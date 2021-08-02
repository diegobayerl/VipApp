import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginRight:0,
        flexDirection: 'row',
        backgroundColor: '#D13438',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 2,
    },
    view:{

        justifyContent: 'center',
        alignItems: 'center',

        padding: 8,

        borderRadius: 8,
    },
    botton: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    iconTrue:{
        color: '#333',
        fontSize: 18
    },
    iconFalse:{
        color: '#FFF',
        fontSize: 16
    },
    textTrue:{
        fontFamily: 'Nunito_700Bold',
        color: '#333',
        fontSize: 12,
    },
    textFalse:{
        fontFamily: 'Nunito_700Bold',
        color: '#FFF',
        fontSize: 12,
    }
});

export default styles;