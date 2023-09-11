import React, { useState } from 'react';

function Todo() {
  const [tiles, setTiles] = useState([
    { id: 1, image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', revealed: false },
    { id: 2, image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', revealed: false },
    { id: 3, image: 'https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.webp?b=1&s=612x612&w=0&k=20&c=S-JC0LTYfw-lIgO-O1RvUIq3DXKUzsGNG8qumxFJ1JU=', revealed: false } // Matching image
  ]);

  const [message, setMessage] = useState('');

  const handleClick = (id) => {
    const updatedTiles = tiles.map((tile) =>
      tile.id === id ? { ...tile, revealed: true } : tile
    );
    setTiles(updatedTiles);

    const revealedTiles = updatedTiles.filter((tile) => tile.revealed);
    if (revealedTiles.length === 2) {
      if (revealedTiles[0].image === revealedTiles[1].image) {
        setMessage('You won!');
      } else {
        setMessage('Try again');
      }
    } else {
      setMessage('');
    }
  };

  const handleReset = () => {
    setTiles(tiles.map((tile) => ({ ...tile, revealed: false })));
    setMessage('');
  };

  return (
    <div className="App">
      <div className="tiles">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`tile ${tile.revealed ? 'revealed' : ''}`}
            onClick={() => handleClick(tile.id)}
          >
            {tile.revealed && <img src={tile.image} alt="Tile" />}
          </div>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Todo;
