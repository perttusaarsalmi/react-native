import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

const RepositoryItem = ({ item }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/repositories/${item.id}`);
  };

  return (
    <Pressable onPress={handlePress} testID="repositoryItemPressable">
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
    </Pressable>
  );
};

export default RepositoryItem;