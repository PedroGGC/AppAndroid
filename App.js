import "react-native-gesture-handler";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// ===== Aula 1 - Introdução =====
import HelloWorldApp from "./src/apps/Aula01-Introducao/meuprojeto";

// ===== Aula 2 - Exibição de Imagens =====
import ExibirImagemApp from "./src/apps/Aula02-ExibicaoImagens/exibirimagemapp";
import QueenApp from "./src/apps/Aula02-ExibicaoImagens/exibirimagemtextoapp";
import GuerraDoAmanhaApp from "./src/apps/Aula02-ExibicaoImagens/exibirimagemlocaltext";

// ===== Aula 3 - Estilização Básica =====
import EstiloTextoApp from "./src/apps/Aula03-EstilizacaoBasica/estilotexto";
import InlineStyleApp from "./src/apps/Aula03-EstilizacaoBasica/estiloinline";
import StyleSheetApp from "./src/apps/Aula03-EstilizacaoBasica/estilostylesheet";
import EstiloQuadradoTextoApp from "./src/apps/Aula03-EstilizacaoBasica/estiloquadradotexto";
import EstiloImagemBordaApp from "./src/apps/Aula03-EstilizacaoBasica/estiloimagemborda";
import EstiloMarginPaddingApp from "./src/apps/Aula03-EstilizacaoBasica/estilomargimpadding";
import EstiloPalavraDestaqueApp from "./src/apps/Aula03-EstilizacaoBasica/estilopalavradestaque";
import EstiloDiferenteTextoApp from "./src/apps/Aula03-EstilizacaoBasica/estilodiferentetexto";
import EstiloTelaAplicativoApp from "./src/apps/Aula03-EstilizacaoBasica/estilotelaaplicativo";

// ===== Aula 4 - Criando Componente =====
import CriacaoComponenteApp from "./src/apps/Aula04-CriandoComponente/criacaocomponente";
import ComponenteTopoConteudoApp from "./src/apps/Aula04-CriandoComponente/componente-topo-conteudo";
import ComponenteTopoConteudoEstiloApp from "./src/apps/Aula04-CriandoComponente/componente-topo-conteudo-estilo";
import ComponenteImportExportApp from "./src/apps/Aula04-CriandoComponente/componente-import-export";

// ===== Aula 5 - Navegação =====
import NavegacaoAbasApp from "./src/apps/Aula05-Navegacao/navegacao-abas";
import NavegacaoDrawerApp from "./src/apps/Aula05-Navegacao/navegacao-drawer";
import NavegacaoButtonTelasApp from "./src/apps/Aula05-Navegacao/navegacao-button-telas";
import NavegacaoStackApp from "./src/apps/Aula05-Navegacao/navegacao-stack";
import NavegacaoEventoTouchApp from "./src/apps/Aula05-Navegacao/navegacao-evento-touch";

// ===== Aula 6 - Containers =====
import ScrollView1App from "./src/apps/Aula06-Containers/scrollview1";
import ScrollView2App from "./src/apps/Aula06-Containers/scrollview2";
import ScrollView3App from "./src/apps/Aula06-Containers/scrollview3";
import ContainerExemplo1App from "./src/apps/Aula06-Containers/container-exemplo1";
import ContainerExemplo2App from "./src/apps/Aula06-Containers/container-exemplo2";
import ContainerExemplo3App from "./src/apps/Aula06-Containers/container-exemplo3";
import ContainerPressableApp from "./src/apps/Aula06-Containers/container-pressable";
import ContainerPressable2App from "./src/apps/Aula06-Containers/container-pressable2";
import ContainerPressable3App from "./src/apps/Aula06-Containers/container-pressable3";
import ContainerExemploApp from "./src/apps/Aula06-Containers/container-exemplo";

