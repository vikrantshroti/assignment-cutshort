import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Screen4({ navigation }) {
  const profile1 =
    "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg";
  const profile2 =
    "https://img.freepik.com/free-photo/headshot-photo-asian-man-with-laugh-face_39688-1728.jpg?w=740";
  const profile3 =
    "https://img.freepik.com/free-photo/young-beautiful-woman-sitting-table_144627-2981.jpg";
  const profile4 =
    "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-looking-camera_23-2147865523.jpg";
  const profile5 =
    "https://img.freepik.com/free-photo/young-handsome-man-listens-music-with-earphones_176420-15616.jpg";
  const profile6 =
    "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg";

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: profile1,
        }}
        style={styles.largeImage}
      />
      <Image
        source={{
          uri: profile2,
        }}
        style={[
          styles.smallImage,
          {
            right: "60%",
            left: "40%",
            top: 5,
          },
        ]}
      />
      <Image
        source={{
          uri: profile3,
        }}
        style={[
          styles.smallImage,
          {
            left: "15%",
            top: "15%",
          },
        ]}
      />
      <Image
        source={{
          uri: profile4,
        }}
        style={[
          styles.smallImage,
          {
            left: "25%",
            top: "30%",
          },
        ]}
      />
      <Image
        source={{
          uri: profile5,
        }}
        style={[
          styles.smallImage,
          {
            right: "5%",
            top: "35%",
          },
        ]}
      />
      <Image
        source={{
          uri: profile6,
        }}
        style={[
          styles.smallImage,
          {
            right: "38%",
            top: "45%",
          },
        ]}
      />
      <View style={styles.bottomContainer}>
        <Image
          source={{
            uri: profile1,
          }}
          style={styles.img1}
        />
        <Text style={styles.text1}>Adeleke Adeyanju</Text>
        <Text style={styles.text2}>(+234) 905 1694 275</Text>
        <TouchableOpacity
          style={styles.control}
          onPress={() => navigation.navigate("Screen5")}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { display: "flex", flex: 1, backgroundColor: "#010A43" },
  largeImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    position: "absolute",
    right: 40,
    top: 50,
  },
  smallImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    position: "absolute",
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    height: "40%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#192259",
  },
  img1: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    marginTop: 20,
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 10,
  },
  text2: { color: "white", fontSize: 14, paddingTop: 6 },
  control: {
    height: "20%",
    backgroundColor: "#192259",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginTop: 15,
  },
});
