import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';

export default function Multiple() {
  const [repositories, setRepositories] = useState([]);
  const [value, setValue] = useState('');
  const [questionIndex, setQuestionIndex] = useState(null);
  useEffect(() => {
  fetch(`https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json`)
  .then(response => {
    if (!response.ok)
      throw new Error("Error in fetch:" + response.statusText);
      
    return response.json()
  })
  .then((data) => {
        setRepositories(data);
        
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuestionIndex(randomIndex);
      })
  .catch(err => console.error(err));  
    }, []);


const buttonPressed = () => {
  const randomIndex = Math.floor(Math.random() * repositories.length);
        setQuestionIndex(randomIndex);
        setValue('');
        
};

  useEffect(() => {
    if (
      value && 
      repositories.length > 0 &&
      questionIndex !== null &&
      value === repositories[questionIndex].answer
    ) {
      Alert.alert('Correct!');
    }
  }, [value]);


  return (
    <View style={styles.container}>
       <ImageBackground source={require('./images/clouds.jpg')} resizeMode="cover" style={styles.image}>
<Text style={{marginBottom: 20, fontSize: 20}}>Random Multiple Choice Questions</Text>

{repositories.length > 0 && questionIndex !== null ? (
        <View>
        <Text>{repositories[questionIndex].question}</Text>
      <Picker
       selectedValue={value}
  style={{ height: 50, width: 200 }}
  onValueChange={(itemValue, itemIndex) =>
    setValue(itemValue)
   
  }
      >
        <Picker.Item label='Select an answer...' value='' />
<Picker.Item label={repositories[questionIndex].A} value="A" />
  <Picker.Item label={repositories[questionIndex].B} value="B" />
<Picker.Item label={repositories[questionIndex].C} value="C" />
<Picker.Item label={repositories[questionIndex].D} value="D" />
      </Picker>
      </View>
      
      ) : (
        <Text>Loading...</Text>
      )}

      <Button onPress={buttonPressed} title="New question"
      color={'#9c4c5eff'}
      />
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
