import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
export default function Personality() {
  
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
const [question3, setQuestion3] = useState('')
const [question4, setQuestion4] = useState('')
const [question5, setQuestion5] = useState('')
const [question6, setQuestion6] = useState('')
  const [answer, setAnswer] = useState("")

  const points = () => {
let extropoints = 0;
let intropoints = 0;
if(question1 === "A"){
extropoints++;
}
else if(question1 === "B"){
  intropoints++;
}

if(question2 === "A"){
extropoints++;
}
else if(question2 === "B"){
  intropoints++;
}

if(question3 === "B"){
extropoints++;
}
else if(question3 === "A"){
  intropoints++;
}

if(question4 === "B"){
extropoints++;
}
else if(question4 === "A"){
  intropoints++;
}

if(question5 === "B"){
extropoints++;
}
else if(question5 === "A"){
  intropoints++;
}

if(question6 === "B"){
extropoints++;
}
else if(question6 === "A"){
  intropoints++;
}

if(extropoints > intropoints){
setAnswer("You're an extrovert.")
}
else if(intropoints > extropoints){
  setAnswer("You're an introvert.")
}
else if(extropoints === intropoints){
  setAnswer("You're an ambivert.")
}


}


return (
    <View style={styles.container}>
       <ImageBackground source={require('./images/clouds.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={{marginBottom: 20, fontSize: 20}}>Personality Quizz</Text>
     
     <View style={{marginLeft: 30, marginRight: 30}}>
      <Text>1. A good Saturday evening for you is? </Text>
      <Picker
  selectedValue={question1}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
    
    setQuestion1(itemValue)
  }>
   <Picker.Item label="Select an answer..." value="" />
        <Picker.Item label="A night out with friends." value="A" />
        <Picker.Item label="Home reading a book or watching a movie." value="B" />
</Picker>

<Text>2. Do you easily approach new people?
 </Text>
      <Picker
  selectedValue={question2}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
    
    setQuestion2(itemValue)
  }>
   <Picker.Item label="Select an answer..." value="" />
        <Picker.Item label="Yes." value="A" />
        <Picker.Item label="No." value="B" />
</Picker>

<Text>3. How do you get inspired?
 </Text>
      <Picker
  selectedValue={question3}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
    
    setQuestion3(itemValue)
  }>
   <Picker.Item label="Select an answer..." value="" />
        <Picker.Item label="Meditating." value="A" />
        <Picker.Item label="A good conversation." value="B" />
</Picker>

<Text>4. At social gatherings what's typical for you to do?
 </Text>
      <Picker
  selectedValue={question4}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
    
    setQuestion4(itemValue)
  }>
   <Picker.Item label="Select an answer..." value="" />
        <Picker.Item label="Go to the people I know." value="A" />
        <Picker.Item label="Try to get to know new people." value="B" />
</Picker>

<Text>5. After social gathering’s how do you usually feel?
 </Text>
      <Picker
  selectedValue={question5}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
    
    setQuestion5(itemValue)
  }>
   <Picker.Item label="Select an answer..." value="" />
        <Picker.Item label="Drained and needing for alone time." value="A" />
        <Picker.Item label="Energized and inspired." value="B" />
</Picker>

<Text>6. Do you often focus more on your internal thoughts rather than the outside world?
 </Text>
      <Picker
  selectedValue={question6}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
    
    setQuestion6(itemValue)
  }>
   <Picker.Item label="Select an answer..." value="" />
        <Picker.Item label="Yes." value="A" />
        <Picker.Item label="No." value="B" />
</Picker>
</View>
<Button title="Get Result" onPress={points} color={'#9c4c5eff'}/>
<Text style={{marginTop: 20}}>{answer}</Text>

      <StatusBar style="auto" />
       </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
