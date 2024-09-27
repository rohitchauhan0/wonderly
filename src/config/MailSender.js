// import nodemailer from "nodemailer"
// require('dotenv').config()

// export const mailSender = async(email, title, body)=>{
//     try {
//         let transporter = nodemailer.createTransport({
//             host:process.env.MAIL_HOST,
//             auth:{
//                 user:process.env.MAIL_USER,
//                 pass:process.env.MAIL_PASS
//             }
//         })

//         let infor = await transporter.sendMail({
//             from:"Blackensys",
//             to:`${email}`,
//             subject:`${title}`,
//             html:`${body}`
//         })
//     } catch (error) {
//         console.log(error)
        
//     }
// }