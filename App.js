import 'react-native-gesture-handler';
import React from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando os aplicativos criados
import HelloWorldApp from './src/apps/HelloWorldApp';
import QueenApp from './src/apps/QueenApp';
import GuerraDoAmanhaApp from './src/apps/GuerraDoAmanhaApp';
import EstiloTextoApp from './src/apps/EstiloTextoApp';
import InlineStyleApp from './src/apps/InlineStyleApp';
import StyleSheetApp from './src/apps/StyleSheetApp';
import EstiloQuadradoTextoApp from './src/apps/EstiloQuadradoTextoApp';
import EstiloImagemBordaApp from './src/apps/EstiloImagemBordaApp';
import EstiloMarginPaddingApp from './src/apps/EstiloMarginPaddingApp';
import EstiloPalavraDestaqueApp from './src/apps/EstiloPalavraDestaqueApp';
import EstiloDiferenteTextoApp from './src/apps/EstiloDiferenteTextoApp';
import EstiloTelaAplicativoApp from './src/apps/EstiloTelaAplicativoApp';
import CriacaoComponenteApp from './src/apps/CriacaoComponenteApp';
import ComponenteTopoConteudoApp from './src/apps/ComponenteTopoConteudo';
import ComponenteTopoConteudoEstiloApp from './src/apps/ComponenteTopoConteudoEstiloApp';
import ComponenteImportExportApp from './src/apps/ComponenteImportExport';
import NavegacaoAbasApp from './src/apps/NavegacaoAbas';
import NavegacaoDrawerApp from './src/apps/NavegacaoDrawer';
import NavegacaoButtonTelasApp from './src/apps/NavegacaoButtonTelas';
import NavegacaoStackApp from './src/apps/NavegacaoStack';
import NavegacaoEventoTouchApp from './src/apps/NavegacaoEventoTouch';
import ScrollView1App from './src/apps/ScrollView1';
import ScrollView2App from './src/apps/ScrollView2';
import ScrollView3App from './src/apps/ScrollView3';
import ContainerExemplo1App from './src/apps/ContainerExemplo1';
import ContainerExemplo2App from './src/apps/ContainerExemplo2';
import ContainerExemplo3App from './src/apps/ContainerExemplo3';
import ContainerPressableApp from './src/apps/ContainerPressable';
import ContainerPressable2App from './src/apps/ContainerPressable2';
import ContainerPressable3App from './src/apps/ContainerPressable3';
import ContainerExemploApp from './src/apps/ContainerExemplo';
import TabNavigationIcones1App from './src/apps/TabNavigationIcones1';
import TabNavigationIcones2App from './src/apps/TabNavigationIcones2';
import TabNavigationIconesAbas1App from './src/apps/TabNavigationIconesAbas1';
import TabNavigationIconesAbas2App from './src/apps/TabNavigationIconesAbas2';
import TabNavigationEstilizado1App from './src/apps/TabNavigationEstilizado1';
import TabNavigationEstilizado2App from './src/apps/TabNavigationEstilizado2';
import TabNavigationEstilizado3App from './src/apps/TabNavigationEstilizado3';
import TabNavigationPersonalizando1App from './src/apps/TabNavigationPersonalizando1';
import TabNavigationPersonalizando2App from './src/apps/TabNavigationPersonalizando2';
import TabNavigationPersonalizando3App from './src/apps/TabNavigationPersonalizando3';
import TabNavigationPersonalizando4App from './src/apps/TabNavigationPersonalizando4';
import TabNavigationPersonalizando5App from './src/apps/TabNavigationPersonalizando5';
import EstilizandoFlexbox1App from './src/apps/EstilizandoFlexbox1';
import EstilizandoFlexbox2App from './src/apps/EstilizandoFlexbox2';
import Aula9PropsApp from './src/apps/Aula9Props';
import Aula10VariaveisEstadoApp from './src/apps/Aula10VariaveisEstado';
import Aula11TextInputApp from './src/apps/Aula11TextInput';
import Aula12StackNavigationApp from './src/apps/Aula12StackNavigation';
import Aula14FuncoesHorasApp from './src/apps/Aula14FuncoesHoras';
import Aula14AppSomaDias from './src/apps/Aula14AppSomaDias';
import Aula14CalculaJurosApp from './src/apps/Aula14CalculaJuros';
import Aula14TriviaApp from './src/apps/Aula14Trivia';
import Aula14JogoVelhaApp from './src/apps/Aula14JogoVelha';
import Aula15CarrosApp from './src/apps/Aula15Carros';
import Aula15BancosApp from './src/apps/Aula15Bancos';
import Aula16ApiUfsApp from './src/apps/Aula16ApiUfs';
import Aula16ApiAssincronaApp from './src/apps/Aula16ApiAssincrona';
import Aula16ApiAssincrona2App from './src/apps/Aula16ApiAssincrona2';

