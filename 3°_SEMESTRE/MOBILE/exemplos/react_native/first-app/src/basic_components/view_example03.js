import { View, Text, StyleSheet } from "react-native";

export default function ViewExample03() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Justify Content</Text>

      <View style={{flexDirection: "row", height:60, width: "100%", gap: 8 }}>    

      <View style={[styles.box, {flex: 1}]}>
        <Text>1</Text>
      </View>

      <View style={[styles.box, {flex: 2}]}>
        <Text>2</Text>
      </View>
      
      <View style={[styles.box, {flex: 1}]}>
        <Text>3</Text>
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