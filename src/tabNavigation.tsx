import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foorter from './components/footer'
import Request from './pages/request'
import Contact from './pages/Contact';
import Drinks from './pages/Drinks';
import Gas from './pages/Gas';
import Water from './pages/Water';
import Promo from './pages/Promo';
import Menu from './pages/Menu'

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
     tabBar={ (props) => <Foorter />}>
        <Tab.Screen  name="Promo" component={Promo} />
        <Tab.Screen name="Drinks" component={Drinks} />
        <Tab.Screen name="Gas" component={Gas} />
        <Tab.Screen name="Water" component={Water} />
        <Tab.Screen name="Request" component={Request} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>

)