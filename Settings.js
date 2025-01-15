import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SettingsScreen = () => (
  <View style={styles.containerTopo}>
          <ImageBackground source={require('../assets/Cyberpunk.jpg')} style={styles.containerTopo}>
            <Text style={styles.topoTitulo }>Configurações</Text>
            </ImageBackground>
        </View>
);

const styles = StyleSheet.create({
  containerTopo: {
    width: 420,
    height: 250,
    backgroundColor:'#1d44b8',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2},
    textShadowRadius: 5,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    bottom: 5,
    height: 40
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  },
  fundo: {
    flex: 1,
    
  }

});

export default SettingsScreen;