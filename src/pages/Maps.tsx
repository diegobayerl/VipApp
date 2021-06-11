import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import mapMarker from '../images/map_marker.png';
import { RectButton } from 'react-native-gesture-handler';


import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'

export default function Maps() {

  const navigation = useNavigation();

  function navigateHomeClient() {
    navigation.navigate('MainTab');
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewMapContainer}>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -18.7180089,
            longitude: -39.857289,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 3,
              y: 0.9,
            }}
            coordinate={{
              latitude: -18.7180089,
              longitude: -39.857289,
            }}
          >
            <Callout tooltip onPress={() => { }}>
              <View style={styles.calloutView}>
                <Text style={styles.calloutText}>Vip: Distribuidora</Text>
              </View>
            </Callout>
          </Marker>

        </MapView>

        <Text style={styles.textTitle}>
          Vamos ir até a loja retirar seu produto! ok?
        </Text>

        <RectButton style={styles.home} onPress={navigateHomeClient}>
            <Feather name='arrow-left' color="#FFF" size={24} />
        </RectButton>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbdbd',
    justifyContent: 'space-between'
  },
  map: {
    width: '100%',
    height: '100%',
  },
  viewMapContainer: {
    justifyContent: 'space-evenly'

  },
  calloutView: {
    width: 130,
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 13,
    fontFamily: 'Nunito_700Bold',
  },
  home:{
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 28,

    backgroundColor: '#D13438',
    height: 48,
    width: 55,
    paddingLeft: 2,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle:{
    position: 'absolute',
    left: 24,
    right: 24,
    top: 48,

    marginRight: 20,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 18,
    color: '#333'
  },

});