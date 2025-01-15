import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Topo from './Nintendo.js';

const HomeScreen = ({ navigation }) => (
  <ScrollView>
    <Topo/>
    <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('Details')}
    >
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
      
    

  </ScrollView>
);

const styles = StyleSheet.create({
  button: {
    width: 100,
    height:40,
    position: 'relative',
    top:-485,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {

    color: '#000',
    fontSize:18,
    width:85,
    height:40
  },
});

export default HomeScreen;