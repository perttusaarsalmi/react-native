import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from "react-router";
import CreateReview from './CreateReview';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(3, 'Repository owner name must be at least 3 characters')
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .min(3, 'Repository name must be at least 3 characters')
    .required('Repository name is required'),
  rating: yup
    .number()
    .integer('Repository rating must be an integer')
    .min(0, 'Repository rating must be between 0 - 100')
    .max(100, 'Repository rating must be between 0 - 100')
    .required('Repository rating is required'),
  text: yup.string().optional(),
});

const CreateReviewContainer = ({ onSubmit: onSubmitProp }) => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    if (onSubmitProp) {
      onSubmitProp(values);
      return;
    }
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const data = await createReview({ ownerName, repositoryName, rating, text });
      const repositoryId = data.createReview.repositoryId; // Get the id from the mutation result
      navigate(`/repositories/${repositoryId}`); // Redirect to the single repository view
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      ownerName: '',
      repositoryName: '',
      rating: '',
      text: ''
    },
    validationSchema,
    onSubmit,
  });

  return (
    <CreateReview
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
};

export default CreateReviewContainer;