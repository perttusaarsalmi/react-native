import React from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { Linking } from 'react-native';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // light grey
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 16,
    paddingBottom: 16,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 8,
  },
})

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  const item = data.repository;

  const handleOpenInGitHub = () => {
    Linking.openURL(item.url);
  };
    return (
  <View style={styles.outer}>
    <View style={styles.card}>
      <RepositoryItem item={item} />
      <View style={styles.button}>
        <Button title="Open in GitHub" onPress={handleOpenInGitHub} />
      </View>
    </View>
  </View>
    );
};

export default SingleRepositoryView;