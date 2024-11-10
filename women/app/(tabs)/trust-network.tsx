import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TrustedContactsScreen() {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [contactStatus, setContactStatus] = useState({
    'Anusha Goyal': 'online',
    'Rahul Goyal': 'offline',
    'Sunita Singh': 'do not disturb',
    'Shikha Sharma': 'offline',
    'Ankita Shah': 'online',
    'Ayesha Patel': 'offline',
    'Vidya Mishra': 'online',
    'Pooja Gupta': 'offline',
  });

  const handleCheckBoxToggle = (name) => {
    setSelectedContacts((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((contact) => contact !== name)
        : [...prevSelected, name]
    );
  };

  const contacts = {
    'Tier 1: Close Family': ['Anusha Goyal', 'Rahul Goyal', 'Sunita Singh', 'Shikha Sharma'],
    'Tier 2: Friends': ['Ankita Shah', 'Ayesha Patel', 'Vidya Mishra', 'Pooja Gupta'],
  };

  const sendPriorityAlerts = () => {
    console.log('Priority alert sent to Tier 1 (Close Family) first.');
    setTimeout(() => {
      console.log('Priority alert sent to Tier 2 (Friends).');
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.infoText}>
              Mutual verification is required for adding trusted contacts. Optional background checks can be performed via third-party services.
            </Text>

            <Text style={styles.infoText}>
              Verified volunteers have undergone document verification and are monitored through live location tracking. Volunteers ensure 24/7 availability.
            </Text>
          </View>

          {Object.keys(contacts).map((tier) => (
            <View key={tier} style={styles.tierContainer}>
              <Text style={styles.tierTitle}>{tier}</Text>
              {contacts[tier].map((name) => (
                <View key={name} style={styles.contactContainer}>
                  <View style={styles.contactInfo}>
                    <Text style={styles.contactName}>{name}</Text>
                    <Text style={styles.contactStatus}>{`Status: ${contactStatus[name]}`}</Text>
                  </View>
                  <TouchableOpacity 
                    onPress={() => handleCheckBoxToggle(name)}
                    style={styles.checkboxContainer}
                  >
                    <Ionicons
                      name={selectedContacts.includes(name) ? 'checkbox' : 'square-outline'}
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
          
          {/* Add bottom padding to ensure content doesn't hide behind buttons */}
          <View style={styles.bottomSpacing} />
        </ScrollView>

        {/* Sticky buttons container */}
        <View style={styles.stickyButtonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add/Remove Trusted Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alertButton} onPress={sendPriorityAlerts}>
            <Text style={styles.buttonText}>Send Priority Alert</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  tierContainer: {
    marginTop: 24,
  },
  tierTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 17,
    color: '#000000',
    marginBottom: 4,
  },
  contactStatus: {
    fontSize: 15,
    color: '#666666',
  },
  checkboxContainer: {
    padding: 8,
  },
  stickyButtonContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 16 : 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  addButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 12,
  },
  alertButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#000000',
    backgroundColor: '#E8F0FE',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    lineHeight: 22,
  },
  bottomSpacing: {
    height: 20, // Additional spacing at the bottom of scroll content
  },
});