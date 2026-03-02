// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Scaffold() {

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}></Text>
      <Text style={styles.subtitulo}></Text>
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
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
