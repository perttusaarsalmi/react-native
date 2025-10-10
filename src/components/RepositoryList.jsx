import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';
import Text from './Text'
import RepositoryListContainer from './RepositoryListContainer'
import RepositorySorter from './RepositorySorter'

const RepositoryList = () => {
    const [selectedOrder, setSelectedOrder] = useState('latest');
    const styles = StyleSheet.create({
      page: {
        flex: 1,
        backgroundColor: '#f0f0f0', // light grey
      },
    });

    let orderBy = 'CREATED_AT';
    let orderDirection = 'DESC';
    if (selectedOrder === 'highest') {
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
    } else if (selectedOrder === 'lowest') {
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
    }

    const { repositories, loading, error, refetch } = useRepositories({
      orderBy,
      orderDirection,
    });


    if (loading) return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
    if (error) return <Text style={{ color: "red" }}>Error: {error.message}</Text>;
    return (
        <View style={styles.page}>
            <RepositorySorter
              selectedOrder={selectedOrder}
              onOrderChange={setSelectedOrder}
            />
            <RepositoryListContainer repositories={repositories} />
      </View>
    );
};

export default RepositoryList;