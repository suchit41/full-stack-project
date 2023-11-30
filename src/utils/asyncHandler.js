//in promise method
const asyncHandler = (requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(res,req,next)).catch((err)=>next(err))
}
}


export {asyncHandler}

//in try catch method
// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }

// }