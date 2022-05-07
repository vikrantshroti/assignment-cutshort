import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { CarouselItem } from "../components/CarouselItem";

export default function Screen1({ navigation }) {
  const onClick = (item, index) => {
    navigation.navigate("Screen2");
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <ImageBackground
        source={require("../../assets/bg1.png")}
        resizeMode={"cover"}
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          width: "100vw",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "#17288E",
            width: "85%",
            height: "25%",
            borderTopRightRadius: 45,
          }}
        >
          <CarouselItem onClick={() => onClick} />
        </View>
      </ImageBackground>
    </View>
  );
}
