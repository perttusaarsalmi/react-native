import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <RepositoryHeader
      avatarUrl={item.ownerAvatarUrl}
      fullName={item.fullName}
      description={item.description}
      language={item.language}
    />
    <RepositoryStats
      stars={item.stargazersCount}
      forks={item.forksCount}
      reviews={item.reviewCount}
      rating={item.ratingAverage}
    />
  </View>
);

export default RepositoryItem;