const Stack = createNativeStackNavigator();

// Tela inicial com os botões para acessar cada app
function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu de Aplicativos</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Hello World" 
          onPress={() => navigation.navigate('HelloWorld')} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Queen" 
          onPress={() => navigation.navigate('Queen')} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Guerra do Amanhã" 
          onPress={() => navigation.navigate('Guerra')} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Estilo de Texto" 
          onPress={() => navigation.navigate('EstiloTexto')} 
          color="#8a2be2" // rebeccapurple
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Estilo Inline" 
          onPress={() => navigation.navigate('InlineStyle')} 
          color="#00008b" // darkblue
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: StyleSheet" 
          onPress={() => navigation.navigate('StyleSheetApp')} 
          color="#00008b" // darkblue
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Estilo Quadrado" 
          onPress={() => navigation.navigate('EstiloQuadrado')} 
          color="#4530b2" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Estilo Imagem" 
          onPress={() => navigation.navigate('EstiloImagem')} 
          color="#f6b81d" // yellow simpsons
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Margin e Padding e Padding" 
          onPress={() => navigation.navigate('EstiloMarginPadding')} 
          color="#2d1f76" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Palavra Destaque" 
          onPress={() => navigation.navigate('EstiloPalavraDestaque')} 
          color="#e06a3b" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Diferente Texto" 
          onPress={() => navigation.navigate('EstiloDiferenteTexto')} 
          color="#333" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tela Aplicativo (Lua)" 
          onPress={() => navigation.navigate('EstiloTelaAplicativo')} 
          color="#1c1c1c" 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Criação Componente" 
          onPress={() => navigation.navigate('CriacaoComponente')} 
          color="#0078d4" // Win11 blue
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Componente Topo Conteúdo" 
          onPress={() => navigation.navigate('ComponenteTopoConteudo')} 
          color="#0088cc"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Topo Conteúdo (Estilo)" 
          onPress={() => navigation.navigate('ComponenteTopoConteudoEstilo')} 
          color="#aa0000"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Topo Conteúdo (Separando)" 
          onPress={() => navigation.navigate('ComponenteTopoConteudoEstiloSeparando')} 
          color="#e60012"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Componente Import/Export" 
          onPress={() => navigation.navigate('ComponenteImportExport')} 
          color="#126e00"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Navegação Abas" 
          onPress={() => navigation.navigate('NavegacaoAbas')} 
          color="#ff00ff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Navegação Drawer" 
          onPress={() => navigation.navigate('NavegacaoDrawer')} 
          color="#8b0000"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Navegação Botões Telas" 
          onPress={() => navigation.navigate('NavegacaoButtonTelas')} 
          color="#d2b48c"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Navegação Stack" 
          onPress={() => navigation.navigate('NavegacaoStack')} 
          color="#006400"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Navegação Eventos Touch Automóveis" 
          onPress={() => navigation.navigate('NavegacaoEventoTouch')} 
          color="#cc0000"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: ScrollView 1 (Beatles)" 
          onPress={() => navigation.navigate('ScrollView1')} 
          color="#191970"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: ScrollView 2 (Fixed Header)" 
          onPress={() => navigation.navigate('ScrollView2')} 
          color="#ff4500"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: ScrollView 3 (Simpsons)" 
          onPress={() => navigation.navigate('ScrollView3')} 
          color="#FFD700"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Exemplo 1 (Fundo)" 
          onPress={() => navigation.navigate('ContainerExemplo1')} 
          color="#4682B4"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Exemplo 2 (Céu)" 
          onPress={() => navigation.navigate('ContainerExemplo2')} 
          color="#8A2BE2"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Exemplo 3 (Animais)" 
          onPress={() => navigation.navigate('ContainerExemplo3')} 
          color="#2E8B57"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Pressable" 
          onPress={() => navigation.navigate('ContainerPressable')} 
          color="#000"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Pressable 2 (Ícones)" 
          onPress={() => navigation.navigate('ContainerPressable2')} 
          color="#1E90FF"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Pressable 3 (Espaço)" 
          onPress={() => navigation.navigate('ContainerPressable3')} 
          color="#cf9556"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Container Exemplo (Xbox)" 
          onPress={() => navigation.navigate('ContainerExemplo')} 
          color="#107c10"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation 1 (Ícones)" 
          onPress={() => navigation.navigate('TabNavigationIcones1')} 
          color="#9E9E9E"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation 2 (Ícones)" 
          onPress={() => navigation.navigate('TabNavigationIcones2')} 
          color="#9E9E9E"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Abas 1" 
          onPress={() => navigation.navigate('TabNavigationIconesAbas1')} 
          color="#32CD32"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Abas 2 (Pousada)" 
          onPress={() => navigation.navigate('TabNavigationIconesAbas2')} 
          color="#bc262e"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Estilizado 1" 
          onPress={() => navigation.navigate('TabNavigationEstilizado1')} 
          color="#FF8C00"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Estilizado 2" 
          onPress={() => navigation.navigate('TabNavigationEstilizado2')} 
          color="#e07d42"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Estilizado 3 (Dr. Strange)" 
          onPress={() => navigation.navigate('TabNavigationEstilizado3')} 
          color="#013987"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Personalizando 1 (Pets)" 
          onPress={() => navigation.navigate('TabNavigationPersonalizando1')} 
          color="#4530b2"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Personalizando 2 (Pets 2)" 
          onPress={() => navigation.navigate('TabNavigationPersonalizando2')} 
          color="#ff7a00"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Personalizando 3 (Pets 3)" 
          onPress={() => navigation.navigate('TabNavigationPersonalizando3')} 
          color="#1e90ff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Personalizando 4 (Evanescence)" 
          onPress={() => navigation.navigate('TabNavigationPersonalizando4')} 
          color="#000"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Tab Navigation Personalizando 5 (Adega)" 
          onPress={() => navigation.navigate('TabNavigationPersonalizando5')} 
          color="#400303"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Estilizando Flexbox 1 (Churrasco)" 
          onPress={() => navigation.navigate('EstilizandoFlexbox1')} 
          color="#d2691e"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Estilizando Flexbox 2 (Churrasco 2)" 
          onPress={() => navigation.navigate('EstilizandoFlexbox2')} 
          color="#00a79d"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 9 (Props dos Signos)" 
          onPress={() => navigation.navigate('Aula9Props')} 
          color="#61dafb"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 10 (Sorteio e useState)" 
          onPress={() => navigation.navigate('Aula10VariaveisEstado')} 
          color="#1f4f66"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 11 (TextInput Custom Sorteio)" 
          onPress={() => navigation.navigate('Aula11TextInput')} 
          color="#0fc3d4"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 12 (Jogo da Tabuada Native-Stack)" 
          onPress={() => navigation.navigate('Aula12StackNavigation')} 
          color="#a0df52"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 14 (Funções de Horas)" 
          onPress={() => navigation.navigate('Aula14FuncoesHoras')} 
          color="#1f4f66"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 14 (Soma de Dias)" 
          onPress={() => navigation.navigate('Aula14SomaDias')} 
          color="#0fc3d4"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 14 (Cálculo de Juros - TabNavigator)" 
          onPress={() => navigation.navigate('Aula14CalculaJuros')} 
          color="#047575"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 14 (Jogo de Trivia)" 
          onPress={() => navigation.navigate('Aula14Trivia')} 
          color="#1f4f66"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 14 (Jogo da Velha)" 
          onPress={() => navigation.navigate('Aula14JogoVelha')} 
          color="#a0df52"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 15 (Lista de Carros)" 
          onPress={() => navigation.navigate('Aula15Carros')} 
          color="#257cc0"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 15 (Lista de Bancos)" 
          onPress={() => navigation.navigate('Aula15Bancos')} 
          color="#1693f4"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 16 (API UFs)" 
          onPress={() => navigation.navigate('Aula16ApiUfs')} 
          color="#2F99EB"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 16 (API Assíncrona)" 
          onPress={() => navigation.navigate('Aula16ApiAssincrona')} 
          color="#f49316"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Abrir App: Aula 16 (API Assíncrona 2)" 
          onPress={() => navigation.navigate('Aula16ApiAssincrona2')} 
          color="#d28014"
        />
      </View>

    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meus Apps' }} />
        <Stack.Screen name="HelloWorld" component={HelloWorldApp} options={{ title: 'Hello World' }} />
        <Stack.Screen name="Queen" component={QueenApp} options={{ title: 'Banda Queen' }} />
        <Stack.Screen name="Guerra" component={GuerraDoAmanhaApp} options={{ title: 'Guerra do Amanhã' }} />
        <Stack.Screen name="EstiloTexto" component={EstiloTextoApp} options={{ title: 'Estilo de Texto' }} />
        <Stack.Screen name="InlineStyle" component={InlineStyleApp} options={{ title: 'Estilo Inline' }} />
        <Stack.Screen name="StyleSheetApp" component={StyleSheetApp} options={{ title: 'StyleSheet' }} />
        <Stack.Screen name="EstiloQuadrado" component={EstiloQuadradoTextoApp} options={{ title: 'Estilo Quadrado' }} />
        <Stack.Screen name="EstiloImagem" component={EstiloImagemBordaApp} options={{ title: 'Estilo Imagem' }} />
        <Stack.Screen name="EstiloMarginPadding" component={EstiloMarginPaddingApp} options={{ title: 'Margin e Padding' }} />
        <Stack.Screen name="EstiloPalavraDestaque" component={EstiloPalavraDestaqueApp} options={{ title: 'Palavra Destaque' }} />
        <Stack.Screen name="EstiloDiferenteTexto" component={EstiloDiferenteTextoApp} options={{ title: 'Diferentes Textos' }} />
        <Stack.Screen name="EstiloTelaAplicativo" component={EstiloTelaAplicativoApp} options={{ title: 'Tela Aplicativo' }} />
        <Stack.Screen name="CriacaoComponente" component={CriacaoComponenteApp} options={{ title: 'Criação Componente' }} />
        <Stack.Screen name="ComponenteTopoConteudo" component={ComponenteTopoConteudoApp} options={{ title: 'Componente Topo Conteúdo' }} />
        <Stack.Screen name="ComponenteTopoConteudoEstilo" component={ComponenteTopoConteudoEstiloApp} options={{ title: 'Estilo (Unido)' }} />
        <Stack.Screen name="ComponenteTopoConteudoEstiloSeparando" component={ComponenteTopoConteudoApp} options={{ title: 'Estilo Separando' }} />
        <Stack.Screen name="ComponenteImportExport" component={ComponenteImportExportApp} options={{ title: 'Componente Import/Export' }} />
        <Stack.Screen name="NavegacaoAbas" component={NavegacaoAbasApp} options={{ title: 'Navegação Abas' }} />
        <Stack.Screen name="NavegacaoDrawer" component={NavegacaoDrawerApp} options={{ title: 'Navegação Drawer', headerShown: false }} />
        <Stack.Screen name="NavegacaoButtonTelas" component={NavegacaoButtonTelasApp} options={{ title: 'Navegação Botões' }} />
        <Stack.Screen name="NavegacaoStack" component={NavegacaoStackApp} options={{ title: 'Navegação Stack', headerShown: false }} />
        <Stack.Screen name="NavegacaoEventoTouch" component={NavegacaoEventoTouchApp} options={{ title: 'Navegação Toque Eventos', headerShown: false }} />
        <Stack.Screen name="ScrollView1" component={ScrollView1App} options={{ title: 'ScrollView Beatles' }} />
        <Stack.Screen name="ScrollView2" component={ScrollView2App} options={{ title: 'ScrollView 2 (Fixa)' }} />
        <Stack.Screen name="ScrollView3" component={ScrollView3App} options={{ title: 'ScrollView Simpsons' }} />
        <Stack.Screen name="ContainerExemplo1" component={ContainerExemplo1App} options={{ title: 'Container Fundo 1' }} />
        <Stack.Screen name="ContainerExemplo2" component={ContainerExemplo2App} options={{ title: 'Container Céu 2' }} />
        <Stack.Screen name="ContainerExemplo3" component={ContainerExemplo3App} options={{ title: 'Container Animais 3' }} />
        <Stack.Screen name="ContainerPressable" component={ContainerPressableApp} options={{ title: 'Pressable App', headerShown: false }} />
        <Stack.Screen name="ContainerPressable2" component={ContainerPressable2App} options={{ title: 'Pressable 2 App', headerShown: false }} />
        <Stack.Screen name="ContainerPressable3" component={ContainerPressable3App} options={{ title: 'Pressable 3 Explorador', headerShown: false }} />
        <Stack.Screen name="ContainerExemplo" component={ContainerExemploApp} options={{ title: 'Container Exemplo (Xbox)', headerShown: false }} />
        <Stack.Screen name="TabNavigationIcones1" component={TabNavigationIcones1App} options={{ title: 'Ícones App' }} />
        <Stack.Screen name="TabNavigationIcones2" component={TabNavigationIcones2App} options={{ title: 'Ícones 2 App' }} />
        <Stack.Screen name="TabNavigationIconesAbas1" component={TabNavigationIconesAbas1App} options={{ title: 'Abas App', headerShown: false }} />
        <Stack.Screen name="TabNavigationIconesAbas2" component={TabNavigationIconesAbas2App} options={{ title: 'Pousada App', headerShown: false }} />
        <Stack.Screen name="TabNavigationEstilizado1" component={TabNavigationEstilizado1App} options={{ title: 'Estilizado App', headerShown: false }} />
        <Stack.Screen name="TabNavigationEstilizado2" component={TabNavigationEstilizado2App} options={{ title: 'Estilizado 2 App', headerShown: false }} />
        <Stack.Screen name="TabNavigationEstilizado3" component={TabNavigationEstilizado3App} options={{ title: 'Dr. Strange App', headerShown: false }} />
        <Stack.Screen name="TabNavigationPersonalizando1" component={TabNavigationPersonalizando1App} options={{ title: 'Personalizando 1 App', headerShown: false }} />
        <Stack.Screen name="TabNavigationPersonalizando2" component={TabNavigationPersonalizando2App} options={{ title: 'Personalizando 2 App', headerShown: false }} />
        <Stack.Screen name="TabNavigationPersonalizando3" component={TabNavigationPersonalizando3App} options={{ title: 'Personalizando 3 App', headerShown: false }} />
        <Stack.Screen name="TabNavigationPersonalizando4" component={TabNavigationPersonalizando4App} options={{ title: 'Evanescence App', headerShown: false }} />
        <Stack.Screen name="TabNavigationPersonalizando5" component={TabNavigationPersonalizando5App} options={{ title: 'Adega App', headerShown: false }} />
        <Stack.Screen name="EstilizandoFlexbox1" component={EstilizandoFlexbox1App} options={{ title: 'Churrasco 1', headerShown: false }} />
        <Stack.Screen name="EstilizandoFlexbox2" component={EstilizandoFlexbox2App} options={{ title: 'Churrasco 2', headerShown: false }} />
        <Stack.Screen name="Aula9Props" component={Aula9PropsApp} options={{ title: 'Signos Props', headerShown: false }} />
        <Stack.Screen name="Aula10VariaveisEstado" component={Aula10VariaveisEstadoApp} options={{ title: 'Sorteio App', headerShown: false }} />
        <Stack.Screen name="Aula11TextInput" component={Aula11TextInputApp} options={{ title: 'TextInput Sorteio App', headerShown: false }} />
        <Stack.Screen name="Aula12StackNavigation" component={Aula12StackNavigationApp} options={{ title: 'Jogo da Tabuada', headerShown: false }} />
        <Stack.Screen name="Aula14FuncoesHoras" component={Aula14FuncoesHorasApp} options={{ title: 'Funções de Horas', headerShown: false }} />
        <Stack.Screen name="Aula14SomaDias" component={Aula14AppSomaDias} options={{ title: 'Soma de Dias', headerShown: false }} />
        <Stack.Screen name="Aula14CalculaJuros" component={Aula14CalculaJurosApp} options={{ title: 'Cálculo de Juros', headerShown: false }} />
        <Stack.Screen name="Aula14Trivia" component={Aula14TriviaApp} options={{ title: 'Trivia Histórica', headerShown: false }} />
        <Stack.Screen name="Aula14JogoVelha" component={Aula14JogoVelhaApp} options={{ title: 'Jogo da Velha', headerShown: false }} />
        <Stack.Screen name="Aula15Carros" component={Aula15CarrosApp} options={{ title: 'Lista de Carros', headerShown: false }} />
        <Stack.Screen name="Aula15Bancos" component={Aula15BancosApp} options={{ title: 'Lista de Bancos', headerShown: false }} />
        <Stack.Screen name="Aula16ApiUfs" component={Aula16ApiUfsApp} options={{ title: 'Requisições a API de UFs', headerShown: false }} />
        <Stack.Screen name="Aula16ApiAssincrona" component={Aula16ApiAssincronaApp} options={{ title: 'API Assíncrona', headerShown: false }} />
        <Stack.Screen name="Aula16ApiAssincrona2" component={Aula16ApiAssincrona2App} options={{ title: 'API Assíncrona 2', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '90%',
  }
});
