import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Maps from './pages/Maps';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Details from './pages/Details';

import MainTab from './tabNavigation'
import Header from './components/Header'

export default function Router() {
    return (
        <NavigationContainer>
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
                    name="Logout"
                    component={Logout}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancell={true} showgobak={false} title="Cadastrar" />
                    }}
                />

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
                    component={Details}
                    options={{
                        headerShown: true,
                        header: () => <Header showgobak={true} title="VIP" />
                    }}
                />

                <Screen
                    name="Maps"
                    component={Maps}
                    options={{
                        headerShown: true,
                        header: () => <Header title="VIP" />,
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
}
