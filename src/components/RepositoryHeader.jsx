import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  info: {
    flexShrink: 1,
  },
  language: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 5,
  },
});

const RepositoryHeader = ({ avatarUrl, fullName, description, language }) => (
  <View style={styles.container}>
    <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    <View style={styles.info}>
      <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
      <Text color="textSecondary">{description}</Text>
      {language && <Text style={styles.language}>{language}</Text>}
    </View>
  </View>
);

export default RepositoryHeader;