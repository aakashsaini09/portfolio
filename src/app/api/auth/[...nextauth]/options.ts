// cred options or providers here.
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import  bcrypt from 'bcryptjs'
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import { promises } from "dns";
import { pages } from "next/dist/build/templates/app-page";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials: any):Promise<any>{
                await dbConnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            {username: credentials.identifier},
                            {email: credentials.identifier}
                        ]
                    })
                    if(!user){
                        throw new Error("No user find with this email");
                    }
                    if(!user.isVerified){
                        throw new Error("Please verify before login");
                    }
                    const isPassword = await bcrypt.compare(credentials.password, user.password)
                    if(isPassword) {
                        return user
                    }else{
                        throw new Error("Incorrect Password");
                    }
                } catch (err: any) {
                    throw new Error(err)
                }
            }
        })
    ],
    pages: {
        signIn: '/sign-in'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}