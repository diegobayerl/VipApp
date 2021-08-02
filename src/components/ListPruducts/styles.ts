import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  
    title: {
      color: "#303A52",
      fontSize: 24,
      fontFamily: "Nunito_700Bold",
      borderBottomColor: "#8fa7b3",
      marginTop: 5,
      marginBottom: 5,
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: "cover",
      borderRadius: 20,
    },
    viewScroll: {
      padding: 16,
      backgroundColor: "#fff",
      margin: 16,
      marginBottom: 8,
      marginTop: 0,
      borderRadius: 1,
      elevation: 1,
    },
  
    viewCard: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    ViewTextScroll: {
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 8,
    },
    TextTitle: {
      fontFamily: "Nunito_800ExtraBold",
      paddingHorizontal: 10,
      color: "#303A52",
  
      width: 150,
      marginBottom: 5,
  
      fontSize: 25,
    },
    TextValue: {
      fontFamily: "Nunito_700Bold",
      paddingHorizontal: 10,
      fontSize: 20,
      color: "#303A52",
  
      width: 165
    },
});

export default styles;