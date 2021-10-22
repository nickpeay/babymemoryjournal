import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

type ImageProps = {
  image: string
}

export const TimelineEntry = ({image}: ImageProps) => {

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