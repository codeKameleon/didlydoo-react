import AddEvent from './components/AddEvent/AddEvent'
import './App.scss';

function App() {
  return (
    <div className="App">
      <main>
        <section className="form-section">
            <h1>Didlydoo</h1>   

            <AddEvent/>
        </section>
      </main>
    </div>
  );
}

export default App;
