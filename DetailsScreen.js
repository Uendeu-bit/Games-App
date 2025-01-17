import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, ScrollView } from 'react-native';

import smash from '../assets/gameplaysmash.jpg'
import smash2 from '../assets/fundosmash2.jpg'
import smash3 from '../assets/fundosmash3.jpg'
import smash4 from '../assets/fundosmash4.jpg'
import smash5 from '../assets/fundosmash5.jpg'
import smash6 from '../assets/fundosmash6.jpg'
import smash7 from '../assets/fundosmash7.jpg'

const DetailsScreen = () => (
  <ImageBackground source={require('../assets/fundoSmash.jpg')} style={estilos.containerTopo}>
    <ScrollView>
      <View>
      <View style={estilos.container}>
      <Text style={estilos.texto}>
      Super Smash Bros. Ultimate é um game que faz justiça a seu nome com uma quantidade enorme de conteúdos. E não são quaisquer conteúdos: a Nintendo podia ter simplesmente “copiado e colado” todos os elementos que apareceram na série no passado, produzindo um game rápido para um público ávido por lançamentos — mas não foi isso o que encontramos aqui, felizmente.
      </Text>
      <Image source={smash} style={estilos.img}/>
      <Text style={estilos.texto}>
      Sim, o game é essa grande reunião de elementos do passado, mas isso não foi feito de forma descuidada. Além de apresentar lutadores e opções inéditas, a desenvolvedora também ajustou problemas do passado e trouxe uma série de pequenos detalhes que mostram que o jogo foi desenvolvido com muita atenção para agradar tanto novatos quanto veteranos — de certa forma, dá para até sentir o “carinho” que o diretor Masahiro Sakurai tem pela franquia.
      </Text>

      <Text style={estilos.texto}>
      Seja você um fã da velha guarda que faz questão de comprar todos os lançamentos da série, ou alguém que nunca deu muita atenção para ela, Super Smash Bros. Ultimate merece sua atenção. Repleto de opções para quem gosta de um bom multiplayer e para quem prefere uma jornada mais solitária, esse é um dos games que facilmente pode ser classificado com o selo de “obrigatório” para o Nintendo Switch.
      </Text>

      </View>
      
      <View style={estilos.container}>

      <Text style={estilos.titulo}>
      Variedade
      </Text>

      <Text style={estilos.texto}>
      É difícil começar a dizer o que Ultimate apresenta, vista a quantidade de opções que ele traz aos jogadores. Portanto, decidi comentar sobre o aspecto mais alardeado pela Nintendo: os personagens. São mais de 70 lutadores disponíveis, de franquias pertencentes tanto à desenvolvedora quanto a nomes como Capcom, Bandai Namco, Square Enix e SEGA
      </Text>

      <Text style={estilos.texto}>
      Inicialmente o jogador conta com somente 8 lutadores, e a lista se expande rapidamente ao investir seu tempo nos diferentes modos de jogo, sejam eles single player ou multiplayer. Há pontos positivos e negativos na maneira como eles são destravados: ao mesmo tempo em que é chato ter que esperar um bom tempo para que seu “main” apareça, o ritmo permite que você experimente um pouco com cada personagem, o que permite entender um pouco das características de cada um deles.
      </Text>

      <Text style={estilos.texto}>
      O que surpreende é que, dentro de um elenco tão grande, a Nintendo conseguiu criar personagens que realmente têm características próprias (com exceção de alguns lutadores feitos para ser o “espelho” de outros). A execução dos golpes permanece a mesma para todos, mas saber quando usar cada um exige um processo de aprendizado contínuo e assegura uma profundidade grande que deve assegurar a saúde da cena competitiva.
      </Text>

      <Image source={smash2} style={estilos.img}/>

      <Text style={estilos.texto}>
      Super Smash Bros. Ultimate também se destaca pelos conjuntos de regras personalizáveis que dão espaço tanto para quem vê ele como um “party game” mais casual quanto para aqueles que jogam de forma mais “séria” (Sem itens, só com o Fox, Final Destination). Você pode até personalizar a frequência dos itens, bem como selecionar aqueles que devem ou não surgir durante a batalha — também dá para personalizar a duração dos confrontos, se ele vai se basear em stamina ou não, definir o número de vidas e diversas outras regras que garantem que o jogo vai se comportar da maneira que cada pessoa prefere.
      </Text>

      <Text style={estilos.texto}>
      Também há modos feitos para fugir do comum, como um no qual você enfrenta 100 Mii Fighters e tanta sobreviver, ou outro no qual o jogador deve combater todos os personagens do game, um a um. Para os novatos também há uma série de tutoriais e dicas, que só pecam por ficarem um pouco escondidos nos menus, que não são tão organizados ou intuitivos quanto poderiam.
      </Text>
      </View>

      <View style={estilos.container}>

      <Text style={estilos.titulo}>
      Opções single player ricas
      </Text>
      
      <Text style={estilos.texto}>
      Uma das principais novidades de Super Smash Bros. Ultimate é o modo World of Light, que funciona como uma grande campanha single player que traz alguns elementos de RPG em sua fórmula. Nele, você navega por um grande mapa repleto de desafios com os nomes “Spirits”, que representam personagens de diferentes séries que foram inseridos dentro de clones malignos dos lutadores do jogo.
      </Text>

      <Text style={estilos.texto}>
      Ao derrotar um espírito, ele se une ao seu arsenal e pode ser usado de duas formas: há os primários, que agem como equipamentos primários (de três tipos diferentes) e possuem espaços para equipar espíritos secundários, que concedem status adicionais, como um maior poder de ataques neutros ou imunidade a elementos do cenário.
      </Text>
      <Image source={smash3} style={estilos.img}/>

      <Text style={estilos.texto}>
      Os espíritos possuem um elemento de “pedra, papel e tesoura” inspirado por Fire Emblem, o que exige a rotação constante daqueles que estão equipados para o jogador não ficar em desvantagem contra os oponentes. Cada adversário no cenário possui regras próprias que mostram a versatilidade de Super Smash Bros. Ultimate, sendo que, em alguns pontos específicos, você pode destravar outros lutadores para aumentar suas opções de combate.
      </Text>

      <Text style={estilos.texto}>
      O modo é bastante rico e possui alguns elementos de puzzle básicos que ajudam a torná-lo divertido, mas sofre um pouco pela grande longevidade. Senti que sessões longas de jogo podem ser bastante cansativas, mesmo com as regras variadas, e há momentos nos quais a dificuldade salta sem grandes explicações, mesmo que você evite os espíritos de alto nível que estão lá para barrar seu caminho e proteger baús com itens.
      </Text>
      <Image source={smash4} style={estilos.img}/>

      <Text style={estilos.texto}>
      Para completar, você também pode passar um tempinho no Spirit Board para descolar alguns espíritos mais poderosos ou que fazem parte do tema escolhido pela Nintendo na semana. É possível coletar várias vezes a mesma figura, que pode ser “aposentada” para gerar partes que são usadas na invocação de espíritos raros ou mais fortes do que os que você tem. O game também possui um sistema de ranking de figuras, sendo que as mais fortes normalmente envolvem ter que vencer algumas batalhas com condições bem desfavoráveis.
      </Text>
      
      </View>

      <View style={estilos.container}>

      <Text style={estilos.titulo}>
      Modo Classic
      </Text>

      <Text style={estilos.texto}>
      A oferta single player também inclui o tradicional modo Classic, que aqui surge repleto de detalhes que podem passar batidos em um primeiro momento e que pode ser jogado de forma cooperativa. Os adversários que você enfrenta sempre seguem o mesmo tema do personagem escolhido, que pode determinar até mesmo as regras das batalhas — jogue com Ryu, por exemplo, e os confrontos passam a ser medidos pela Stamina restante.
      </Text>
      <Image source={smash5} style={estilos.img}/>

      <Text style={estilos.texto}>
      O mesmo nível de atenção é visto nos chefes finais, que não são mais luvas gigantes na maioria dos casos, embora elas ainda surjam em alguns momentos. Ao escolher Link ou outro personagem de Zelda, por exemplo, seu adversário final pode ser uma versão transformada de Ganon — que vira um Bowser gigantesco com Mario ou o Drácula de Castlevania caso você escolha Richter ou Simon Belmont.
      </Text>

      <Text style={estilos.texto}>
      Também dá para passar um bom tempo no modo de treinamento de Smash, que traz indicadores bastante úteis da distância e ângulo que você vai conseguir jogar seus adversários. Além de jogar contra personagens estáticos, dá para configurar movimentos e comportamentos específicos para testar táticas e aprimorar suas habilidades em situações reais.
      </Text>
    

      </View>

      <View style={estilos.container}>

      <Text style={estilos.titulo}>
      Multiplayer fortíssimo
      </Text>

      <Text style={estilos.texto}>
      Enquanto as opções single player de Super Smash Bros. Ultimate são riquíssimas, a parte central e mais divertida do jogo é sem dúvida seu multiplayer. No entanto, assim como aconteceu com os episódios anteriores, a opção é mais divertida e sólida localmente do que quando você tenta jogar através da internet.
      </Text>

      <Text style={estilos.texto}>
      Até oito jogadores podem participar da mesma partida, que pode se tornar um verdadeiro caos caso você tenha configurado para que itens apareçam durante os combates. A grande variedade de cenários e personagens garantem que nenhum combate vai ser igual ao outro, e a aleatoriedade típica à série garante momentos surreais e muitas risadas jogando com outras pessoas.
      </Text>

      <Text style={estilos.texto}>
      Quem se preocupa mais com aspectos técnicos vai ficar feliz em saber que Super Smash Bros. Ultimate roda muito bem no Switch, seja usando o modo portátil ou acoplado ao dock. Há uma ou outra queda pontual somente caso todos decidam jogar com os Ice Climbers em cenários repletos de transparências e reflexos e os itens estejam ativos — e, mesmo assim, não há slowdowns que quebrem totalmente a experiência quando ela é jogada de forma mais casual.
      </Text>
      <Image source={smash6} style={estilos.img}/>

      <Text style={estilos.texto}>
      O ponto fraco do multiplayer é o modo online, que ainda não consegue lidar muito bem com duas pessoas com conexões muito diferentes. Para evitar dores de cabeça, é necessário usar o acessório que permite conectar o Switch à rede usando um cabo e, mesmo assim, slowdowns e desconexões são comuns caso seu adversário não tenha uma rede muito boa ou decida jogar através do WiFi.
      </Text>

      </View>

      <View style={estilos.container}>

      <Text style={estilos.titulo}>
      Pacote completo
      </Text>

      <Text style={estilos.texto}>
      Super Smash Bros. Ultimate é um jogo tão repleto de mecânicas bem implementadas e opções de jogo que consegue desmistificar rapidamente qualquer rumor sobre ser um “Smash 4.5”. A Nintendo foi além de simplesmente reaproveitar o que fez no passado, criando um game mais bonito e ainda mais divertido de jogar do que os anteriores.
      </Text>
      <Image source={smash7} style={estilos.img}/>

      <Text style={estilos.texto}>
      Enquanto o multiplayer continua tão rico quanto antes, a empresa também deu uma atenção redobrada a quem procura por um single player rico e gosta de regras variadas — World of Light é, acima de tudo, um ótimo exemplo da versatilidade do conjunto de regras, cenários e lutadores que o jogador tem à disposição.
      </Text>

      <Text style={estilos.texto}>
      Com mais de 70 personagens disponíveis, um conjunto rico de músicas de várias franquias famosas, cenários impressionantes e itens inventivos, Ultimate só peca por falhas que não devem ser ignoradas. Durante um bom tempo cogitei dar a nota máxima ao game aqui no Voxel, mas sinto que isso seria injusto diante de um modo online cuja qualidade abaixo da média é um grande contraste em relação ao que é oferecido no resto da experiência. 
      </Text>

      <Text style={estilos.texto}>
      De qualquer forma, Super Smash Bros. Ultimate é um game excelente e que deve agradar em cheio tanto fãs de longa data, quanto quem nunca se interessou pela série anteriormente. Trazendo o equilíbrio certo entre acessibilidade e profundidade, o game é prova da excelência da série e que de Masahiro Sakurai e sua equipe fizeram tudo que era possível para trazer o jogo mais completo possível às lojas.
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



export default DetailsScreen;

const estilos = StyleSheet.create({
  containerTopo: {
    width: 420,
    height: "100%",
    alignItems:'center'
  },
  container: {
    backgroundColor: '#ADD8E6',
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