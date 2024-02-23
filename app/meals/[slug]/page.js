import React from 'react'
import classes from './page.module.css'
import { getDocuments, getMeal } from '@/lib/meals'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// export const metadata = {
//     title: 'Meals',
//     description: 'All Meals',
// };

// export async function generateMetadata({ params }) {
//     const meal = getMeal(params.slug);
//     const docs = getDocuments();
//     if (!meal) {
//         notFound()
//     }
//     return {
//         title: meal.title,
//         description: 'All Meals',
//     }
// };

export default async function page({ params }) {
    console.log("slugggg", params.slug)
    const meal = getMeal(params.slug)
    const docs =await getDocuments("65d90914512b2dd82dddfbc2ؤ");
    console.log("wdsafdw", docs)
    if (!meal) {
        notFound()
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    {/* <h1>{meal.title}</h1> */}
                    <h1>{docs.title}</h1>
                    <p className={classes.creator}> by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header >
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
            </main>
        </>
    )
}
