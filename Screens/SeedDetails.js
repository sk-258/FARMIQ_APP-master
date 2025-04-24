import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const seed = [
  {
    name: "Sona Masoori",
    type: "seed",
    description:
      "Known for its high yield and disease resistance, this variety is widely grown in Pakistan.",
    price: 2000,
    distance: 1, 
  }
];

const SeedDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <Start />
      <Details />
    </ScrollView>
  );
}

const Start = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: "https://images.unsplash.com/photo-1610360339320-32bffde7711d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZlcnRpbGl6ZXIlMjBwYWNrZXR8ZW58MHx8MHx8fDA%3D"}} style={styles.image} />
    </View>
  );
}

const Details = () => {
  return (
    <View>
      {seed.map((seeds, index) => (
        <SprayItems key={index} sprayItem={seeds} />
      ))}
    </View>
  );
}

const SprayItems = ({ sprayItem }) => {
  return (
    <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
      <Text style={styles.bold}>Spray Name:</Text> {sprayItem.name}</Text>
      <Text style={styles.normalText}>
        <Text style={styles.bold}>Type:</Text> {sprayItem.type}</Text> 
        <Text style={styles.normalText}>
      <Text style={styles.bold}>Distance b/w each seed:</Text>{sprayItem.distance} to {sprayItem.distance + 0.2} meter</Text>
      <Text style={styles.normalText}>

      <Text style={styles.bold}>Description:</Text>  {sprayItem.description}</Text>
      <Text style={styles.normalText}>

      <Text style={styles.bold}>Market Price:</Text>  ${sprayItem.price} per KG</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5"
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  normalText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  
});

export default SeedDetails;
