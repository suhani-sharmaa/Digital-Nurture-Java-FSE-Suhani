import ListofPlayers from './ListOfPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListOfIndianPlayers';
function App() {
  const flag = false;

  const players = [
    { name: 'Player 1', score: 80 },
    { name: 'Player 2', score: 60 },
    { name: 'Player 3', score: 90 },
    { name: 'Player 4', score: 45 },
  ];

  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

  const T20players = ['Mr. First Player', 'Mr. Second Player'];
  const RanjiTrophy = ['Mr. Third Player', 'Mr. Fourth Player', 'Mr. Fifth Player', 'Mr. Sixth Player'];

  const IndianPlayers = [...T20players, ...RanjiTrophy]; // Merging arrays with ES6

  return (
    <div>
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          {OddPlayers(IndianTeam)}
          <hr />
          <h2>Even Players</h2>
          {EvenPlayers(IndianTeam)}
          <hr />
          <h2>List of Indian Players Merged:</h2>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;
