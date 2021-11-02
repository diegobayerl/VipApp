import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: "cover",
      backgroundColor: "#ECEFF1",
      overflow: 'hidden',
    },
    viewScroll: {
      padding: 15,
      backgroundColor: "#fff",
      margin: 15,
      marginBottom: 10,
      marginTop: 0,
      borderRadius: 1,
      overflow: 'hidden',
      opacity: 0.5
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
    Text: {
      paddingHorizontal: 10,
      backgroundColor: "#ECEFF1",
      height: 30,
      width: 130,
      overflow: 'hidden',
    },
  });

  export default styles;