import React from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { Linking } from 'react-native';
import ReviewCard from './ReviewCard'

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // light grey
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 8,
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
      fetchPolicy: 'cache-and-network',
  });

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  const item = data.repository;
  const reviews = item.reviews.edges.map(edge => edge.node);

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
          <FlatList
            data={reviews}
            keyExtractor={review => review.id}
            renderItem={({ item }) => <ReviewCard review={item} />}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
  </View>
    );
};

export default SingleRepositoryView;