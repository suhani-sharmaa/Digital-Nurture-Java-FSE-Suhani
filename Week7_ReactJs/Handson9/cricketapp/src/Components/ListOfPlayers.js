import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 65 },
    { name: "Kohli", score: 45 },
    { name: "Hardik", score: 90 },
    { name: "Jadeja", score: 73 },
    { name: "Pant", score: 56 },
    { name: "Rahul", score: 89 },
    { name: "Shami", score: 42 },
    { name: "Bumrah", score: 91 },
    { name: "Gill", score: 77 }
  ];

  const filtered = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h2>Filtered Players (Score ≥ 70)</h2>
      <ul>
        {filtered.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
