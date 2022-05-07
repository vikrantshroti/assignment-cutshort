import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Screen5({ navigation }) {
  return (
    <View style={{ display: "flex", flex: 1, backgroundColor: "#00020D" }}>
      <View
        style={{
          display: "flex",
          width: "100vw",
          height: "85%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#010A43",
        }}
      >
        <Text
          style={{
            display: "flex",
            color: "white",
            fontSize: "30px",
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ₦ 110,000
        </Text>

        <View style={{ display: "flex", flex: 1 }}>
          <View style={styles.cellParent}>
            <Text style={styles.cell}>1</Text>
            <Text style={styles.cell}>2</Text>
            <Text style={styles.cell}>3</Text>
          </View>
          <View style={styles.cellParent}>
            <Text style={styles.cell}>4</Text>
            <Text style={styles.cell}>5</Text>
            <Text style={styles.cell}>6</Text>
          </View>
          <View style={styles.cellParent}>
            <Text style={styles.cell}>7</Text>
            <Text style={styles.cell}>8</Text>
            <Text style={styles.cell}>9</Text>
          </View>
          <View style={styles.cellParent}>
            <Text style={styles.cell}>.</Text>
            <Text style={styles.cell}>0</Text>
            <Text style={styles.cell}>x</Text>
          </View>
          <TouchableOpacity
            style={{
              height: "12%",
              backgroundColor: "#192259",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              marginTop: 15,
              marginLeft: "30%",
              marginRight: "30%",
            }}
            onPress={() => navigation.navigate("Screen1")}
          >
            <Text style={{ color: "white" }}>Send Money</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    color: "white",
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cellParent: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
  },
});
