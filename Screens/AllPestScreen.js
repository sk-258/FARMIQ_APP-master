import React from 'react';
import { ScrollView, StyleSheet,Text, Image,TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AllPestScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <PlantationGrid />
    </ScrollView>
  );
};

const PlantationGrid = () => {
    const crops = [
      { imageUrl: 'https://media.gettyimages.com/id/1125607687/photo/farmer-spraying-pesticide.jpg?s=612x612&w=0&k=20&c=yNWwaXRChCpEou9Vx7BH_s4hJZN7H22N2hJsjmWR7yk=', title: 'Emactin' },
      { imageUrl: 'https://media.gettyimages.com/id/1272140080/photo/pesticide-application-spray-in-plant.jpg?s=612x612&w=0&k=20&c=uXObw237suWmfRgIuSAB5sGVeoXVDtYgYA2HXYwN1_o=', title: 'Lorsban' },
      { imageUrl: 'https://media.gettyimages.com/id/1290199650/photo/asian-farmer-wear-safety-clothes-with-protective-mask-spraying-organic-pesticides-on-tomato.jpg?s=612x612&w=0&k=20&c=dNgA5rwFvKBHvwcQupCYGDu0SMg-NzIOyNnEN-0ylEc=', title: 'Karate' },
      { imageUrl: 'https://media.gettyimages.com/id/1319657586/photo/tractor-spraying-pesticide-on-wheat-field-during-sunny-day.jpg?s=612x612&w=0&k=20&c=mYfhN7--gc6fTaxjwYOEOtRkPzXJzraYIdFgBKy9Erw=', title: 'Talstar' },
      { imageUrl: 'https://media.gettyimages.com/id/1467344809/photo/young-farmer-sprays-his-garden-of-fresh-lettuce-cabbage-and-parsley-against-pests.jpg?s=612x612&w=0&k=20&c=TOxrSbEYeYlmxqUi9iWs0eKlYTo4L4ga8U8YnX8EjLc=', title: 'Dursban' },
      { imageUrl: 'https://media.gettyimages.com/id/833284634/photo/crop-sprayer.jpg?s=612x612&w=0&k=20&c=vUauMNioP579mhBdvWKYUbDw1mzCle3GoU2JhTEwzk0=', title: 'Capture' },
      { imageUrl: 'https://media.gettyimages.com/id/958953510/photo/agricultural-worker-takes-care-of-his-estate.jpg?s=612x612&w=0&k=20&c=asNVXLUWqkGa5DKVFo9Z3WWoTu9Hj5DCUuIPbvcpPOQ=', title: 'Confidor' },
      { imageUrl: 'https://media.gettyimages.com/id/84423441/photo/tractor-in-field-spraying-crop.jpg?s=612x612&w=0&k=20&c=omZD0Cm79hrLIiRHBkkkbPIaCFrkGnswmnssw2zrd3k=', title: 'Gaucho' },
      { imageUrl: 'https://media.gettyimages.com/id/157187324/photo/spraying-on-field.jpg?s=612x612&w=0&k=20&c=6ECjp4CxJsYpncv2NiPDI4S7j5YmJNBCLvpMQrSZ78w=', title: 'Larvin' },
      { imageUrl: 'https://media.gettyimages.com/id/1445623974/photo/a-farmer-is-spraying-chemicals.jpg?s=612x612&w=0&k=20&c=STSJ_mANI3y8S1lnVvjxhPxV_56B1ik0SHZe8n8Wi58=', title: 'Tracer' },
      { imageUrl: 'https://media.gettyimages.com/id/1491871348/photo/farmer-spraying-chemical-or-fertilizer-on-tobacco-plants.jpg?s=612x612&w=0&k=20&c=IOSJ3tmkltSxErm8LDj37iPSLA8QLHH_nHdAPstabEY=', title: 'Cabal' },
      { imageUrl: 'https://media.gettyimages.com/id/1198432941/photo/young-farm-worker-spraying-tomatoes-in-polyethylene-tunnel.jpg?s=612x612&w=0&k=20&c=Zi1lShWYAKq0BETvwuYxjg2tvdrW7AjGeqTXAwDzGJQ=', title: 'Proclaim' },
  
  ];
  
    return (
      <View style={styles.gridContainer}>
        {crops.map((crop, index) => (
          <CropItem key={index} imageUrl={crop.imageUrl} title={crop.title} />
        ))}
      </View>
    );
  };

  const CropItem = ({ imageUrl, title }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={styles.cropItemContainer} onPress={() => navigation.navigate('FertilizerDetails')}>
        <Image source={{ uri: imageUrl }} style={styles.cropImage} />
        <Text style={styles.cropTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
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

export default AllPestScreen;
