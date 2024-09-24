import {z} from 'zod'
export const usernameValidation = z
.string()
.min(2, "Username must beatleast 2 characters")
.max(20, "Username must not contain special character")
.regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email address"}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})
})