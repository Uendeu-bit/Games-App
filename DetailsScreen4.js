import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, ScrollView } from 'react-native';

import Kratos1 from '../assets/fundoKratos.jpg'
import Kratos2 from '../assets/fundoKratos2.jpg'
import Kratos3 from '../assets/fundoKratos3.jpg'
import Kratos4 from '../assets/fundoKratos4.jpg'
import Kratos5 from '../assets/fundoKratos5.jpg'
import Kratos6 from '../assets/fundoKratos6.jpg'
import Kratos7 from '../assets/fundoKratos7.jpg'
import Kratos8 from '../assets/fundoKratos8.jpg'
import Kratos9 from '../assets/fundoKratos9.jpg'
import Kratos10 from '../assets/fundoKratos10.jpg'
import Kratos11 from '../assets/fundoKratos11.jpg'

const DetailsScreen4 = () => (
  <ImageBackground source={require('../assets/wallpaperkratos.jpg')} style={estilos.containerTopo}>
    <ScrollView>
      <View>

        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>God of War (2005)</Text>
        <Text style={estilos.descricaoLore}>O jogo começa apresentando o protagonista em um estado de fragilidade. Depois de sofrer por 10 anos com pesadelos diários e temendo enlouquecer, Kratos se lança para a morte da montanha mais alta da Grécia.</Text>
        <Text style={estilos.descricaoLore}>Mas o início desse suposto fim acontece três semanas antes. Kratos é enviado pelo Deus dos Mares, Poseidon, para enfrentar uma hidra que está aterrorizando o oceano — mas não necessariamente salvar os tripulantes da embarcação que ela ataca. Os minions da fera marinha causaram um massacre no navio que traz lembranças ao espartano. Flashes de um passado que ainda o atormenta.</Text>
        <Image source={Kratos1} style={estilos.image}/>
        </View>

        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>Uma última tarefa</Text>
        <Text style={estilos.descricaoLore}>Kratos prefere o isolamento do mar, e tem navegado de porto em porto em serviço dos deuses. Ele até tenta esquecer essas memórias traumáticas com sexo e vinho, mas nada adianta. De saco cheio, Kratos invoca a deusa Atena, dizendo que há 10 anos ele tem servido aos deuses fielmente e que ele quer saber o que é preciso para se ver livre desses pesadelos.</Text>
        <Text style={estilos.descricaoLore}>Atena diz que se ele fizer uma última tarefa seus pecados seriam perdoados. A cidade de Atenas está sitiada pelo Deus da Guerra, Ares, e como existe uma regra de Zeus que proíbe que os deuses travem guerra entre si, ela não pode interferir na batalha. Mas Kratos, sendo um homem treinado por um deus, poderia impedir essa destruição.</Text>
        <Image source={Kratos2} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>Ele topa, e chegando na cidade, recebe instruções e poderes de vários deuses que também estão descontentes com essa palhaçada do Ares. De um ponto alto da cidade, o Deus da Guerra é visto em forma gigante tocando o terror no melhor estilo Godzilla. Kratos promete matar Ares por algo que aconteceu no passado.</Text>
        </View>

        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>De Atenas ao Deserto das Almas perdidas</Text>
        <Text style={estilos.descricaoLore}>Batalhando contra as criaturas de Ares ao longo do caminho, Kratos encontra um velho misterioso com cara de maluco que cava uma cova. O ancião diz que o buraco é para o próprio Kratos. O tempo está correndo e o espartano vai salvar o Oráculo de Atenas.</Text>
        <Text style={estilos.descricaoLore}>Durante a conversa, o Oráculo consegue ver uma pista de seu passado: ele era um capitão do exército espartano, implacável em violência e que acabou sendo consumido por seu desejo sem limites por conquista.</Text>
        <Image source={Kratos3} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>O Oráculo e Atena explicam que a única forma de destruir um deus é com a caixa de Pandora e contam como encontrar esse artefato. Kratos toca o shofar mágico para abrir passagem, desce o cacete nas sirenas e assim encontra Cronos, o titã condenado por Zeus a vagar pelo deserto com o Templo de Pandora nas costas.</Text>
        <Text style={estilos.descricaoLore}>O portão do Templo guardado pelo Queimador de Corpos, um morto-vivo que passa o dia jogando cadáveres de pessoas que morreram ao se aventurar no templo. Ele avisa que é fria entrar lá, mas abre a entrada para o espartano.</Text>
        <Image source={Kratos4} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>Kratos encontra uma quantidade enorme de cadáveres de soldados massacrados no chão. Guerreiros que tentaram encontrar a caixa de Pandora, mas que foram impedidos por Ares. O que desbloqueia outro flashback.</Text>
        </View>

        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>o passado do Fantasma de Esparta</Text>
        <Text style={estilos.descricaoLore}>Kratos liderava um exército mortal e fiel a ele, mas os bárbaros do leste, contra quem guerreavam, eram muito mais numerosos. Mesmo a disciplina e habilidade dos espartanos não foram páreo para a maré de inimigos.</Text>
        <Text style={estilos.descricaoLore}>O capitão Kratos, derrotado e a um instante de morrer nas mãos do Rei Bárbaro, ofereceu sua alma ao Deus da Guerra em troca da derrota de seus inimigos. Ares ouviu, aceitou a oferta, matou todos os inimigos e fundiu nos braços de Kratos as correntes das Lâminas do Caos.</Text>
        <Image source={Kratos5} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>Assim ele se tornou forte o suficiente para se levantar e decapitar seu iminente executor, mas também perdeu sua humanidade no processo. O espartano desenvolveu uma sede insaciável por matar e dali para a frente assassinou incontáveis soldados e civis em nome de seu novo mestre.</Text>
        <Text style={estilos.descricaoLore}>Kratos e seus homens destruíram sem piedade uma vila que ficava ao redor de um templo de Atena. Em meio à matança, o misterioso Oráculo da vila avisou que ele não deveria entrar no templo, mas foi ignorado. Kratos entrou e matou tudo à sua frente, em meio ao incenso e vapor.</Text>
        <Image source={Kratos6} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>Após a carnificina, o vapor se dissipou, assim como o frenesi do espartano. A imagem de suas duas últimas vítimas fizeram com que ele decidisse não mais servir ao seu mestre. Ele tinha matado sua própria esposa e filha. Para tornar tudo mais trágico, essa situação foi planejada pelo próprio Ares, a fim de acabar com o resto de coração mole que o Kratos tinha e fazer dele um matador ainda mais eficiente.</Text>
        <Text style={estilos.descricaoLore}>O Oráculo amaldiçoou o espartano, fazendo com que as cinzas de sua família cobrissem sua pele e que todos que o vissem soubessem o que ele fez. A partir daquele dia, Kratos seria conhecido como “o Fantasma de Esparta”. Fim do flashback.</Text>
        <Image source={Kratos7} style={estilos.image}/>
        </View>

        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>A caixa de Pandora</Text>
        <Text style={estilos.descricaoLore}>De volta ao templo, Kratos resolve alguns enigmas, enfrenta inimigos, escala obstáculos, briga com um minotauro zumbi gigante de armadura e com um sátiro zumbi acrobata e finalmente ele encontra a caixa de Pandora.</Text>
        <Text style={estilos.descricaoLore}>Atena aparece num “holograma” e pede que Kratos leve a caixa até a cidade. É a primeira vez que um mortal tem acesso ao artefato. Só que, lá de Atenas, Ares percebe o que está rolando e lança a quilômetros de distância uma coluna de mármore quebrada, empalando o espartano. Enquanto morre, Kratos vê as harpias de Ares roubando a caixa.</Text>
        <Image source={Kratos8} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>Kratos vai para o inferno, mas não fica muito tempo por lá. Uma corda cai misteriosamente do alto, oferecendo uma fuga do Mundo Inferior. A trilha vertical acaba dando naquela cova em Atenas. A identidade do velho coveiro continua um mistério, mas ele definitivamente trabalha com os deuses.</Text>
        </View>
        
        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>Vingança contra Ares</Text>
        <Text style={estilos.descricaoLore}>Ares está lá com a caixa nas mãos, bradando para Zeus o quão incrível e autossuficiente ele é. Incógnito, Kratos derruba a caixa das mãos de Ares, a abre e tem seu corpo aumentado, ficando também com uma estatura colossal.</Text>
        <Image source={Kratos9} style={estilos.image}/>
        <Text style={estilos.descricaoLore}>O Deus da Guerra faz crescer pernas de aranha nas suas costas e os dois saem no tapa, como em um episódio de Ultraman.</Text>
        <Text style={estilos.descricaoLore}>Ares confisca as Lâminas do Caos que ele deu para Kratos, que por sua vez, para não ficar em desvantagem, improvisa arrancando uma ponte do lugar — que convenientemente tem formato de espada. Kratos transpassa Ares fatalmente, e o inédito acontece: um mortal destrói um deus.</Text>
        <Image source={Kratos10} style={estilos.image}/>
        </View>

        <View style={estilos.containerLore}>
        <Text style={estilos.tituloLore}>O novo Deus da Guerrax</Text>
        <Text style={estilos.descricaoLore}>Porém, no momento de receber a recompensa, havia uma pegadinha do Mallandro: Atena diz que os pecados do espartano estão perdoados, mas que nada foi prometido sobre seus pesadelos. Segundo ela, nenhum homem ou deus poderia apagar a memória das coisas horríveis que ele fez.</Text>
        <Text style={estilos.descricaoLore}> Deprimido, Kratos sobe à montanha mais alta da Grécia e se joga de lá, porque acha que poderia ganhar alívio na morte. Ele cai no mar, mas antes de se afogar é salvo por Atena. Ela diz que os deuses não podem permitir que alguém que os serviram tão bem tire sua própria vida e oferece o trono deixado por Ares no Olimpo a ele. Kratos torna-se assim o novo Deus da Guerra.</Text>
        <Image source={Kratos11} style={estilos.image}/>
        <Text style={estilos.descricaoLore}></Text>
        </View>
                        

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
  containerLore:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  tituloLore: {
    fontSize: 22,
    marginTop:25,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  descricaoLore: {
    fontFamily:"cursive",
    textAlign: "center",
    width:360,
    alignContent: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
    color: 'white'
  },
  image: {
    width: '85%',
    height: 200, // Ajuste a altura conforme necessário
    borderRadius: 15,
    shadowColor: 'red',
  shadowOffset: {
    width: 5,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 10,
  marginVertical: 12
  },

})