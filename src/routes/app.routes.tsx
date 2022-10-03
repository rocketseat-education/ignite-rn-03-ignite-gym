import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Profile } from '@screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen 
        name='home'
        component={Home}
      />

      <Screen 
        name='history'
        component={History}
      />

      <Screen 
        name='profile'
        component={Profile}
      />

      <Screen 
        name='exercise'
        component={Exercise}
      />
    </Navigator>
  );
}