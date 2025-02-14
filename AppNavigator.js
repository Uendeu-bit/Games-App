import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigation';
import DetailsScreen from './DetailsScreen';
import DetailsScreen2 from './DetailsScreen2';
import DetailsScreen3 from './DetailsScreen3';
import DetailsScreen4 from './DetailsScreen4';
import DetailsScreen5 from './DetailsScreen5';
import DetailsScreen6 from './DetailsScreen6';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Super Smash Bros" component={DetailsScreen} />
      <Stack.Screen name="The Legend of Zelda Tears of the Kingdom" component={DetailsScreen2} />
      <Stack.Screen name="Mario Party Jamboree" component={DetailsScreen3} />
      <Stack.Screen name="God of War" component={DetailsScreen4} />
      <Stack.Screen name="The Last of Us Part I" component={DetailsScreen5} />
      <Stack.Screen name="Bloodborne" component={DetailsScreen6} />
    </Stack.Navigator>
  );
};

export default AppNavigator;