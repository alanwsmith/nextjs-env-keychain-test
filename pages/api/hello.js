var keychain = require('keychain');

export default function handler(req, res) {
    if (process.env.ENVIRONMENT === 'production') {
        res.status(200).json({ 
            environment: 'production',
            test_var: process.env.TEST_VAR
        })
    }
    if (process.env.ENVIRONMENT === 'development') {
        keychain.getPassword(
            { account: 'alans', service: 'alans--TEST--not-a-password'}, 
            function(err, test_var) { 
                res.status(200).json({ 
                    environment: 'development',
                    test_var: test_var,
                })
            }
        )
    }
}

