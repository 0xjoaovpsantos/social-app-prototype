/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Text } from './styles';
import AppColors from '../../utils/colors';

interface GalleryUrlProps {
  url: string;
}

export interface GalleryImagesProps {
  numberPhotos: number;
  gallery: GalleryUrlProps[];
}

interface Props {
  data: GalleryImagesProps;
}

const { width } = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = (width - 62) / numberGrid;

const GalleryImages: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text> My Gallery</Text>
      <FlatList
        data={data.gallery}
        numColumns={numberGrid}
        key={numberGrid}
        keyExtractor={img => img.url}
        renderItem={({ item: img }) => (
          <View>
            <Image source={{ uri: img.url }} style={styles.itemImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: AppColors.primaryColor,
  },
  itemImage: {
    width: itemWidth,
    height: itemWidth,
    margin: 2,
  },
});

export default GalleryImages;
