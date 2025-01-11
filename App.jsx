import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminLogin from './Pages/AdminLogin'; 
import HrLogin from './Pages/HrLogin';
import User from './Pages/Userlogin';
import Cal from './Pages/Cal';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminLogin">
      <Stack.Screen name="Calander" component={Cal} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }} />
        <Stack.Screen name="HrLogin" component={HrLogin} options={{ headerShown: false }} />
        <Stack.Screen name="UserLogin" component={User} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
