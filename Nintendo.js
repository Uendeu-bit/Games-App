import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Capa from '../assets/Nintendo.png';
import Jogos from '../assets/img2.png';
import Jogo from '../assets/zelda.jpg';
import mario from '../assets/party.jpg'

export default function Nintendo() {
  return(
    <View>

    <View style={ estilos.containerTopo }>
      <Image source={ Capa } style={ estilos.topoImg } />
      <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
    </View>

    <View style={ estilos.card }>
      <Text style={ estilos.titulo }>Super Smash Bros Ultimate</Text>
      <Image source={ Jogos } style={ estilos.img } />
      <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
    </View>

    <View style={ estilos.cardZelda }>
      <Text style={ estilos.titulo }>The Legend of Zelda Tears of the Kingdom</Text>
      <Image source={ Jogo } style={ estilos.img } />
      <Text style={ estilos.descricao }>A história de "Tears of the Kingdom" começa um tempo depois do fim de "Breath of the wild". Enquanto o povo do reino fictício de Hyrule reconstrói suas vidas, um antigo espírito maligno escapa de um encantamento milenar e joga toda a região no caos novamente.</Text>
    </View>

    <View style={estilos.cardMario}>
            <Text style={estilos.titulo}>Mario Party Jamboree</Text>
            <Image source={mario} style={estilos.img}/>
            <Text style={estilos.descricao}>A jogabilidade de Super Mario Party Jamboree mescla um jogo de tabuleiro com minigames. No modo principal: "Mario Party", até quatro jogadores podem competir, rolando dados para se locomoverem pelo tabuleiro em busca de ganhar moedas e adquirir estrelas para vencer o jogo.</Text>
        </View>

    </View>
  
  )
}

const estilos = StyleSheet.create({
  containerTopo: {
    backgroundColor:'#e60012',
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
    lineHeight: 30,
    width: 180
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  },
  card:{
    position: 'relative',
    left: 40,
    top: 20,
    alignItems: 'center',
    height:285,
    width:"80%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop:20,
    marginBottom:50,
    elevation:10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
  },
  cardZelda:{
    position: 'relative',
    left: 40,
    top: 20,
    alignItems: 'center',
    height:360,
    width:"80%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop:20,
    marginBottom:50,
    elevation:10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardMario:{
    position: 'relative',
    left: 40,
    top: 20,
    alignItems: 'center',
    height:350,
    width:"80%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop:20,
    marginBottom:-10,
    elevation:10,
    shadowColor: 'red',
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
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});