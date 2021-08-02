import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foorter from '../components/Footer'
import Request from '../pages/requests'
import Drinks from '../pages/drink';
import Promo from '../pages/promo';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
     tabBar={ (props) => <Foorter />}
    >   
        <Tab.Screen name="Drinks" component={Drinks} />
        <Tab.Screen  name="Promo" component={Promo} />
        <Tab.Screen name="Request" component={Request} />
    </Tab.Navigator>
)