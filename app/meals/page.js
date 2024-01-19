import Link from 'next/link'
import React from 'react'

export default function MealsPage() {
    return (
        <main>
            <h1>MealsPage</h1>
            <p><Link href="/meals/meal1">meal1</Link></p>
            <p><Link href="/meals/meal2">meal2</Link></p>
        </main>
    )
}
