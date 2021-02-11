import React, { useState, useEffect, useRef } from 'react';
import {Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {css} from './assets/css/Css';

export default function App() {

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(()=>{
    
    (async function(){

      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            })
        } else {
            throw new Error('Location permission not granted');
        }

    })();

  },[]);

  return (

    <View style={css.container}>
        <MapView
          style={css.map}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={false}
          loadingEnabled={true}

    >
      </MapView>

      <View style={css.search}>

      </View>
    </View>

  );
}

