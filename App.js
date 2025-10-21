import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Personality from './Personality';
import Potter from './Potter';
import Multiple from './Multiple';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
 <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({  // Navigator can be customized using screenOptions
          tabBarIcon: ({ focused, color, size }) => { 
            // Function tabBarIcon is given the focused state,
	    // color and size params
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Personality') {
              iconName = 'person-circle';
            } else if (route.name === 'Harry Potter') {
              iconName = 'book';
            }
            else if (route.name === 'Multiple Choice') {
              iconName = 'help-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;   //it returns an icon component
          },
          tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Personality" component={Personality} />
          <Tab.Screen name="Harry Potter" component={Potter} />
      <Tab.Screen name="Multiple Choice" component={Multiple} />
      </Tab.Navigator>
    </NavigationContainer>
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
