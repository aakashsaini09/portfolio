import {z} from 'zod'
export const AcceptMessageSchmea = z.object({
    acceptMessage: z.boolean(),
})