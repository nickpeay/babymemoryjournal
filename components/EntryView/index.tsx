import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entry } from '../../types/components';

export const EntryView = ({image, content, date, tag}: Entry) => {
  return (
    <View style={styles.entry}>
      <Image source={{uri: image}}></Image>
      <Text>{date}</Text>
      <Text>{content}</Text>
      <Text>{tag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  entry: {
    display: 'flex',
    flex: 1,
  }
})