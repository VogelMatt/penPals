import { getTopics } from "./dataAccess.js"



    
export const letterTopics = () => {
    const topics = getTopics()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = topics.map(
        (topic) => {
            return `<li>
            <input type="checkbox" name="topic" id="${topic.id}"> ${topic.name}</input>
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}