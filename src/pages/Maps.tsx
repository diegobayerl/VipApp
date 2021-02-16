import React from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import mapMarker from '../images/map_marker.png';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Maps() {

  const navigation = useNavigation();

  function navigateHomeClient(){
  
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
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }} 
          >
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.7,
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
      </View>
      <View style={styles.viewBotton}>
        <RectButton onPress={navigateHomeClient} style={styles.bottonHome}>
          <Entypo name="home" size={24} color="#FFF" />
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
    height: Dimensions.get('screen').height - 180,
  },
  viewMapContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  calloutView: {
    width: 150,
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },
  bottonHome: {
    width: '90%',
    height: 55,
    backgroundColor: '#D13438',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 8
  },
  viewBotton:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }

});