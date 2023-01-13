import { getRecipients } from "./dataAccess.js"

    
export const letterRecipients = () => {
    const recipients = getRecipients()
    let html = `<select name="recipient">
    <option>Choose Recipient</option>`


  
    const listItemsArray = recipients.map(
        (recipient) => {
            return `<option value="${recipient.id}">${recipient.name}</option>`
        }
    )


    
    html += listItemsArray.join("")
    html += `</select>`
    return html
}