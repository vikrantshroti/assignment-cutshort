import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";

export function CarouselItem({ onClick }) {
  //   const colors = ["#000", "#111", "#222", "#333", "#444"];
  const data = [
    {
      id: "1",
      title: "Transfer that is safe",
      text: "You have nothing to be scared about, we got you covered",
    },
    {
      id: "2",
      title: "Transfer money with ease",
      text: "Making money is hard enough, we make transfering it easy enough ",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          {item.title}
        </Text>
        <Text
          style={{
            width: "80vw",
            color: "white",
            fontSize: 13,
            paddingTop: 5,
          }}
        >
          {item.text}
        </Text>
        <View
          style={{
            width: "40%",
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={onClick(item, index)}
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#010A43",
                fontWeight: "bold",
                fontSize: 13,
                margin: "auto",
              }}
            >
              Start banking
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      pagingEnabled
      horizontal={true}
      decelerationRate={"normal"}
      showsVerticalScrollIndicator={false}
      snapToAlignment={"start"}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
