import React, { useState } from 'react';
import { useFetchData } from '../fetch/FetchData';

export default function Calender() {

    const {data, error} = useFetchData();
    const [windowOutput, setWindowOutput] = useState(false);
    const [clickedCards, setClickedCards] = useState(new Set());
    const [shuffledData, setShuffledData] = useState([]);
    const [shuffled, setShuffled] = useState(false);

    if (!shuffled && data && data.length > 0) {
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        setShuffledData(shuffledArray);
        setShuffled(true);
    }

    const handleCardClick = (event, item) =>{
        event.currentTarget.classList.add('clicked');
        setWindowOutput(item);
        setClickedCards((prev) => new Set(prev).add(item.id));
    }

    if (error) {
        return <div>Error: {error}</div> 
    }

    return (
        <div className="calender-layout">
            {shuffledData && shuffledData.map((item) => {
                const isClicked = clickedCards.has(item.id);
                return(
                    <div  
                    className={`cards ${isClicked ? 'clicked' : ''}`}  
                    key={item.day} 
                    onClick={(event) => handleCardClick(event, item)}
                    >
                        <h1>{item.day}</h1>
                    </div>
                )}
            )}

            {windowOutput && (
                <div className="window-output" onClick={() => setWindowOutput(null)}>
                    <div className="window-card">
                        <div className='window-top'>
                            <h1>{windowOutput.day}</h1>
                            <div className='window-song'>
                                <p id='trackName'>{windowOutput.trackName}</p>
                                <p id='artist' >{windowOutput.artist}</p>
                            </div>
                        </div>

                        {windowOutput.spotifyLink && (
                            <iframe
                                src={`https://open.spotify.com/embed/track/${windowOutput.spotifyLink.split('/').pop()}`}
                                allow="encrypted-media; autoplay"
                                height="80"
                                title="Spotify Player"
                            ></iframe>
                        )}
                        
                        <div className='window-bottom'>
                            <p>{windowOutput.text}</p>
                        </div>
                    </div>
                
                </div>
            )}
        </div>
    );
      
}
