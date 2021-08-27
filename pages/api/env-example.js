const { exec } = require("child_process")

export default function handler(req, res) {

    const theEnvironment = {
        environment: process.env.ENVIRONMENT
    }

    function setEnvironmentVariable(key, value) {
        theEnvironment[key] = value
        if (theEnvironment['key1'] && theEnvironment['key2']) {
            doStuff()
        }
    }

    if (process.env.ENVIRONMENT === 'production') {
        setEnvironmentVariable('key1', process.env.KEY1)
        setEnvironmentVariable('key2', process.env.KEY2)
    }

    if (process.env.ENVIRONMENT === 'development') {
        exec(
            'security find-generic-password -w -a alans -s alans--TEST--not-a-password-1', 
            (error, stdout, stderr) => { setEnvironmentVariable('key1', stdout.trim()) }
        )
        exec(
            'security find-generic-password -w -a alans -s alans--TEST--not-a-password-2', 
            (error, stdout, stderr) => { setEnvironmentVariable('key2', stdout.trim()) }
        )
    }

    function doStuff() {
        res.status(200).json( 
            theEnvironment
        )
    }

}

