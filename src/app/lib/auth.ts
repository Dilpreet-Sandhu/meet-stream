import { NextAuthOptions } from "next-auth";
import CreadentailsProvider from 'next-auth/providers/credentials';

export const authOptions : NextAuthOptions = {
    providers : [
        CreadentailsProvider({
            name: "sign-in",
            credentials : {
                email : {
                    label : "email",
                    type : "email",
                    placeholder : "example@example.com",
                },
                password : {
                    label : "password",
                    type :"password",
                    placeholder : "password"
                }
            },
            
        })
    ]
}