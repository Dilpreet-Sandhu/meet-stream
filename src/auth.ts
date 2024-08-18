import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { User } from "./models/userModel";
import dbConnect from "./database/connection";
import { GetUser } from "./app/actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentails",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      authorize: async (credentails) => {
        const email = credentails.email as string | undefined;
        const password = credentails.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("please provide both email and password");
        }
        await dbConnect();
        const user = await User.findOne({ email }).select("+password");

        if (!user || !user.password) {
          throw new CredentialsSignin("invalid email or password");
        }

        const isCorrectPassword = await compare(password, user.password);

        if (!isCorrectPassword) {
          throw new CredentialsSignin("wrong password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({user}) {

        await dbConnect();

        const existingUser = await User.findOne({email : user.email});

        if (!existingUser) {
            const newUser = await User.create({
                username : user.name,
                email : user.email,
                avatar : user.image,
                isHost : false,
            })
            return newUser
        }

        return existingUser
       
    },  
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({user,session}) {

        const databaseUser = await GetUser(session.user.email);


        session.user.id = databaseUser?._id;
        session.user.isHost = databaseUser.isHost;
        session.user.email = databaseUser.email;
        session.user.image = databaseUser.avatar;
        session.user.name = databaseUser.username;

        return session;
    }
  },
  pages: {
    signIn: "/sign-in",
  },
});
