const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next)=>{
    const token = req.header('Authorization');

    if(!token){

        return res.status(401).json({message:"Unauthorized HTTP"});

    }

    const jwtToken=token.replace('Bearer','').trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log(isVerified);
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized HTTP"});

    }

    
};

module.exports = authMiddleware;