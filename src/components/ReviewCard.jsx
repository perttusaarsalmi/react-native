import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 16,
    flexDirection: 'row',
  },
  ratingCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#0366d6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  ratingText: {
    color: '#0366d6',
    fontWeight: 'bold',
    fontSize: 20,
  },
  reviewContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    color: '#888',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
  },
});

const formatDate = (iso) => new Date(iso).toLocaleDateString();

const ReviewCard = ({ review }) => (
  <View style={styles.card}>
    <View style={styles.ratingCircle}>
      <Text style={styles.ratingText}>{review.rating}</Text>
    </View>
    <View style={styles.reviewContent}>
      <Text style={styles.username}>{review.user.username}</Text>
      <Text style={styles.date}>{formatDate(review.createdAt)}</Text>
      <Text style={styles.text}>{review.text}</Text>
    </View>
  </View>
);

export default ReviewCard;