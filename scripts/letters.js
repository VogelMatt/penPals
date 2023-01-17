import { getAuthors, getLetters, getTopics, getRecipients, getTopicChoices} from "./dataAccess.js"
    
    
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
    const allChoices = getTopicChoices();
    

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
    const findTopicChoices = allChoices.filter(
        (choice) => {
            return choice.letterId === letter.id
        }
    )
        return `<div>Dear 
            ${
                allRecipients.map(recipient => {
                    if(recipient === foundRecipient) {
                        return `${recipient.name} ${recipient.email}`
                    }
                }).join("") 
                }
                <br>
            ${letter.letterBody}
            <br>   
            ${
                findTopicChoices.map(choice => {
                        return `${choice.topic.name}`
                    }
                ).join(" ")
            } 
            <br> love,
            ${
                allAuthors.map(author => {
                    if(author === foundAuthor) {
                        return `${author.name} (${author.email})`
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
