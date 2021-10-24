import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {ImageProps} from '../../../types/components';

export function TimelineEntry ({image}: ImageProps, {navigation}) {

  return (
  <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: image}}></Image>
    <View style={styles.content}>
      <Text>Entry Date</Text>
      <Text style={styles.text}>Text about the entry that may or may not include tags.</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    marginRight: 12
  },
  content: {
    flex: 3,    
  },
  text: {
    flexWrap: 'wrap'
  }
})