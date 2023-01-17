import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopicChoices, fetchTopics } from "./dataAccess.js"
import { PenPals } from "./PenPals.js"


export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRecipients()
    .then(() => fetchAuthors())
    .then(() => fetchLetters())
    .then(() => fetchTopicChoices())
    .then(() => fetchTopics())
    .then(
        () => {
            mainContainer.innerHTML = PenPals()
        }
    )
}
render()

mainContainer.addEventListener(
    "stateChanged", 
    () => {
        render();
    }
)
