import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';
import Text from './Text'
import RepositoryListContainer from './RepositoryListContainer'




const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

    if (loading) return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
    if (error) return <Text style={{ color: "red" }}>Error: {error.message}</Text>;

    return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;