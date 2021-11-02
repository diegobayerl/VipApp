import React, {  useEffect, useState } from "react";

import { View, Text } from "react-native";

import ListPruducts from "../../components/ListPruducts";
import Shimmer from "../../components/Shimmer";

import styles from './styles';

import { useIsFocused} from '@react-navigation/native';

import api from "../../services/api";

export default function Promo() {
  const [promo, setPromo] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();
  
  useEffect(() =>{
    api.get("productPromo?promotion=true").then(pruduct => {
      setPromo(pruduct.data);
      setLoading(false);
    });
  }, [isFocused]);

  return (
    <View style={styles.container}>

      < View style={styles.view__title}>
        <Text style={styles.title}>
          Promoções  📢
        </Text>
      </View>
      <Shimmer visible={loading}>
        <ListPruducts data={promo}/>
      </Shimmer>
    </View>
  );
}