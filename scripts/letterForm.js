import { letterBox } from "./letters.js"
import { letterTopics } from "./topics.js"
import { letterRecipients } from "./recipients.js"
import { letterAuthors } from "./authors.js"
import { postLetters } from "./dataAccess.js"
import { postTopics } from "./dataAccess.js"

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





const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const letterAuthor = document.querySelector("select[name='author']").value
        const letterBodyInput = document.querySelector("textarea[name='letterContent']").value
        const letterRecipient = document.querySelector("select[name='recipient']").value
        const letterTopics = document.querySelectorAll("input[name='topic']:checked")
        let topicIds = [];
        letterTopics.forEach((element) => {         
            topicIds.push(parseInt(element.id))
       });
        // const dateCreated = date.now()
        // Make an object out of the user input
        const dataToSendToSave = {
            letterBody: letterBodyInput,
            date_created: Date.now(),
            authorId: letterAuthor,
            recipientId: letterRecipient
        }
        const topicsToSave = {
            topicChoices: letterTopics
        }
        // Send the data to the API for permanent storage
        let tempResponse = postLetters(dataToSendToSave).then((res) => {
            let topicChoicesArr = topicIds.map(id => {
                return {                    
                    letterId: res.id,
                    topicId: id
                }                
            })
            
            topicChoicesArr.forEach(topicChoice => postTopics(topicChoice));
            
            
            console.log(res.id)
            console.log(topicChoicesArr)
        })
    
        
    }
})
