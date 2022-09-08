import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { DatePickerAndroid, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text>Hello</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.text1}>
      <Text>Hello</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.text2}>
      <Text>Hello</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'while',
    alignItems: 'center',
    justifyContent:'space-around',
    flexDirection:'row-reverse',

  },
  text:{
    color:'red',
    fontSize:20,
    width:100,
    height:100,
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text1:{
    color:'red',
    fontSize:20,
    width:100,
    height:100,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text2:{
    color:'red',
    fontSize:20,
    width:100,
    height:100,
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
