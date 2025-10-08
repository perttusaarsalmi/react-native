import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

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

const SignIn = () => {
const [signIn, result] = useSignIn();

const validationSchema = yup.object().shape({
      username: yup
        .string() // must be a string
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
      password: yup
        .string() // must be a string
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    });



const onSubmit = async (values) => {
  const { username, password } = values;

  try {
    const data = await signIn({ username, password });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
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