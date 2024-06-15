import { StyleSheet, View,Text, Button} from 'react-native';
import React, { useState } from 'react';
import Profile from './components/Profile';

export default function App() {
  const [word, setword] = useState(' react native')
  const handlePress=(name)=>{

    setword(`I'm calling ${name}`)
  }

  let age;
  return (
    <View style={styles.viewContainer}>
      <Text  style={styles.textContainer}>Root Coder</Text>
      <Text  style={styles.textContainer2}>learn {word} development</Text>
      <Text  style={styles.textContainer3}>{age ?? 18}</Text>
      <Button title="click me" onPress={()=>handlePress("ayan")}/>
      <MyData data={word}/>
      <Profile/>
    </View>
  );
}
 
const MyData=({data})=>{
  return (
    <>
    <Text>name: Ayan Biswas</Text>
    <Text>Address: kolkata</Text>
    <Text style={{color:"red"}}>desc:{data}</Text>
    </>
  )
}


const styles =StyleSheet.create({
  viewContainer:{
    backgroundColor:"",
    flex:1
  },
  textContainer:{
    fontSize:20
  },
  textContainer2:{
    fontSize:18
  },
  textContainer3:{
    fontSize:18
  }
})
