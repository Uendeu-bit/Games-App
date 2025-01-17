import React from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, ScrollView } from 'react-native';
import zelda from '../assets/zelda1.jpg'
import zelda2 from '../assets/zelda2.jpg'
import zelda3 from '../assets/zelda3.jpg'
import zelda4 from '../assets/zelda4.jpg'
import zelda5 from '../assets/zelda5.jpg'
import zelda6 from '../assets/zelda6.jpg'
import zelda7 from '../assets/zelda7.jpg'
import zelda8 from '../assets/zelda8.jpg'
import zelda9 from '../assets/zelda9.jpg'
import zelda10 from '../assets/zelda10.jpg'


const DetailsScreen2 = () => (
  <ImageBackground source={require('../assets/fundoZelda.png')} style={estilos.containerTopo}>
  <ScrollView>
    
    <View style={estilos.overlay}>
            <Image source={zelda} style={estilos.image}/>
            <Text style={estilos.texto}>
            O lançamento mais aguardado de 2023 já está entre nós: The Legend of Zelda: Tears of the Kingdom, que estreou em 12 de maio, traz uma aventura fresca para a franquia de Link. Em sua trama, o jogo se apresenta como uma sequência direta de Breath of the Wild, estando diretamente ligado a seus acontecimentos. Pensando nisso, preparamos uma matéria especial que resume tudo que ocorreu no título de 2017. Suba na garupa da Epona e embarque conosco em uma retrospectiva para relembrar o passado de Hyrule. 
            </Text>
            <Text style={estilos.titulo}>
            Uma história de resistência frente à Calamidade
            </Text>

            <Text style={estilos.texto}>
            "A história da família real de Hyrule é também a história de Calamity Ganon. Um mal primordial que perdurou ao longo dos tempos. Esse mal foi derrotado várias vezes por um guerreiro que empunhava a alma de um herói e uma princesa que carregava o sangue da Deusa. Com o passar do tempo, cada conflito com Ganon transformou-se em lenda. Portanto, ouça com atenção enquanto falo sobre essa lenda que ocorreu há 10.000 anos" (Impa, Breath of the Wild).
            </Text>
            <Image source={zelda2} style={estilos.image}/>

            <Text style={estilos.texto}>
            Contam as lendas que o milenar universo de Link sempre foi ameaçado pela aparição de forças malignas que ficariam conhecidas como Calamity Ganon, capazes de causar cataclismas e provocar a invasão de monstros. De maneira recorrente, esta maldição foi combatida por soldados comandados por um herói espadachim e uma princesa com poderes mágicos que acabavam com o mal, mesmo que de maneira provisória, pois a Calamidade sempre retornava para atormentar diferentes gerações.
            </Text>

            <Text style={estilos.texto}>
            Isso mudou em certo ponto da cronologia, aproximadamente 10 mil anos antes da história que é exibida em Breath of the Wild. Nessa época, o Reino de Hyrule prosperava com a sua diversidade de povos, entre eles os Sheikah, cujas tecnologias avançadas permitiram um amplo desenvolvimento social. Eles foram os responsáveis por construir novas armas de combate, como os Guardians e as Divine Beasts, que, ao lado de um desconhecido herói e a princesa descendente de Deusas, venceram Ganon e garantiram a paz por milênios.
            </Text>
            <Image source={zelda3} style={estilos.image}/>

            <Text style={estilos.texto}>
            Depois dessa guerra, infelizmente os Sheikah não foram devidamente recompensados, dado que o Rei de Hyrule temeu que eles pudessem roubar o trono com a sua tecnologia e fama. Assim, as criações dessa raça foram enterradas e seus membros foram exilados; alguns deles passaram a habitar Kakariko Village, enquanto outros formaram o misterioso Yiga Clan.
            </Text>

            <Text style={estilos.texto}>
            Hyrule permaneceu em paz por muito tempo, até 100 anos antes de Breath of the Wild, quando surgiram rumores de que Calamity Ganon poderia retornar. Isso assustou principalmente o Rei Rhoam, que ouviu uma profecia horripilante de um vidente e passou a temer o futuro dos Hylians, incluindo a sua filha Zelda, que havia perdido a mãe há pouco tempo. Diante disso, o monarca se baseou nas lendas do passado e começou uma verdadeira força-tarefa para tentar impedir o retorno do mal.
            </Text>

            <Text style={estilos.titulo}>
            O Herói, a Princesa e os Campeões em ação
            </Text>

            <Text style={estilos.texto}>
            Comandados pelas ordens do Rei Rhoam, os Hylians começaram a desenterrar as tecnologias ancestrais dos Sheikahs, que, de acordo com os antigos mitos locais, seriam poderosas a ponto de destruir a Calamidade. Além da recuperação de diversos Guardians, as quatro Divine Beasts foram encontradas e reabilitadas; porém, para seus poderes serem efetivos, elas demandariam a presença de quatro comandantes para a batalha final.
            </Text>
            <Image source={zelda4} style={estilos.image}/>

            <Text style={estilos.texto}>
            Como nos mostram as cenas de Breath of the Wild e Hyrule Warriors: Age of Calamity, a Família Real de Hyrule entrou em ação e selecionou os seguintes Campeões para guiar esses antigos veículos: Mipha, dos Zoras, cuidaria da Divine Beast Vah Ruta; Daruk, dos Gorons, a Divine Beast Vah Rudania; Revali, dos Ritos, a Divine Beast Vah Medoh; e Urbosa, dos Gerudos, a Divine Beast Vah Naboris.
            </Text>

            <Text style={estilos.texto}>
            A força dos Campeões seria complementada por outro herói escolhido: Link, filho de um guerreiro de Hyrule que mostrava talentos promissores. Além de praticar seus dotes de espadachim desde a infância, o protagonista chamou a atenção do Rei Rhoam ao empunhar a Master Sword em sua juventude, mostrando assim que ele possuía a alma de um guerreiro lendário. Caberia a ele, portanto, ajudar nos embates com a força da espada.
            </Text>
            <Image source={zelda5} style={estilos.image}/>

            <Text style={estilos.texto}>
            Todavia, a mitologia de Hyrule também indicava a necessidade de outra peça-chave para impedir o retorno de Calamity Ganon, que seria a presença da Princesa dos Hylians e de sua magia — isto é, Zelda. O problema é que a jovem garota, até aquela altura, não havia desenvolvido seus poderes mágicos, o que ocorreu, em parte, pelo fato dela nunca ter recebido treinamentos de batalha, dado que perdera sua mãe ainda cedo. 
            </Text>

            <Text style={estilos.texto}>
            Mesmo com esse obstáculo, Zelda, que tinha apenas 17 anos, se mostrou uma verdadeira líder e comandou as organizações bélicas de Hyrule, que tiveram de entrar em ação quando, em certo dia, as forças de Ganon causaram terremotos e provocaram o caos no Reino. Dessa vez, a Calamidade foi tão poderosa que tomou posse das tecnologias Sheikah, voltando os Guardians e as Divine Beasts contra os Hylians. Em um curto espaço de tempo, o Rei Rhoam e os quatro Campeões foram brutalmente assassinados. 
            </Text>
            <Image source={zelda6} style={estilos.image}/>

            <Text style={estilos.texto}>
            Frente ao caos, Link e Zelda permaneceram juntos para combater o mal, até que o herói foi fortemente ferido por um Guardian. A Princesa, diante disso, concentrou todas as suas forças e subitamente conseguiu liberar a sua magia, evitando que Link padecesse. Bravamente, um dos últimos atos de Zelda foi proteger o corpo ferido do guerreiro. 
            </Text>

            <Text style={estilos.texto}>
            Para isso, ela contou com a ajuda de dois misteriosos combatentes Sheikah, que carregaram o corpo de Link para o Shrine of Resurrection, onde ele poderia se recuperar com o tempo. Enquanto isso, Zelda levou a Master Sword até o seu pedestal nas proximidades da Korok's Forest para conservar a espada. Lá, ela informou à Great Deku Tree de seu plano: com seus poderes, ela retornaria ao Castelo de Hyrule e iria trancafiar Ganon, o que foi bem-sucedido. Eis que, assim, chegamos ao começo da aventura lançada em 2017.
            </Text>

            <Text style={estilos.titulo}>
            A jornada de Link para retomar suas memórias
            </Text>

            <Text style={estilos.texto}>
            Breath of the Wild se inicia com Link despertando de um sono que durou um século. Recuperado de seus ferimentos, o jovem passa a escutar vozes, mas se dá conta de que acordou sem qualquer tipo de memória. Ao sair do Shrine of Ressurection, na companhia do Sheikah Slate, um tipo de dispositivo que ele encontrou no local, o Great Plateau mostra a sua imponência, onde Link encontra a figura de um velho homem.
            </Text>
            <Image source={zelda7} style={estilos.image}/>

            <Text style={estilos.texto}>
            Este personagem, que mais tarde se revela como o espírito do Rei Rhoam, instrui Link aos primeiros passos de sua jornada, além de dar mais detalhes sobre o que aconteceu no passado. Isso também será feito por Impa, Purah e Robbie, Sheikahs que habitam Kakariko Village e contextualizam os mais de 10 mil anos de história de Hyrule. 
            </Text>

            <Text style={estilos.texto}>
            Com a sabedoria desses personagens e a voz que ele escuta a todo momento, que lentamente o jogo revela ser a de Zelda, presa junta à Calamidade no Castelo, nosso protagonista descobre que deverá usar novas habilidades, como a Stasis, Magnesis, Cryonis e as Remote Bombs, para voltar a habilitar o poder das lendárias Divine Beasts.
            </Text>
            <Image source={zelda8} style={estilos.image}/>

            <Text style={estilos.texto}>
            Para isso, ele recebe a ajuda dos espíritos dos Campeões do passado, além de conhecer novos personagens que comandarão as Divine Beasts e, de certa forma, também se ligam à história de Hyrule, entre eles Sidon, o Príncipe dos Zoras; o Goron Yunobo, ancestral de Daruk; Riju, a líder dos Gerudos; e Teba, um guerreiro da tribo dos Ritos, e seu filho Tulin.
            </Text>

            <Text style={estilos.texto}>
            Junto às missões, Link recebe outra tarefa ligada a seu passado, que é a sua incumbência, enquanto herói, de empunhar a Master Sword. Vencendo os desafios impostos pela Korok's Forest, como o labirinto da Lost Woods, ele se encontra com a Great Deku Tree e resgata a espada, que nas lendas também é chamada de “Sword that Seals the Darkness” (A Espada que Sela a Escuridão).
            </Text>
            <Image source={zelda9} style={estilos.image}/>

            <Text style={estilos.texto}>
            Depois de enfrentar inúmeros inimigos, o herói de The Legend of Zelda, agora mais forte do que nunca, se dirige ao Castelo de Hyrule para derrotar Ganon, que está prestes a se libertar. Enfraquecido pelo poder das Divine Beasts, o vilão assume a forma bestial de Dark Beast Ganon, proporcionando um embate final contra Link, que recebe uma ajuda de Zelda: as Arrows of Light para equipar em seu arco e flecha. Além desse item, a Princesa é capaz de enfraquecer as defesas de Ganon para que Link, em um golpe final, derrote enfim a Calamidade, para a alegria de todos os povos que habitam o universo da franquia.
            </Text>

            <Text style={estilos.titulo}>
            O futuro de Hyrule
            </Text>

            <Text style={estilos.texto}>
            A última cena de Breath of the Wild exibe o casal de protagonistas caminhando pelos escombros de seu reino. Nesse trecho, Zelda diz a Link que, apesar de Ganon ter partido, ainda seria necessário restaurar Hyrule à sua antiga glória. Assim, caberia aos dois essa nada fácil missão, que inclusive teria de começar com uma determinada tarefa: consertar a Divine Beast Vah Ruta, que misteriosamente parou de funcionar.
            </Text>
            <Image source={zelda10} style={estilos.image}/>

            <Text style={estilos.texto}>
            Tears of the Kingdom, portanto, se inicia nesse período da cronologia da série. Além da reabilitação de Hyrule, que aparenta estar sofrendo novas ameaças, Zelda e Link também contarão com a ajuda dos amigos feitos ao longo da jornada, como Teba, Tulin, Riju, Sidon e Yunobo, que agora, consagrados pela empreitada bem-sucedida, estão mais velhos e ocupam novos postos em suas tribos. 
            </Text>

            <Text style={estilos.texto}>
            Será que isso será o suficiente para que Hyrule retome o seu período de glórias? As Calamidades que assombram o reino há mais de dez mil anos foram, de fato, contidas por Link e Zelda? Ou as novas ameaças serão capazes de afetar os elementos da saga, como a Master Sword, a Triforce e as ancestrais tecnologias Sheikah? A resposta para essas e outras perguntas deverão ser reveladas em The Legend of Zelda: Tears of the Kingdom.
            </Text>
    </View>
 
  </ScrollView>


  </ImageBackground>
);

export default DetailsScreen2;

const estilos = StyleSheet.create({
  containerTopo: {
    width: "100%",
    height: "100%",
    alignItems:'center'
  },
  borda: {
    borderWidth: 2, // Largura da borda
    borderColor: '#2fd234', // Cor da borda
    borderRadius: 25, // Bordas arredondadas (opcional)
    padding: 10, // Espaçamento interno
  },
  overlay: {
    alignItems:'center',
    height: "100%",
    width:411,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor preta com 50% de opacidade
  },
  texto: {
    paddingVertical:20,
    width:360,
    lineHeight:22,
    color: 'white',
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo: {
    paddingVertical:20,
    width:360,
    lineHeight:22,
    color: 'white',
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red'
  },
  image: {
    width: '85%',
    height: 200, // Ajuste a altura conforme necessário
    borderRadius: 30,
    shadowColor: '#2fd234',
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