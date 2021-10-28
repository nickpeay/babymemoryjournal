import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entry } from '../../types/components';
import { withNavigation } from 'react-navigation';

export function EntryView ({image, content, date, tag}: Entry, props: any) {
  return (
    <View style={styles.entry}>
      <Image style={styles.image} resizeMode={'contain'} source={{uri: 'http://placehold.jp/500x500.png'}}></Image>
      <View style={styles.content}>
        <Text>Date: {date}</Text>
        <Text>Content: {content}</Text>
        <Text>Hashtags: {tag}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  entry: {
    // display: 'flex',
    flex: 1,
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
  }
})