'use client';

import React, { useState } from 'react';
import { Plus, Users, ChevronDown, Sun, Moon } from 'lucide-react';
import Modal from './Modal';

function NavBar() {

    const [selectedTeam, setSelectedTeam] = useState('Select the team');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const teams = ['Data Automation', 'Hermes', 'Apollo'];

    const handleModal = () => {
        setIsModalOpen(true);
    }

    return (
        <div className='flex flex-row justify-between mx-4 bg-white border-b border-gray-300 py-7 px-6'>
            <div>
                <h1 className='text-3xl font-bold text-gray-900'>Product Owner Dashboard</h1>
                <p className='text-gray-600'>Gerencie demandas, projetos e roadmaps</p>
            </div>
            <div className='flex gap-5 items-center'>
                <label className='swap swap-rotate'>
                    <input type="checkbox" />
                    <Sun className='swap-off fill-current' size={20} strokeWidth={1}/>
                    <Moon className='swap-on fill-current' size={20} strokeWidth={1}/>
                </label>
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-outline hover:bg-gray-100 border-1 border-black justify-between w-48 font-normal">
                    <a className='flex flex-row gap-2 whitespace-nowrap items-center font-semibold'>
                        <Users size={18} strokeWidth={1}/>
                        {selectedTeam}                      
                    </a>
                    <ChevronDown className='' size={16} strokeWidth={3}/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                    <li className='mb-1 text-gray-600'>Select the team</li>
                    {teams.map((team) => (
                    <li key={team} onClick={() => setSelectedTeam(team)}>
                        <a className=''>
                        <Users size={18} strokeWidth={1}/>
                        {team}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
                
                <button type="button" onClick={handleModal}
                className="flex items-center gap-2 rounded-2xl bg-black text-white px-7 py-3.5 hover:bg-gray-900 transition-colors whitespace-nowrap">
                    <Plus size={16} />
                    Nova Demanda
                </button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
      </div>
    )
}

export default NavBar;