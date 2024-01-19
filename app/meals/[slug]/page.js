import React from 'react'

export default function page({ params }) {
    return (
        <main>
            <h3>meal number {params.slug}</h3>
        </main>
    )
}
