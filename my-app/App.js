import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CardDetailsScreen from './screens/CardDetailsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { ThemeProvider,useTheme } from './components/toggle';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const ThemedApp = () => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <NavigationContainer> 
        <Tab.Navigator
        
          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              
              if (route.name === 'Home') {
               return  <Ionicons name="home" size={24} color="black" />
              } else if (route.name === 'My Cards') {
                return  <Ionicons name="card" size={24} color="black" />
              }
              else if (route.name === 'Statistics') {
                 return <Feather name="pie-chart" size={24} color="black" />
              }
              else if (route.name === 'Settings') {
               return  <Ionicons name="settings-outline" size={24} color="black" />
              }
    
            },
          
            
            tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: isDarkMode ? '#000' : '#fff',
            },
            tabBarLabelStyle: {
              fontSize: 14, 
            },
            headerTitleAlign:'center',
          })}
        >
          <Tab.Screen  name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={CardDetailsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab:{
    fontSize:16,
  },
});