/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Container, Text } from './styles';

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
    <Container>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: itemWidth,
    height: itemWidth,
    margin: 2,
  },
});

export default GalleryImages;
