'use server'

import { signIn } from "@/auth";
import dbConnect from "@/database/connection";
import { User } from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";


export async function signUp(formData : FormData) {
    const username = formData.get("username") as string | undefined; 
    const email = formData.get("email") as string | undefined; 
    const password = formData.get("password") as string | undefined; 
    
    if (!username || !email || !password) {
        throw new Error("please provide all the fields")
    }
    await dbConnect();

    const user = await User.findOne({email});

    if (user) {
        throw new Error("user already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await User.create({
        username,
        email,
        password : hashedPassword,
        avatar : "",
        isHost : false,
        googleId : ""
    })


    redirect("/sign-in")


}


export async function Login(formData : FormData) {

    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;

    if (!email || !password) {
        throw new Error("please provide email and  password")
    }

    await dbConnect();

    try {
        await signIn("credentials",{
            email,
            password,
        })

        redirect("/")

        
    } catch (err) {
        const error = err as CredentialsSignin;
        return error.message;
    }

}

export async function GoogleLogin() {
    try {
        await signIn("google",{
            redirect : true,
            redirectTo : "https://localhost:300/api/auth/callback/google"
        });
    } catch (error) {
        console.log(error);
    }
}


export async function GetUser(email : string) {
    try {
        await dbConnect();

        const user = await User.findOne({email}).select("-password");

        if (!user) {
            throw new Error("no user found")
        }

        return user;

    } catch (error) {
        return error;
    }
}