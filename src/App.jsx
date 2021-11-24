import './App.scss';

function App() {
  return (
    <div className="App">
      <main>
        <section className="form-section">
            <h1>Didlydoo</h1>   
            
            <form id="event-form" className="event-form" action="">
                <input className="event-title" type="text" placeholder="Titre" required/>
                <input className="event-author" type="text" placeholder="Author" required/>
                <textarea className="event-description" type="text" placeholder="Description" required></textarea>

                <div className="event-date">
                    <input className="event-date-control" type="date" placeholder="Date" required/>
                    <button className="event-date-btn" type="button">Ajouter date</button>
                </div>

                <div className="selected-dates"></div>

                <button>Ajouter un évenement</button>
            </form>
        </section>

        <section className="events-section">
        </section>
    </main>
    </div>
  );
}

export default App;
