// App.js

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
// import SignUp from './Pages/SignUp';
import AppNavigator from './Config/AppNavigator';
// import SignUp from './SignUp';
import firebaseApp from './firebaseConnect';

const App = () => {
  console.log(firebaseApp);
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
