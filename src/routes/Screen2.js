import { View, Image, Text, Button, TouchableOpacity } from "react-native";

export default function Screen2({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#010A43",
      }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg",
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150 / 2,
          overflow: "hidden",
          marginTop: 50,
        }}
      />
      <Text style={{ color: "white", marginTop: 20, fontSize: 24 }}>
        Adeleke Ramon
      </Text>
      <Text style={{ color: "white", marginTop: 10 }}>is requesting for:</Text>
      <Text
        style={{
          color: "white",
          marginTop: 10,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        ₦ 2,00,000
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen3");
          }}
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "white",
            width: "40%",
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white" }}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen3");
          }}
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "white",
            width: "40%",
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Dont Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
