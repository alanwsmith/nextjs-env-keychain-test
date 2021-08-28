const { execSync } = require("child_process")

export default function handler(req, res) {

    const password1 = process.env.ENVIRONMENT === 'production' ? 
        process.env.PASSWORD_1 : 
        execSync('security find-generic-password -w -a USERNAME -s PASSWORD1_NAME').toString().trim()

    res.status(200).json( 
        { 
            password1: password1
        }
    )

}

