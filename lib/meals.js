import fs from 'node:fs'
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from 'xss';
const db = sql('meals.db');



export async function getDocuments() {
    let data = await fetch(`http://66.29.149.18:3000/api/v1/navItem`);
    let dd = await data.json()
    return dd.data.Document[0];
}
export async function getMeals() {
    await new Promise((reslove) => { setTimeout(reslove, 5000) })
    return db.prepare('select * from meals').all();
}

export function getMeal(slug) {
    console.log("first", slug)
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug);

}


export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.WriteStream(`public/images/${fileName}`);
    const bufferImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage), (error) => {
        if (error) {
            throw new Error('saving image failed')
        }
    })

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals (
            slug, title,image, summary,instructions,creator,creator_email
        ) 
        VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
        )

    `).run(meal)

}