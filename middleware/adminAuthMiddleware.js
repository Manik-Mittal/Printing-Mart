
export const adminAuth = (req,res,next) => {
    if(req.user && req.user.email.includes('@admin')){
        next();
    }
    else {
        res.status(404).json({
            success:false,
            message:"Unauthorised Admin Access"
        });
    }
}