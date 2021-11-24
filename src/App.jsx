import React, { useState, useEffect } from 'react';
import AddEvent from './components/AddEvent/AddEvent'
import './App.scss';

const App = () => {
    const [events, setEvents] = useState([])

    async function postEvent () {
        const data = {
            name: 'Event 1',
            dates : ['2021-11-24', '2021-11-25', '2021-11-26'],
            author: 'Axel Tavormina',
            description: 'my first event'
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
            console.log('event', event)

            return event;
        } catch (err) {
            console.log(err)

            return err;
        }
    }

    useEffect(async() => {
        const url = `http://localhost:9000/api/events`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setEvents([...data])

            return data;
        } catch (err) {
            console.log(err)

            return err;
        } 
    },[])

    console.log('events', events)

    return (
        <div className="App">
            <main>
                <section className="form-section">
                    <h1>Didlydoo</h1>   

                    <AddEvent addEvent={postEvent}/>
                </section>
            </main>
        </div>
    );
}

export default App;
