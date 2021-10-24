import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { TimelineView } from './components/TimelineView';
import { EntryView } from './components/EntryView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Baby Memory Journal</Text>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timeline">
          <Stack.Screen 
            name="Timeline"
            component={TimelineView}
          />
          <Stack.Screen 
            name="Entry View"
            component={EntryView}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    // alignItems: 'center',
    // alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#333',
    color: '#000',
  }
});
