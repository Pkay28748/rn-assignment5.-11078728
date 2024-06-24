import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CardDetailsScreen from './screens/CardDetailsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import Ionicons from 'react-native-vector-icons';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={CardDetailsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
