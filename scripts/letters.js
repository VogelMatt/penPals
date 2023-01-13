import { getAuthors, getLetters, getTopics, getRecipients} from "./dataAccess.js"
    
    
export const letterBox = () => {
    let html = `
    <textarea rows="10" input type="text" name="letterContent" class="input">
            </textarea>
        
    `

    return html
}




export const filledOutLetter  = (letter) => {
    const allAuthors = getAuthors();
    const allTopics = getTopics();
    const allRecipients = getRecipients();
    

const foundAuthor = allAuthors.find(
    (author) => {
        return author.id === parseInt(letter.authorId)
    }
)
const foundTopic = allTopics.find(
    (topic) => {
        return topic.id === parseInt(letter.topicId)
    }
)
const foundRecipient = allRecipients.find(
    (recipient) =>{
        return recipient.id === parseInt(letter.recipientId)
    }
)
    return `<div>Dear 
        ${foundRecipient.name} (${foundRecipient.email}), <br>
        ${letter.letterBody} <br> ${foundTopic.name} <br> love, 
        ${
            allAuthors.map(fart => {
                if(fart === foundAuthor) {
                    return `${fart.name} (${fart.email})`
                }
            }).join("")
        }
        <br> Sent On: ${new Date().toDateString()} <br><br> 
        </div>`




}
//foundAuthor.name foundAuthor.email 

export const posts = () => {
    let html = "<article>"
    const post = getLetters()
    const postItems = post.map(filledOutLetter)
    html += postItems.join("")
    html += "</article>"
    return html
}
