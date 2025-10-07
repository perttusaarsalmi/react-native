import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import * as yup from 'yup';

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
    marginBottom: 4, // smaller margin so error is closer
  },
  errorText: {
    color: '#d73a4a',
    fontSize: 14,
    marginBottom: 12, // space below error before next input
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

const SignIn = () => {

const validationSchema = yup.object().shape({
      username: yup
        .string() // must be a string
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'), // required field
      password: yup
        .string() // must be a string
        .min(6, 'Password must be at least 6 characters') // optional minimum length
        .required('Password is required'), // required field
    });


  const onSubmit = values => {
    const username = values.username;
    const password = values.password;
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
validationSchema,
    onSubmit,
  });


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
             {formik.touched.username && formik.errors.username && (
              <Text style={styles.errorText}>{formik.errors.username}</Text>
             )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
       {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
       )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};




export default SignIn;