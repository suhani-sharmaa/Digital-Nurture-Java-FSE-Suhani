function Scorebelow70({ players }) {
  const filteredPlayers = players.filter(player => player.score < 70);
  return (
    <ul>
      {filteredPlayers.map((player, index) => (
        <li key={index}>
          {player.name}: {player.score}
        </li>
      ))}
    </ul>
  );
}
export default Scorebelow70;
