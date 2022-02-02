import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
// import logo from './assets/img0.png'; 
import logo from './assets/img0.png'; 

export default function App() {
  return (

    <View style={styles.container}>
    
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}
    
      <Text style={{color: '#888', fontSize: 18}}>
          just press the button below!
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
});
