import * as nodemailer from 'nodemailer';
import  template  from './templateEmail'


class SendEmail{
    public async transport(){
        
    }

    public  sendMail = ( async (req:any,token:string) => {
        let addressNoticationTrans=[];
        addressNoticationTrans.push(req.email)
        console.log(addressNoticationTrans)
        const transport =  nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'admin@kiero.co',
                pass: 'Kiero2011'
            } 
        }) 
        const mailOptions = {
            from: 'admin@kiero.co',
            to: JSON.stringify(addressNoticationTrans),
            subject: 'Kiero | Cambiar contraseña Kiero',
            html: template.sendEmail(req,token)
        };
        const result =  transport.sendMail(mailOptions);
        return result;
    })


}
const sendEmail = new SendEmail();
export default sendEmail;
