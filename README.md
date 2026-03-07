# AppAndroid - Coleção de Aulas React Native

Este repositório contém uma vasta coleção de mini-aplicativos desenvolvidos em **React Native** utilizando o **Expo**. Estes projetos foram construídos de forma modular como parte de uma jornada de aprendizado, estruturados cuidadosamente aula por aula.

Todos os aplicativos foram centralizados em um único projeto através de roteamento e navegação unificados no arquivo `App.js`. O projeto conta com uma interface de Menu iterativa desenvolvida do zero e responsiva, facilitando a navegação nativa ao testar cada módulo no emulador ou aparelho físico.

---

## Estrutura do Projeto

Recentemente reestruturado, o projeto agora reflete um padrão moderno de organização escalável:

- **`App.js`**: Raiz da navegação (Stack Navigation). Atua como um grande "Hub" (Menu Principal) renderizando dinamicamente os botões estilizados para abrir cada aplicativo baseado em um array de dados organizados.
- **`assets/`**: Imagens e estilos isolados. Agora subdivididos em pastas exatas de acordo com cada aula/módulo correspondente (Ex: `Aula07-TabNavigationPets/`, `Aula08-EstilizandoFlexbox/`).
- **`src/apps/`**: Onde a mágica acontece. Contém pastas semânticas separadas por Aulas cronológicas (da Aula 01 à Aula 16).
  - Dentro de cada `AulaXX-Tema/`, você encontrará pastas para cada mini-app ensinado em aula, contendo seus próprios Componentes de Tela nativos e lógicas isoladas.

---

## Aulas e Módulos Abrangidos

O repositório aborda inúmeros conceitos nativos distribuídos pelas seguintes Aulas:

- **Aula 01 a 04**: Fundamentos, renderização de textos (`<Text>`), imagens (`<Image>`), views (`<View>`), props, e a introdução contundente a Arquiteturas de Componentes, React Import/Export Padrão e Estilização inline versus `StyleSheet.create`.
- **Aula 05**: Módulo intenso sobre Navegação em Múltiplas Telas (React Navigation v6), abordando `Stack`, abas nativas (`Bottom Tabs`), e menu lateral dinâmico (`Drawer Navigation`).
- **Aula 06**: Entendimento profundo sobre Containers em telas pequenas. Renderização de enormes pedaços de UI via `ScrollView` e detecção de toques avançadas utilizando `Pressable`.
- **Aula 07**: Mais de 12 mini-apps totalmente pautados na customização estrita e avançada de navegações em Aba (Tabs), ícones vetoriais customizados, _badges_ e foco.
- **Aula 08 a 11**: Posicionamento dinâmico utilizando **Flexbox** (justifyContent, alignItems, row/column), além de conceitos estritos do React como propriedades vindas de componentes pais (Props), ciclo de vida do componente (`useEffect`), declarações de Variáveis Reactivas nativas da UI (`useState`) e recepção de dados (`TextInput`).
- **Aula 12 a 15**: Complexidade Lógica. Criação de jogos e fluxos de telas dependentes de dados dinâmicos como _Jogo da Tabuada_ e manipulação manual da classe `Date()` para um somador de dias. Aborda complexidade em lidar com mapas de arrays estruturados (`.map()`) em tela.
- **Aula 16**: O "Grande Passo" assíncrono. Consumo na prática de APIs REST Externas, manipulação de _Promises_ com a biblioteca `axios`, uso da função assíncrona para buscar Listas de UFs reais no banco de dados e validação de `Spinners / Loadings` fluídos na tela com Hooks de estado de carregamento global.

---

## Tecnologias Utilizadas

Este projeto engloba o ecosistema moderno completo do ecossistema React Native:

- **React Native** (React 18, Componentização, React Hooks)
- **Expo SDK** (Metro Bundler local e ecossistema unificado)
- **React Navigation v6** (`native`, `native-stack`, `bottom-tabs`, `drawer`)
- **React Native Gesture Handler** (Gestos nativos)
- **Axios** (Consultas HTTP REST APIs)
- **Expo Status Bar / Safe Area Context**

---

## Como Executar Localmente

Para rodar o projeto na sua máquina, siga os passos abaixo:

1. Certifique-se de possuir o **Node.js** instalado no seu computador.
2. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/AppAndroid.git
   ```
3. Acesse a pasta do projeto:
   ```bash
   cd AppAndroid
   ```
4. Instale as dependências executando:
   ```bash
   npm install
   ```
5. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
6. Abra o aplicativo no seu dispositivo físico utilizando o app **Expo Go** (para Android ou iOS) escaneando o QR Code no terminal. Alternativamente, pressione `a` no terminal para rodar em um Emulador Android, ou `i` para o Simulador do iOS.
