import * as React from 'react';
import {Pressable, SafeAreaView, StyleSheet, TextInput,Text,View } from 'react-native';
// import { TextInput } from 'react-native-paper';

export default function TestScreen() {
  const [text, onChangeText] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
          <Text style={styles.title}>Sign Up</Text>
          <SafeAreaView>
           
            <Text style={styles.label}>Full Name</Text> 
            <TextInput 
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={onChangeText} value={text}
                right={<TextInput.Icon name="eye" />}
           />
              
            <Text style={styles.label}>Email Address</Text> 
            <TextInput style={styles.input}
                placeholder="Enter your Email Address"
                onChangeText={onChangeEmail} value={email} />
               
            <Text style={styles.label}>Phone Number</Text> 
            <TextInput style={styles.input}
                placeholder="Enter your Phone Number" keyboardType="numeric"
                onChangeText={onChangeNumber} value={number} />
            <Text style={styles.label}>Password</Text> 
            <TextInput style={styles.input}
                placeholder="Create New Password"     
                right={<TextInput.Icon name="eye" />}
                onChangeText={onChangePassword} value={password} />
           
           
           <Text style={styles.label}>
             Already have an account? Login
            </Text> 
         
            <View style={styles.space} />
            <Pressable 
               style={styles.login} 
               onPress={() => {
               navigation.navigate("LoginScreen");
              }}>
             <Text style={styles.text}>Create Account</Text>
             </Pressable>
 
              <View style={styles.space} />
              <Text style={styles.tnc}>
                    By Signing up, you are agreeing to our
                    Term & Conditions?        
              </Text>
              <View style={styles.space} />
              <View style={styles.space} />
           
            </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    backgroundColor:"rgb(247, 247, 247)"
  },
  card:{
    marginLeft:20
  },
  label: {
    overflow: 'visible',
    fontWeight:300,
    fontFamily: `"Inter-Bold", "Inter", sans-serif`,
    color: '#064451',
    fontSize: 16,  
    marginLeft: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    backgroundColor:"blue",
    backgroundImage: "url(/* blue and orange building under blue sky.jpg */)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  frame: {
    width: "90%",
    // height: 558,
    boxShadow: "0px 14px 9px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#ffffff",
    overflow: "visible",
    borderRadius: 15,
    // marginLeft: 20,
    // marginTop:25
  },
   title: {
      textAlign: 'center',
      marginTop: 25,
      overflow: 'visible',
      fontWeight:700,
      fontFamily: `"Inter-Bold", "Inter", sans-serif`,
      color: '#064451',
      fontSize: 20,  
      marginBottom: 30,    
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  login:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#064451',
    borderWidth:2,
    borderColor: '#064451',
    width: '94%',
    height: '10%',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:"bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  tnc:{
    textAlign:"center",
    width:"100%"
  }
});



