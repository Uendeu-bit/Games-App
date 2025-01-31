import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Topo from './Nintendo.js';
import PlayStationTela from './PlayStation.js';
import Xbox from './Xbox.js';


const HomeScreen = ({ navigation }) => (
  <ScrollView>
    <Topo/>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Super Smash Bros')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('The Legend of Zelda Tears of the Kingdom')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Mario Party Jamboree')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <PlayStationTela/>
    <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate('God of War')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button5} onPress={() => navigation.navigate('The Last of Us Part I')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button6} onPress={() => navigation.navigate('Bloodborne')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    

  </ScrollView>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height:"100%",
    position: 'relative',
    bottom:925,
    left:"35%",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  button2: {
    width: "100%",
    height:"100%",
    position: 'relative',
    bottom:550,
    left:"35%",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  button3: {
    width: "100%",
    height:"100%",
    position: 'relative',
    bottom:155,
    left:"35%",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  button4: {
    width: "100%",
    height:"100%",
    position: 'relative',
    bottom:1005,
    left:"35%",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  button5: {
    width: "100%",
    height:"100%",
    position: 'relative',
    bottom:585,
    left:"35%",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  button6: {
    width: "100%",
    height:"100%",
    position: 'relative',
    bottom:155,
    left:"35%",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  buttonText: {

    color: '#000',
    fontSize:18,
    width:"100%",
    height:50,
    letterSpacing:3
  },
});

export default HomeScreen;