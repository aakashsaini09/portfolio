import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from 'bcryptjs'
import { sendVerificationEmail } from "@/helpers/sendVerificationMail";

export async function POST(request: Request) {
    await dbConnect()
        try {
            const {username, email, password} = await request.json()
            const existingUserVerifiedByUsername = await UserModel.findOne({
                username, isVerified: true
            })
            if(existingUserVerifiedByUsername){
                return Response.json({
                    success: false,
                    message: "Username is already taken",
                }, {status: 400})
            }
            const existingUserByEmail = await UserModel.findOne({email})
            const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
            if(existingUserByEmail){
                return Response.json({
                    success: false,
                    message: "Email is already taken"
                })
            }else{
                let hashPassword = await bcrypt.hash(password, 10);
                const expiryDate = new Date()
                expiryDate.setHours(expiryDate.getHours() + 1);
                const newUser = new UserModel({
                    username,
                    email,
                    password: hashPassword,
                    verifyCode,
                    isVerified: false,
                    verifyExpiry: expiryDate,
                    isAcceptingMessage: true,
                    message: []
                })
                await newUser.save()
            }
            
        } catch (err) {
            console.error("Error while signUP", err)
            return Response.json(
                {
                    success: false, 
                    message: "Error registering user"
                },
                { 
                    status: 500
                })
        }
    
    
}