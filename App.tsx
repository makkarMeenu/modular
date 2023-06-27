import { Image, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image source={require("./assets/image1.png")} style={styles.image} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.heading}>Richard Harward</Text>
            <Text style={styles.description}>UI/UX Designer</Text>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Follow</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 30,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  descriptionContainer: {
    alignSelf: "flex-start",
    paddingVertical: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    backgroundColor: "teal",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 4,
  },

  buttonText: {
    color: "white",
  },
});
