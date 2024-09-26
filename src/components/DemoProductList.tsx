import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

type ProductListProps = {
  productLength?: number;
};

const ProductList = ({productLength}: ProductListProps) => {
  const products = Array.from({length: productLength ?? 10}, (_, index) => ({
    id: `${index + 1}`,
    name: `Product ${index + 1}`,
  }));

  const renderItem = ({item}: {item: {id: string; name: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default ProductList;
