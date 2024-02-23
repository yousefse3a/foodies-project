'use client'
import React from 'react'

export default function error({error}) {
  console.log(error)
  return (
    <main className='error'>
        <h1> an error occurred</h1>
        <p>failed to fetch mal data . please try again later</p>
    </main>
  )
}
