import React, { useState, useEffect, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, ScrollView, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import api from "../../services/api";

import AuthContext from '../../constexts/auth';

import Shimmer from '../../components/ShimmerRequest';

import styles from './styles';
import Check from "../../components/Check";

interface requests {
  id: number;
  nameUser: string;
  telephone: number;
  idUser: number;
  nameProduct: string;
  description: string;
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
  date: string;
  status: boolean;
}

export default function Request() {

  const isFocused = useIsFocused();

  const { user } = useContext(AuthContext);

  const [requests, setRequests] = useState<requests[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`requests/${user?.id}`).then((response) => {
      setRequests(response.data.reverse());
        setLoading(false);
    });
  }, [isFocused]);

  function NavigateMaps() {
    Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=-18.719617,-39.8528851');
  }

  return (
    <View style={styles.container}>
      <Shimmer visible={loading}>
      <Check visible={requests.length < 1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            {
              marginTop: 8,
            },
          ]}
        />

        {requests.map((request) => {
          return (
            <View key={request.id} style={styles.viewText}>
              <View style={styles.viewName}>
                <Text style={styles.textName}>{request.nameUser}</Text>
                <Text style={styles.textName}>{request.telephone}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Produto:</Text>
                <Text style={styles.textItens}>{request.nameProduct}</Text>
              </View>

              <View style={styles.viewTitleItens}>
                <Text style={styles.textItensTitle}>Descrição:</Text>
                <Text style={styles.textItens}>{request.description}</Text>
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
                <Text style={styles.textItensTitle}>Dia da compra:</Text>
                <Text style={styles.textItens}>{request.date}</Text>
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
      </Check>
      </Shimmer>
    </View>
  );
}