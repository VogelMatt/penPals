import { mainContainer } from "./main.js"

//stored data from json//
const applicationState = {
    letters: [],
    topics: [],
    recipients: [],
    authors: [],
    topicChoices: []
}

const API = "http://localhost:8088"

//////////////////////////////////////////////////////////////////////////////////////////////
//        LETTERS         //
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letter) => {
                applicationState.letters = letter
            }
        )
}
//-----------------------------------------------------------------
export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}
//------------------------------------------------------------------
export const postLetters = (dataToSendToSave) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSendToSave)
    }
    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(jResponse => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            return jResponse
        })
}


////////////////////////////////////////////////////////////////////////////////////
//         TOPICS          //
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topic) => {
                applicationState.topics = topic
            }
        )
}
//----------------------------------------------------------------
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}


/////////////////////////////////////////////////////////////////////////////////////////////
//  TOPIC CHOICES    //
export const fetchTopicChoices = () => {
    return fetch(`${API}/topicChoices?_expand=topic`)
        .then(response => response.json())
        .then(
            (topic) => {
                applicationState.topicChoices = topic
            }
        )
}
export const getTopicChoices = () => {
    return applicationState.topicChoices.map(topicChoices => ({...topicChoices}))
}

export const postTopics = (dataToSendToSave) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSendToSave)
    }
    return fetch(`${API}/topicChoices`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


////////////////////////////////////////////////////////////////////////////////////////////////
//        RECIPIENTS      //
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipient) => {
                applicationState.recipients = recipient
            }
        )
}
//------------------------------------------------------------------------------------------------
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//       AUTHORS          //
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (author) => {
                applicationState.authors = author
            }
        )
}
//-----------------------------------------------------------------------------------------------
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////












