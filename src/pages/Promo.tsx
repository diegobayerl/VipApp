import React, { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import api from "../services/api";

import Shimmer from '../components/shimmer';
import Check from '../components/check';

interface productPromo {
  id: number;
  name: string;
  type: string;
  value: number;
  url: string;
  description: string;
  promotion: boolean;
}

export default function Promo() {

  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const [promo, setPromo] = useState<productPromo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.get('productPromo?promotion=true').then(response =>{
      setPromo(response.data);
    });
    setLoading(false);
  }, [isFocused]);
  
  function DetailsNavigation(id: number){
    navigation.navigate("Details", {id});
  }

  return (
    <View style={styles.container}>
    <Shimmer visible={loading}>
      <Check visible={promo.length < 1} title="promoção">
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 20 }} />
        {promo.map((product) => {
          return (
            <View key={product.id} style={styles.viewScroll}>
              <BorderlessButton onPress={() => DetailsNavigation(product.id)}>
                <View style={styles.viewCard}>
                  <View style={styles.ViewTextScroll}>
                    <Text style={styles.TextTitle}>{product.name}</Text>
                    <Text style={styles.TextValue}>{product.description}</Text>
                    <Text style={[styles.TextValue, {color: '#D13438'}]}>
                      R$ {product.value.toFixed(2)} Unid
                    </Text>
                    <Text style={[styles.TextValue, {color: '#D13438'}]}>Em promoção</Text>
                  </View>
                  <Image style={styles.image} source={{ uri: product.url }} />
                </View>
              </BorderlessButton>
            </View>
          );
        })}
      </ScrollView>
      </Check>
      </Shimmer>
    </View>
  );
}

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
    marginBottom: 3,
    marginLeft: 30,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 20,
    overflow: 'hidden',
  },
  viewScroll: {
    padding: 15,
    backgroundColor: "#fff",
    margin: 15,
    marginBottom: 10,
    marginTop: 0,
    borderRadius: 15,
    elevation: 1,
    borderWidth: 1.2,
    borderColor: "#3333",
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
    fontSize: 25,

    width: 150,
    marginBottom: 5
  },
  TextValue: {
    fontFamily: "Nunito_700Bold",
    paddingHorizontal: 10,
    fontSize: 20,
    color: "#303A52",
    width: 165,

    marginTop: 5,
    marginBottom: 5
  },
  ViewTitle: {
    width: "93%",
    alignItems: "flex-end",
    marginBottom: 5,
  },
});
