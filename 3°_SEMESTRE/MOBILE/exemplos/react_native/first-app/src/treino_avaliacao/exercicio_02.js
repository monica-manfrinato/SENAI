import { StyleSheet, Text, View } from "react-native";

export default function Treino02() {
  return <View style={styles.container}>
    <View style={styles.header}><Text style = {styles.textStyle}>Header</Text></View>

        <View style={styles.corpo}>

            <View style={styles.sidebar}><Text style = {styles.textStyle}>Sidebar</Text></View>

            <View style={styles.areaPrincipal}>

                <View style={styles.secaoSuperior}>
                    <View style={styles.cardVerde}><Text style = {styles.textStyle}>Card A</Text></View>
                    <View style={styles.cardAzul}><Text style = {styles.textStyle}>Card B</Text></View>
                </View>

                <View style={styles.divisaoHorizontal}/>

                <View style={styles.secaoInferior}>
                    <View style={styles.cardVermelho}><Text style = {styles.textStyle}>Card C</Text></View>
                    <View style={styles.cardLaranja}><Text style = {styles.textStyle}>Card D</Text></View>
                    <View style={styles.cardRoxo}><Text style = {styles.textStyle}>Card E</Text></View>
                </View>
            </View>
        </View>
        
        <View style={styles.footer}><Text style = {styles.textStyle}>Footer</Text></View>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
    padding:4,
    marginTop:20
  },

textStyle:{
    color:"white",
    fontWeight:"bold"
},
  header:{
    height:60,
    backgroundColor:'#2c3e50',
    width:"100%",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",
  },

  corpo:{
    flex:1,
    flexDirection:"row",
    gap: 8
  },

  sidebar:{
    width:80,
    backgroundColor: "gray",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",

  },

  areaPrincipal:{
    flex:1,
    flexDirection:"column",
    gap: 8
  },

  secaoSuperior:{
    flex:1,
    flexDirection:"row",
    gap:8
  },

  cardVerde:{
    flex:1,
    backgroundColor:"green",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",

  },

  cardAzul:{
    flex:1,
    backgroundColor:"blue",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",


  },

  divisaoHorizontal:{
    height:8,
    backgroundColor: "#bfbfbf",
    borderRadius: 8,

  },

  secaoInferior:{
    flex:1,
    flexDirection:"row",
    gap:8
  },

  cardVermelho:{
    flex: 1,
    backgroundColor:"red",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",

  },

  cardLaranja:{
    flex: 2,
    backgroundColor:"orange",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",

  },

  cardRoxo:{
    flex: 1,
    backgroundColor:"purple",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",

  },

  footer:{
    height: 50,
    backgroundColor: "#2c3e50",
    width:"100%",
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",

  }

})