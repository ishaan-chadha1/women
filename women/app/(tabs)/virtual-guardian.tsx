import React from 'react';
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function VirtualGuardianScreen() {
  const [proactiveAlerts, setProactiveAlerts] = React.useState(true);
  const [autoSOSTrigger, setAutoSOSTrigger] = React.useState(true);
  const [safetyCheckIns, setSafetyCheckIns] = React.useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        {/* Sticky Status Bar */}
        <View style={styles.stickyHeader}>
          <View style={styles.guardianStatusContainer}>
            <Text style={styles.guardianStatusTitle}>Virtual Guardian Status:</Text>
            <Text style={styles.guardianStatus}>Active</Text>
            <Ionicons name="md-shield-checkmark" size={28} color="green" />
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
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
              Periodically checks in to confirm your safety. If there's no response, your trusted network will be alerted.
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
          
          {/* Bottom padding to ensure content doesn't hide behind button */}
          <View style={styles.bottomSpacing} />
        </ScrollView>

        {/* Sticky Activation Button */}
        <View style={styles.stickyFooter}>
          <TouchableOpacity style={styles.activateButton}>
            <Ionicons name="ios-play-circle" size={24} color="white" style={styles.iconStyle} />
            <Text style={styles.activateButtonText}>Activate Virtual Guardian</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  mainContainer: {
    flex: 1,
  },
  stickyHeader: {
    backgroundColor: '#F0F4F8',
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  guardianStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#D8F3DC',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  stickyFooter: {
    backgroundColor: '#F0F4F8',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 16 : 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  activateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E63946',
    paddingVertical: 16,
    borderRadius: 12,
  },
  activateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  iconStyle: {
    marginRight: 8,
  },
  bottomSpacing: {
    height: 20,
  },
});