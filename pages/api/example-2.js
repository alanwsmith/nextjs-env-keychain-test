const { execSync } = require("child_process")

export default function handler(req, res) {

    const config = process.env.CONFIG ? 
        eval(`new Object(${process.env.CONFIG})`) :
        eval(`new Object(${execSync(
            'security find-generic-password -w -a USER -s CONFIG_NAME'
        ).toString().trim()})`)
        
    res.status(200).json({
        db_user: config.db_user,
        db_pass: config.db_pass
    })

}

