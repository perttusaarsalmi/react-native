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

const SignIn = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Username"
      placeholderTextColor="#aaa"
      value={values.username}
      onChangeText={handleChange('username')}
    />
    {touched.username && errors.username && (
      <Text style={styles.errorText}>{errors.username}</Text>
    )}
    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#aaa"
      value={values.password}
      onChangeText={handleChange('password')}
      secureTextEntry
    />
    {touched.password && errors.password && (
      <Text style={styles.errorText}>{errors.password}</Text>
    )}
    <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Sign In</Text>
    </Pressable>
  </View>
);

export default SignIn;