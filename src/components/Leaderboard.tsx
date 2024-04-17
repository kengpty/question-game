"use client";
import React from "react";

interface LeaderboardProps {
  leaderboardData: { name: string; score: number }[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboardData }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ol className="list-decimal pl-4">
        {leaderboardData.map((player, index) => (
          <li key={index} className="text-lg mb-2">
            {player.name} - {player.score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
