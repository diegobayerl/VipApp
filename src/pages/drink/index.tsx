import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Modal, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from './styles';

import ListPruducts from "../../components/ListPruducts";
import api from "../../services/api";
import Shimmer from "../../components/Shimmer";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

interface Product {
  item: Array<{
    id: number;
    name: string;
    type: string;
    value: number;
    url: string;
    description: string;
    promotion: boolean;
  }>;
}

interface Promo {
  id: number;
  name: string;
  type: string;
  value: number;
  url: string;
  description: string;
  promotion: boolean;
}

export default function Drinks(){

  const [modal, setModal] = useState(false);

  const [status, setStatus] = useState("cerveja");
  const [loading, setLoading] = useState(true);

  const [cerveja, setCerveja] = useState([]);
  const [cervejaEspecial, setCervejaEspecial] = useState([]);
  const [refrigerante, setRefrigerante] = useState([]);
  const [gas, setGas] = useState([]);
  const [water, setGWater] = useState([]);

  const [promo, setPromo] = useState<Promo[]>([]);

  const [item, setItem] = useState([]);

  const navigation = useNavigation();

  useEffect(() =>{
    api.get("productPromo?promotion=true").then(pruduct => {
      setPromo(pruduct.data);
    });
  }, []);

  useEffect(() => {
    if(promo.length > 0) setModal(!modal);
  }, [promo]);

  useEffect(() => {
    api.get("product?type=cerveja").then( product => {
      setCerveja(product.data);
      setItem(product.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get("product?type=cervejaEspecial").then( product => {
      setCervejaEspecial(product.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get("product?type=refrigerante").then( product => {
      setRefrigerante(product.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get("product?type=gas").then( product => {
      setGas(product.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get("product?type=water").then( product => {
      setGWater(product.data);
      setLoading(false);
    });
  }, []);

  function RenderItem({item} : Product ){

    return <ListPruducts data={item} />
  }

  useEffect(() => {
    RenderItem({item});
    return;
  }, [status]);
 
  return (
    <View style={styles.container}>

       <View style={styles.ViewMenuSuper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={
              status != "cerveja"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#03A63C", borderColor: "#03A63C" },
                  ]
            }
          >
            <BorderlessButton onPress={() => {
              setStatus("cerveja");
              setItem(cerveja);
              }}>
              <Text
                style={
                  status != "cerveja"
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
              status != "cervejaEspecial"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#03A63C", borderColor: "#03A63C" },
                  ]
            }
          >
            <BorderlessButton onPress={() => {
                setStatus("cervejaEspecial");
                setItem(cervejaEspecial);
              }}>
              <Text
                style={
                  status != "cervejaEspecial"
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
                    { backgroundColor: "#03A63C", borderColor: "#03A63C" },
                  ]
            }
          >
            <BorderlessButton onPress={() => {
              setStatus("product?type=refrigerante");
              setItem(refrigerante);
              }}>
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
              status != "gas"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#03A63C", borderColor: "#03A63C" },
                  ]
            }
          >
            <BorderlessButton onPress={() => {
                setStatus("gas");
                setItem(gas);  
              }}>
              <Text
                style={
                  status != "gas"
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
              status != "water"
                ? styles.viewMenuSuperInter
                : [
                    styles.viewMenuSuperInter,
                    { backgroundColor: "#03A63C", borderColor: "#03A63C" },
                  ]
            }
          >
            <BorderlessButton onPress={() => {
                setStatus("water");
                setItem(water);
              }}>
              <Text
                style={
                  status != "water"
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
      <Shimmer visible={loading}>
        <RenderItem item={item}/>
      </Shimmer>

      
        <Modal
          animationType='slide'
          transparent={true}
          visible={modal}
        >
          <View style={styles.modalView}>
              <View style={styles.modalInterView}>
                <Text style={styles.modalText}>Promoções</Text>
                <MaterialCommunityIcons onPress={ () => setModal(!modal)} name="close" size={24} color="#D13438" />
              </View>
            <View style={styles.containerModal}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              {promo.map( product => {
                return (
                  <View key={product.id} style={styles.cardmodal}>
                   
                    <View style={styles.cardmodalInter}>
                      <Text style={styles.text}>{product.name}</Text>
                      <Text style={styles.text}>R$ {product.value.toFixed(2)}</Text>
                    </View>               
                
                        <Image style={styles.image} source={{ uri: product.url }} />
            
                  </View>
                )
              })}
            </ScrollView>
            </View>
          </View>
        </Modal>

     </View>
  );
}
