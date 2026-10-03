import { useState } from 'react'

function Watchlist() {

    const [show, setShow] = useState([]);
    const [newShow, setNewShow] = useState("");
    const [nextId, setNextId] = useState(1);

    function handleInputChange(event) {
        setNewShow(event.target.value);
    }

    function addShow(event) {
        event.preventDefault();
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
        <ol className="p-0">
            {shows.map((item) =>
                <li
                    key={item.id}
                    className={`mb-[10px] mx-[10%] flex items-center rounded-[5px] border-[3px] border-[hsla(0,0%,85%,0.75)] p-[15px] text-[2rem] font-bold ${
                        item.watched ? "bg-[hsla(0,0%,97%,0.7)]" : "bg-[hsl(0_0%_97%)]"
                    }`}
                >
                    <span
                        className={`ml-[8px] flex-1 ${item.watched ? "line-through" : ""}`}
                    >
                        {item.title}
                    </span>

                    <label className="group relative ml-[10px] inline-block h-[34px] w-[34px] cursor-pointer align-middle">
                        <input
                            className="peer absolute h-0 w-0 cursor-pointer opacity-0"
                            type="checkbox"
                            checked={item.watched}
                            onChange={() => toggleWatched(item.id)}
                        />
                        <span className="absolute left-0 top-0 box-border h-[34px] w-[34px] rounded-[4px] border-2 border-[#ccc] bg-[#eee] transition-all duration-200 after:absolute after:left-[10px] after:top-[5px] after:hidden after:h-[16px] after:w-[9px] after:rotate-45 after:border-b-[4px] after:border-r-[4px] after:border-white after:content-[''] group-hover:bg-[#ddd] peer-checked:border-[#4CAF50] peer-checked:bg-[#4CAF50] peer-checked:after:block"></span>
                    </label>
                    <button
                        className="ml-[12px] grid h-[34px] w-[34px] cursor-pointer place-items-center rounded-[5px] bg-[#dc2626] p-[6px] text-white transition-colors duration-200 hover:bg-[#b91c1c]"
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
                            className="h-full w-full"
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
        <div className="min-h-screen bg-[hsl(236_100%_6%)] pt-[100px] text-center font-['Comic_Sans_MS','Comic_Sans',cursive]">

            <h1 className="text-[4rem] text-[hsl(0,0%,100%)]">My Watchlist</h1>

            <form onSubmit={addShow}>
                <input 
                    className="rounded-[5px] border-2 border-[hsla(0,0%,80%,0.5)] bg-white p-[10px] text-[1.6rem] text-[hsla(0,0%,0%,0.5)]"
                    type="text"
                    placeholder="Enter a show to add"
                    value={newShow}
                    onChange={handleInputChange}/>
                <button 
                    className="cursor-pointer rounded-[5px] border-0 bg-[hsl(125,57%,50%)] px-[20px] py-[10px] text-[1.7rem] font-bold text-white transition-colors duration-500 hover:bg-[hsl(125,57%,35%)]"
                    type="submit">Add Show
                </button>
            </form>

            <h2 className="flex items-center gap-4 text-[2.5rem] text-white opacity-50 before:ml-[10%] before:flex-1 before:border-t before:border-white/50 before:content-[''] after:mr-[10%] after:flex-1 after:border-t after:border-white/50 after:content-['']">To Watch</h2>
            {renderShows(show.filter((item) => !item.watched))}

            <h2 className="flex items-center gap-4 text-[2.5rem] text-white opacity-50 before:ml-[10%] before:flex-1 before:border-t before:border-white/50 before:content-[''] after:mr-[10%] after:flex-1 after:border-t after:border-white/50 after:content-['']">Watched</h2>
            {renderShows(show.filter((item) => item.watched))}

        </div>
    );
}

export default Watchlist