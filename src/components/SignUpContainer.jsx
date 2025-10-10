import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateUser from '../hooks/useCreateUser';
import { useNavigate } from "react-router";
import SignUp from './SignUp';
import useSignIn from '../hooks/useSignIn'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 4 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 4 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignUpContainer = ({ onSubmit: onSubmitProp }) => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    if (onSubmitProp) {
      onSubmitProp(values);
      return;
    }
    const { username, password } = values;
    try {
      await createUser({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema,
    onSubmit,
  });

  return (
    <SignUp
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
};

export default SignUpContainer;