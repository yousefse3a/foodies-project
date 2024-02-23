import Link from 'next/link'
import React, { Suspense } from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/MealsGrid/MealsGrid'
import { getMeals } from '@/lib/meals'
import LoadingOut from './loadingOut'
export async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}
export default async function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals created <span> by you</span>
                </h1>
                <p>
                    choose your favorite recipe and cook it yourself. it is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>
                        Share Your Favouirte Recipe
                    </Link>
                </p>
                <main className={classes.main}>
                    <Suspense fallback={<LoadingOut />}>
                        <Meals />
                    </Suspense>

                </main>
            </header>
        </>
    )
}
