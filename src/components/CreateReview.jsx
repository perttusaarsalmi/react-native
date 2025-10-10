import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    color: '#d73a4a',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const CreateReview = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Repository owner name"
      placeholderTextColor="#aaa"
      value={values.ownerName}
      onChangeText={handleChange('ownerName')}
    />
    {touched.ownerName && errors.ownerName && (
      <Text style={styles.errorText}>{errors.ownerName}</Text>
    )}
    <TextInput
      style={styles.input}
      placeholder="Repository name"
      placeholderTextColor="#aaa"
      value={values.repositoryName}
      onChangeText={handleChange('repositoryName')}
    />
    {touched.repositoryName && errors.repositoryName && (
      <Text style={styles.errorText}>{errors.repositoryName}</Text>
    )}
    <TextInput
      style={styles.input}
      placeholder="Rating between 0 and 100"
      placeholderTextColor="#aaa"
      value={String(values.rating)}
      onChangeText={handleChange('rating')}
      keyboardType="numeric"
    />
    {touched.rating && errors.rating && (
      <Text style={styles.errorText}>{errors.rating}</Text>
    )}
    <TextInput
      style={[styles.input, { height: 80 }]}
      placeholder="Review"
      placeholderTextColor="#aaa"
      value={values.text}
      onChangeText={handleChange('text')}
      multiline
    />
    {touched.text && errors.text && (
      <Text style={styles.errorText}>{errors.text}</Text>
    )}
    <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Create Review</Text>
    </Pressable>
  </View>
);

export default CreateReview;