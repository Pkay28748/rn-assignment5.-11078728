// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Change Password" onPress={() => {}} />
      <Button title="Privacy Policy" onPress={() => {}} />
      <Button title="Theme" onPress={() => {}} />
      <Button title="Language" onPress={() => {}} />
      <Button title="Contact Us" onPress={() => {}} />
      <Button title="My Profile" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default SettingsScreen;