// ===== Aula 7 - Tab Navigation =====
import TabNavigationIcones1App from "./src/apps/Aula07-TabNavigation/tabnavigation-icones1";
import TabNavigationIcones2App from "./src/apps/Aula07-TabNavigation/tabnavigation-icones2";
import TabNavigationIconesAbas1App from "./src/apps/Aula07-TabNavigation/tabnavigation-icones-abas1";
import TabNavigationIconesAbas2App from "./src/apps/Aula07-TabNavigation/tabnavigation-icones-abas2";
import TabNavigationEstilizado1App from "./src/apps/Aula07-TabNavigation/tabnavigation-estilizado1";
import TabNavigationEstilizado2App from "./src/apps/Aula07-TabNavigation/tabnavigation-estilizado2";
import TabNavigationEstilizado3App from "./src/apps/Aula07-TabNavigation/tabnavigation-estilizado3";
import TabNavigationPersonalizando1App from "./src/apps/Aula07-TabNavigation/tabnavigation-personalizando1";
import TabNavigationPersonalizando2App from "./src/apps/Aula07-TabNavigation/tabnavigation-personalizando2";
import TabNavigationPersonalizando3App from "./src/apps/Aula07-TabNavigation/tabnavigation-personalizando3";
import TabNavigationPersonalizando4App from "./src/apps/Aula07-TabNavigation/tabnavigation-personalizando4";
import TabNavigationPersonalizando5App from "./src/apps/Aula07-TabNavigation/tabnavigation-personalizando5";

// ===== Aula 8 - Estilizando com Flexbox =====
import EstilizandoFlexbox1App from "./src/apps/Aula08-Flexbox/estilizando-flexbox1";
import EstilizandoFlexbox2App from "./src/apps/Aula08-Flexbox/estilizando-flexbox2";

// ===== Aula 9 - Props =====
import Aula9PropsApp from "./src/apps/Aula09-Props/props";

// ===== Aula 10 - Variáveis de Estado =====
import Aula10VariaveisEstadoApp from "./src/apps/Aula10-VariaveisEstado/variaveis-estado";

// ===== Aula 11 - Componente TextInput =====
import Aula11TextInputApp from "./src/apps/Aula11-TextInput/textinput";

// ===== Aula 12 - Stack Navigation =====
import Aula12StackNavigationApp from "./src/apps/Aula12-StackNavigation/stack-navigation";

// ===== Aula 14 - Modal =====
import Aula14FuncoesHorasApp from "./src/apps/Aula14-Modal/funcoes-horas";
import Aula14AppSomaDias from "./src/apps/Aula14-Modal/app-soma-dias";
import Aula14CalculaJurosApp from "./src/apps/Aula14-Modal/calcula-juros";
import Aula14TriviaApp from "./src/apps/Aula14-Modal/trivia";
import Aula14JogoVelhaApp from "./src/apps/Aula14-Modal/jogo-velha";

// ===== Aula 15 - Coleção de Dados =====
import Aula15CarrosApp from "./src/apps/Aula15-ColecaoDados/carros";
import Aula15BancosApp from "./src/apps/Aula15-ColecaoDados/bancos";

// ===== Aula 16 - Consumo de API =====
import Aula16ApiUfsApp from "./src/apps/Aula16-ConsumoAPI/api-ufs";
import Aula16ApiAssincronaApp from "./src/apps/Aula16-ConsumoAPI/api-assincrona";
import Aula16ApiAssincrona2App from "./src/apps/Aula16-ConsumoAPI/api-assincrona2";

const Stack = createNativeStackNavigator();

