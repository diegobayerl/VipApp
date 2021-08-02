import React, {  useEffect } from "react";

import { View, Text } from "react-native";

import ListPruducts from "../../components/ListPruducts";

import styles from './styles';
import { useIsFocused} from '@react-navigation/native';

export default function Promo() {
  const isFocused = useIsFocused();

  function RenderItem(){
    return <ListPruducts route='productPromo?promotion=true'/>
   
  }
  
  useEffect(() =>{
    RenderItem()
  }, [isFocused]);

  return (
    <View style={styles.container}>

    < View style={styles.view__title}>
        <Text style={styles.title}>
          Promoções  📢
        </Text>
      </View>

        <RenderItem/>
    </View>
  );
}