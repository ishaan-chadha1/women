import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PanicModeScreen() {
  const [panicModeActive, setPanicModeActive] = useState(false);

  // Function to simulate panic mode activation
  const activatePanicMode = () => {
    setPanicModeActive(true);
    Alert.alert(
      "Panic Mode Activated",
      "The phone has been locked down and audio/video recording has started.",
      [{ text: "OK", onPress: handleFalseExit }]
    );
    // Simulate sending distress signals and recording
    sendDistressSignal();
  };

  const sendDistressSignal = () => {
    console.log("Distress signal sent to trusted contacts.");
    // Simulate audio/video recording
    console.log("Audio and video recording started.");
  };

  // Function to simulate the fake exit
  const handleFalseExit = () => {
    console.log("Fake app exit initiated, but app is running in the background.");
    Alert.alert(
      "App Closed",
      "It looks like the app is closed, but it continues running in the background for your safety.",
      [{ text: "OK" }]
    );
    setPanicModeActive(false);
  };

  // Button to simulate covert panic mode activation (e.g., specific button press sequence)
  const covertActivation = () => {
    activatePanicMode();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Panic Mode is designed for discreet activation in dangerous situations. Press a sequence of buttons to trigger it.
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.activateButton} onPress={covertActivation}>
          <Ionicons name="md-warning" size={24} color="white" style={styles.iconStyle} />
          <Text style={styles.activateButtonText}>Covertly Activate Panic Mode</Text>
        </TouchableOpacity>

        {panicModeActive && (
          <View>
            <Text style={styles.activeText}>Panic Mode is Active!</Text>
            <Button title="Fake Exit" onPress={handleFalseExit} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  activateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E63946',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    paddingHorizontal: 20,
  },
  activateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  activeText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  iconStyle: {
    marginRight: 8,
  },
});

