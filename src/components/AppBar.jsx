import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import {ScrollView} from 'react-native';

import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar, // black
    height: 56 + Constants.statusBarHeight,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pressable: {
    paddingBottom: 8,
   paddingRight: 15
  },
});

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
        <ScrollView horizontal>
      <Pressable style={styles.pressable} onPress={() => navigate('/')}>
        <Text color="appBarText" fontWeight="bold" fontSize="heading">
          Repositories
        </Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigate('/signIn')}>
        <Text color="appBarText" fontWeight="bold" fontSize="heading">
          Sign in
        </Text>
      </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;