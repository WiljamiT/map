import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Platform,
  Linking,
} from 'react-native';

const App: () => Node = () => {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const launchMap = () => {
    const location = `${latitude},${longitude}`
    const url = Platform.select({
      ios: `maps:${location}`,
      android: `geo:${location}?center=${location}&q=${location}&z=16`,
    });
    Linking.openURL(url);
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 25, marginLeft: 'auto', marginRight: 'auto' }}>
        <View>
          <Text style={{ fontSize: 20, color: '#546d78' }}>
            Enter latitude:
          </Text>
          <TextInput style={{ borderBottom: 1 }} placeholder="Latitude"
            onChangeText={text => setLatitude(text)} />
          <Text style={{ fontSize: 20, color: '#546d78' }}>
            Enter longitude:
          </Text>
          <TextInput placeholder="Longitude"
            onChangeText={text => setLongitude(text)} />
        </View>

        <View style={{width: 300, marginTop: 25, marginLeft: 'auto', marginRight: 'auto'}}>
        <Button title="Launch a Map" color="#546d78" onPress={launchMap}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;

