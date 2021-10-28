import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TimelineView } from './components/TimelineView';
import { EntryView } from './components/EntryView'

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TimelineView">
          <Stack.Screen 
            name="TimelineView"
            component={TimelineView}
            options={{
              title: "Baby Memory Journal",
              headerStyle: {
                backgroundColor: '#003c1d',
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}
          />
          <Stack.Screen 
            name="EntryView"
            component={EntryView}
            options={{
              title: "Journal Entry",
              headerStyle: {
                backgroundColor: '#003c1d',
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}
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
