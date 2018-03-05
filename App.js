import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ImagePicker } from 'expo';


export default class App extends React.Component {
  async openImagePicker() {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      console.log("Hooray!")
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.openImagePicker} title="Click to open image picker"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
