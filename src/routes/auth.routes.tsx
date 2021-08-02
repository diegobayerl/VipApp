import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/home';
import Create from '../pages/create';

import Header from '../components/Header'

export default function Auth(){
    return(
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#f2f3f5" } }}>
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        header: () => <Header showgobak={false} title="VIP" />
                }}
                />

                <Screen
                    name="Create"
                    component={Create}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancell={true} showgobak={false} title="Cadastrar" />
                    }}
                />
            </Navigator>
    );
}