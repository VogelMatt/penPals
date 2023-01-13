import { letterBox } from "./letters.js"
import { letterTopics } from "./topics.js"
import { letterRecipients } from "./recipients.js"
import { letterAuthors } from "./authors.js"
import { postLetters } from "./dataAccess.js"


export const letterForm = () => {
    let html = `
        <article>
            <section class="field">
            <label class="label" for="authorContent">Author</label>            
                    ${letterAuthors()}            
            </section>
            
            <section class="field">
                <label class="label" for="letterContent">Letter</label>
                    ${letterBox()}
            </section>

            <section class="field">
                <label class="label" for="topics">Topics</label>
                    ${letterTopics()}
            </section>
            <section class="field">
                <label class="label" for="recipients">Recipients</label>
                    ${letterRecipients()}            
            </section>
            <section>
                <br><button type="button" id="submitRequest">Submit</button> 
            </section>
        
        </article>         
        `

    return html
}

// ${letterRecipients()}



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const letterAuthor = document.querySelector("select[name='author']").value
        const letterBodyInput = document.querySelector("textarea[name='letterContent']").value
        const letterRecipient = document.querySelector("select[name='recipient']").value
        const letterTopic = document.querySelector("input[name='topic']:checked").id
        // const dateCreated = date.now()
        // Make an object out of the user input
        const dataToSendToSave = {
            letterBody: letterBodyInput,
            date_created: Date.now(),
            authorId: letterAuthor,
            recipientId: letterRecipient,
            topicId: letterTopic
        }

        console.log(dataToSendToSave)
        // Send the data to the API for permanent storage
        postLetters(dataToSendToSave)
    }
})