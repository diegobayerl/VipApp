import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import form from '../pages/form';
import MainTab from './tab.routes';

import Header from '../components/Header';

export default function App(){
    return(
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#f2f3f5" } }}>
                <Screen
                    name="MainTab"
                    component={MainTab}
                    options={{
                        headerShown: true,
                        header: () => <Header title="VIP" deslog={true} />
                    }}
                />
                <Screen
                    name="Details"
                    component={form}
                    options={{
                        headerShown: true,
                        header: () => <Header showgobak={true} title="VIP" />
                    }}
                />
            </Navigator>
    );
}