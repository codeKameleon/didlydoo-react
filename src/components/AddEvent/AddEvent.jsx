import './AddEvent.scss'

const AddEvent = ({addEvent}) => {
    const handleSubmit = e => {
        e.preventDefault()
        addEvent()
    }

    return(
        <form id="event-form" className="event-form">
            <input className="event-title" type="text" placeholder="Titre" required/>
            <input className="event-author" type="text" placeholder="Author" required/>
            <textarea className="event-description" type="text" placeholder="Description" required></textarea>

            <div className="event-date">
                <input className="event-date-control" type="date" placeholder="Date" required/>
                <button className="event-date-btn" type="button">Ajouter date</button>
            </div>

            <button onClick={handleSubmit}>Ajouter un évenement</button>
        </form>
    )
}

export default AddEvent;