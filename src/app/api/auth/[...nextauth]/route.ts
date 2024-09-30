// route.ts
import {NextAuthOptions, AuthOptions} from "next-auth"
import { CredentialsProvider } from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/models/User"

export const authOptions: NextAuthOptions = {
    providers: [
        
    ]
}