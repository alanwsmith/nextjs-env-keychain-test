import Link from 'next/link'

export default function Home() {
  return (
    <>
      <p>
        This is the test site to verify the process of storing environmental
        variables in macOS&apos;s Keychain Access app during local development
        of a Nextjs app then switching to stored ENV variables automatically
        when moving to production. The goal is to avoid storing credentails in
        plaintext files during development.
      </p>
      <p>
        The output of each of these examples is pulled from Envoirnment
        variables set in the Netlify web GUI.
      </p>
      <ul>
        <li>
          <Link href="/api/example-1">
            <a>Example 1 - Single Variable Storage</a>
          </Link>
        </li>
        <li>
          <Link href="/api/example-2">
            <a>Example 2 - Multiple Variable Storage</a>
          </Link>
        </li>
      </ul>
      <p>
        Details on the setup are{' '}
        <a href="https://www.alanwsmith.com/storing-local-environmental-variables-securely-in-password-managers-instead-of-plaintext-env-files">
          here
        </a>
      </p>
      <p>
        The code is stored in{' '}
        <a href="https://github.com/alanwsmith/nextjs-env-keychain-test">
          this repo
        </a>
      </p>
      <p>
        If you&apos;d like to reach out, I&apos;m{' '}
        <a href="https://twitter.com/TheIdOfAlan">TheIdOfAlan</a> on Twitter.
      </p>
    </>
  )
}
