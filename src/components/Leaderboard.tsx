"use client";
import React from "react";

interface LeaderboardProps {
  playerName: string;
  playerScore: number;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  playerName,
  playerScore,
}) => {
  const [players, setPlayers] = React.useState<
    { name: string; score: number }[]
  >([]);

  React.useEffect(() => {
    const dummyPlayers: { name: string; score: number }[] = [];

    const updatedPlayers = [
      ...dummyPlayers,
      { name: playerName, score: playerScore },
    ];

    const sortedPlayers = updatedPlayers.sort((a, b) => b.score - a.score);

    setPlayers(sortedPlayers);
  }, [playerName, playerScore]);

  return (
    <div className="mt-8 text-black text-center">
      <h2 className="text-xl font-bold mb-4 text-center">Leaderboard</h2>
      <ol className="list-decimal pl-4 w-1/2 mx-auto">
        {players.map((player, index) => (
          <li key={index} className="mb-2">
            {player.name} - {player.score} Point
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
