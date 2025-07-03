'use client';

import React, { useState } from 'react';

import Navbar from '@/components/Navbar';
import { CheckCheck, TrendingUp, CircleAlert, Clock3 } from 'lucide-react';
import DataCard from '@/components/DataCard';

export default function Home() {
    const tabs = [
        { name: 'Visão Geral', component: "Visão Geral" },
        { name: 'Demandas', component: 'Demandas' },
        { name: 'Gráficos', component: 'Gráficos' },
        { name: 'Roadmap', component: 'Roadmap' },
    ];

    const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
        <Navbar />

        <div className="flex flex-col justify-center my-6 mx-10 gap-10">
            <div role="tablist" className="tabs tabs-box bg-gray-200 flex gap-3">
            {tabs.map((tab, index) => (
                <input
                key={index}
                type="radio"
                name="my_tabs_6"
                role="tab"
                width={57}
                className="tab rounded-3xl flex-1"
                aria-label={tab.name}
                defaultChecked={index === 1}
                onChange={() => setActiveTab(index)}
                />          
            ))}
            </div>
            <div className='flex justify-between'>
                <DataCard title="Total de demandas" value="8" icon={<TrendingUp size={20} />}  />
                <DataCard title="Demandas Concluídas" value="2" icon={<CheckCheck size={20} color='green' />} color="text-green-600" />
                <DataCard title="Em desenvolvimento" value="2" icon={<Clock3 size={20} color='blue' />} color="text-blue-600" />
                <DataCard title="Backlog" value="2" icon={<CircleAlert size={20} />} />
            </div>
        </div>
    </div>
  );
}
    