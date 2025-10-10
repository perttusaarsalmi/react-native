import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  pickerContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
});

const RepositorySorter = () => {
  const [selectedOrder, setSelectedOrder] = useState('latest');

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedOrder}
        onValueChange={(value) => {
          if (value !== '') setSelectedOrder(value);
        }}
      >
        <Picker.Item label="Select an item..." value="" color="#aaa" enabled={false} />
        <Picker.Item label="Latest repositories" value="latest" color="#000" />
        <Picker.Item label="Highest rated repositories" value="highest" color="#000" />
        <Picker.Item label="Lowest rated repositories" value="lowest" color="#000" />
      </Picker>
    </View>
  );
};

export default RepositorySorter;