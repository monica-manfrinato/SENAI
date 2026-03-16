import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista03() {

const frutas = ["Maçã", "Banana", "Laranja", "Uva"]
const produtos = [
{ id: 1, nome: "Camiseta", preco: 49.90 },
{ id: 2, nome: "Calça", preco: 89.90 },
{ id: 3, nome: "Tênis", preco: 199.90 },
];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 03 - Mônica Cotrim Manfinato</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Lista de frutas</Text>
        {frutas.map((fruta, index) => (<Text key = {index}> {index +1} - {fruta} </Text>))}
        {/* o fruta representa 1 elemento da lista frutas, o nome precisa remeter a essa lista */}
        {/* no map usamos uma callback dentro */}
        {/* sempre q for trabalhar com uma lista, usar o index pq ela não tem identificador único */}
      </View>


      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Lista de produtos</Text>
        {produtos.map((produto) => (<Text key = {produto.id}> {produto.nome} : R${produto.preco}</Text>))}
      </View>


      <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Filtrar números pares</Text>
        {numeros.filter((numero) => numero%2 == 0).map((numero, index) => (<Text key = {index}> {numero}</Text>))}
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});