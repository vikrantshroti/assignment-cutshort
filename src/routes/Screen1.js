import { StyleSheet, View, ImageBackground } from "react-native";
import { CarouselItem } from "../components/CarouselItem";

export default function Screen1({ navigation }) {
  const onClick = (item, index) => {
    navigation.navigate("Screen2");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg1.png")}
        resizeMode={"cover"}
        style={styles.bgImg}
      >
        <View style={styles.carouselContainer}>
          <CarouselItem onClick={() => onClick} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  bgImg: {
    display: "flex",
    flex: 1,
    height: "100vh",
    width: "100vw",
  },
  carouselContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#17288E",
    width: "85%",
    height: "25%",
    borderTopRightRadius: 45,
  },
});
