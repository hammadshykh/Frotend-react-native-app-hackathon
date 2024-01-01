import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MyComponent from '../Components/BottomNav';
// import {View,Text, Button} from "react-native"
// import Bottom from "../config/Bottom";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* Your other content */}
      {/* ... */}
      {/* Bottom Navigation */}
      <MyComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default Home;
