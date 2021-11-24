
import React, { useRef } from 'react';
import './EventForm.scss'

const EventForm = () => {
    const nameRef = useRef();
    const authorRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    const addEvent = (e) => {
        e.preventDefault()

        const name = nameRef.current.value;
        const author = authorRef.current.value;
        const description = descriptionRef.current.value;
        const date = dateRef.current.value

        if(name === "" || author === "" || description === "" || date === "") return;

        if(name !== "" && author !== "" && description !== "" && date !== "") {
            (async function postEvent () {
                const data = {
                    name: name ,
                    author: author,
                    description: description,
                    dates: [date],
                }
        
                const url = `http://localhost:9000/api/events`;
        
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
        
                try {
                    const response = await fetch(url, options);
                    const event = await response.json();
        
                    return event;
                } catch (err) {
                    console.log(err)
        
                    return err;
                }
            })()

        }

    }

    return(
        <form id="event-form" className="event-form">
            <input ref={nameRef} className="event-title" type="text" placeholder="Titre" required/>
            <input ref={authorRef} className="event-author" type="text" placeholder="Author" required/>
            <textarea ref={descriptionRef} className="event-description" type="text" placeholder="Description" required></textarea>

            <div className="event-date">
                <input ref={dateRef} className="event-date-control" type="date" placeholder="Date" required/>
                <button className="event-date-btn" type="button">Ajouter date</button>
            </div>

            <button onClick={addEvent} >Ajouter un évenement</button>
        </form>
    )
}

export default EventForm;