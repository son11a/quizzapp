import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./images/clouds.jpg')} resizeMode="cover" style={styles.image}>
        
    
      <Text style={{fontSize: 20, marginBottom: 30, fontWeight: 'bold'}}>Welcome to our Quizz App!</Text>
     <View style={styles.quizz}> 
     
   <Text style={styles.bold}>Personality Quizz</Text>
    <Text>A questionnaire of 6 questions to assess you on the introvert-extrovert spectrum.</Text>
   <Text style={styles.bold}>Harry Potter Houses Quizz </Text> 
   <Text>The quizz presents you with random Harry Potter characters and you need to guess the house they are in or used to belong to.</Text>
   <Text style={styles.bold}>Random Multiple Choice Questions </Text>
   <Text>The quizz presents you with random multiple choice questions. You can always select a new question to continue. The selection of questions is wide. </Text>
   </View>
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
    gap:10,
  },
  quizz: {
    gap: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

});