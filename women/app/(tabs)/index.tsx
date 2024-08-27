import React from 'react';
import { Image, StyleSheet, View, Button, Switch, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  const [isLiveLocationEnabled, setLiveLocationEnabled] = React.useState(false);
  const [isAudioEnabled, setAudioEnabled] = React.useState(false);
  const [isVideoEnabled, setVideoEnabled] = React.useState(false);
  const [isBatteryEnabled, setBatteryEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* Top SOS Button */}
      <TouchableOpacity
        style={[styles.sosButton, styles.sosButtonTop]}
        onPress={() => alert('SOS Button Pressed!')}>
        <Text style={styles.sosButtonText}>SOS</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Ensuring Your Safety, Ishaan!</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{ latitude: 37.7749, longitude: -122.4194 }} />
      </MapView>

      <View style={styles.toggleContainer}>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Share Live Location</Text>
          <Switch
            value={isLiveLocationEnabled}
            onValueChange={setLiveLocationEnabled}
          />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Share Audio</Text>
          <Switch value={isAudioEnabled} onValueChange={setAudioEnabled} />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Share Video</Text>
          <Switch value={isVideoEnabled} onValueChange={setVideoEnabled} />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Share Battery Percentage</Text>
          <Switch value={isBatteryEnabled} onValueChange={setBatteryEnabled} />
        </View>
      </View>

      {/* Bottom SOS Button */}
      <TouchableOpacity
        style={styles.sosButton}
        onPress={() => alert('SOS Button Pressed!')}>
        <Text style={styles.sosButtonText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  map: {
    width: '100%',
    height: '30%', // Reduced height for better fit
    borderRadius: 10,
    marginBottom: 20,
  },
  toggleContainer: {
    marginVertical: 10, // Reduced margin
    paddingHorizontal: 10,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Reduced spacing between toggles
    paddingVertical: 8, // Reduced padding
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleLabel: {
    fontSize: 14, // Reduced font size
    color: '#333',
  },
  sosButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  sosButtonTop: {
    marginTop: 20,
  },
  sosButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

