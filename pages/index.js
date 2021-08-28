import Link from 'next/link'

export default function Home() {
    return (
        <>
        <div>
            <Link href="/api/example-1">
                <a>Example 1</a>
            </Link>
        <br />
            <Link href="/api/example-2">
                <a>Example 2</a>
            </Link>
        </div>
        <p>
These examples show how to use the macOS Keychain
App during local development to store environmental
variables while switching to standard ones in production. 
This provides a way to do local development without
storing passwords in plaintext files. 
        </p>
        <a href="https://github.com/alanwsmith/nextjs-env-keychain-test">Repo</a>
        </>
    )
}
