import React from 'react'
import { Link } from 'react-router-dom'

export default function TournamentCard({tournament}) {
  return (
    <div>
        <Link
              to={`/dashboard/tournamentdetails/${tournament._id}`}
              className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={tournament.videoThumbnail}
                alt={tournament.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{tournament.title}</h3>
                <p className="text-sm text-gray-600">{tournament.location}</p>
              </div>
            </Link>
    </div>
  )
}
