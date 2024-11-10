import React from 'react';
import { 
  StyleSheet, 
  View, 
  Switch, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar 
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  const [isLiveLocationEnabled, setLiveLocationEnabled] = React.useState(false);
  const [isAudioEnabled, setAudioEnabled] = React.useState(false);
  const [isVideoEnabled, setVideoEnabled] = React.useState(false);
  const [isBatteryEnabled, setBatteryEnabled] = React.useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Fixed SOS Button */}
      <View style={styles.topButtonContainer}>
        <TouchableOpacity 
          style={[styles.sosButton, styles.sosButtonTop]} 
          onPress={() => alert('SOS Button Pressed!')}
        >
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContentContainer}>
        <Text style={styles.headerText}>Hello Sejal How are You</Text>
        
        <MapView style={styles.map}>
          {/* Add your markers here */}
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
            <Switch
              value={isAudioEnabled}
              onValueChange={setAudioEnabled}
            />
          </View>

          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Share Video</Text>
            <Switch
              value={isVideoEnabled}
              onValueChange={setVideoEnabled}
            />
          </View>

          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Share Battery Percentage</Text>
            <Switch
              value={isBatteryEnabled}
              onValueChange={setBatteryEnabled}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Fixed SOS Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity 
          style={styles.sosButton} 
          onPress={() => alert('SOS Button Pressed!')}
        >
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scrollContent: {
    flex: 1,
    marginTop: 80, // Height of top SOS button + padding
    marginBottom: 80, // Height of bottom SOS button + padding
  },
  scrollContentContainer: {
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
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  toggleContainer: {
    marginVertical: 10,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
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
    fontSize: 14,
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
  },
  sosButtonTop: {
    marginBottom: 0,
  },
  sosButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});