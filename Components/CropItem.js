import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
const CropItem = ({ imageUrl, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cropItemContainer} onPress={() => navigation.navigate('CropDetails')}>
      <Image source={{ uri: imageUrl }} style={styles.cropImage} />
      <Text style={styles.cropTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cropItemContainer: {
    width: '48%',  // Adjust width to fit two items per row
    alignItems: 'left',
    margin: '1%',  // Adjust margin to give some spacing
  },
  cropImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  cropTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CropItem;
