import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entry } from '../../types/components';

export function EntryView ({image, content, date, tag}: Entry, navigation) {
  return (
    <View style={styles.entry}>
      <Text onPress={navigation.navigate('Timeline', {name: 'Timeline'})}>Back</Text>
      <Image source={{uri: image}}></Image>
      <Text>{date}</Text>
      <Text>{content}</Text>
      <Text>{tag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  entry: {
    // display: 'flex',
    flex: 1,
  }
})