import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const spray = [
  {
    name: "Imidacloprid",
    type: "Pest",
    description:
      "Imidacloprid is a widely used insecticide belonging to the neonicotinoid class of chemicals. Here is a detailed overview of imidacloprid",
    price: 20000,
    usage: 100, 
  }
];

const PestDetailsScreen = () => {
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
      <Image source={{uri: "https://images.unsplash.com/photo-1470755008296-2939845775eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNwcmF5fGVufDB8fDB8fHww"}} style={styles.image} />
    </View>
  );
}

const Details = () => {
  return (
    <View>
      {spray.map((sprayItem, index) => (
        <SprayItems key={index} sprayItem={sprayItem} />
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
      <Text style={styles.bold}>Usage:</Text> {sprayItem.usage} to {sprayItem.usage + 50} Pounds Per Acre</Text>
      <Text style={styles.normalText}>

      <Text style={styles.bold}>Description:</Text>  {sprayItem.description}</Text>
      <Text style={styles.normalText}>

      <Text style={styles.bold}>Market Price:</Text>  {sprayItem.price} per KG</Text>
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
  normalText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default PestDetailsScreen;
