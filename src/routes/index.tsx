import React, {useContext} from 'react';
import { View, ActivityIndicator  } from 'react-native';

import AuthContext from '../constexts/auth';


import Auth from './auth.routes';
import App from './app.routes';

export default function Routes(){
    const { Signed, load } = useContext(AuthContext);

    if(load){
        return(
            <View  style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size='small' color='#D13438' />
            </View>
        )
    }

    return Signed ? <App /> : <Auth />
}