const AULAS = [
  {
    title: "Aula 1 - Introdução",
    apps: [{ id: "HelloWorld", title: "Hello World", color: "#6A5ACD" }],
  },
  {
    title: "Aula 2 - Exibição de Imagens",
    apps: [
      { id: "ExibirImagem", title: "Exibir Imagem", color: "#2E8B57" },
      { id: "Queen", title: "Banda Queen", color: "#8A2BE2" },
      { id: "Guerra", title: "Guerra do Amanhã", color: "#B22222" },
    ],
  },
  {
    title: "Aula 3 - Estilização Básica",
    apps: [
      { id: "EstiloTexto", title: "Estilo de Texto", color: "#8a2be2" },
      { id: "InlineStyle", title: "Estilo Inline", color: "#00008b" },
      { id: "StyleSheetApp", title: "StyleSheet", color: "#00008b" },
      { id: "EstiloQuadrado", title: "Estilo Quadrado", color: "#4530b2" },
      { id: "EstiloImagem", title: "Estilo Imagem", color: "#f6b81d" },
      {
        id: "EstiloMarginPadding",
        title: "Margin e Padding",
        color: "#2d1f76",
      },
      {
        id: "EstiloPalavraDestaque",
        title: "Palavra Destaque",
        color: "#e06a3b",
      },
      { id: "EstiloDiferenteTexto", title: "Diferente Texto", color: "#333" },
      {
        id: "EstiloTelaAplicativo",
        title: "Tela Aplicativo (Lua)",
        color: "#1c1c1c",
      },
    ],
  },
  {
    title: "Aula 4 - Criando Componente",
    apps: [
      {
        id: "CriacaoComponente",
        title: "Criação Componente",
        color: "#0078d4",
      },
      {
        id: "ComponenteTopoConteudo",
        title: "Topo Conteúdo",
        color: "#0088cc",
      },
      {
        id: "ComponenteTopoConteudoEstilo",
        title: "Topo Conteúdo (Estilo)",
        color: "#aa0000",
      },
      {
        id: "ComponenteTopoConteudoEstiloSeparando",
        title: "Topo Conteúdo (Sep)",
        color: "#e60012",
      },
      {
        id: "ComponenteImportExport",
        title: "Import/Export",
        color: "#126e00",
      },
    ],
  },
  {
    title: "Aula 5 - Navegação",
    apps: [
      { id: "NavegacaoAbas", title: "Navegação Abas", color: "#ff00ff" },
      { id: "NavegacaoDrawer", title: "Navegação Drawer", color: "#8b0000" },
      {
        id: "NavegacaoButtonTelas",
        title: "Navegação Botões Telas",
        color: "#d2b48c",
      },
      { id: "NavegacaoStack", title: "Navegação Stack", color: "#006400" },
      {
        id: "NavegacaoEventoTouch",
        title: "Navegação Touch",
        color: "#cc0000",
      },
    ],
  },
  {
    title: "Aula 6 - Containers",
    apps: [
      { id: "ScrollView1", title: "ScrollView 1 (Beatles)", color: "#191970" },
      { id: "ScrollView2", title: "ScrollView 2 (Fixa)", color: "#ff4500" },
      { id: "ScrollView3", title: "ScrollView 3 (Simpsons)", color: "#FFD700" },
      {
        id: "ContainerExemplo1",
        title: "Container Exemplo 1",
        color: "#4682B4",
      },
      {
        id: "ContainerExemplo2",
        title: "Container Exemplo 2",
        color: "#8A2BE2",
      },
      {
        id: "ContainerExemplo3",
        title: "Container Exemplo 3",
        color: "#2E8B57",
      },
      {
        id: "ContainerPressable",
        title: "Container Pressable",
        color: "#333333",
      },
      {
        id: "ContainerPressable2",
        title: "Container Pressable 2",
        color: "#1E90FF",
      },
      {
        id: "ContainerPressable3",
        title: "Container Pressable 3",
        color: "#cf9556",
      },
      {
        id: "ContainerExemplo",
        title: "Container Exemplo (Xbox)",
        color: "#107c10",
      },
    ],
  },
  {
    title: "Aula 7 - Tab Navigation",
    apps: [
      {
        id: "TabNavigationIcones1",
        title: "Tab Nav Ícones 1",
        color: "#9E9E9E",
      },
      {
        id: "TabNavigationIcones2",
        title: "Tab Nav Ícones 2",
        color: "#9E9E9E",
      },
      {
        id: "TabNavigationIconesAbas1",
        title: "Tab Nav Abas 1",
        color: "#32CD32",
      },
      {
        id: "TabNavigationIconesAbas2",
        title: "Tab Nav Abas 2 (Pousada)",
        color: "#bc262e",
      },
      {
        id: "TabNavigationEstilizado1",
        title: "Tab Nav Estilizado 1",
        color: "#FF8C00",
      },
      {
        id: "TabNavigationEstilizado2",
        title: "Tab Nav Estilizado 2",
        color: "#e07d42",
      },
      {
        id: "TabNavigationEstilizado3",
        title: "Tab Nav Estilizado 3",
        color: "#013987",
      },
      {
        id: "TabNavigationPersonalizando1",
        title: "Tab Nav Pers 1 (Pets)",
        color: "#4530b2",
      },
      {
        id: "TabNavigationPersonalizando2",
        title: "Tab Nav Pers 2 (Pets)",
        color: "#ff7a00",
      },
      {
        id: "TabNavigationPersonalizando3",
        title: "Tab Nav Pers 3 (Pets)",
        color: "#1e90ff",
      },
      {
        id: "TabNavigationPersonalizando4",
        title: "Tab Nav Pers 4 (Evan)",
        color: "#000",
      },
      {
        id: "TabNavigationPersonalizando5",
        title: "Tab Nav Pers 5 (Adega)",
        color: "#400303",
      },
    ],
  },
  {
    title: "Aula 8 - Estilizando com Flexbox",
    apps: [
      {
        id: "EstilizandoFlexbox1",
        title: "Flexbox 1 (Churrasco)",
        color: "#d2691e",
      },
      {
        id: "EstilizandoFlexbox2",
        title: "Flexbox 2 (Churrasco 2)",
        color: "#00a79d",
      },
    ],
  },
  {
    title: "Aula 9 - Props",
    apps: [{ id: "Aula9Props", title: "Props dos Signos", color: "#61dafb" }],
  },
  {
    title: "Aula 10 - Variáveis de Estado",
    apps: [
      {
        id: "Aula10VariaveisEstado",
        title: "Sorteio e useState",
        color: "#1f4f66",
      },
    ],
  },
  {
    title: "Aula 11 - Componente TextInput",
    apps: [
      {
        id: "Aula11TextInput",
        title: "TextInput Custom Sorteio",
        color: "#0fc3d4",
      },
    ],
  },
  {
    title: "Aula 12 - Stack Navigation",
    apps: [
      {
        id: "Aula12StackNavigation",
        title: "Jogo da Tabuada Native-Stack",
        color: "#a0df52",
      },
    ],
  },
  {
    title: "Aula 14 - Modal",
    apps: [
      { id: "Aula14FuncoesHoras", title: "Funções de Horas", color: "#1f4f66" },
      { id: "Aula14SomaDias", title: "Soma de Dias", color: "#0fc3d4" },
      {
        id: "Aula14CalculaJuros",
        title: "Cálculo de Juros - TabNav",
        color: "#047575",
      },
      { id: "Aula14Trivia", title: "Jogo de Trivia", color: "#1f4f66" },
      { id: "Aula14JogoVelha", title: "Jogo da Velha", color: "#a0df52" },
    ],
  },
  {
    title: "Aula 15 - Coleção de Dados",
    apps: [
      { id: "Aula15Carros", title: "Lista de Carros", color: "#257cc0" },
      { id: "Aula15Bancos", title: "Lista de Bancos", color: "#1693f4" },
    ],
  },
  {
    title: "Aula 16 - Consumo de API",
    apps: [
      {
        id: "Aula16ApiUfs",
        title: "Requisições a API de UFs",
        color: "#2F99EB",
      },
      { id: "Aula16ApiAssincrona", title: "API Assíncrona", color: "#f49316" },
      {
        id: "Aula16ApiAssincrona2",
        title: "API Assíncrona 2",
        color: "#d28014",
      },
    ],
  },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#6200ea" />

      {/* HEADER PRINCIPAL */}
      <View style={styles.headerArea}>
        <Text style={styles.mainTitle}>Repositório de Aulas</Text>
        <Text style={styles.mainSubtitle}>
          Selecione um projeto para visualizar
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {AULAS.map((aula, index) => (
          <View key={index} style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionPill}>
                <Text style={styles.sectionTitleText}>{aula.title}</Text>
              </View>
            </View>

            <View style={styles.appList}>
              {aula.apps.map((app) => (
                <TouchableOpacity
                  key={app.id}
                  style={styles.appButton}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate(app.id)}
                >
                  {/* Textos */}
                  <View style={styles.appInfo}>
                    <Text style={styles.appName} numberOfLines={1}>
                      {app.title}
                    </Text>
                    <Text style={[styles.appTopic, { color: app.color }]}>
                      Abrir app
                    </Text>
                  </View>

                  {/* Chevronzinho / Seta */}
                  <View style={styles.chevronBox}>
                    <Text style={styles.chevron}>›</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ea" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* HOMESCREEN AGORA ESCONDE O HEADER PADRÃO (o nosso custom já brilha) */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* === TELAS === */}
        {/* Aula 1 */}
        <Stack.Screen
          name="HelloWorld"
          component={HelloWorldApp}
          options={{ title: "Hello World" }}
        />
        {/* Aula 2 */}
        <Stack.Screen
          name="ExibirImagem"
          component={ExibirImagemApp}
          options={{ title: "Exibir Imagem" }}
        />
        <Stack.Screen
          name="Queen"
          component={QueenApp}
          options={{ title: "Banda Queen" }}
        />
        <Stack.Screen
          name="Guerra"
          component={GuerraDoAmanhaApp}
          options={{ title: "Guerra do Amanhã" }}
        />
        {/* Aula 3 */}
        <Stack.Screen
          name="EstiloTexto"
          component={EstiloTextoApp}
          options={{ title: "Estilo de Texto" }}
        />
        <Stack.Screen
          name="InlineStyle"
          component={InlineStyleApp}
          options={{ title: "Estilo Inline" }}
        />
        <Stack.Screen
          name="StyleSheetApp"
          component={StyleSheetApp}
          options={{ title: "StyleSheet" }}
        />
        <Stack.Screen
          name="EstiloQuadrado"
          component={EstiloQuadradoTextoApp}
          options={{ title: "Estilo Quadrado" }}
        />
        <Stack.Screen
          name="EstiloImagem"
          component={EstiloImagemBordaApp}
          options={{ title: "Estilo Imagem" }}
        />
        <Stack.Screen
          name="EstiloMarginPadding"
          component={EstiloMarginPaddingApp}
          options={{ title: "Margin e Padding" }}
        />
        <Stack.Screen
          name="EstiloPalavraDestaque"
          component={EstiloPalavraDestaqueApp}
          options={{ title: "Palavra Destaque" }}
        />
        <Stack.Screen
          name="EstiloDiferenteTexto"
          component={EstiloDiferenteTextoApp}
          options={{ title: "Diferentes Textos" }}
        />
        <Stack.Screen
          name="EstiloTelaAplicativo"
          component={EstiloTelaAplicativoApp}
          options={{ title: "Tela Aplicativo" }}
        />
        {/* Aula 4 */}
        <Stack.Screen
          name="CriacaoComponente"
          component={CriacaoComponenteApp}
          options={{ title: "Criação Componente" }}
        />
        <Stack.Screen
          name="ComponenteTopoConteudo"
          component={ComponenteTopoConteudoApp}
          options={{ title: "Componente Topo Conteúdo" }}
        />
        <Stack.Screen
          name="ComponenteTopoConteudoEstilo"
          component={ComponenteTopoConteudoEstiloApp}
          options={{ title: "Estilo (Unido)" }}
        />
        <Stack.Screen
          name="ComponenteTopoConteudoEstiloSeparando"
          component={ComponenteTopoConteudoApp}
          options={{ title: "Estilo Separando" }}
        />
        <Stack.Screen
          name="ComponenteImportExport"
          component={ComponenteImportExportApp}
          options={{ title: "Componente Import/Export" }}
        />
        {/* Aula 5 */}
        <Stack.Screen
          name="NavegacaoAbas"
          component={NavegacaoAbasApp}
          options={{ title: "Navegação Abas" }}
        />
        <Stack.Screen
          name="NavegacaoDrawer"
          component={NavegacaoDrawerApp}
          options={{ title: "Navegação Drawer", headerShown: false }}
        />
        <Stack.Screen
          name="NavegacaoButtonTelas"
          component={NavegacaoButtonTelasApp}
          options={{ title: "Navegação Botões" }}
        />
        <Stack.Screen
          name="NavegacaoStack"
          component={NavegacaoStackApp}
          options={{ title: "Navegação Stack", headerShown: false }}
        />
        <Stack.Screen
          name="NavegacaoEventoTouch"
          component={NavegacaoEventoTouchApp}
          options={{ title: "Navegação Toque Eventos", headerShown: false }}
        />
        {/* Aula 6 */}
        <Stack.Screen
          name="ScrollView1"
          component={ScrollView1App}
          options={{ title: "ScrollView Beatles" }}
        />
        <Stack.Screen
          name="ScrollView2"
          component={ScrollView2App}
          options={{ title: "ScrollView 2 (Fixa)" }}
        />
        <Stack.Screen
          name="ScrollView3"
          component={ScrollView3App}
          options={{ title: "ScrollView Simpsons" }}
        />
        <Stack.Screen
          name="ContainerExemplo1"
          component={ContainerExemplo1App}
          options={{ title: "Container Fundo 1" }}
        />
        <Stack.Screen
          name="ContainerExemplo2"
          component={ContainerExemplo2App}
          options={{ title: "Container Céu 2" }}
        />
        <Stack.Screen
          name="ContainerExemplo3"
          component={ContainerExemplo3App}
          options={{ title: "Container Animais 3" }}
        />
        <Stack.Screen
          name="ContainerPressable"
          component={ContainerPressableApp}
          options={{ title: "Pressable App", headerShown: false }}
        />
        <Stack.Screen
          name="ContainerPressable2"
          component={ContainerPressable2App}
          options={{ title: "Pressable 2 App", headerShown: false }}
        />
        <Stack.Screen
          name="ContainerPressable3"
          component={ContainerPressable3App}
          options={{ title: "Pressable 3 Explorador", headerShown: false }}
        />
        <Stack.Screen
          name="ContainerExemplo"
          component={ContainerExemploApp}
          options={{ title: "Container Exemplo (Xbox)", headerShown: false }}
        />
        {/* Aula 7 */}
        <Stack.Screen
          name="TabNavigationIcones1"
          component={TabNavigationIcones1App}
          options={{ title: "Ícones App" }}
        />
        <Stack.Screen
          name="TabNavigationIcones2"
          component={TabNavigationIcones2App}
          options={{ title: "Ícones 2 App" }}
        />
        <Stack.Screen
          name="TabNavigationIconesAbas1"
          component={TabNavigationIconesAbas1App}
          options={{ title: "Abas App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationIconesAbas2"
          component={TabNavigationIconesAbas2App}
          options={{ title: "Pousada App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationEstilizado1"
          component={TabNavigationEstilizado1App}
          options={{ title: "Estilizado App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationEstilizado2"
          component={TabNavigationEstilizado2App}
          options={{ title: "Estilizado 2 App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationEstilizado3"
          component={TabNavigationEstilizado3App}
          options={{ title: "Dr. Strange App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationPersonalizando1"
          component={TabNavigationPersonalizando1App}
          options={{ title: "Personalizando 1 App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationPersonalizando2"
          component={TabNavigationPersonalizando2App}
          options={{ title: "Personalizando 2 App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationPersonalizando3"
          component={TabNavigationPersonalizando3App}
          options={{ title: "Personalizando 3 App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationPersonalizando4"
          component={TabNavigationPersonalizando4App}
          options={{ title: "Evanescence App", headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigationPersonalizando5"
          component={TabNavigationPersonalizando5App}
          options={{ title: "Adega App", headerShown: false }}
        />
        {/* Aula 8 */}
        <Stack.Screen
          name="EstilizandoFlexbox1"
          component={EstilizandoFlexbox1App}
          options={{ title: "Churrasco 1", headerShown: false }}
        />
        <Stack.Screen
          name="EstilizandoFlexbox2"
          component={EstilizandoFlexbox2App}
          options={{ title: "Churrasco 2", headerShown: false }}
        />
        {/* Aula 9 */}
        <Stack.Screen
          name="Aula9Props"
          component={Aula9PropsApp}
          options={{ title: "Signos Props", headerShown: false }}
        />
        {/* Aula 10 */}
        <Stack.Screen
          name="Aula10VariaveisEstado"
          component={Aula10VariaveisEstadoApp}
          options={{ title: "Sorteio App", headerShown: false }}
        />
        {/* Aula 11 */}
        <Stack.Screen
          name="Aula11TextInput"
          component={Aula11TextInputApp}
          options={{ title: "TextInput Sorteio App", headerShown: false }}
        />
        {/* Aula 12 */}
        <Stack.Screen
          name="Aula12StackNavigation"
          component={Aula12StackNavigationApp}
          options={{ title: "Jogo da Tabuada", headerShown: false }}
        />
        {/* Aula 14 */}
        <Stack.Screen
          name="Aula14FuncoesHoras"
          component={Aula14FuncoesHorasApp}
          options={{ title: "Funções de Horas", headerShown: false }}
        />
        <Stack.Screen
          name="Aula14SomaDias"
          component={Aula14AppSomaDias}
          options={{ title: "Soma de Dias", headerShown: false }}
        />
        <Stack.Screen
          name="Aula14CalculaJuros"
          component={Aula14CalculaJurosApp}
          options={{ title: "Cálculo de Juros", headerShown: false }}
        />
        <Stack.Screen
          name="Aula14Trivia"
          component={Aula14TriviaApp}
          options={{ title: "Trivia Histórica", headerShown: false }}
        />
        <Stack.Screen
          name="Aula14JogoVelha"
          component={Aula14JogoVelhaApp}
          options={{ title: "Jogo da Velha", headerShown: false }}
        />
        {/* Aula 15 */}
        <Stack.Screen
          name="Aula15Carros"
          component={Aula15CarrosApp}
          options={{ title: "Lista de Carros", headerShown: false }}
        />
        <Stack.Screen
          name="Aula15Bancos"
          component={Aula15BancosApp}
          options={{ title: "Lista de Bancos", headerShown: false }}
        />
        {/* Aula 16 */}
        <Stack.Screen
          name="Aula16ApiUfs"
          component={Aula16ApiUfsApp}
          options={{ title: "Requisições a API de UFs", headerShown: false }}
        />
        <Stack.Screen
          name="Aula16ApiAssincrona"
          component={Aula16ApiAssincronaApp}
          options={{ title: "API Assíncrona", headerShown: false }}
        />
        <Stack.Screen
          name="Aula16ApiAssincrona2"
          component={Aula16ApiAssincrona2App}
          options={{ title: "API Assíncrona 2", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f7fa",
  },
  headerArea: {
    backgroundColor: "#6200ea",
    paddingTop: Platform.OS === "android" ? 50 : 20,
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    zIndex: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
  mainSubtitle: {
    fontSize: 16,
    color: "#d1b3ff",
    marginTop: 5,
    fontWeight: "500",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 50,
  },
  sectionCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginBottom: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionHeader: {
    marginBottom: 15,
    flexDirection: "row",
  },
  sectionPill: {
    backgroundColor: "#f0f0f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  sectionTitleText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6200ea",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  appList: {
    flexDirection: "column",
    gap: 12, // React Native >= 0.71 supporta Flexbox gap
  },
  appButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f0f0f5",
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  iconEmoji: {
    fontSize: 24,
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 2,
  },
  appTopic: {
    fontSize: 13,
    fontWeight: "500",
  },
  chevronBox: {
    width: 30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  chevron: {
    fontSize: 24,
    color: "#b2bec3",
    fontWeight: "300",
  },
});
