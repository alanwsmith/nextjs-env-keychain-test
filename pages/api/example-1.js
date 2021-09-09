const { execSync } = require('child_process')

export default function handler(req, res) {
  const DB_USER = process.env.DB_USER
    ? process.env.DB_USER
    : execSync(
        `security find-generic-password \
            -w -a alans -s test-nextjs-db-pass`
      )
        .toString()
        .trim()

  res.status(200).send(`The user is: ${DB_USER}`)
}
