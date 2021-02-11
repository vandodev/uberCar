import React from 'react';
import {Text, View } from 'react-native';
import MapView from 'react-native-maps';

import {css} from './assets/css/Css';

export default function App() {
  return (

    <View style={css.container}>
        <MapView
              style={css.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
    >
      </MapView>

      <View style={css.search}>

      </View>
    </View>

  );
}

