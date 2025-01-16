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
    <Xbox/>
    <TouchableOpacity style={styles.button7} onPress={() => navigation.navigate('Halo')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button8} onPress={() => navigation.navigate('Forza Horizon')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button9} onPress={() => navigation.navigate('Gears of Wars')}>
      <Text style={styles.buttonText}>veja mais</Text>
    </TouchableOpacity>
    

  </ScrollView>
);

const styles = StyleSheet.create({
  button: {
    width: 100,
    height:40,
    position: 'relative',
    top:-860,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button2: {
    width: 100,
    height:40,
    position: 'relative',
    top:-470,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button3: {
    width: 100,
    height:40,
    position: 'relative',
    top:-88,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button4: {
    width: 100,
    height:40,
    position: 'relative',
    top:-950,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button5: {
    width: 100,
    height:40,
    position: 'relative',
    top:-520,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button6: {
    width: 100,
    height:40,
    position: 'relative',
    top:-90,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button7: {
    width: 100,
    height:40,
    position: 'relative',
    top:-1040,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button8: {
    width: 100,
    height:40,
    position: 'relative',
    top:-605,
    left:155,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button9: {
    width: 100,
    height:40,
    position: 'relative',
    top:-163,
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