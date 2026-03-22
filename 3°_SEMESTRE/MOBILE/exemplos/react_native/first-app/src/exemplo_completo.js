import React from 'react';
// 1. Importação de componentes nativos (View, Text, Image...)
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Alert 
} from 'react-native';

// 2. Componente Funcional com nome iniciando em MAIÚSCULA
// 3. Uso de export para permitir acesso por outros arquivos
export default function AppCompleto() {

  // 4. Lógica de negócio definida ANTES do return
  const nomeEscola = "SENAI Ítalo Bologna";
  const usuarioLogado = true;
  const anoAtual = 2024;
  const tecnologias = ["JSX", "Flexbox", "StyleSheet", "Components"];

  return (
    // Regra JSX 1: Retorno de um ÚNICO elemento pai (ScrollView ou View)
    <ScrollView style={styles.background}>
      <View style={styles.container}>

        {/* Expressão JS em JSX: Variável e Template String */}
        <Text style={styles.titulo}>{`Bem-vindo ao app ${nomeEscola}`}</Text>

        {/* Expressão JS: Operação matemática */}
        <Text style={styles.info}>Versão do sistema: {2000 + 24}</Text>

        {/* Regra JSX 2: Tags auto-fechadas (Self-closing) */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
        />

        <TextInput
          placeholder="Digite sua dúvida aqui..."
          style={styles.input}
        />

        {/* Renderização Condicional: Operador && (mostrar se verdadeiro) */}
        {usuarioLogado && (
          <Text style={styles.status}>Usuário Autenticado ✅</Text>
        )}

        {/* Renderização Condicional: Operador Ternário (escolha entre dois) */}
        <Text style={styles.acesso}>
          Nível de Acesso: {usuarioLogado ? "Administrador" : "Visitante"}
        </Text>

        {/* Flexbox: flexDirection 'row' para alinhar em linha */}
        <View style={styles.secaoCores}>
          {/* Múltiplos Estilos (Array): o último sobrescreve conflitos */}
          {/* alignSelf: elemento individual ignora a regra do pai */}
          <View style={[styles.caixa, styles.caixaRed, { alignSelf: 'flex-start' }]} />
          <View style={[styles.caixa, styles.caixaBlue, { alignSelf: 'center' }]} />
          <View style={[styles.caixa, styles.caixaGreen, { alignSelf: 'flex-end' }]} />
        </View>

        {/* Renderização de Listas usando .map() */}
        <View style={styles.listaContainer}>
          <Text style={styles.subtitulo}>Tópicos da Aula:</Text>
          {tecnologias.map((item, indice) => (
            // Uso obrigatório de key para itens de lista
            <Text key={indice} style={styles.itemLista}>
              {indice + 1}. {item}
            </Text>
          ))}
        </View>

        {/* Componente interativo com função de Alert */}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => Alert.alert('Mensagem', 'Desenvolvimento Híbrido com React Native!')}
        >
          <Text style={styles.textoBotao}>Confirmar Leitura</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

// 5. StyleSheet: Estilos como objetos JS e propriedades em camelCase
const styles = StyleSheet.create({
  background: {
    flex: 1, // Flex como proporção de espaço (fatia de pizza)
    backgroundColor: '#F0F0F0', // camelCase no lugar de background-color
  },
  container: {
    padding: 20,
    // Alinhamento no Eixo Transversal (Cross Axis)
    alignItems: 'center', 
    // Distribuição no Eixo Principal (Main Axis)
    justifyContent: 'flex-start', 
  },
  titulo: {
    fontSize: 22, // camelCase no lugar de font-size
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
    marginVertical: 15,
  },
  info: {
    fontSize: 14,
    color: '#666',
  },
  logo: {
    width: 60,
    height: 60,
    marginVertical: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5, // camelCase no lugar de border-radius
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  status: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'green',
  },
  acesso: {
    fontStyle: 'italic',
    marginBottom: 20,
  },
  secaoCores: {
    flexDirection: 'row', // Altera o eixo principal para horizontal
    width: '100%',
    height: 100,
    backgroundColor: '#DDD',
    justifyContent: 'space-around', // Distribui espaço entre os itens
    padding: 10,
  },
  caixa: {
    width: 30,
    height: 30,
  },
  caixaRed: { backgroundColor: 'red' },
  caixaBlue: { backgroundColor: 'blue' },
  caixaGreen: { backgroundColor: 'green' },
  listaContainer: {
    width: '100%',
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemLista: {
    fontSize: 16,
    color: '#333',
    paddingLeft: 10,
  },
  botao: {
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
