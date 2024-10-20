import React from 'react';
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function VirtualGuardianScreen() {
  const [proactiveAlerts, setProactiveAlerts] = React.useState(true);
  const [autoSOSTrigger, setAutoSOSTrigger] = React.useState(true);
  const [safetyCheckIns, setSafetyCheckIns] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Guardian Status */}
      <View style={styles.guardianStatusContainer}>
        <Text style={styles.guardianStatusTitle}>Virtual Guardian Status:</Text>
        <Text style={styles.guardianStatus}>Active</Text>
        <Ionicons name="md-shield-checkmark" size={28} color="green" />
      </View>

      {/* Guardian Settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Guardian Settings</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="ios-alert-circle" size={24} color="orange" style={styles.iconStyle} />
            <Text style={styles.settingText}>Proactive Alerts</Text>
          </View>
          <Switch value={proactiveAlerts} onValueChange={setProactiveAlerts} />
        </View>
        <Text style={styles.settingDescription}>
          Receive real-time notifications if the guardian detects unusual or suspicious activity, such as someone following too closely.
        </Text>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="ios-warning" size={24} color="red" style={styles.iconStyle} />
            <Text style={styles.settingText}>Automated SOS Trigger</Text>
          </View>
          <Switch value={autoSOSTrigger} onValueChange={setAutoSOSTrigger} />
        </View>
        <Text style={styles.settingDescription}>
          Automatically send an SOS signal if a sudden stop, fall, or erratic movement is detected, ensuring you get help quickly.
        </Text>

        <View style={styles.settingItem}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="ios-call" size={24} color="blue" style={styles.iconStyle} />
            <Text style={styles.settingText}>Safety Check-Ins</Text>
          </View>
          <Switch value={safetyCheckIns} onValueChange={setSafetyCheckIns} />
        </View>
        <Text style={styles.settingDescription}>
          Periodically checks in to confirm your safety. If there’s no response, your trusted network will be alerted.
        </Text>
      </View>

      {/* How It Works */}
      <View style={styles.guardianInfoContainer}>
        <Text style={styles.sectionTitle}>How Virtual Guardian Works</Text>
        <Text style={styles.infoText}>
          The AI-powered virtual guardian monitors your movements and surroundings in real-time through GPS, accelerometer, and audio analysis.
        </Text>
        <Text style={styles.bulletPoint}>• Sends proactive alerts to warn you of suspicious behavior.</Text>
        <Text style={styles.bulletPoint}>• Automatically activates SOS if it detects a sudden fall or abnormal movement.</Text>
        <Text style={styles.bulletPoint}>• Periodically checks in with you to ensure you're safe. Failure to respond will notify your trusted contacts.</Text>
      </View>

      {/* Enable Guardian */}
      <TouchableOpacity style={styles.activateButton}>
        <Ionicons name="ios-play-circle" size={24} color="white" style={styles.iconStyle} />
        <Text style={styles.activateButtonText}>Activate Virtual Guardian</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F4F8',
  },
  guardianStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#D8F3DC',
    borderRadius: 10,
    elevation: 2,
  },
  guardianStatusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  guardianStatus: {
    fontSize: 18,
    color: 'green',
    marginRight: 8,
  },
  settingsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 24,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1D3557',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  settingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  settingDescription: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 16,
    marginLeft: 32,
  },
  guardianInfoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 6,
    marginLeft: 10,
    color: '#495057',
  },
  activateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E63946',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  activateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconStyle: {
    marginRight: 8,
  },
});
