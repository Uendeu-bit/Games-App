import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, ScrollView } from 'react-native';

import mario from '../assets/marioparty.jpg'
import bowser from '../assets/bowser.jpg'
import personagens from '../assets/personagens.jpg'
import mapa from '../assets/mapa.jpg'

const DetailsScreen3 = () => (
  <ImageBackground source={require('../assets/fundomario.jpg')} style={estilos.containerTopo}>

    <ScrollView>
          <View>

          <View style={estilos.container}>

          <Text style={estilos.texto}>
          Super Mario Party Jamboree é o mais novo capítulo da saga de jogos de tabuleiro e minigames com personagens de Mario trazendo uma série de novidades. Desenvolvido pela Nintendo, mais precisamente pelo estúdio Nintendo Cube, o título promete ser o maior da série com mais de 110 minigames e 22 personagens jogáveis, para disputar por sete tabuleiros e em novos modos inéditos. Super Mario Party Jamboree será lançado em 17 de outubro para Nintendo Switch, e conta com legendas em português do Brasil. Jogadores que adquirirem o game, tanto em mídia física quanto digital, receberão também três meses grátis do serviço por assinatura Nintendo Switch Online para multiplayer pela internet.
          </Text>
          <Image source={mario} style={estilos.img}/>

          </View>

          <View style={estilos.container}>

          <Text style={estilos.titulo}>
          Gameplay e modos de jogos do Super Mario Party Jamboree
          </Text>
          
          <Text style={estilos.texto}>
          A jogabilidade de Super Mario Party Jamboree mescla um jogo de tabuleiro com minigames. No modo principal: "Mario Party", até quatro jogadores podem competir, rolando dados para se locomoverem pelo tabuleiro em busca de ganhar moedas e adquirir estrelas para vencer o jogo. Ao final de cada turno todos os participantes disputam minigames onde podem obter mais moedas e até sabotar o progresso de seus adversários. Uma grande novidade neste game são os Jamboree Buddies, aliados que garantem ao jogador habilidades especiais quando os alcançam no tabuleiro. No entanto, se outro competidor ultrapassar o player, seu Jamboree Buddy será tomado.
          </Text>

          <Text style={estilos.texto}>
          É recomendado jogar Mario Party com quatro amigos em multiplayer local ou online, porém para usuários que queiram jogar sozinhos há um novo modo Pro Rules com regras mais desafiadoras, removendo elementos de sorte do jogo. Outro modo para jogar sozinho é o Party-Planner Trek, que permite jogadores transitarem pelo tabuleiro enquanto ajudam personagens em troca de mini-estrelas. As missões podem envolver vencer um minigame, adquirir um item em algum lugar do tabuleiro ou responder uma pergunta sobre o game. São 60 mini-estrelas para conquistar por tabuleiro e ao obter 30 o jogador pode partir para o próximo.
          </Text>
          <Image source={bowser} style={estilos.img}/>

          <Text style={estilos.texto}>
          No online, jogadores poderão contar com dois novos modos: Koopathlon (Bowserathlon), um modo cada um por si em que 20 pessoas tentam escapar de Bowser e sua performance em minigames faz seu personagem ir mais rápido. Além de Bowser Kaboom Squad (Brigada anti-Bowser) em que oito jogadores juntam seus esforços para tentar derrotar Bowser, coletando bombas para disparar em canhões. Ambos os modos contam com placar de líderes para exibir sua classificação online.
          </Text>

          <Text style={estilos.texto}>
          Há também minigames mais elaborados dedicados a multiplayer local para duas a quatro pessoas: Rhythm Kitchen, em que jogadores cozinham conforme o ritmo; Toad's Item Factory, que utiliza os controles de movimento para guiar uma bola por um percurso de obstáculos; e Paratroopa Flight School, onde jogadores usam os Joy-Cons para fazer o movimento de bater asas.
          </Text>

          </View>

          <View style={estilos.container}>

          <Text style={estilos.titulo}>
          Personagens em Super Mario Party Jamboree
          </Text>

          <Text style={estilos.texto}>
          Super Mario Party Jamboree traz o maior elenco de um jogo da série Mario Party até hoje com 22 integrantes. Os personagens disponíveis incluem figuras como: Mario, Luigi, Peach, Bowser, Yoshi, Daisy, Wario, Waluigi, Bowser Jr., Rosalina Donkey Kong, Goomba, Koopa Troopa, Shy Guy, Birdo, Boo, Monty Mole, Toad, Toadette, Spike e, pela primeira vez na série, Pauline e Ninji.
          </Text>
          <Image source={personagens} style={estilos.img}/>

          </View>

          <View style={estilos.container}>

          <Text style={estilos.titulo}>
          Tabuleiros e minigames de Super Mario Party Jamboree
          </Text>

          <Text style={estilos.texto}>
          Os tabuleiros trazem uma boa variedade para o gameplay, cada qual com peculiaridades, incluindo 5 novos e 2 clássicos. Entre os novos estão: Mega Wiggler's Tree Party, cujos caminhos mudam quando a grande lagarta Wiggler se move; Roll 'em Raceway, que se passa em uma pista de kart com direito a dados de turbo; Goomba Lagoon, que conta com marés e um vulcão ativo que pode entrar em erupção; Rainbow Galleria, um shopping com escadas rolantes e promoções relâmpago em itens; e King Bowser's Keep, que tem um turno caótico dedicado para Bowser. Entre os tabuleiros clássicos estão Rainbow Castle, do primeiro Mario Party, com um castelo nas nuvens e Western Land, de Mario Party 2, com um trem que atravessa o tabuleiro.
          </Text>
          <Image source={mapa} style={estilos.img}/>

          <Text style={estilos.texto}>
          Os minigames se tornaram um ponto polêmico da franquia devido aos controles de movimento. Super Mario Party Jamboree traz desafios que utilizam movimentos como sacudir e inclinar o Joy-Con, mas jogadores que preferirem o estilo clássico de jogos com botões poderão remover esses minigames da seleção do jogo. Apenas é preciso utilizar um controle Joy-Con por jogador, facilitando reunir 4 controles para jogar em multiplayer.
          </Text>

          <Text style={estilos.texto}>
          Alguns dos minigames incluem corridas de Yoshis, martelar pregos em uma tábua de madeira com o Joy-Con, inclinar o controle para acertar uma bola em um buraco de minigolfe, cortar legumes gigantes para uma sopa e muito mais. Há também minigames que cobrem situações específicas no tabuleiro, como 1 vs 1, uma queda de braço com membros mecânicos entre participantes, ou 1 vs 3, como um jogador controlar uma bala de canhão Bullet Bill enquanto outros tentam escapar de sua trajetória.
          </Text>

          </View>

          <Text style={estilos.texto}>
                
                </Text>
          
                <Text style={estilos.texto}>
                
                </Text>
          
                <Text style={estilos.texto}>
                
                </Text>
          
                <Text style={estilos.texto}>
                
                </Text>

          </View>
    </ScrollView>
  </ImageBackground>
);

export default DetailsScreen3;

const estilos = StyleSheet.create({
  containerTopo: {
    width: "100%",
    height: "100%",
    alignItems:'center'
  },
  container: {
    backgroundColor: '#fff',
    width: "92%",
    alignItems:'center', 
    borderRadius: 10,
    padding: 20,
    margin: 10, 
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4, 
    elevation: 5, 
  },
  texto: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom:35 
  },
  titulo: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom:35 
  },
  img: {
    width: 320,
    height: 200,
    marginBottom: 10,
    elevation:20,
    borderRadius:20,
    shadowColor: '#000',
    
  }
})