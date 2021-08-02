import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface check{
visible: boolean,
children: object
}

export default function Check({ visible, children }: check){
    if(visible){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Nenhum item encontrado! 👀
                </Text>
            </View>
        )
    }

    return <>{children}</>
  
 
}

