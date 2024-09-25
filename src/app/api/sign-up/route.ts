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
            if(existingUserByEmail){
                return Response.json({
                    success: false,
                    message: "Username is "
                })
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