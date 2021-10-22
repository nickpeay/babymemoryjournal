import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TimelineView } from './components/TimelineView';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Baby Memory Journal</Text>
      <TimelineView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#333',
    color: '#000',
  }
});
