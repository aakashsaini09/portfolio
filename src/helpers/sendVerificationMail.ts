import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/AppResponse";
import VerificationEmail from "../../emails/verificationEmail";
import { url } from "inspector";

export async function sendVerificationEmail( email:string, username: string, verificationCode: string):Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: 'Feedback application Verification code',
            react: VerificationEmail({username, otp: verificationCode})
        })
        return {success: true, message: "Verification email send successfully"}
    } catch (err) {
        console.error("Error while sending verification email", err)
        return {success: false, message: "Failed to send verification email"}
    }
}