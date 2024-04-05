const {z}=require("zod");

//signup
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 characters"})
    .max(20,{message:"Name must not exceed 20 characters"}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Invalid email address"})
    .max(30,{message:"Email must not exceed 30 characters"}),
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message:"Password must be atleast 6 characters"})
    .max(30,{message:"Password must not exceed 30 characters"}),
});

module.exports = signupSchema;