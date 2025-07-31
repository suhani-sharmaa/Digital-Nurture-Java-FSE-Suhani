import React from 'react';

const IndianPlayers = () => {
  const allPlayers = ["Virat", "Rohit", "Dhoni", "Jadeja", "Hardik", "Gill"];

  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  const T20players = ["Surya", "Pant", "Samson"];
  const RanjiTrophy = ["Rahane", "Pujara"];
  const allCricketers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {allCricketers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
