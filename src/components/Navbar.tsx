'use client';

import React, { useState } from 'react';
import { Plus, Users, ChevronDown } from 'lucide-react';

function NavBar() {

    const [selectedTeam, setSelectedTeam] = useState('Select the team');
    const teams = ['Data Automation', 'Hermes', 'Apollo'];

    return (
        <div className='flex flex-row justify-between bg-white border-b border-gray-400 py-7 px-6'>
            <div>
            <h1 className='text-3xl font-bold text-gray-900'>Product Owner Dashboard</h1>
            <p className='text-gray-600'>Gerencie demandas, projetos e roadmaps</p>
            </div>
            <div className='flex gap-7 items-center'>
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-outline hover: border-1 border-black justify-between w-48 font-normal">
                    <a className='flex flex-row gap-2 whitespace-nowrap items-center font-semibold'>
                        <Users size={18} />
                        {selectedTeam}                      
                    </a>
                    <ChevronDown className='' size={16} strokeWidth={3}/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                    <li className='mb-1 text-gray-600'>Select the team</li>
                    {teams.map((team) => (
                    <li key={team} onClick={() => setSelectedTeam(team)}>
                        <a className='font-semibold'>
                        <Users size={18} />
                        {team}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
                <button type="button" className="flex items-center gap-2 rounded-2xl bg-black text-white px-6 py-3.5 hover:bg-gray-900 transition-colors whitespace-nowrap">
                    <Plus size={16} />
                    Nova Demanda
                </button>
            </div>
      </div>
    )
}

export default NavBar;