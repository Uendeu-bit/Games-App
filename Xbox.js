import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import xfundo from '../assets/xboxFundo.png';
import Chief from '../assets/halo.png'
import ForzaH from '../assets/forza.jpg'
import gears from '../assets/Gearsof.jpg'

export default function Xbox() {
  return(
    <View>

        <View style={ estilos.containerTopo }>
            <Image source={ xfundo } style={ estilos.topoImg } />
            <Text style={ estilos.topoTitulo }>Xbox Series X</Text>
        </View>

        <View style={estilos.cardHalo}>
            <Text style={estilos.titulo}>Halo Infinite</Text>
            <Image source={Chief} style={estilos.img}/>
            <Text style={estilos.descricao}>Halo Infinite apresenta uma nova aventura protagonizada por Master Chief, que está em busca da inteligência artificial Cortana, desaparecida após os eventos de Halo 5: Guardians.</Text>
        </View>

        <View style={estilos.cardForza}>
            <Text style={estilos.titulo}>Forza Horizon</Text>
            <Image source={ForzaH} style={estilos.img}/>
            <Text style={estilos.descricao}>Forza Horizon é um jogo em um festival, chamado Festival Horizon que ocorre no estado do Colorado. O objetivo é progredir no jogo para obter pulseiras por pilotar depressa, destruir propriedade, vencer corridas de pilotagem. </Text>
        </View>

        <View style={estilos.cardGears}>
            <Text style={estilos.titulo}>Gears of War</Text>
            <Image source={gears} style={estilos.img}/>
            <Text style={estilos.descricao}>O jogo é centrado em um novo esquadrão liderado pelo pai de Kait Diaz, enquanto ele lidera a missão de assassinar o cientista Locust, Ukkon, para evitar que seus monstros geneticamente modificados destruam a última das cidades humanas após o ataque com o Hammer of Dawn.</Text>
        </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  containerTopo: {
    backgroundColor:'#2fb208',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 5,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    width: 147
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  },
  cardHalo:{
    position: 'relative',
    left: 40,
    top: 20,
    alignItems: 'center',
    height:370,
    width:"80%",    
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop: 20,
    marginBottom: 63,
    elevation:10,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
  },
  cardForza:{
    position: 'relative',
    left: 40,
    top: 20,
    alignItems: 'center',
    height:390,
    width:"80%",    
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop: 20,
    marginBottom: 63,
    elevation:10,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
  },
  cardGears:{
    position: 'relative',
    left: 40,
    top: 20,
    alignItems: 'center',
    height:400,
    width:"80%",    
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop: 20,
    marginBottom: 63,
    elevation:10,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center'
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
    fontStyle: 'italic'
  },
  img: {
    width: 170,
    height: 170,
    marginBottom: 10,
    elevation:20,
    shadowColor: '#000',
    
  }
});