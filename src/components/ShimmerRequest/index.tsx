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
        <ActivityIndicator size='large' color='#D13438' />
      </View>
    );
  }

  return <>{children}</>;
}