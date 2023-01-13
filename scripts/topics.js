import { getTopics } from "./dataAccess.js"


// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "topic") {
//             setTopicId(parseInt(event.target.value))
//         }
//     }
//     )
    
export const letterTopics = () => {
    const topics = getTopics()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = topics.map(
        (topic) => {
            return `<li>
            <input type="radio" name="topic" id="${topic.id}"> ${topic.name}</input>
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}