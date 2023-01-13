import { letterForm } from "./letterForm.js"
import { posts } from "./letters.js"


export const PenPals = () => {
    return `
        <h1>Pen Pal Society</h1>
            <article class="letterForm">
                ${letterForm()}
            </article>
        <h1>Heartfelt Letter</h1>
            <article class="posts">
                ${posts()}
            </article>
        `

        

}
