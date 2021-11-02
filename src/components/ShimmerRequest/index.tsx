import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from './styles';

interface valueShimer {
  visible: boolean;
  children: object;
}

export default function shimmer({ visible = false, children }: valueShimer) {

  if (visible) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#204040' />
      </View>
    );
  }

  return <>{children}</>;
}