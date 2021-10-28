import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import {Entry} from '../../../types/components';

export function TimelineEntry ({image, navigation}: Entry) {

  return (
  <Pressable style={({pressed}) => [
    {
      backgroundColor: pressed ? '#cecece' : 'white',
    },
    styles.entry,
  ]} onPressOut={navigation.navigate('EntryView')}>
    <Button title="" onPress={navigation.navigate('EntryView', {screen: 'EntryView'})}>
    <Image style={styles.image} source={{uri: image}}></Image>
    <View style={styles.content}>
      <Text>Entry Date</Text>
      <Text style={styles.text}>Text about the entry that may or may not include tags.</Text>
    </View>
    </Button>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    margin: 0
  },
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