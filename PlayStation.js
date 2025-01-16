import React from "react";
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native'

import PlayStation from '../assets/PlayStation.png'
import Gow from '../assets/gow.png'
import Tlous from '../assets/The.jpg'
import bloodborne from '../assets/born.jpg'


export default function PlayStationTela() {
    return (
        <View>

        <View style={estilos.containerTopo}>
          <ImageBackground source={require('../assets/fundo.jpg')} style={estilos.containerTopo}>
            <Image source={PlayStation} style={estilos.topoImg} />
            <Text style={estilos.topoTitulo }>PlayStation(Sony)</Text>
            </ImageBackground>
        </View>

        <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>God of War</Text>
            <Image source={Gow} style={estilos.img}/>
            <Text style={estilos.descricao}>Baseada em mitologias distintas, o enredo principal da série segue Kratos, um guerreiro espartano que foi levado a matar sua família por seu antigo mestre, chamado de deus da guerra Ares. Isso desencadeia uma série de eventos que levaram às guerras contra os panteões mitológicos.</Text>
        </View>

        <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>The Last of Us Part I</Text>
            <Image source={Tlous} style={estilos.img}/>
            <Text style={estilos.descricao}>Joel, um sobrevivente solitário e que perdeu sua filha adolescente no início do apocalipse, recebe a missão de levar para fora de uma zona de quarentena uma menina de 14 anos, chamada Ellie. A jovem é a única humana conhecida que é imune ao fungo e se torna a esperança de uma cura.</Text>
        </View>

        <View style={estilos.cardBB}>
            <Text style={estilos.titulo}>Bloodborne</Text>
            <Image source={bloodborne} style={estilos.img}/>
            <Text style={estilos.descricao}>Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver. -Um aterrorizante mundo novo: Faça uma jornada para uma cidade gótica cheia de horror, onde multidões loucas e criaturas assustadoras espreitam em cada canto.</Text>
        </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    containerTopo: {
      width: 420,
      height: 230,
      elevation: 19, 
      shadowColor: '#1d44b8',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 5,
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
      width: 200,
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
      
    },
    cardKratos:{
        position: 'relative',
        left: 40,
        top: 20,
        alignItems: 'center',
        height:410,
        width:"80%",    
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        marginTop:20,
        marginBottom: 40,
        elevation:15,
        shadowColor: '#1d44b8',
        shadowOffset: { width: 0, height:3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
      },
      cardBB:{
        position: 'relative',
        left: 40,
        top: 20,
        alignItems: 'center',
        height:410,
        width:"80%",    
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        marginTop:20,
        marginBottom: -10,
        elevation:15,
        shadowColor: '#1d44b8',
        shadowOffset: { width: 0, height:3 },
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