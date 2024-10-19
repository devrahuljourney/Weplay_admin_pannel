import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import tournamentData from '../../../data/data.json';
import TournamentCard from './TournamentCard';

export default function TournamentSlider() {
  return (
    <div className="admin-panel p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Live Tournaments</h2>
        <Link to="/dashboard/add-tournament">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
            Add New Tournament
          </button>
        </Link>
      </div>

      <div className=" bg-white rounded-lg p-6 shadow-lg">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className='px-4'
        >
          {tournamentData.tournaments.map((tournament) => (
            <SwiperSlide key={tournament._id}>
              <TournamentCard tournament={tournament} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}