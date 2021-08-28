const { execSync } = require("child_process")

export default function handler(req, res) {

    const db_pass = process.env.DB_PASS ? process.env.DB_PASS : 
        execSync(
            'security find-generic-password -w -a alans -s test-nextjs-db-pass'
        ).toString().trim()

    res.status(200).json( 
        { 
            db_pass: db_pass
        }
    )

}
