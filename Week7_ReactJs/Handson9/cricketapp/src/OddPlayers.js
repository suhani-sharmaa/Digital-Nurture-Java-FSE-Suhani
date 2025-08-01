function OddPlayers(players) {
  const odd = players.filter((_, index) => index % 2 === 0); // 0-based index
  return (
    <ul>
      {odd.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}
export default OddPlayers;
