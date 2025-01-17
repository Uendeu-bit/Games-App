import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

import PlacaMae from '../assets/placamae.png'
import Ryzen from '../assets/processador.png'
import RAM from '../assets/memoria.png'
import SSD from '../assets/SSDSata.png'
import GPU from '../assets/placaVideo.png'
import Fonte from '../assets/fonte.png'

const SettingsScreen = () => (
          <ImageBackground source={require('../assets/Cyberpunk.jpg')} style={estilos.containerTopo}>
            <ScrollView>
              <View style={estilos.containerTopo}>
            <Text style={estilos.topoTitulo }>Configurações</Text>
            

            <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>Placa-Mãe</Text>
            <Image source={PlacaMae} style={estilos.img}/>
            <Text style={estilos.descricao}>O modelo do nosso PC é a ASRock A520M-HVS. O modelo da ASRock é simples e conta com poucas estruturas de dissipação de calor, mas vai aguentar o Ryzen 5 5500 e a nossa placa de vídeo com tranquilidade. Além disso, a motherboard tem compatibilidade com SSDs NVMe e vai permitir melhores upgrades no futuro no quesito armazenamento.</Text>
            <Text style={estilos.preco}>Preço Médio: 504,90R$</Text>
            </View>

            <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>Processador</Text>
            <Image source={Ryzen} style={estilos.img}/>
            <Text style={estilos.descricao}>Atualmente, diversos processadores de entrada concorrem ao cargo de melhor CPU custo-benefício, mas é difícil encontrar o melhor modelo para os jogadores com orçamento apertado e que querem uma performance digna. Por conta disso, o melhor processador para montar um PC gamer barato até R$ 3.000 é o AMD Ryzen 5 5500, modelo de seis núcleos que já acompanha um cooler na caixa.</Text>
            <Text style={estilos.precopros}>Preço Médio: 809,00R$</Text>
        </View>

        <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>Memória RAM DDR4</Text>
            <Image source={RAM} style={estilos.img}/>
            <Text style={estilos.descricao}>Por conta dese conjunto de fatores, nossa indicação é a Rise Mode Z de 8 GB, um dos modelos de memória RAM mais em conta do mercado. Dessa forma, basta selecionar dois pentes no ato da compra e jogar tranquilo, sabendo que seu PC está bem equipado.</Text>
            <Text style={estilos.precoram}>Preço Médio: 218,90R$</Text>
        </View>

        <View style={estilos.cardssd}>
            <Text style={estilos.titulo}>SSD SATA</Text>
            <Image source={SSD} style={estilos.img}/>
            <Text style={estilos.descricao}>Os SSDs SATA da marca Kingston se destacam por seu desempenho rápido, confiabilidade e durabilidade. Eles utilizam tecnologia NAND flash avançada, são fáceis de instalar, consomem menos energia e oferecem uma variedade de capacidades.</Text>
            <Text style={estilos.preco}>Preço Médio: 179,99R$</Text>
        </View>

        <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>Placa de Vídeo</Text>
            <Image source={GPU} style={estilos.img}/>
            <Text style={estilos.descricao}>A placa de vídeo RTX 4060 é equipada com 3072 núcleos CUDA e 8 GB de memória GDDR6, proporcionando um desempenho gráfico sólido para jogos e aplicações. Com um consumo de energia médio de apenas 110 W, ela oferece uma excelente relação custo-benefício, permitindo jogar em resoluções de 1080p e 1440p com configurações altas e taxas de quadros elevadas.</Text>
            <Text style={estilos.preco}>Preço Médio: 2.399,00R$</Text>
        </View>

        <View style={estilos.cardKratos}>
            <Text style={estilos.titulo}>Fonte de Alimentação</Text>
            <Image source={Fonte} style={estilos.img}/>
            <Text style={estilos.descricao}>a MSI MAG A600DN de 600W é uma escolha ideal para essa máquina. A fonte possui a potência necessária para encarar a RTX 4060 e as demais peças, além de ser um produto confiável da MSI. O modelo também tem uma margem interessante para o futuro, caso o usuário pense em trocar de placa de vídeo daqui a alguns anos por outro modelo de entrada/intermediário.</Text>
            <Text style={estilos.preco}>Preço Médio: 290,90R$</Text>
        </View>

        <View>
          <Text style={estilos.tituloTotal}>O preço total: 4.403,69R$</Text>
        </View>
            

        </View >

        

            </ScrollView>
            </ImageBackground>
        
);

const estilos = StyleSheet.create({
  containerTopo: {
    width: 420,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topoTitulo: {
    fontSize: 22,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2},
    textShadowRadius: 5,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    bottom:-30,
    height: 40
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  cardssd:{
    position: 'relative',
    alignItems: 'center',
    height:400,
    width:"80%",    
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop:30,
    marginBottom: 20,
    elevation:15,
    shadowColor: '#1d44b8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
  },
  cardKratos:{
    position: 'relative',
    alignItems: 'center',
    height:450,
    width:"80%",    
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    marginTop:30,
    marginBottom: 20,
    elevation:15,
    shadowColor: '#1d44b8',
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
  tituloTotal: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center'
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
  },
  preco: {
    fontWeight: 'bold',
    position: 'relative',
    left: -77,
    bottom:-25
  },
  precopros: {
    fontWeight: 'bold',
    position: 'relative',
    left: -77,
    bottom:-10
  },
  precoram: {
    fontWeight: 'bold',
    position: 'relative',
    left: -77,
    bottom:-75
  },
  img: {
    width: 170,
    height: 150,
    marginBottom: 10,
    elevation:20,
    shadowColor: '#000',
    
  },


});

export default SettingsScreen;