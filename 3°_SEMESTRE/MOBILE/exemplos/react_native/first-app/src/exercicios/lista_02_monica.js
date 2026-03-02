import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista02() {

    const loja_aberta = true;
    const tem_promocao = true;
    const nota = 2;

    function calcularStatus(nota){
        if (nota >= 7 && nota <=10){
            return <Text style={styles.aprovado}> Satus: Aprovado! </Text>
        }
        else if (nota >= 5 && nota <7){
            return <Text style={styles.recuperacao}> Satus: Recuperação! </Text>
        }
        else if(nota <5 && nota >=0){
            return <Text style={styles.reprovado}> Satus: Reprovado! </Text>
        }
        else{
            <Text> Nota inválida!</Text>
        }
    }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Mônica Cotrim Manfinato</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Operador ternário</Text>
        <Text> {loja_aberta ? "Status: Aberta" : "Status: Fechada"}</Text>
      </View>

        <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Operador &&</Text>
        {tem_promocao && <Text> Promoção ativa! Aproveite os descontos!</Text>}
        {!tem_promocao && <Text> </Text>}
      </View>

        <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Condicional com Múltiplas Condições</Text>
        {calcularStatus(nota)}
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

  aprovado:{color: "#56c217"},
  recuperacao:{color: "#d7ce11"},
  reprovado:{color: "#d50f0f"},

});