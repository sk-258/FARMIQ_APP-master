import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation

const Card = () => {
  const navigation = useNavigation();

  return (
    <View>
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('CropDetails')}>
        <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1670909649532-d1d68ee475cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXR8ZW58MHx8MHx8fDA%3D"}}
         style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>Wheat Crop</Text>
      <View style={styles.description}>
        <Text>Season: Spring</Text>
        <Text>Duration: 2-May -- 2-Aug</Text>
        <Text>Wheat is primarily used in bread, pasta, and pastries.</Text>
      </View>
    </View>

    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('CropDetails')}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1551810080-3eb3be72d3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ybiUyMGZpZWxkfGVufDB8fDB8fHww"}}
         style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>Corn Crop</Text>
      <View style={styles.description}>
        <Text>Season: Spring</Text>
        <Text>Duration: 2-May -- 2-Aug</Text>
        <Text>Wheat is primarily used in bread, pasta, and pastries.</Text>
      </View>
    </View>

    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('CropDetails')}>
        <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1664116928607-896124327b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmljZWZpZWxkfGVufDB8fDB8fHww"}}
         style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>Rice Crop</Text>
      <View style={styles.description}>
        <Text>Season: Spring</Text>
        <Text>Duration: 2-May -- 2-Aug</Text>
        <Text>Wheat is primarily used in bread, pasta, and pastries.</Text>
      </View>
    </View>

    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('CropDetails')}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1502395809857-fd80069897d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdHRvbiUyMGZpZWxkfGVufDB8fDB8fHww"}}
         style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>Cotton Crop</Text>
      <View style={styles.description}>
        <Text>Season: Spring</Text>
        <Text>Duration: 2-May -- 2-Aug</Text>
        <Text>Wheat is primarily used in bread, pasta, and pastries.</Text>
      </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    marginTop: 10,
  },
});

export default Card;
