import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, ScrollView, Dimensions, MaskedViewComponent } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../services/api";

import Shimmer from '../components/shimmerOption';

interface requests {
  id: number;
  nameUser: string;
  cpfUser: number;
  idUser: number;
  nameProduct: string;
  value: number;
  quantidade: number;
  entrega: string;
  valorEntrega: number;
  valorTotal: number;
  formaPag: string;
  bandeira: string;
  valorCliente: number;
  troco: number;
  hora: string;
  status: boolean;
}

export default function Request() {

  const idUser = 1;

  const [requests, setRequests] = useState<requests[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    api.get(`requests/${idUser}`).then((response) => {
      setRequests(response.data);

      setTimeout(() => {
        setLoading(false);
    }, 1000);
    });

  }, []);

  requests.reverse();

  function NavigateMaps() {
    navigation.navigate("Maps");
  }
  // decelerationRate="fast"
  return (
    <View style={styles.container}>
      <Shimmer visible={loading}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            {
              marginTop: 20,
            },
          ]}
        />

        {requests.map((request) => {
          return (
            <View key={request.id} style={styles.viewText}>
              <View style={styles.viewName}>
                <Text style={styles.textName}>{request.nameUser}</Text>
                <Text style={styles.textName}>{request.cpfUser}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Produto:</Text>
                <Text style={styles.textItens}>{request.nameProduct}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Valor:</Text>
                <Text style={styles.textItens}> R$ {request.value.toFixed(2)}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Quantidade:</Text>
                <Text style={styles.textItens}>{request.quantidade}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Entrega:</Text>
                <Text style={styles.textItens}>{request.entrega}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Valor da entrega:</Text>
                <Text style={styles.textItens}>R$ {request.valorEntrega.toFixed(2)}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Valor total:</Text>
                <Text style={styles.textItens}>R$ {request.valorTotal.toFixed(2)}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Forma de pagemento:</Text>
                <Text style={styles.textItens}>{request.formaPag}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Bandeira:</Text>
                <Text style={styles.textItens}>{request.bandeira}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Valor pago pelo cliente:</Text>
                <Text style={styles.textItens}>R$ {request.valorCliente.toFixed(2)}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Troco:</Text>
                <Text style={styles.textItens}>R$ {request.troco.toFixed(2)}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Id da compra:</Text>
                <Text style={styles.textItens}>{request.id}</Text>
              </View>
              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Horário da compra:</Text>
                <Text style={styles.textItens}>{request.hora}</Text>
              </View>

              <Text style={styles.textItens}>Status:</Text>

              <View style={
                  request.status == false ? [styles.viewStatus, { backgroundColor: "#F46717" }] 
                  : [styles.viewStatus, { backgroundColor: "#00CC6A" }]}
                  >
                {request.status == false ? (
                    request.entrega === 'Delivery' ? (
                      <Text style={styles.textStatuseItens}>Pendente</Text>
                    ) : (
                      <RectButton
                        onPress={NavigateMaps}
                        style={styles.BottonNavigate}
                      >
                    <Text style={styles.textStatuseItens}>Pendente</Text>
  
                    <MaterialCommunityIcons
                      name="google-maps"
                      size={24}
                      color="#FFF"
                    />
                  </RectButton>
                    )
                ) : (
                    <Text style={styles.textStatuseItens}>Entregue</Text>
                )}
                
              </View>
            </View>
          );
        })}
      </ScrollView>
      </Shimmer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#D8D6D6",
  },

  viewText: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    elevation: 2,
    marginBottom: 20,
  },
  viewName: {
    marginHorizontal: 5,
    backgroundColor: "#696878",
    borderRadius: 10,
    padding: 5,
  },
  textName: {
    fontSize: 16,
    fontFamily: "Nunito_800ExtraBold",
    marginLeft: 5,
    color: "#FFF",
  },

  textItens: {
    fontSize: 14,
    fontFamily: "Nunito_600SemiBold",
    marginLeft: 20,
    marginTop: 10,
    color: "#333",
  },
  viewStatus: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
  },
  textStatuseItens: {
    fontFamily: "Nunito_800ExtraBold",
    color: "#FFF",
    fontSize: 15,
    padding: 5,
  },

  viewTitleItens: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 5,
  },

  textItensTitle: {
    fontSize: 15,
    fontFamily: "Nunito_800ExtraBold",
    marginLeft: 5,
    marginTop: 10,
    color: "#333",
  },
  BottonNavigate: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});
