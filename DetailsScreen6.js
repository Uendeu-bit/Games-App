import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image, Button, isPlaying, playSound } from 'react-native';
import { Audio } from 'expo-av';
import Yharnam from '../assets/yharnam.jpeg'
import Yharnam2 from '../assets/yharnam2.jpg'
import Yharnam3 from '../assets/yharnam3.jpg'
import Laurence from '../assets/laurence.jpg'
import igrejadacura from '../assets/igrejadacura.jpeg'
import willem from '../assets/Willem.jpg'
import feraClerical from '../assets/feraclerical.jpg'
import npcs from '../assets/npcs.jpg'
import rom from '../assets/rom.jpg'
import yharnamafter from '../assets/yharnamafter.jpg'
import yharnamafter2 from '../assets/yharnamafter2.png'
import oficina from '../assets/oficina.jpg'
import sonho from '../assets/sonho.jpg'
import gherman from '../assets/gherman.jpg'



const DetailsScreen6 = () => (
  
<ImageBackground source={require('../assets/wallpaperblood.jpg')} style={estilos.containerTopo}>
    <ScrollView>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>O Túmulo dos Deuses</Text>
      <Text style={estilos.descricaoLore}>As masmorras do cálice foi onde tudo começou para a civilização Yharnam, um caçador companheiro Alfred, nos diz que: “o túmulo dos deuses esculpido abaixo de Yharnam, deve ser familiar para qualquer caçador” Esses labirintos são os restos de uma outra cultura os “Pthumerians”, que se foram há muito tempo, embora não estejam completamente extintos. Em algum momento os primeiros habitantes de Yharnam descobriram um cálice que concede o acesso ao labirinto Pthumeriano e começaram a explorar. Ele não estava vazio.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Apesar de ter sido preenchido com bestas enlouquecidas e hostis e coisas ainda piores, os exploradores continuaram a exploração independentemente, e descobriram o que pareciam ser restos de deuses. Eles retornaram com tesouros, misteriosas formas de vida e outros detritos orgânicos. Um grande instituto de aprendizagem, Byrgenwerth, foi fundada para explorar e reunir o máximo de informação possível, aqui está nosso início.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Vestimenta dos que exploram os antigos labirintos em nome da Igreja da Cura. Eles contem muito mais que bugigangas, escondem vários segredos de antigos "Great Ones"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>" Bem, uma vez um grupo de jovens estudantes de Byrgenwerth descobriram um "meio santo" nas profundezas das tumbas"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Isso levou à fundação da Igreja da Cura, e do estabelecimento da cura com sangue"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Alfred nos fala que um grupo de jovens estudantes de Byrgenwerth eventualmente descobriu um “mediador santo”, um tipo de canal de comunicação com os túmulos, e este que viria a conduzir a fundação da “Igreja da Cura” e “Ministração de Sangue”. O último é como Yharnam é mais conhecida no momento do jogo.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>PS:Mas um detalhe adicional, se o jogador explorar longe o bastante as masmorras do cálice, ele vai descobrir a Rainha Pthumeriana. Essa mulher é também vista em vários momentos durante a história principal do jogo, e tem a ênfase na perda de seu filho.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Os Pthumerus tinham um conhecimento superior sobre os “Great Ones”, e sua rainha estava grávida de uma criança que ou nasceu morta ou morreu logo após o nascimento. Mais pro final do jogo o jogador obtém um terço de um cordão umbilical que diz:</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>“Todo “Great One” perde seu filho e clama por um substituto, E Oedon, o sem forma, não é diferente. Para pensar, se foi o sangue corrompido que começou essa ligação sobrenatural”</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A rainha Pthumeriana carregou e perdeu o filho do sem forma Oedon, e então quando os exploradores de Byrgenwerth encontraram a rainha, eles encontraram o sangue de um “Great One”, uma maravilhosa substancia, pelo menos ao que parece.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A rainha Pthumeriana carregou e perdeu o filho do sem forma Oedon, e então quando os exploradores de Byrgenwerth encontraram a rainha, eles encontraram o sangue de um “Great One”, uma maravilhosa substancia, pelo menos ao que parece.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O nome da rainha Pthumeriana era Yharnam, a cidade foi construída sobre os labirintos, e nomeada em tributo. A ligação sobrenatural tinha começado.</Text>
      </View>

      <View style={estilos.card}>
      <Image source={Yharnam} style={estilos.image}/>
      <Text style={estilos.title}>Screenshot da cidade de Yharnam</Text>
      </View>

      <View style={estilos.card}>
      <Image source={Yharnam3} style={estilos.image}/>
      <Text style={estilos.title}>Screenshot da cidade de Yharnam</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>Byrgenwerth e a Igreja da Cura</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Byrgenwerth é onde foram estudados os “Great Ones”, mas ná pratica parece que principalmente foi estudado como fazer contato com eles. Entre os estudantes estavam Provost, Willen e Laurence, e dado o que sabe Gehrman, provavelmente ele também começou aqui.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Uma divisão foi causada quando Alfred diz que um “mediador santo” foi encontrado. Ele poderia estar se referindo a rainha Yharnam ou o sangue de seu filho morto, mas é mais provável que ele esteja se referindo a abandonada Ebrietas – um “Great One” que pode ser encontrado no jogo. A tentação de possuir o sangue de um “Great One” vivo foi demais para alguns...</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O lema de Willem era simples “Tema o sangue antigo”. Ele desejava provar os segredos do Cosmos, mas intuiu ser perigoso uma transfusão em si mesmo com o sangue dos deuses. Laurance discordou, e no que Willem chamou de traição, deixou Byrgenwerth e fundou a Igreja da Cura.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Ministração de sangue foi a base da Igreja da Cura. “ Ministração de sangue é, certamente, a busca por comunhão.” Laurence acreditava que através da sua infusão com o sangue dos “Great Ones”,algum tipo de comunicação seria feita.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>" Ministração de sangue é, certamente, a busca por comunhão"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Tudo começou bem para a Igreja da Cura devido as propriedades milagrosas da ministração de sangue. Parecia curar todos os males e conceder longevidade para os moradores de Yharnam, que por sua vez adoraram a igreja.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Mas a própria igreja era uma fachada. No Alto da Catedral, isolado de olhares indiscretos, era o Orfanato, onde o “Great One” Ebrietas foi mantido e crianças abandonadas foram usadas como experimentos. O Coro, escalão mais alto da Igreja, viria do Orfanato.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O Coro prestou homenagem ao Mestre Willem cobrindo seus olhos (ver blindfold cap), e eventualmente tropeçando em sua mais importante descoberta. Muitos acreditavam que os “Great Ones” eram do céu, deuses no sentido tradicional. O coro percebeu que esses seres existiam numa dimensão que se sobrepunha a nossa. “O céu é o cosmos são um” diz uma nota achada no Alto da Catedral, e esta foi a grande “descoberta” da Igreja, os “Great Ones” não presisavam ser encontrados no sentido físico, eles já estavam aqui.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Vestimenta do Coro, alto escalão da Igreja da Cura que continuam o trabalho iniciado em Byrgenwerth. A cobertura nos olhos indica o débito aos ensinamentos de Willem, até após dos caminhos divergirem"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"aqui nos estamos, pés plantados na terra, mas talvez o Cosmos pode estar muito perto de nós, apenas sobre nossas cabeças?</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Laurence, o fundador da Igreja, claramente participou do ministração de sangue. Para este fim, ele e seus associados foram os primeiros a acenar com a “presença da lua” próxima da terra, que por sua vez mistura as linhas entre homens e bestas. Esse é provavelmente o momento quando o problema da “bestialização” se iniciou, quando as pessoas começaram a usar infusão do sangue dos “Great Ones” começaram a se transformar em monstros.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"O alto escalão da Igreja da Cura é formado pela Escola de Mensis, fixada na Vila Invisível"</Text>
      </View>
      
      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"A presença da lua sem nome convidada por Laurence e seus associados. Sangue pálido"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Quando a lua vermelha se aproxima, a linha entre homens e bestas se mistura"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>E o Laurance? Isso é especulação, mas na Grande Catedral o jogador encontra um cranio de um animal gigante, que quando tocado mostra um flashback do último encontro entre Laurence e Willem.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Laurence foi pioneiro no mundo de Bloodborne e ele pode ter sido também a primeira Besta de Yharnam. O cranio na Grande Catedral tem uma enorme fissura através dele, interessante porque um monstro chefe que lutamos nas masmorras do cálice é o “Bloodletting Beast”, que existe em duas formas: Uma com a cabeça intacta e outra sem cabeça, com a abertura exatamente onde o cranio da Catedral tem uma ferida.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O diálogo é:</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>“Chegou a hora de novo eu temo, mas se o destino sorrir para nós, vamos nos encontrar novamente em breve. Adeus querido amigo.”</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Se você tiver uma mente fantasiosa, você pode ler isso como alguém que está pressionado contra vontade num perigo incontrolavel,como se transformar em Besta em quanto a lua está baixa - dizendo que ele espera que não será o último adeus. O destinatário da mensagem só pode ser imaginado, dessa vez o orador nunca conseguiu voltar.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Especulação é claro, mas talvez um final apropriado para um homem que alcançou os céus, e condenou sua civilização no processo.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}></Text>
      </View>

      <View style={estilos.card}>
      <Image source={Laurence} style={estilos.image}/>
      <Text style={estilos.title}>Laurence, the first Vicar</Text>
      </View>

      <View style={estilos.card}>
      <Image source={igrejadacura} style={estilos.image}/>
      <Text style={estilos.title}>Imagens do hospital de Yharnam</Text>
      </View>

      <View style={estilos.card}>
      <Image source={willem} style={estilos.image}/>
      <Text style={estilos.title}>Imagens de Master Willem</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>Ministração de Sangue</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Vale a pena parar brevemente parar para pensar sobre como exatamente a Ministração de Sangue funciona e como era um grande negócio. Grande o bastante para que Yharnam produzisse mais sangue do que o alcool, pois era mais inebriante e assim ficou tão zelosamente guardado que Yharnam ficou mais ou menos fechadas para pessoas de fora.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>" Em Yharnam, eles produzem mais sangue do que álcool"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A atração do sangue, para os estudantes de Byrgenwerth era a promessa de se aproximar dos “Great Ones” e talvez se tornarem eles prórpios deuses. Fazendo seu sonho de evolução uma realidade.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>" A descoberta do sangue fez seus sonhos de evolução uma realidade"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O problema? “ O sangue define um organismo” nos diz a Rerramenta de Oficina de Runas, pelo uso do sangue dos “Great Ones” os antigos habitantes de Yharnam estariam fazendo deles próprios ferramentas dos “Great Ones” . Tanto Oedon como seus adoradores disfarçadamente buscam o sangue precioso.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Sangue define um organismo"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Tanto Oedon como seus adoradores disfarçadamente buscam o sangue precioso"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O fato que a civilização dos Pthumerian tenham estado próximos aos “Great Ones” e após isso tenha entrado em colapso não se perdeu completamente. O líder de Byrgenwerth, Master Willem percebeu que o sangue não era necessariamente a maravilha livre de consequencias que muitos dos seus colegas acreditavam. Ele seria provado correto.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>ROM</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>ROM é o grande segredo de Byrgenwerth, a chave Lunarium no diz: “No fim das contas (Willem) deixou seu segredo com o lago”. A forma muda e definhada de Willem ainda continua com vida de algum tipo, mas apenas pode nos apontar o lago, e se você optar por pular, você vai encontrar a ROM.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Vale a pena notar que Willem como aparece no jogo tem alguns tumores no seu pescoço, similar àqueles vistos em seus parentes no Orfanato, o que sugere que ou ele levou seus experimentos muito longe ou alguém o fez. Dado que ele é guardado pelo que parece ser um caçador afiliado ao Coro, talvez o último.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Uma nota dentro do colégio nos diz: “A aranha esconde todos os tipos de rituais, certa de compartilhar nada, pois para o verdadeiro esclarecimento, nada precisa ser compartilhado” ROM é conhecida como a aranha vazia porque embora os “Great Ones” tenha lhe concedido olhos, o ser que ele se tornou é essencialmente estúpido. Ele transcendeu para se tornar um “Great One”, mas seu proposito - que pode ter sido o último suspiro de Willem de acitar uma catastrofe – parece ser o de obstruir a lua de sangue e esconder Mergo, o filho de um “Great One”. Depois de matar ROM, que não é hostíl até ser atacada, a noite desce sobre Yharnam, a lua se aprixima muito mais, e a rainha Yharnam aparece.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"A aranha esconde todas as formas de rituais"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A runa “Stunning Deep Sea” também implica que o lago de ROM foi o guardião de algum tipo, mantendo ambos os “Great Ones” ou aqueles que queriam ser seus servos dormentes para a verdade.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Grandes volumes de agua servem como proteção e como profecia da verdade sobrenatural"</Text>
      </View>

      <View style={estilos.card}>
      <Image source={rom} style={estilos.image}/>
      <Text style={estilos.title}>ROM, the Vacuous Spider</Text>
      </View>

      <View style={estilos.card}>
      <Image source={yharnamafter2} style={estilos.image}/>
      <Text style={estilos.title}>Yharnam após o caçador matar ROM</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>A Caça e a Velha Yharnam</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Os moradores de Yharnam estão familiarizados com as tradições da caça. Quando a lua se aproxima a maioria dos viciados em sangue se tornam bestas e as portas estão fechadas para a noite assim que os caçadores varrem as ruas e matam suas presas.</Text>
      </View>

      <View style={estilos.card}>
      <Image source={npcs} style={estilos.image}/>
      <Text style={estilos.title}>Imagens de inimigos comum</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Gehrman foi o primeiro caçador e o anfitrião do sonho do caçador, mas vamos voltar a ele mais tarde. O que importa historicamente é que ele inspirou outros caçadores, alguns deles seguindo seus métodos e outros divergindo. A Igreja da Cura teve sua própria linhagem de caçadores, iniciados por Ludwig, uma necessidade devido aos mais viciados em sangue de todos, os clérigos, iriam se transformar nas feras mais hediondas. Ele mesmo começou a criar gemas de sangue especiais para a tarefa.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"quando os clérigos começaram a se transformar em indescritíveis bestas a Igreja precisava de algo para combater"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Ludwig foi o primeiro de muitos caçadores da Igreja da Cura a vir, muitos eram clérigos. Acabou que os clérigos se transformaram nas mais hediondas bestas"</Text>
      </View>

      <View style={estilos.card}>
      <Image source={oficina} style={estilos.image}/>
      <Text style={estilos.title}>Imagens da Oficina do caçador</Text>
      </View>

      <View style={estilos.card}>
      <Image source={feraClerical} style={estilos.image}/>
      <Text style={estilos.title}>Imagens da Fera Clerical</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A caça parece ter sido de uma ocorrencia regular, e aceita como tal, porém teve um efeito colateral horrível ao uso da ministração de sangue, mas não o bastante para afastar as pessoas dessa cura milagrosa. A primeira vez que a balança pendeu foi quando a própria Yharnam foi queimada até o chão.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Conhecida como Velha Yharnam no periodo do jogo, a primeira Yharnam estafa afligida com o que foi chamado de “sangue pálido” (ashen blood). Todos começaram a se transformar e a Igreja não conseguia encontrar a cura, somente postergando a situação. Enviaram então um grupo de dissidentes caçadores, os Powderkegs, conhecidos por serem resolvedores de problemas. Os Powderkegs queimaram a cidade até as cinzas, ficando de prontidão para abater qualquer sobrevivente, e nesse horrível processo, ou morreram ou abandonaram seus votos de caçador.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A Igreja por sua vez, abandonou a Velha Yharnam para esse destino e a isolou do resto da cidade.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Usado para tratar o sangue pálido, a desconcertante doença que devastou a velha Yharnam tempos atrás"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Quando a caçada começou, a Igreja da Cura nos abandonou, bloqueando a grande ponte para a Catedral,enquanto queimavam a Velha Yharnam até o chão naquela noite iluminada pela lua"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Esse foi um mero indício do que estava por vir. Há uma sugestão interessante que as Bestas começaram a oprimir os caçadores, porque Ludwig começou a recrutar pessoas normais para se juntar às caçadas – porém apenas alguns deles iriam sobreviver a essa experiencia.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Ludwig o primeiro caçador da Igreja da Cura, uma vez recrutou habitantes de Yharnam para servir como caçadores. Isso não está nem perto de ser suficiente para um homem comum ter alguma chance contra as bestas"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"um escudo de madeira bruto usado pelas massas que chegaram para se juntar à caça"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Como isso sugere, caçadores possuem algo a mais que humanos normais. Não é somente a habilidade com luta, mas também a habilidade de absorver ecos de sangue, e então aumentar seu poder através do uso da força vital de outros seres. Em um mundo onde muitos desejam ser poderosos o bastante para ser o substituto para o filho de um “Great One”, a implicação é obvia.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>A Caça e a Velha Yharnam</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Uma das runas “Herdeiro” diz: “Talvez o herdeiro seja um caçador que traz a repetida vontade daqueles que vieram antes dele.” Já discutimos sobre a ideia dos “Great Ones” desejarem um substituto, mas o que exatamente isso significa? Sabemos que cada “Great One” perde seu filho, o que implica que embora esses seres possam engravidar humanos, a criança resultante nunca sobrevive por muito tempo. Isso pode ser visto no fim do jogo onde aprostituta Arianna dá a luz num evento precipitado pela lua vermelha e a “criança” tem uma vida breve.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Talvez o "herdeiro" é um caçador que carrega a repetida vontade daqueles que vieram antes dele"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A estrutura e um bebe humano é incapaz de suportar um ser do tipo “Great One”. Mas apesar da morte da criança, o poder do ser ainda reside ali. E então os “Great Ones” e seus seguidores ainda lutam para criar um substituto sendo forte o suficiente para ser o anfitrião.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Esse era o objetivoda Escola de Mensis, uma parte da Igreja da Cura. Mensis pode ter sido um indivíduo, mas o nome também se refere ao grupo como coletivo e eles buscavam a comunhão com Mergo, filho da rainha Yharnam. Isso foi alcançado e eles entraram num pesadelo – embora a experiencia tenha causado a morte fetal dos seus cérebros. Na vila invisível, ajudantes de Mensis possuem corpos secos posicionados em vários pontos, com cada um deles posicionados em direção à lua.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Todo Great One perde seu filho e assim clama por um substituto, esse cordão garantiu a Mensis uma audiência com Mergo, mas resultou na morte fetal de seus cérebros"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A escola de mensis usou rituais para criar um substituto, acreditando basicamente que quantidade é igual a poder, então quanto mais sangue humano, melhor. Esse ritual, sem dúvidas inspirados por insights de Laurance, incluia trazer a lua para perto e usar uma bizarra antena para confundir as dimensões.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"O ritual de Mensis deve ser parado antes que todos nós viremos bestas."</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>A Escola de Mensis tinha seus prórpios caçadores, que raptavam pessoas para sacrifício, e na Vila Invisível essas vítimas podem ser vistas petrificadas tentando escapar do ritual, homens, mulheres e crianças.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>O ritual matou todos eles, deixando os ajundantes de Mensis com cérebro morto a apodrecer, mas também resultou em duas coisas: A recuperação de um “Great One” embora com cérebro terrivelmente podre e a criação na Vila Invisível do “O Renascido”, uma clara referencia ao sem forma Oedon, é de fato nada do tipo, é um monstro grotesco formado por partes de corpo.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Depois de derrotar essa abominação. O jogador pode entrar no Pesadelo de Mensis, e eventualmente encontrar o anfitrião do pesadelo, Micolash, certamente o mais poderoso dos ajudantes de Mensis. Embora ele use os “Sinais de Ebrietas” , sugerindo o quão perto Mensis e o Coro estão, é uma luta usualmente fácil, que surpreende no fim quando ele lamenta que após sua morte ele vai acordar. Como nós conhecemos seu corpo no mundo real, Micolash não irá acordar em lugar algum.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Aliás a presença das moças do sino aqui, enfatiza a importância do “ecoar” como tema e explica o raciocínio por trás do multiplayer. Os sinos originais foram descobertos nos labirintos e seus sinos ecoam através dos mundos, permitindo que os caçadores atravessem dimensões, ainda que brevemente, e ajudem uns aos outros em diferentes sonhos.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"Velho sino descoberto no labirinto subterrâneo, esse sino entra em ressonância entre os mundos, e o primeiro caçador usou como um sinal especial para chamar caçadores de outros mundos para cruzar a separação e cooperar"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.tituloLore}>A reta Final</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Vale a pena fazer um balanço, aqui o nosso caçador entrou numa dimensão alternativa criada pela Escola de Mensis, matou o anfitrião, e no “mundo real” destruiu seu falho substituto. A partir daqui o caminho leva à Mergo, filho da rainha Yharnam e Oedon.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Existe muito a dizer sobre a área em si, chamada de Sótão de Mergo, não menos importante a presença de um cérebro gigante cercado por olhos que leva o jogador à loucura, mas por propósitos de brevidade vamos focar no Mergo. Voce não caça Mergo, que é visto num berço, mas sim a ama de leite de Mergo, a criatura que esconde o bebe. A ama de leite é específicamente a mulher que alimenta o bebe de outra mulher, assim que Mergo é sustentado, então quando matamos a ama, presumimos que matamos também Mergo. O jogo não deixa isso explícito, mas presumimos isso devido ao jogo ter uma forte narrativa com infanticídios e nascidos mortos, a From não quis ir linge demais tendo um chefe onde você mata diretamente o bebe...</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Após a morte aparente de Mergo, você retorna ao sonho do caçador em chamas,e Gehrman espera por você. Ele pede que você submeta sua vida a ele e ele irá matá-lo e você apenas desperta permanentemente do sonho na real Yharnam.</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>"voce morrerá, esquecerá o sonho, e acordará sob uma manhã ensolarada"</Text>
      </View>

      <View style={estilos.containerLore}>
      <Text style={estilos.descricaoLore}>Voce pode ser libertado do sonho se rendendo a Gehrman ou derrotando-o, altura na qual a “presença da lua sem nome” desce, lhe abraça, e suga seus ecos de sangue, colocando você no papel de Gehrman como o novo protetor do sonho.</Text>
      </View>

      <View style={estilos.card}>
      <Image source={sonho} style={estilos.image}/>
      <Text style={estilos.title}>Sonho do caçador</Text>
      </View>

      <View style={estilos.card}>
      <Image source={gherman} style={estilos.image}/>
      <Text style={estilos.title}>Gehrman, the First Hunter</Text>
      </View>




          </ScrollView>
          </ImageBackground>
          


  
);



export default DetailsScreen6;

const estilos = StyleSheet.create({
    containerTopo: {
      width: 420,
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
    descricao: {
      textAlign: "center",
      marginBottom: 30,
      fontStyle: 'italic',
      color: 'white'
    },
    
    image: {
      width: '100%',
      height: 200, // Ajuste a altura conforme necessário
      borderRadius: 10,
      shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
    marginVertical: 12
    },
    title: {
      fontSize: 14,
      color:'#fff',
      textAlign: 'center',
      fontStyle: 'italic',
      marginVertical:5,
      position: 'relative',
      bottom: 17
    },
  });