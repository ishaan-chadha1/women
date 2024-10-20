import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
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

  // Priority Alerts Logic
  const sendPriorityAlerts = () => {
    console.log('Priority alert sent to Tier 1 (Close Family) first.');
    setTimeout(() => {
      console.log('Priority alert sent to Tier 2 (Friends).');
    }, 3000); // Delay for alert waves
  };

  return (
    <ScrollView style={styles.container}>
      {/* Mutual Verification and Background Check Info */}
      <Text style={styles.infoText}>
        Mutual verification is required for adding trusted contacts. Optional background checks can be performed via third-party services.
      </Text>

      {/* Volunteer Info */}
      <Text style={styles.infoText}>
        Verified volunteers have undergone document verification and are monitored through live location tracking. Volunteers ensure 24/7 availability.
      </Text>

      {/* Display Contacts */}
      {Object.keys(contacts).map((tier) => (
        <View key={tier} style={styles.tierContainer}>
          <Text style={styles.tierTitle}>{tier}</Text>
          {contacts[tier].map((name) => (
            <View key={name} style={styles.contactContainer}>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{name}</Text>
                <Text style={styles.contactStatus}>{`Status: ${contactStatus[name]}`}</Text>
              </View>
              <TouchableOpacity onPress={() => handleCheckBoxToggle(name)}>
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

      {/* Buttons for Dynamic Updates and Priority Alerts */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add/Remove Trusted Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertButton} onPress={sendPriorityAlerts}>
          <Text style={styles.alertButtonText}>Send Priority Alert</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  tierContainer: {
    marginBottom: 24,
  },
  tierTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactInfo: {
    flexDirection: 'column',
  },
  contactName: {
    fontSize: 16,
  },
  contactStatus: {
    fontSize: 14,
    color: '#6C757D',
  },
  addButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertButton: {
    backgroundColor: '#1D72B8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  alertButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    backgroundColor: '#E8F0FE',
    padding: 10,
    borderRadius: 8,
  },
});

