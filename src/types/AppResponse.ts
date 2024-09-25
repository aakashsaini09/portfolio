import { Message } from "@/models/User";
export interface ApiResponse {
    success: boolean;
    message: string;
    isAccesptingMessages?: boolean;
    messages?: Array<Message>
}