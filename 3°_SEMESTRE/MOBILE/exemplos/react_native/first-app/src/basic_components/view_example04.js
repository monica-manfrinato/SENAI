import { View, Text, StyleSheet } from "react-native";

export default function ViewExample04() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FlexWrap</Text>
      <View style={styles.exemplo}>
        <View
          style={{ flexDirection: "row", height: 60, width: "100%", gap: 8, flexWrap: "wrap" }}
        >
          <View style={[styles.box, { width: 80 }]}> </View>
          <View style={[styles.box, { width: 80 }]}> </View>
          <View style={[styles.box, { width: 80 }]}> </View>
          <View style={[styles.box, { width: 80 }]}> </View>
          <View style={[styles.box, { width: 80 }]}> </View>
        </View>
      </View>
    </View>
  );
}

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
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
