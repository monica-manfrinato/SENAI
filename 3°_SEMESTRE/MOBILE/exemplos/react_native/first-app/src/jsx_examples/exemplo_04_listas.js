import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {

      const frutas = ["Laranja", "Acerola", "Abacaxi"]
      const alunos = [
        {id: 1, nome: "Marlon", nota: 9},
        {id: 2, nome: "Celso", nota: 10},
        {id: 3, nome: "Daniel", nota: 8}
      ]

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Listas e Map</Text>


      <View style={styles.exemplo}> 
      <Text style={styles.subtitulo}>Map Comum</Text>
      {frutas.map((fruta, index) => (<Text key={index}> {index +1} - {fruta} </Text>))}
      </View>

      <View style={styles.exemplo}> 
      <Text style={styles.subtitulo}>Map em Objeto</Text>
      {alunos.map((aluno) => (<Text key={aluno.id}> {aluno.nome} - {aluno.nota} </Text>))}
      </View>

      <View style={styles.exemplo}> 
      <Text style={styles.subtitulo}>Map com filter</Text>
      {alunos.filter((aluno) => aluno.nota >= 7).map((aluno) => (<Text key={aluno.id}> {aluno.nome} - Nota: {aluno.nota} : Aprovado</Text>))}
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
    backgroundColor: "#fff0cd",
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