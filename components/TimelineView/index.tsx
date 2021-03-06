import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { TimelineEntry } from './components/TimelineEntry';

// TO DO
// 1. Use FlatList instead of ScrollView

export function TimelineView (props: any) {
  const { navigate } = props.navigation
  return (
  <ScrollView style={styles.timeline}>
    <View style={styles.entry}>
      <TimelineEntry image={'http://placehold.jp/500x500.png'} navigation={props.navigation}></TimelineEntry>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  timeline: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
  },
  entry: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 4,
    marginRight: 4,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
})