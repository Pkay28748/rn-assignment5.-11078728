// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Switch} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../components/toggle';

const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>

      
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={{}}>
        <Text style={{fontSize:24}}>Language</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.line}></View>

      <TouchableOpacity  style={{flexDirection:'row',justifyContent:'space-between'}} onPress={{}}>
        <Text style={{fontSize:24}}>My Profile</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.line}></View>


      <TouchableOpacity   style={{flexDirection:'row',justifyContent:'space-between'}} onPress={{}}>
        <Text  style={{fontSize:24}}>Contact Us</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.line}></View>


      <TouchableOpacity   style={{flexDirection:'row',justifyContent:'space-between'}} onPress={{}}>
        <Text style={{fontSize:24}}>Change Password</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.line}></View>


      <TouchableOpacity   style={{flexDirection:'row',justifyContent:'space-between'}} onPress={{}}>
        <Text style={{fontSize:24}}>Privacy Policy</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.line}></View>


      <View style={styles.toggle}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>Theme</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        ios_backgroundColor="#3e3e3e"
      />
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 25,
    
   
    
  },
  line:{
    height:1,
    width:510,
    backgroundColor:'lightgray',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  toggle:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
});

export default SettingsScreen;
