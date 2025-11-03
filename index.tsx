import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 3 màn hình
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Đây là màn hình Home</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔍 Đây là màn hình Search</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚙️ Đây là màn hình Settings</Text>
    </View>
  );
}

// Khởi tạo Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // ẩn header trên cùng
          tabBarActiveTintColor: 'blue', // màu tab đang chọn
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Style
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
