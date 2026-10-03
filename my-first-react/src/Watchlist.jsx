import React, { useState } from 'react'
import './index.css'

function Watchlist() {

    const [show, setShow] = useState([]);
    const [newShow, setNewShow] = useState("");
    const [nextId, setNextId] = useState(1);

    function handleInputChange(event) {
        setNewShow(event.target.value);
    }

    function addShow() {
        if (newShow.trim() === "") return;
        setShow([...show, { id: nextId, title: newShow.trim(), watched: false }]);
        setNextId(nextId + 1);
        setNewShow("");
    }

    function toggleWatched(id) {
        const updated = show.map((item) =>
            item.id === id ? { ...item, watched: !item.watched } : item
        );
        setShow(updated);
    }

    function deleteShow(id) {
        setShow((currentShows) => currentShows.filter((item) => item.id !== id));
    }

    const renderShows = (shows) => (
        <ol>
            {shows.map((item) =>
                <li key={item.id} className={item.watched ? "watched" : ""}>
                    <span
                        className="text"
                        style={{
                            textDecoration: item.watched ? "line-through" : "none",
                            marginLeft: "8px"
                        }}>
                        {item.title}
                    </span>

                    <label className="checkmark-container">
                        <input
                            type="checkbox"
                            checked={item.watched}
                            onChange={() => toggleWatched(item.id)}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <button
                        className="delete-button"
                        type="button"
                        aria-label={`Delete ${item.title}`}
                        onClick={() => deleteShow(item.id)}
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="m19 6-1 14H6L5 6" />
                            <path d="M10 11v5M14 11v5" />
                        </svg>
                    </button>
                </li>
            )}
        </ol>
    );

    return(
        <div className="watchlist">

            <h1>My Watchlist</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a show to add"
                    value={newShow}
                    onChange={handleInputChange}/>
                <button 
                    className="add-button"
                    onClick={addShow}>Add Show
                </button>
            </div>

            <h2>To Watch</h2>
            {renderShows(show.filter((item) => !item.watched))}

            <h2>Watched</h2>
            {renderShows(show.filter((item) => item.watched))}

        </div>
    );
}

export default Watchlist