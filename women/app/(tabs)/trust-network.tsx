import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TrustedContactsScreen() {
  const [selectedContacts, setSelectedContacts] = React.useState([]);

  const handleCheckBoxToggle = (name) => {
    setSelectedContacts((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((contact) => contact !== name)
        : [...prevSelected, name]
    );
  };

  const contacts = {
    'Tier 1: Family': ['Anusha Goyal', 'Rahul Goyal', 'Sunita Singh', 'Shikha Sharma'],
    'Tier 2: Friends': ['Ankita Shah', 'Ayesha Patel', 'Vidya Mishra', 'Pooja Gupta'],
  };

  return (
    <ScrollView style={styles.container}>
      {Object.keys(contacts).map((tier) => (
        <View key={tier} style={styles.tierContainer}>
          <Text style={styles.tierTitle}>{tier}</Text>
          {contacts[tier].map((name) => (
            <View key={name} style={styles.contactContainer}>
              <Text style={styles.contactName}>{name}</Text>
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
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Trusted Contact</Text>
      </TouchableOpacity>
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
  contactName: {
    fontSize: 16,
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
});
