import React from 'react';

import Routes from './routes/index';

import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from '../src/constexts/auth';

export default function Index(){
    return (
        <NavigationContainer>
            <AuthProvider>
              <Routes /> 
            </AuthProvider>
        </NavigationContainer>
    );
}
