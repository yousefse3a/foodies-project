'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
function isInvaild(text) {
    return !text || text.trim() === '';
}
export async function shareMeal(prevState, formData) {
    console.log("prevState", prevState)
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (isInvaild(meal.title) ||
        isInvaild(meal.summary) ||
        isInvaild(meal.instructions) ||
        isInvaild(meal.creator) ||
        isInvaild(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invaild inputs'
        }
    }
    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
}