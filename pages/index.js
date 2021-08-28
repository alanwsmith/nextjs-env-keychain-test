import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Link href="/api/example">
                <a>Example</a>
            </Link>
        </div>
    )
}
