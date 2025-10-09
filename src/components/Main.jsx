import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar'
import SignInContainer from './SignInContainer'
import { Route, Routes, Navigate } from 'react-router-native';
import SingleRepositoryView from './SingleRepositoryView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
           <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signIn" element={<SignInContainer />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/repositories/:id" element={<SingleRepositoryView />} />
           </Routes>
    </View>
  );
};

export default Main;