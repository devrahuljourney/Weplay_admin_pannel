import React from 'react';
import { useParams } from 'react-router-dom';
import tournamentData from '../../data/data.json';

export default function TournamentDetails() {
  const { tournamentid } = useParams();
  const tournament = tournamentData.tournaments.find(t => t._id === tournamentid);

  if (!tournament) {
    return <div className="text-red-500">Tournament not found!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">{tournament.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tournament Image */}
        <img
          src={tournament.videoThumbnail}
          alt={tournament.title}
          className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-md"
        />

        {/* Tournament Details */}
        <div className="md:w-1/2">
          <p className="text-lg text-gray-700">
            <strong>Description:</strong> {tournament.tournamentDescription}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <strong>Location:</strong> {tournament.location}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <strong>Status:</strong> {tournament.tournamentStatus}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <strong>Date & Time:</strong> {new Date(tournament.tournamentTime).toLocaleString()}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <strong>Rules:</strong> {tournament.tournamentRulesDescription}
          </p>

          {/* Live Video */}
          {tournament.isLiveVideo && (
            <div className="mt-6">
              <a
                href={tournament.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Watch Live Video
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Round Details */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Round Details</h2>
        {Object.entries(tournament.roundDetails).map(([roundId, round]) => (
          <div key={roundId} className="mb-4">
            <h3 className="text-xl font-medium text-gray-800">Round {roundId.replace('round', '')}</h3>
            <p className="text-lg text-gray-700">
              <strong>Start Time:</strong> {new Date(round.startTime).toLocaleString()}
            </p>
            <p className="text-lg text-gray-700">
              <strong>End Time:</strong> {new Date(round.endTime).toLocaleString()}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Status:</strong> {round.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
