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
      borderBottomColor: "#D13438",
      paddingBottom: 7,
      backgroundColor: "#D13438",
    },
    viewMenuSuperInter: {
      padding: 5,
      paddingHorizontal: 8,
      backgroundColor: "#fff",
      borderTopLeftRadius: 12,
      borderBottomRightRadius: 12,
      marginLeft: 8,
      marginRight: 8,
      elevation: 1,
      marginBottom: 5,
      borderWidth: 0.5,
      borderColor: "#D13438",
    },
    textViewMenu: {
      fontSize: 18,
      fontFamily: "Nunito_800ExtraBold",
      color: "#303A52",
    },
});

export default styles;