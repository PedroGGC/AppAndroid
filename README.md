# AppAndroid - React Native Apps Collection 

Este repositório contém uma coleção massiva de mini-aplicativos desenvolvidos em **React Native** utilizando o **Expo**. Estes projetos foram construídos como parte de uma jornada de aprendizado contínuo, cobrindo desde os fundamentos básicos do React Native até o consumo de APIs externas de forma assíncrona.

Ao invés de criar múltiplos repositórios separados, todos os aplicativos foram orquestrados em um único projeto modular `AppAndroid` utilizando a Stack Navigation nativa do React Navigation.

##  Estrutura e Aplicativos (Aulas)

O projeto raiz possui um menu principal no `App.js` que engloba o acesso aos seguintes projetos:

- **Aula 12 - Stack Navigation**: Uma Tabuada interativa simples que ensina os conceitos de navegação em pilha (`@react-navigation/native-stack`), passagem de rotas e verificação de respostas (telas de Resposta Correta e Errada).
- **Aula 13 - Deploy**: Repositório isolado testado no EAS Build (`eas build -p android`) responsável por gerar os instaladores `.aab` e `.apk` nativos sem depender do Expo Go para produção.
- **Aula 14 (Funções de Horas)**: App simples para extração e manipulação de datas e horas instanciadas em tempo de execução via Javascript.
- **Aula 14 (Soma de Dias)**: Calculadora intuitiva que permite aos usuários adicionar dias a uma data e retornar no formato DD/MM/AAAA usando manipulação do objeto Date nativo.
- **Aula 14 (Cálculo de Juros)**: Aplicação financeira para simulação de juros dividida com uso criativo do `@react-navigation/bottom-tabs` para separar as telas de simulação e resultado.
- **Aula 14 (Trivia Histórica)**: Um jogo imersivo simulando conhecimentos gerais. Testa as validações de input em tela através de estilos dinâmicos baseados no acerto ou erro do jogador consultando dados locais simulados (`fatos.js`).
- **Aula 14 (Jogo da Velha)**: Recriação do clássico _Tic-Tac-Toe_. Apresenta lógica complexa separada de array maps para testar vitórias em retas (diagonais, verticais e horizontais) mapeadas em um arquivo robusto `logica.js`.
- **Aula 15 (Lista de Carros)**: Dashboard ensinando como renderizar e iterar Arrays usando `.map()`. Permite que o usuário clique em botões engessados (Fiat, GM, Ford) para manipular a State e filtrar a ScrollView.
- **Aula 15 (Lista de Bancos)**: Uma evolução da aula anterior mapeando e exibindo uma base gigante de bancos (`bancos.js`). Usa `TextInput` para filtro de buscas via String assíncrono que digerem dinamicamente os nomes dos bancos retornando a resposta instantânea em tela.
- **Aula 16 (API UFs)**: O grande passo na rede! A aplicação integra a biblioteca estendida `axios` para requisitar Assincronamente a API externa de Unidades Federativas (UFs) da DevMedia validando retornos JSON no console e controlando os spinners de tela com hooks customizados ( `setIsLoading` ) em conjunto com as tags `<ActivityIndicator />`.
- **Aula 16 (API Assíncrona 1 e 2)**: Projetos secundários em Single Page para comprovação de fluxo lógico em assincronicidade com o Event Loop nativo do Javascript. Uso da View protetora contra notches `SafeAreaView`.

##  Tecnologias Utilizadas

Este projeto engloba o ecossistema moderno completo do React Native:

- **React Native** (`useState`, `useEffect`, `ScrollView`, Componentização)
- **Expo SDK** (EAS CLI & Expo Go Dev)
- **React Navigation v6** (`native`, `native-stack`, `bottom-tabs`)
- **Axios** (Consultas Assíncronas HTTP REST)
- Extenso uso do Flexbox Styling para estilização agnóstica entre Android/iOS.

##  Como Executar

1. Tenha o `Node.js` e o `npm` (ou yarn) instalados.
2. Clone o repositório ou navegue até o diretório raiz.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o Metro Bundler do CLI do Expo:
   ```bash
   npx expo start
   ```
5. No seu celular, acesse usando o App do **Expo Go** escaneando o QR Code (ou digite _a_ para abrir em um emulador Android / _i_ para iOS).

---


