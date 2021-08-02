import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from './styles';

import ListPruducts from "../../components/ListPruducts";

interface Route {
  status: string;
}

export default function Drinks(){

  const [status, setStatus] = useState("product?type=cerveja");

  function RenderItem({status}: Route){
    return <ListPruducts route={status}/>
  }

  useEffect(() => {
    RenderItem({status})
  }, [status]);

  return (
    <View style={styles.container}>
       <View style={styles.ViewMenuSuper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={
              status != "product?type=cerveja"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("product?type=cerveja")}>
              <Text
                style={
                  status != "product?type=cerveja"
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
              status != "product?type=cervejaEspecial"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("product?type=cervejaEspecial")}>
              <Text
                style={
                  status != "product?type=cervejaEspecial"
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
              status != "product?type=refrigerante"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("product?type=refrigerante")}>
              <Text
                style={
                  status != "product?type=refrigerante"
                    ? styles.textViewMenu
                    : [styles.textViewMenu, { color: "#FFF" }]
                }
              >
                Refrigerantes
              </Text>
            </BorderlessButton>
          </View>
          <View
            style={
              status != "product?type=gas"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("product?type=gas")}>
              <Text
                style={
                  status != "product?type=gas"
                    ? styles.textViewMenu
                    : [styles.textViewMenu, { color: "#FFF" }]
                }
              >
                Gás
              </Text>
            </BorderlessButton>
          </View>

          <View
            style={
              status != "product?type=water"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#D13437", borderColor: "#FFF" },
                  ]
            }
          >
            <BorderlessButton onPress={() => setStatus("product?type=water")}>
              <Text
                style={
                  status != "product?type=water"
                    ? styles.textViewMenu
                    : [styles.textViewMenu, { color: "#FFF" }]
                }
              >
                Água
              </Text>
            </BorderlessButton>
          </View>
        </ScrollView>
      </View>
            <RenderItem status={status}/>
     </View>
  );
}