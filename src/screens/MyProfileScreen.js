import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//const menu = <Menu navigator={navigator} />

const MyProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <Text>My Profile </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 50,
    alignSelf: 'stretch',
  },
});

export default MyProfileScreen;
