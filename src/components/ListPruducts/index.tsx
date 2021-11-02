import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from "./styles";

import Shimmer from '../Shimmer';
import Check from '../Check';

interface Product {
  id: number;
  name: string;
  type: string;
  value: number;
  url: string;
  description: string;
  promotion: boolean;
}

interface TypeProduct {
    data: Array<{
      id: number;
      name: string;
      type: string;
      value: number;
      url: string;
      description: string;
      promotion: boolean;
    }>;
}

export default function ListPruducts({ data }: TypeProduct) {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(data);
    setLoading(false);
    return;
  }, [data]);

  const navigation = useNavigation();

  function DetailsNavigation(id: number) {
    navigation.navigate("Details", { id });
  }

  return (
    <View style={styles.container}>
      <Shimmer visible={loading}>
      <Check visible={products.length < 1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 8}} />
        {products.map((product) => {
          return (
            <View key={product.id} style={styles.viewScroll}>
              <BorderlessButton onPress={() => DetailsNavigation(product.id)}>
                <View style={styles.viewCard}>
                  <View style={styles.ViewTextScroll}>
                    <Text style={styles.TextTitle}>{product.name}</Text>
                    <Text style={styles.TextValue}>{product.description}</Text>
                    <Text style={product.promotion ? [styles.TextValue, { color: '#D13438'}] : styles.TextValue}>
                      R$ {product.value.toFixed(2)} Unid
                    </Text>
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
