// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo03() {

    const logado = true
    const temNotificacoes = false
    const estoque = 0;

  return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
        <Text style={styles.titulo}> Condicionais </Text>
        <Text style={styles.subtitulo}>Ternário</Text>
        <Text style={styles.exemplo}> Satus: {logado ? "Logado" : "Deslogado"} </Text>
        </View>

        <View style={styles.exemplo}> 
            <Text style={styles.subtitulo}>Condicional com &&</Text>
            <Text >Notificações: </Text>
            { temNotificacoes && <Text> Você tem novas notificações </Text>}
            { !temNotificacoes && <Text> Você não tem novas notificações </Text>}

        </View>
          <Text style={styles.exemplo}> Estoque: {estoque == 0 ? "Produto Indisponível" : "null"} </Text>
        <View>

        </View>
    </View>
  );
}
//para acessar, chamamos o styles.componentes styles é o objeto e para acesar seu componente colocamos o.
//só tem 1 view retornando
//nromalmente não utilizamos o fragment, mas sim a view pq ela é estilizável e tals

// as configurações do estilo dos compomentes é feito aqui fora

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffdb7f",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#be2121",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff5eb",
    borderRadius: 8,
  },
});
