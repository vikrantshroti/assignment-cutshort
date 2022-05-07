import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Screen2({ navigation }) {
  const imgUrl =
    "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg";

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.img}
      />
      <Text style={styles.text1}>Adeleke Ramon</Text>
      <Text style={styles.text2}>is requesting for:</Text>
      <Text style={styles.text3}>₦ 2,00,000</Text>
      <View style={styles.controlContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen3");
          }}
          style={styles.control1}
        >
          <Text style={{ color: "white" }}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen3");
          }}
          style={styles.control2}
        >
          <Text style={{ color: "white" }}>Dont Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#010A43",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    marginTop: 50,
  },
  text1: { color: "white", marginTop: 20, fontSize: 24 },
  text2: { color: "white", marginTop: 10 },
  text3: {
    color: "white",
    marginTop: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  controlContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  control1: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    width: "40%",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  control2: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    width: "40%",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
