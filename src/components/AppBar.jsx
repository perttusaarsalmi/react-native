import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar, // black
    height: 56 + Constants.statusBarHeight, // typical app bar height
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

const AppBar = () => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Text color="appBarText" fontWeight="bold" fontSize="heading">
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBar;