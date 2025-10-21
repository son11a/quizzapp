import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';

export default function Potter() {
  const [repositories, setRepositories] = useState([]);
  const [value, setValue] = useState('');
  const [questionIndex, setQuestionIndex] = useState(null);
  const [housee, setHouse] = useState('');
  useEffect(() => {
  fetch(`https://hp-api.onrender.com/api/characters`)
  .then(response => {
    if (!response.ok)
      throw new Error("Error in fetch:" + response.statusText);
      
    return response.json()
  })
  .then((data) => {

    const filteredData = data.filter(character => character.house && character.house.trim() !== '');
        setRepositories(filteredData);
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        setQuestionIndex(randomIndex);
        setHouse(filteredData[randomIndex].house)
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
      value !== '' && 
      repositories.length > 0 &&
      questionIndex !== null &&
      value === repositories[questionIndex].house
    ) {
      Alert.alert('Correct!');
    }
  }, [value]);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/clouds.jpg')} resizeMode="cover" style={styles.image}>

<Text style={{marginBottom: 20, fontSize: 20}}>Harry Potter Houses Quizz</Text>
{repositories.length > 0 && questionIndex !== null ? (
        <View>
        <Text>{repositories[questionIndex].name}</Text>
      <Picker
       selectedValue={value}
  style={{ height: 50, width: 200 }}
  onValueChange={(itemValue, itemIndex) =>
    setValue(itemValue)
   
  }
      >
        <Picker.Item label='Select an answer...' value='' />
<Picker.Item label='Gryffindor' value='Gryffindor' />
  <Picker.Item label='Ravenclaw' value='Ravenclaw' />
<Picker.Item label='Hufflepuff' value='Hufflepuff' />
<Picker.Item label='Slytherin' value='Slytherin' />
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

