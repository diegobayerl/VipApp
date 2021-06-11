import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import api from "../services/api";

import Shimmer from "../components/shimmer";

interface product {
  id: number;
  name: string;
  type: string;
  value: number;
  url: string;
  description: string;
  promotion: boolean;
}

export default function Drinks() {
  const [status, setStatus] = useState("Cervejas");
  const [cerveja, setCerveja] = useState<product[]>([]);
  const [cervejaEpecial, setCervejaEspecial] = useState<product[]>([]);
  const [refrigerante, setRefrigerante] = useState<product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("product?type=cerveja").then((response) => {
      setCerveja(response.data);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    api.get("product?type=cervejaEspecial").then((response) => {
      setCervejaEspecial(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("product?type=refrigerante").then((response) => {
      setRefrigerante(response.data);
    });
  }, []);

  const navigation = useNavigation();

  function DetailsNavigation(id: number) {
    navigation.navigate("Details", { id });
  }

  return (
    <View style={styles.container}>
      <View style={styles.ViewMenuSuper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={
              status != "Cervejas"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("Cervejas")}>
              <Text
                style={
                  status != "Cervejas"
                    ? styles.textViewMenu
                    : [styles.textViewMenu, { color: "#FFF" }]
                }
              >
                Cervejas
              </Text>
            </BorderlessButton>
          </View>

          <View
            style={
              status != "Cervejas Especiais"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("Cervejas Especiais")}>
              <Text
                style={
                  status != "Cervejas Especiais"
                    ? styles.textViewMenu
                    : [styles.textViewMenu, { color: "#FFF" }]
                }
              >
                Cervejas Especiais
              </Text>
            </BorderlessButton>
          </View>

          <View
            style={
              status != "Refrigerantes"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("Refrigerantes")}>
              <Text
                style={
                  status != "Refrigerantes"
                    ? styles.textViewMenu
                    : [styles.textViewMenu, { color: "#FFF" }]
                }
              >
                Refrigerantes
              </Text>
            </BorderlessButton>
          </View>
        </ScrollView>
      </View>
      <Shimmer visible={loading}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 20 }} />
          {status == "Cervejas"
            ? cerveja.map((drink) => {
                return (
                  <View key={drink.id}>
                    <View style={styles.viewScroll}>
                      <BorderlessButton
                        onPress={() => DetailsNavigation(drink.id)}
                      >
                        <View style={styles.viewCard}>
                          <View style={styles.ViewTextScroll}>
                            <Text style={styles.TextTitle}>{drink.name}</Text>
                            <Text style={styles.TextValue}>
                              {drink.description}
                            </Text>
                            <Text style={styles.TextValue}>
                              R$ {drink.value}0 Unid
                            </Text>
                          </View>
                          <Image
                            style={styles.image}
                            source={{ uri: drink.url }}
                          />
                        </View>
                      </BorderlessButton>
                    </View>
                  </View>
                );
              })
            : status == "Cervejas Especiais"
            ? cervejaEpecial.map((drink) => {
                return (
                  <View key={drink.id}>
                    <View style={styles.viewScroll}>
                      <BorderlessButton
                        onPress={() => DetailsNavigation(drink.id)}
                      >
                        <View style={styles.viewCard}>
                          <View style={styles.ViewTextScroll}>
                            <Text style={styles.TextTitle}>{drink.name}</Text>
                            <Text style={styles.TextValue}>
                              {drink.description}
                            </Text>
                            <Text style={styles.TextValue}>
                              R$ {drink.value}0 Unid
                            </Text>
                          </View>
                          <Image
                            style={styles.image}
                            source={{ uri: drink.url }}
                          />
                        </View>
                      </BorderlessButton>
                    </View>
                  </View>
                );
              })
            : refrigerante.map((drink) => {
                return (
                  <View key={drink.id}>
                    <View style={styles.viewScroll}>
                      <BorderlessButton
                        onPress={() => DetailsNavigation(drink.id)}
                      >
                        <View style={styles.viewCard}>
                          <View style={styles.ViewTextScroll}>
                            <Text style={styles.TextTitle}>{drink.name}</Text>
                            <Text style={styles.TextValue}>
                              {drink.description}
                            </Text>
                            <Text style={styles.TextValue}>
                              R$ {drink.value}0 Unid
                            </Text>
                          </View>
                          <Image
                            style={styles.image}
                            source={{ uri: drink.url }}
                          />
                        </View>
                      </BorderlessButton>
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
  },
  TextValue: {
    fontFamily: "Nunito_700Bold",
    paddingHorizontal: 10,
    fontSize: 20,
    color: "#303A52",
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
    backgroundColor: "#fff",
    marginRight: 10,
    borderRadius: 5,
    marginLeft: 10,
    elevation: 1,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#D13438",
  },
  textViewMenu: {
    fontSize: 18,
    fontFamily: "Nunito_800ExtraBold",
    color: "#303A52",
  },
});
