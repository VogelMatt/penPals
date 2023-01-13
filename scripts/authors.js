import { getAuthors } from "./dataAccess.js"


// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "author") {
//             setAuthorId(parseInt(event.target.value))
//         }
//     }
//     )
    
export const letterAuthors = () => {
    const authors = getAuthors()
    let html = `<select name="author">
    <option>Choose Author</option>`


    // Use .map() for converting objects to <li> elements
    const listItemsArray = authors.map(
        (author) => {
            return `<option value="${author.id}">${author.name}</option>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += `</select>`
    
    return html
}