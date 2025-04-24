import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const crop = [
  {
    _id: 1,
    img: "https://plus.unsplash.com/premium_photo-1670909649532-d1d68ee475cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXR8ZW58MHx8MHx8fDA%3D", // Use the local image directly
    name: "Wheat",
    season: "Spring",
    duration: "2-May -- 2-Aug",
    description: "Wheat is primarily used in bread, pasta, and pastries.",
    Seed: ["Inqalab-91", "Faisalabad-85", "Sona Masoori"],
    fertilizer: ["Urea (46-0-0)", "Ammonium Nitrate (34-0-0)", "Diammonium Phosphate (DAP) (18-46-0)"],
    Pest: ["Imidacloprid", "Chlorpyrifos", "Lambda-Cyhalothrin"],
    profit: 20000,
  },
];

function CropDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Start />
      <Details />
      <Seed/>
      <Fertilizer />
      <Pests />
      <CommentSection />
    </ScrollView>
  );
}

function Start() {
  const navigation = useNavigation();

  return (
    <View style={styles.startContainer}>
      <Image source={{uri :"https://plus.unsplash.com/premium_photo-1670909649532-d1d68ee475cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXR8ZW58MHx8MHx8fDA%3D"}} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SelectPlan')}
      >
        <Text style={styles.buttonText}>Select Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

function Details() {
  return (
    <View style={styles.detailsContainer}>
      {crop.map((cropItem) => (
        <CropItems key={cropItem._id} cropItem={cropItem} />
      ))}
    </View>
  );
}

function CropItems({ cropItem }) {
  return (
    <View style={styles.cropItemContainer}>
      <Text style={styles.name}>Crop Name: {cropItem.name}</Text>
      <Text>Season: {cropItem.season}</Text>
      <Text>Duration: {cropItem.duration}</Text>
      <Text>{cropItem.description}</Text>
      <Text>Average Profit Per Acre: {cropItem.profit}</Text>
    </View>
  );
}

function Seed() {
  const navigation = useNavigation();

  return (
    <View style={styles.pestsContainer}>
      <Text style={styles.label}>Seeds:</Text>
      {crop.map((cropItem) => (
        <View key={cropItem._id}>
          {cropItem.Seed.map((seed, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('SeedDetails')}
            >
              <Text style={styles.item}>➤  {seed}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

function Fertilizer() {
  const navigation = useNavigation();

  return (
    <View style={styles.fertilizerContainer}>
      <Text style={styles.header}>Fertilizers used for this crop</Text>
      {crop.map((cropItem) => (
        <View key={cropItem._id}>
          <Text style={styles.label}>Fertilizer:</Text>
          {cropItem.fertilizer.map((fertilizer, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('FertilizerDetails')}
            >
              <Text style={styles.item}>➤  {fertilizer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

function Pests() {
  const navigation = useNavigation();

  return (
    <View style={styles.pestsContainer}>
      <Text style={styles.label}>Pests:</Text>
      {crop.map((cropItem) => (
        <View key={cropItem._id}>
          {cropItem.Pest.map((pest, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('PestDetails')}
            >
              <Text style={styles.item}>➤  {pest}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

function CommentSection() {
  return (
    <View style={styles.commentSectionContainer}>
      <Text style={styles.header}>Comments Section</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your message here..."
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  startContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'fit',
     alignItems: "center",
    marginVertical: 16,
    borderRadius: 8,

  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    marginBottom: 10,
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
  cropItemContainer: {
    marginBottom: 10,
    
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fertilizerContainer: {
    marginBottom: 10,
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
  pestsContainer: {
    marginBottom: 10,
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
  label: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  item: {
    color: '#000',
    marginVertical: 5,
  },
  commentSectionContainer: {
    marginTop: 10,
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
});

export default CropDetails;
