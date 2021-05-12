import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    text: string;
    href: string;
}

export default function Button({text, href}: ButtonProps) {
    return (
        <Link href={href}>
            <a href="" className="bg-primary block py-3 px-9 rounded text-gray-900">
                {text}
            </a>
        </Link>
    )
}
