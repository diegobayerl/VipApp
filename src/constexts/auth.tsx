import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

import { Post, Get, Delete } from '../utils/database';


interface signIn {
    cpf: number;
}

interface provider {
    children: {};
}

interface Auth {
    Signed: boolean;
    user: { 
        id?: number;
        name?: string;
        cpf?: number;
    } | null;
    load: boolean;
    SignIn({cpf}: signIn): Promise<boolean>;
    SignOut(): void;
}

const AuthContext = createContext<Auth>({} as Auth);

export function AuthProvider({ children }: provider){

    const [user, setUser] = useState<object | null>(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function storege(){
            const response = await Get('@VIP:user');

            if(response){
                setUser(response);
                setLoad(false);
            }

            setLoad(false)
        }
        storege();

    }, []);

    async function SignIn({cpf}: signIn){
        const { data } = await api.get(`user?CPF=${cpf}`);

        if(data.cpf === cpf){
            setUser(data);
            await Post('@VIP:user', data);

            return true;
        }

        return false;
    }

    async function SignOut(){
        Delete('@VIP:user').then(response =>{
            setUser(null);
        });
    }

    return(
        <AuthContext.Provider value={{Signed: !!user, user, SignIn, load, SignOut}}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;