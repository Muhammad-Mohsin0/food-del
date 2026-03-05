import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next)=>{
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false, message:"Not Authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        console.log("DECODED:",token_decode)
        req.user = token_decode;
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware