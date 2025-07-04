'use client';

import React, { useState } from 'react';

import Navbar from '@/components/Navbar';
import GeneralVision from '@/components/GeneralVision';


export default function Home() {
    const tabs = [
        { name: 'Visão Geral', component: <GeneralVision /> },
        { name: 'Demandas', component: 'Demandas' },
        { name: 'Gráficos', component: 'Gráficos' },
        { name: 'Roadmap', component: 'Roadmap' },
    ];

    const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
        <Navbar />

        <div className="flex flex-col justify-center my-6 mx-12 gap-10">
            <div role="tablist" className="tabs tabs-box bg-gray-200 flex gap-3">
            {tabs.map((tab, index) => (
                <input
                key={index}
                type="radio"
                name="my_tabs_6"
                role="tab"
                width={57}
                className={`tab rounded-3xl flex-1 mx-3 ${index === activeTab ? 'tab-active [--tab-bg:white] [--tab-border-color:white]' : ''}`}
                aria-label={tab.name}
                defaultChecked={index === 0}
                onChange={() => setActiveTab(index)}
                />          
            ))}
            </div>
            {tabs[activeTab].component}
        </div>
    </div>
  );
}
    