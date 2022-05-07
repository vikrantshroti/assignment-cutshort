import React, { useCallback, useMemo, useRef, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Screen3({ navigation }) {
  const data = [
    {
      id: "1",
      name: "Adeboye Usman",
      profile:
        "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg",
      txn_status: "Received",
      txn_status_color: "#1DC7AC",
      amount: "₦ 200,000",
    },
    {
      id: "2",
      name: "Mercy Poopola",
      profile:
        "https://img.freepik.com/free-photo/young-beautiful-woman-sitting-table_144627-2981.jpg",
      txn_status: "Failed",
      txn_status_color: "#FE4A54",
      amount: "₦ 110,000",
    },
    {
      id: "3",
      name: "Onome Adatayo",
      profile:
        "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-looking-camera_23-2147865523.jpg",
      txn_status: "Send",
      txn_status_color: "#FAAD39",
      amount: "₦ 10,000",
    },
    {
      id: "4",
      name: "Kingsley Abiodun",
      profile:
        "https://img.freepik.com/free-photo/young-handsome-man-listens-music-with-earphones_176420-15616.jpg",
      txn_status: "Received",
      txn_status_color: "#1DC7AC",
      amount: "₦ 200,000",
    },
  ];

  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  }, []);

  const renderItem = ({ item, index }) => {
    const imgUrl = item.profile;
    const bgCOlor = index % 2 ? "#010A43" : "#192259";
    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor: bgCOlor,
          },
        ]}
      >
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.itemImg}
        />
        <View style={styles.itemControlContainer}>
          <Text style={{ color: "white" }}>{item.name}</Text>
          <TouchableOpacity
            style={[
              styles.itemStatus,
              {
                backgroundColor: item.txn_status_color,
              },
            ]}
          >
            <Text style={{ color: "white" }}>{item.txn_status}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: item.txn_status_color, padding: 10 }}>
          {item.amount}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "white", fontSize: 14 }}>
        Your current balance is{" "}
      </Text>
      <Text style={styles.text1}>₦ 2,00,000</Text>
      <View style={styles.text2}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate("Screen4")}
        >
          <Text style={{ color: "white" }}>Request Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate("Screen4")}
        >
          <Text style={{ color: "white" }}>Send Money</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={"slide"}
        height={Dimensions.get("window").height * 0.5}
        minClosingHeight={Dimensions.get("window").height * 0.2}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    borderColor: "white",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#010A43",
    padding: 12,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    height: "12vh",
    width: "100vw",
  },
  itemImg: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    overflow: "hidden",
    marginTop: 10,
  },
  itemControlContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60vw",
    padding: 10,
  },
  itemStatus: {
    padding: 2,
    borderRadius: 10,
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  mainContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
    backgroundColor: "#010A43",
  },
  text1: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 10,
  },
  text2: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 40,
    justifyContent: "space-between",
  },
});
