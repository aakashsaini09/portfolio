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
            const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
            const existingUserByEmail = await UserModel.findOne({email})
            if(existingUserByEmail){
                if(existingUserByEmail.isVerified){
                    return Response.json({
                        success: false,
                        message: "User already exist with this email.",

                    }, {status: 400})
                }else{
                    const hashedPassword = await bcrypt.hash(password, 10)
                }
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
            // Send verification email
            const emailResponse = await sendVerificationEmail(
                email, username, verifyCode
            )
            if(!emailResponse.success){
                return Response.json({
                    success: false,
                    message: emailResponse.message
                }, {status: 500})
            }
            return Response.json({
                success: true,
                message: "User registered successfully. Please verify your email"
            }, {status: 201})
            
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