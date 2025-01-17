import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, ScrollView } from 'react-native';

const DetailsScreen4 = () => (
  <ImageBackground source={require('../assets/kratos.jpg')} style={estilos.containerTopo}>
    <ScrollView>
      <View>

      </View>
    </ScrollView>
  </ImageBackground>
);

export default DetailsScreen4;

const estilos = StyleSheet.create({
  containerTopo: {
    width: "100%",
    height: "100%",
    alignItems:'center'
  },

})