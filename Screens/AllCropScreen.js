import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CropHeader from '../Components/CropHeader';
import PlantationGrid from '../Components/PlantationGrid';

const AllCropScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <CropHeader /> */}
      <PlantationGrid />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});

export default AllCropScreen;
