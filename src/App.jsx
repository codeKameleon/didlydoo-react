import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm/EventForm'
import './App.scss';

const App = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `http://localhost:9000/api/events`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setEvents([...data])

                console.log('events', events)

                return data;
            } catch (err) {
                console.log(err)

                return err;
            } 
        }

        fetchData()
    },[])

    return (
        <div className="App">
            <main>
                <section className="form-section">
                    <h1>Didlydoo</h1>   

                    <EventForm />
                </section>
            </main>
        </div>
    );
}

export default App;
