import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
// import logo from './assets/img0.png'; 
import logo from './assets/img0.png'; 

export default function App() {
  return (

    <View style={styles.container}>
    {/* Displaying Image in the app */}
      <Image source={logo} style={styles.logo} /> 
      {/* Loading imagese by URL */}
      {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}
    
     
      <Text style={styles.instructions} >
        To share a photo from your phone with a friend, just press the button below!
      </Text>
        <StatusBar style="auto" />
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
    borderRadius: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});
